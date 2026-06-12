import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import logo from '../assets/logo.png'

const WA_NUMBER = '919542905904'
const PHONE_DISPLAY = '+91 95429 05904'

const services = ['Digital Marketing', 'WhatsApp Marketing', 'AI Agents', 'Promotional Websites', 'School ERP', 'Logo & Design']
const company = ['About Us', 'Portfolio', 'Blog', 'Careers', 'Contact']

const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const LinkedinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const social = [
  { name: 'Instagram', href: '#', Icon: InstagramIcon },
  { name: 'LinkedIn', href: '#', Icon: LinkedinIcon },
  { name: 'WhatsApp', href: `https://wa.me/${WA_NUMBER}`, Icon: () => <MessageCircle size={15} /> },
]


const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] relative overflow-hidden">

      {/* Pre-footer CTA Banner */}
      <div className="relative border-t border-[#1a1a1a]">
        <div className="absolute inset-0 bg-[#c8f135]/03 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div>
              <p className="text-[#555] text-xs uppercase tracking-widest font-bold mb-3">Ready to scale your business?</p>
              <h2 className="text-3xl lg:text-4xl font-black leading-tight" style={{ fontFamily: 'Outfit' }}>
                Let's Build Something<br />
                <span className="lime-text">Remarkable Together</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <motion.a
                href="#contact"
                className="btn-lime"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Start a Project
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </motion.a>
              <motion.a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <MessageCircle size={14} />
                Chat on WhatsApp
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Top gradient border */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#c8f135]/20 to-transparent" />

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <img
                src={logo}
                alt="Sentryx Solutions"
                className="h-12 w-auto object-contain"
                style={{ filter: 'invert(1) brightness(2)' }}
              />
            </div>
            <p className="text-[#444] text-xs leading-relaxed mb-5">
              Hyderabad's leading digital agency for WhatsApp marketing, AI agents, and promotional websites.
            </p>
            <div className="flex gap-2">
              {social.map(({ name, href, Icon }) => (
                <motion.a
                  key={name}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-8 h-8 bg-[#111] border border-[#1e1e1e] rounded-lg flex items-center justify-center text-[#444] hover:text-[#c8f135] hover:border-[#c8f135]/30 transition-all"
                  title={name}
                  aria-label={name}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-widest mb-5" style={{ fontFamily: 'Outfit' }}>Services</h4>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s}><a href="#services" className="text-[#444] hover:text-[#c8f135] text-xs transition-colors duration-200">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-widest mb-5" style={{ fontFamily: 'Outfit' }}>Company</h4>
            <ul className="space-y-2.5">
              {company.map(s => (
                <li key={s}><a href={`#${s.toLowerCase().replace(' ', '')}`} className="text-[#444] hover:text-[#c8f135] text-xs transition-colors duration-200">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-widest mb-5" style={{ fontFamily: 'Outfit' }}>Contact Us</h4>
            <ul className="space-y-3">
              {[
                { label: 'hello@sentryx.in', href: 'mailto:hello@sentryx.in' },
                { label: PHONE_DISPLAY, href: `tel:+919542905904` },
                { label: 'Hyderabad, India 🇮🇳', href: '#' },
              ].map((item, i) => (
                <li key={i}><a href={item.href} className="text-[#444] hover:text-[#c8f135] text-xs transition-colors duration-200">{item.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#111] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#333] text-xs">© 2025 Sentryx Solutions. All rights reserved. · Made in Hyderabad 🇮🇳</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map(link => (
              <a key={link} href="#" className="text-[#333] hover:text-[#c8f135] text-xs transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
