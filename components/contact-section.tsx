"use client"

import type React from "react" // You can often omit "import type React" if not using React.FC or other explicit React types.
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button" // Ensure this path is correct for your project
import { Input } from "@/components/ui/input"   // Ensure this path is correct for your project
import { Textarea } from "@/components/ui/textarea" // Ensure this path is correct for your project
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev: typeof formData) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmissionStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmissionStatus('Success: ' + result.message)
        setFormData({ name: "", email: "", message: "" }) // Reset form
      } else {
        setSubmissionStatus('Error: ' + (result.message || 'Failed to submit form.'))
      }
    } catch (error) {
      console.error("Submission error:", error)
      setSubmissionStatus("Error: An unexpected error occurred.")
    }
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-20 bg-sky-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-sky-700">
            Get In Touch
          </h2>
          <p className="text-blue-800/80 max-w-2xl mx-auto">
            Have questions or want to join our club? Reach out to us and we&apos;ll
            get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {/* Email Us */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-blue-50">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-1">
                    Email Us
                  </h3>
                  <a
                    href="mailto:iuc@yorku.ca"
                    className="text-blue-700/80 hover:text-blue-600 transition-colors"
                  >
                    iuc@yorku.ca
                  </a>
                </div>
              </div>

              {/* Visit Us */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-blue-50">
                  <MapPin className="h-6 w-6 text-sky-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-1">
                    Visit Us
                  </h3>
                  <p className="text-blue-700/80">
                    Student Centre, Room 301
                    <br />
                    York University, 4700 Keele St, Toronto, ON M3J 1P3
                  </p>
                </div>
              </div>

              {/* Embedded Google Map */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg border border-blue-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5762.134088683805!2d-79.5034905!3d43.771467099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2e258e6f6e4d%3A0x55e10c9ba7b8b997!2sSecond%20Student%20Centre!5e0!3m2!1sen!2sca!4v1747937700083!5m2!1sen!2sca"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map of York University"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <div className="space-y-6">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-6 bg-white/70 p-4 md:p-6 sm:p-8 rounded-lg border border-blue-200 shadow-lg"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-blue-800 mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white border-blue-300 focus:ring-blue-500 focus:border-blue-500 text-blue-900 placeholder-blue-400"
                    placeholder="Your Full Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-blue-800 mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white border-blue-300 focus:ring-blue-500 focus:border-blue-500 text-blue-900 placeholder-blue-400"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-blue-800 mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-white border-blue-300 focus:ring-blue-500 focus:border-blue-500 text-blue-900 placeholder-blue-400"
                    placeholder="How can we help you?"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white py-3 text-base font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
              {submissionStatus && (
                <p 
                  className={`mt-4 text-sm ${
                    submissionStatus.startsWith('Error') ? 'text-red-600' : 'text-green-600'
                  }`}
                >
                  {submissionStatus.replace('Success: ', '').replace('Error: ', '')}
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
