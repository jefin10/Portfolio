"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Mail, Send, MapPin, Phone } from "lucide-react"
import emailjs from '@emailjs/browser'

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

// Particle effect component remains the same
function Particles() {
  // ...existing code
}

// Form schema remains the same
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef(null)

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  // Form submission handler with EmailJS
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Replace these with your actual EmailJS credentials
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID"
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE"
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY"

    emailjs.send(serviceId, templateId, {
      from_name: values.name,
      from_email: values.email,
      subject: values.subject,
      message: values.message,
    }, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text)
        setIsSubmitting(false)
        form.reset()
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        })
      })
      .catch((error) => {
        console.error('Error sending email:', error)
        setIsSubmitting(false)
        toast({
          title: "Error sending message",
          description: "Please try again later.",
          variant: "destructive"
        })
      })
  }

  // The rest of your component remains the same
  return (
    <div className="relative z-10">
      <Particles />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative z-20 p-8 border border-gray-800 rounded-lg bg-gray-900/50 backdrop-blur-sm"
        >
          <h3 className="mb-6 text-2xl font-bold">Send Us a Message</h3>

          <Form {...form}>
            <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Form fields remain the same */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          className="text-white bg-black/50 border-purple-500/30 focus:border-purple-500/70 placeholder:text-gray-400"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your email"
                          type="email"
                          className="text-white bg-black/50 border-purple-500/30 focus:border-purple-500/70 placeholder:text-gray-400"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Subject</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Subject of your message"
                        className="text-white bg-black/50 border-purple-500/30 focus:border-purple-500/70 placeholder:text-gray-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Your message"
                        rows={5}
                        className="text-white resize-none bg-black/50 border-purple-500/30 focus:border-purple-500/70 placeholder:text-gray-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-white border shadow-lg bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 border-purple-500/50 shadow-purple-500/20"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-white animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </Form>
        </motion.div>

        {/* Contact info section remains the same */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between"
        >
          <div className="cyberpunk-card p-8 mb-6">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-black/50 border border-purple-500/20">
                  <Mail className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400">Email</h4>
                  <p className="text-white">hello@quantumdevs.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-black/50 border border-purple-500/20">
                  <Phone className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400">Phone</h4>
                  <p className="text-white">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-black/50 border border-purple-500/20">
                  <MapPin className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400">Location</h4>
                  <p className="text-white">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cyberpunk-card p-8">
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-gray-300 mb-6">
              Whether you have a project in mind or just want to chat about the latest in web development, we'd love to
              hear from you.
            </p>
            <p className="text-gray-300">Our team is available Monday through Friday, 9am to 6pm PST.</p>
          </div>
        </motion.div>
      </div>
    </div>
      
  )
}