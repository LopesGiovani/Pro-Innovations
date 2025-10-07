import { z } from 'zod'

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be at most 100 characters')
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, 'Name must contain only letters and spaces'),
  
  email: z
    .string()
    .email('Invalid email address')
    .min(5, 'Email must be at least 5 characters')
    .max(255, 'Email must be at most 255 characters'),
  
  phone: z
    .string()
    .optional()
    .refine((phone) => {
      if (!phone) return true // Optional field
      // Remove all non-numeric characters
      const cleanPhone = phone.replace(/\D/g, '')
      // Check if it has between 10 and 15 digits (international format)
      return cleanPhone.length >= 10 && cleanPhone.length <= 15
    }, 'Phone must have a valid format (10-15 digits)'),
  
  subject: z
    .string()
    .min(5, 'Subject must be at least 5 characters')
    .max(200, 'Subject must be at most 200 characters'),
  
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be at most 2000 characters'),
  
  service: z
    .string()
    .optional(), // Service of interest (optional)
})

// Tipo TypeScript derivado do schema
export type ContactFormData = z.infer<typeof contactFormSchema>

// Schema for rate limiting validation
export const rateLimitSchema = z.object({
  ip: z.string().min(1, 'IP is required'),
  timestamp: z.number(),
  count: z.number().min(0),
})

// TypeScript type for rate limiting
export type RateLimitData = z.infer<typeof rateLimitSchema>

// Rate limiting constants
export const RATE_LIMIT = {
  MAX_REQUESTS: 5, // Maximum 5 attempts
  WINDOW_MS: 15 * 60 * 1000, // In 15 minutes
  BLOCK_DURATION_MS: 60 * 60 * 1000, // Block for 1 hour if exceeded
} as const