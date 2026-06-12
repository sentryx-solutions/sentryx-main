import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { MapPin, Mail, Phone, MessageCircle, CheckCircle } from 'lucide-react'
import BorderGlow from './BorderGlow'

const WA_NUMBER = '919542905904'
const PHONE_DISPLAY = '+91 95429 05904'

const contactInfo = [
  { Icon: MapPin, label: 'Location', value: 'Hyderabad, Telangana, India', href: '#' },
  { Icon: Mail, label: 'Email', value: 'hello@sentryx.in', href: 'mailto:hello@sentryx.in' },
  { Icon: Phone, label: 'WhatsApp', value: PHONE_DISPLAY, href: `tel:+919542905904` },
]

const Contact = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setForm({ name: '', email: '', phone: '', service: '', message: '' })
    }, 900)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-28 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[#0c0c0c]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#c8f135]/04 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-tag">LET'S TALK</span>
            <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-6" style={{ fontFamily: 'Outfit' }}>
              Let's Build Something<br />
              <span className="lime-text">Amazing Together</span>
            </h2>
            <p className="text-[#888] text-sm leading-relaxed mb-8">
              Ready to take your business to the next level? Tell us about your project and we'll get back to you within 24 hours with a customised proposal.
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map(({ Icon, label, value, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="w-10 h-10 bg-[#111] border border-[#222] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:border-[#c8f135]/30 transition-colors">
                    <Icon size={17} className="text-[#c8f135]" />
                  </div>
                  <div>
                    <p className="text-[#444] text-xs uppercase tracking-wider">{label}</p>
                    <p className="text-white text-sm font-medium group-hover:text-[#c8f135] transition-colors">{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* WhatsApp highlight block */}
            <motion.a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-[#25D366]/20 bg-[#25D366]/05 group"
              whileHover={{ scale: 1.02, borderColor: 'rgba(37,211,102,0.4)' }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center flex-shrink-0 pulse-glow">
                <MessageCircle size={22} className="text-white" />
              </div>
              <div>
                <p className="text-white text-sm font-bold" style={{ fontFamily: 'Outfit' }}>Chat on WhatsApp</p>
                <p className="text-[#25D366] text-xs">⚡ Avg. response: under 2 hours</p>
              </div>
              <svg className="ml-auto text-[#555] group-hover:text-white transition-colors" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </motion.a>
          </motion.div>

          {/* Right – Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <BorderGlow borderRadius={16} backgroundColor="#111111" glowRadius={30} className="h-full">
              <div className="card-dark p-8 h-full" style={{ background: 'transparent', border: 'none', transform: 'none', boxShadow: 'none' }}>
                <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-[#c8f135]/15 rounded-full flex items-center justify-center mx-auto mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
                  >
                    <CheckCircle size={30} className="text-[#c8f135]" />
                  </motion.div>
                  <h3 className="text-white text-xl font-black mb-2" style={{ fontFamily: 'Outfit' }}>Message Sent!</h3>
                  <p className="text-[#666] text-sm">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="text-white text-xl font-black mb-6" style={{ fontFamily: 'Outfit' }}>Send Us a Message</h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="text-[#555] text-xs uppercase tracking-wider block mb-1.5">Full Name</label>
                      <input
                        id="contact-name" name="name" value={form.name} onChange={handleChange} required
                        autoComplete="name" className="w-full px-4 py-3 text-sm" placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="text-[#555] text-xs uppercase tracking-wider block mb-1.5">Email</label>
                      <input
                        id="contact-email" name="email" type="email" value={form.email} onChange={handleChange} required
                        autoComplete="email" className="w-full px-4 py-3 text-sm" placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-phone" className="text-[#555] text-xs uppercase tracking-wider block mb-1.5">Phone</label>
                      <input
                        id="contact-phone" name="phone" value={form.phone} onChange={handleChange}
                        autoComplete="tel" className="w-full px-4 py-3 text-sm" placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-service" className="text-[#555] text-xs uppercase tracking-wider block mb-1.5">Service Needed</label>
                      <select
                        id="contact-service" name="service" value={form.service} onChange={handleChange}
                        className="w-full px-4 py-3 text-sm"
                      >
                        <option value="">Select service</option>
                        <option>Digital Marketing</option>
                        <option>WhatsApp Marketing</option>
                        <option>AI Agents & Automation</option>
                        <option>Promotional Website</option>
                        <option>School ERP</option>
                        <option>Logo & Design</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="text-[#555] text-xs uppercase tracking-wider block mb-1.5">Message</label>
                    <textarea
                      id="contact-message" name="message" value={form.message} onChange={handleChange} rows={4}
                      className="w-full px-4 py-3 text-sm resize-none" placeholder="Tell us about your project..."
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <p className="text-[#444] text-xs">⚡ We reply within 2 hours</p>
                    <motion.button
                      type="submit"
                      className="btn-lime px-6 py-3 text-sm"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="inline-flex items-center gap-2">
                          <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="32" strokeDashoffset="12"/></svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-2">
                          Send Message
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </span>
                      )}
                    </motion.button>
                  </div>
                </motion.form>
              )}
                </AnimatePresence>
              </div>
            </BorderGlow>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
