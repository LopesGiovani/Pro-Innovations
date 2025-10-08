"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, CheckCircle, Shield, Award, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
          service: data.service,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      toast({
        title: "✅ Message Sent!",
        description: result.message || "Thank you for contacting us! We'll respond within 24 hours.",
      });
      
      reset();
      
    } catch (error) {
      console.error('Error sending form:', error);
      
      toast({
        title: "❌ Send Failed",
        description: error instanceof Error ? error.message : "Please try again in a few minutes.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      info: "213 mohegan dr, West Hartford, CT 06117, United States",
      description: "Serving Connecticut and surrounding areas"
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+1 (860) 936-0377",
      link: "tel:+18609360377",
      description: "Available Monday through Friday"
    },
    {
      icon: Mail,
      title: "Email",
      info: "Ctproinnovations@gmail.com",
      link: "mailto:Ctproinnovations@gmail.com",
      description: "Professional consultation available"
    },
    {
      icon: Clock,
      title: "Business Hours",
      info: "Monday - Sunday: 7:00 AM - 6:00 PM",
      description: "Open every day of the week"
    },
  ];

  const trustElements = [
    {
      icon: CheckCircle,
      title: "Licensed & Insured",
      description: "Fully licensed contractors with comprehensive insurance coverage"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "All work backed by our satisfaction guarantee and warranty"
    },
    {
      icon: Award,
      title: "Experienced Team",
      description: "Over 15 years of experience in construction and renovation"
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Ready to discuss your project? Contact our team for expert consultation 
              and professional construction services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>24-Hour Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
                <p className="text-slate-600 mb-8">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        {...register("name")}
                        placeholder="Enter your full name"
                        className={`h-12 ${errors.name ? "border-red-500 focus:border-red-500" : "border-slate-300 focus:border-blue-500"}`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="your.email@example.com"
                        className={`h-12 ${errors.email ? "border-red-500 focus:border-red-500" : "border-slate-300 focus:border-blue-500"}`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      placeholder="+1 (860) 936-0377"
                      className={`h-12 ${errors.phone ? "border-red-500 focus:border-red-500" : "border-slate-300 focus:border-blue-500"}`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      {...register("subject")}
                      placeholder="Brief description of your project"
                      className={`h-12 ${errors.subject ? "border-red-500 focus:border-red-500" : "border-slate-300 focus:border-blue-500"}`}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        {...register("service")}
                        className={`w-full h-12 px-3 border rounded-md bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.service ? "border-red-500" : "border-slate-300"
                        }`}
                      >
                        <option value="">Select a service</option>
                        <option value="construction">General Construction</option>
                        <option value="remodeling">Home Remodeling</option>
                        <option value="carpentry">Custom Carpentry</option>
                        <option value="painting">Professional Painting</option>
                        <option value="consultation">Project Consultation</option>
                      </select>
                      {errors.service && (
                        <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
                      )}
                    </div>
                    <div></div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Project Details * <span className="text-slate-500 font-normal">(minimum 10 characters)</span>
                    </label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder="Please describe your project in detail. For example: I need kitchen remodeling including cabinet installation, countertop replacement, and painting. Timeline is flexible but prefer completion within 2 months..."
                      rows={6}
                      className={`${errors.message ? "border-red-500 focus:border-red-500" : "border-slate-300 focus:border-blue-500"}`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting} 
                    className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-lg h-full border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-800 mb-8">Get In Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="bg-white p-5 rounded-lg shadow-sm border border-slate-200">
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <info.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-800 mb-1">{info.title}</h4>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-slate-900 font-medium hover:text-blue-600 transition-colors"
                            >
                              {info.info}
                            </a>
                          ) : (
                            <p className="text-slate-900 font-medium">{info.info}</p>
                          )}
                          <p className="text-slate-600 text-sm mt-1">{info.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Trust Elements */}
                <div className="mt-8 pt-6 border-t border-slate-300">
                  <h4 className="font-bold text-slate-800 mb-6">Why Choose ProInnovations</h4>
                  <div className="space-y-4">
                    {trustElements.map((element, index) => (
                      <div key={index} className="flex items-center space-x-3 bg-white p-3 rounded-lg">
                        <element.icon className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <div>
                          <span className="text-sm font-medium text-slate-700">{element.title}</span>
                          <p className="text-xs text-slate-600 mt-1">{element.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
