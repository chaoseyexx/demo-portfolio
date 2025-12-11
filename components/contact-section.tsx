"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Linkedin, Instagram } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", project: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">Let's Create Something Amazing</h2>
          <p className="text-lg text-muted-foreground">
            Got a project in mind? Let's collaborate and bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up">
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors duration-300"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors duration-300"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Project Type</label>
              <input
                type="text"
                name="project"
                value={formData.project}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors duration-300"
                placeholder="e.g., Animation, Video Editing"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 hover:shadow-lg hover:shadow-primary/30"
            >
              Send Message
            </button>
          </form>

          <div className="space-y-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <div>
              <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
              <p className="text-muted-foreground mb-6">
                Have questions or want to discuss your project? Feel free to reach out. I'd love to hear about your
                vision.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:itssallywynter@gmail.com"
                className="flex items-center space-x-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors duration-300 group"
              >
                <Mail className="text-primary group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-muted-foreground text-sm">itssallywynter@gmail.com</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center space-x-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors duration-300 group"
              >
                <Linkedin className="text-primary group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-muted-foreground text-sm">Connect with me</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center space-x-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors duration-300 group"
              >
                <Instagram className="text-primary group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <p className="font-semibold">Instagram</p>
                  <p className="text-muted-foreground text-sm">Follow my work</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
