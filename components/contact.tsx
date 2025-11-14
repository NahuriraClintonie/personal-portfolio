'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Let's Connect</h2>
        <p className="text-muted-foreground mb-12 text-lg">
          Have a project in mind or want to discuss opportunities? I'd love to hear from you!
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:nahuriraclinton256@gmail.com"
            className="glass-effect p-6 rounded-lg hover:bg-card/80 transition-colors group text-center"
          >
            <Mail className="w-8 h-8 mx-auto mb-3 text-secondary group-hover:text-accent transition-colors" />
            <h3 className="font-bold mb-2">Email</h3>
            <p className="text-sm text-muted-foreground">nahuriraclinton256@gmail.com</p>
          </a>

          <a
            href="tel:+256773962261"
            className="glass-effect p-6 rounded-lg hover:bg-card/80 transition-colors group text-center"
          >
            <Phone className="w-8 h-8 mx-auto mb-3 text-secondary group-hover:text-accent transition-colors" />
            <h3 className="font-bold mb-2">Phone</h3>
            <p className="text-sm text-muted-foreground">+256-773-962-261</p>
          </a>

          <div className="glass-effect p-6 rounded-lg text-center">
            <MapPin className="w-8 h-8 mx-auto mb-3 text-secondary" />
            <h3 className="font-bold mb-2">Location</h3>
            <p className="text-sm text-muted-foreground">Wakaliga, Kampala, Uganda</p>
          </div>
        </div>

        <div className="glass-effect p-8 md:p-12 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-input border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground placeholder-muted-foreground"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-input border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground placeholder-muted-foreground"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-input border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground placeholder-muted-foreground"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 bg-input border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground placeholder-muted-foreground resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-sm">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 bg-destructive/20 border border-destructive/50 rounded-lg text-destructive text-sm">
                Failed to send message. Please try again or email me directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
