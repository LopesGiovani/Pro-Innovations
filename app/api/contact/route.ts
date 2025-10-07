import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { contactFormSchema, RATE_LIMIT } from '@/lib/validations'

// Initialize Resend (conditional to avoid build errors)
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

// Simple in-memory storage for rate limiting
// In production, use Redis or database
const rateLimitStore = new Map<string, { count: number; resetTime: number; blocked?: number }>()

// Function to check rate limiting
function checkRateLimit(ip: string): { allowed: boolean; resetTime?: number } {
  const now = Date.now()
  const key = ip
  const record = rateLimitStore.get(key)

  // If blocked, check if block has expired
  if (record?.blocked && now < record.blocked) {
    return { 
      allowed: false, 
      resetTime: record.blocked 
    }
  }

  // If no record exists or window expired, create new one
  if (!record || now > record.resetTime) {
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + RATE_LIMIT.WINDOW_MS
    })
    return { allowed: true }
  }

  // Increment counter
  record.count++

  // If exceeded limit, block
  if (record.count > RATE_LIMIT.MAX_REQUESTS) {
    record.blocked = now + RATE_LIMIT.BLOCK_DURATION_MS
    return { 
      allowed: false, 
      resetTime: record.blocked 
    }
  }

  return { allowed: true }
}

// Função para obter IP do cliente
function getClientIP(request: NextRequest): string {
  // Tenta obter o IP real do cliente através dos headers
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  
  if (realIP) {
    return realIP
  }
  
  // NextRequest não tem propriedade .ip, então usamos 'unknown' como fallback
  return 'unknown'
}

// Template de email
function createEmailTemplate(data: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  service?: string;
  message: string;
}) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Contact - Pro Innovations</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 4px solid #667eea; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚀 New Contact - Pro Innovations</h1>
          <p>You have received a new message through the website</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">👤 Name:</div>
            <div class="value">${data.name}</div>
          </div>
          
          <div class="field">
            <div class="label">📧 Email:</div>
            <div class="value">${data.email}</div>
          </div>
          
          ${data.phone ? `
          <div class="field">
            <div class="label">📱 Phone:</div>
            <div class="value">${data.phone}</div>
          </div>
          ` : ''}
          
          <div class="field">
            <div class="label">📋 Subject:</div>
            <div class="value">${data.subject}</div>
          </div>
          
          ${data.service ? `
          <div class="field">
            <div class="label">🎯 Service of Interest:</div>
            <div class="value">${data.service}</div>
          </div>
          ` : ''}
          
          <div class="field">
            <div class="label">💬 Message:</div>
            <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent automatically by the Pro Innovations website contact system</p>
          <p>Date: ${new Date().toLocaleString('en-US')}</p>
        </div>
      </div>
    </body>
    </html>
  `
}

export async function POST(request: NextRequest) {
  try {
    // Check rate limiting
    const clientIP = getClientIP(request)
    const rateLimitCheck = checkRateLimit(clientIP)
    
    if (!rateLimitCheck.allowed) {
      return NextResponse.json(
        { 
          error: 'Too many attempts. Please try again later.',
          resetTime: rateLimitCheck.resetTime 
        },
        { status: 429 }
      )
    }

    // Parse request body
    const body = await request.json()
    
    // Validate data with Zod
    const validationResult = contactFormSchema.safeParse(body)
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: 'Invalid data',
          details: validationResult.error.flatten().fieldErrors
        },
        { status: 400 }
      )
    }

    const data = validationResult.data

    // Check if Resend is configured
    if (!resend) {
      console.error('RESEND_API_KEY not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Send email
    const emailResult = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'noreply@resend.dev',
      to: [process.env.CONTACT_EMAIL || 'contato@proinnovations.com.br'],
      subject: `[SITE] ${data.subject}`,
      html: createEmailTemplate(data),
      replyTo: data.email, // Allows direct reply to client
    })

    if (emailResult.error) {
      console.error('Error sending email:', emailResult.error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    // Debug log (remove in production)
    console.log('Email sent successfully:', emailResult.data?.id)

    return NextResponse.json(
      { 
        success: true,
        message: 'Message sent successfully! We will contact you soon.',
        emailId: emailResult.data?.id
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact API error:', error)
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET method to check if API is working
export async function GET() {
  return NextResponse.json(
    { 
      message: 'Contact API is working',
      timestamp: new Date().toISOString()
    },
    { status: 200 }
  )
}