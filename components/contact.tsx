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
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setStatus('error')
    } finally {
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="py-24 px-6 bg-secondary/10 dark:bg-secondary/20 rounded-xl shadow-inner">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 gradient-text">
          Let's Connect
        </h2>
        <p className="text-foreground/80 mb-12 text-lg">
          Have a project in mind or want to discuss opportunities? I'd love to hear from you!
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <ContactCard
            icon={Mail}
            title="Email"
            value="nahuriraclinton256@gmail.com"
            href="mailto:nahuriraclinton256@gmail.com"
          />
          <ContactCard
            icon={Phone}
            title="Phone"
            value="+256-773-962-261"
            href="tel:+256773962261"
          />
          <ContactCard
            icon={MapPin}
            title="Location"
            value="Wakaliga, Kampala, Uganda"
          />
        </div>

        {/* Contact Form */}
        <div className="glass-effect p-8 md:p-12 rounded-xl shadow-md bg-background/80 dark:bg-card/60">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <InputField name="name" label="Name" value={formData.name} onChange={handleChange} placeholder="Your name" />
              <InputField name="email" label="Email" value={formData.email} onChange={handleChange} placeholder="your@email.com" />
            </div>
            <InputField name="subject" label="Subject" value={formData.subject} onChange={handleChange} placeholder="What's this about?" />
            <TextareaField name="message" label="Message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." />

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <StatusMessage type="success" message="Message sent successfully! I'll get back to you soon." />
            )}
            {status === 'error' && (
              <StatusMessage type="error" message="Failed to send message. Please try again or email me directly." />
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

// Reusable Components
const ContactCard = ({ icon: Icon, title, value, href }: any) => (
  href ? (
    <a href={href} className="glass-effect p-6 rounded-xl text-center hover:scale-105 transition-transform">
      <Icon className="w-8 h-8 mx-auto mb-2 text-secondary" />
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-foreground/70">{value}</p>
    </a>
  ) : (
    <div className="glass-effect p-6 rounded-xl text-center">
      <Icon className="w-8 h-8 mx-auto mb-2 text-secondary" />
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-foreground/70">{value}</p>
    </div>
  )
)

const InputField = ({ name, label, value, onChange, placeholder }: any) => (
  <div>
    <label className="block text-sm font-medium mb-2">{label}</label>
    <input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-foreground/50 transition-colors"
    />
  </div>
)

const TextareaField = ({ name, label, value, onChange, placeholder }: any) => (
  <div>
    <label className="block text-sm font-medium mb-2">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={5}
      required
      className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-foreground/50 resize-none transition-colors"
    />
  </div>
)

const StatusMessage = ({ type, message }: any) => (
  <div className={`p-4 rounded-lg text-sm border ${
    type === 'success'
      ? 'bg-green-500/20 border-green-500 text-green-300'
      : 'bg-destructive/20 border-destructive text-destructive-foreground'
  }`}>
    {message}
  </div>
)

export default Contact
