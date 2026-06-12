import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Globe, TrendingUp, School, Bot, MessageCircle, Palette } from 'lucide-react'
import BorderGlow from './BorderGlow'

const services = [
  {
    Icon: Globe,
    title: 'Promotional Websites',
    desc: 'High-converting landing pages and business websites designed to capture leads and drive sales.',
    tag: '5-day delivery',
    featured: false,
  },
  {
    Icon: TrendingUp,
    title: 'Digital Marketing',
    desc: 'Full-funnel strategies — SEO, paid ads, social media, and content — that bring real ROI.',
    tag: 'Proven ROI',
    featured: true,
  },
  {
    Icon: School,
    title: 'School / College ERP',
    desc: 'End-to-end school management systems for admissions, attendance, fees, and communication.',
    tag: 'Custom built',
    featured: false,
  },
  {
    Icon: Bot,
    title: 'AI Agents & Automation',
    desc: 'Smart AI-powered agents and workflows that automate repetitive tasks and scale your operations.',
    tag: 'GPT-4 powered',
    featured: false,
  },
  {
    Icon: MessageCircle,
    title: 'WhatsApp Marketing',
    desc: 'Bulk campaigns, chatbots, and automated follow-ups via WhatsApp Business API.',
    tag: '98% open rate',
    featured: false,
  },
  {
    Icon: Palette,
    title: 'Logo & Poster Design',
    desc: 'Brand identity, logo design, social creatives, trade show materials, and print collateral.',
    tag: 'Unlimited revisions',
    featured: false,
  },
]

const Services = () => {
  const shouldReduceMotion = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="services" className="py-28 relative" ref={ref}>
      <div className="absolute inset-0 bg-[#0c0c0c]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-tag">OUR SERVICES</span>
          <h2 className="text-4xl lg:text-5xl font-black leading-tight" style={{ fontFamily: 'Outfit' }}>
            Everything Your Business<br />
            Needs to <span className="lime-text">Dominate Online</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => {
            const { Icon } = svc
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
                whileHover={{ y: -5 }}
              >
                <BorderGlow
                  borderRadius={16}
                  backgroundColor={svc.featured ? '#c8f135' : '#111111'}
                  glowColor={svc.featured ? '0 0 100' : '73 89 57'}
                  colors={svc.featured ? ['#ffffff', '#f4f4f5', '#e4e4e7'] : ['#c8f135', '#a3e635', '#65a30d']}
                  className="h-full"
                  glowRadius={30}
                >
                  <div className={`service-card h-full group ${svc.featured ? 'featured' : ''}`} style={{ background: 'transparent', border: 'none', transform: 'none', boxShadow: 'none' }}>
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${svc.featured ? 'bg-[#0a0a0a]/15' : 'bg-[#1a1a1a]'}`}
                        whileHover={shouldReduceMotion ? {} : { rotate: 10, scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <Icon size={22} className={svc.featured ? 'text-[#0a0a0a]' : 'text-[#c8f135]'} />
                      </motion.div>
                      <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${
                        svc.featured ? 'bg-[#0a0a0a]/15 text-[#0a0a0a]' : 'bg-[#1a1a1a] text-[#c8f135]'
                      }`}>
                        {svc.tag}
                      </span>
                    </div>

                    <h3 className={`text-lg font-bold mb-2 ${svc.featured ? 'text-[#0a0a0a]' : 'text-white'}`} style={{ fontFamily: 'Outfit' }}>
                      {svc.title}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-5 ${svc.featured ? 'text-[#0a0a0a]/70' : 'text-[#666]'}`}>
                      {svc.desc}
                    </p>
                    <a
                      href="#contact"
                      className="get-started-link"
                      style={svc.featured ? { color: '#0a0a0a' } : {}}
                      aria-label={`Get started with ${svc.title}`}
                    >
                      GET STARTED
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </a>
                  </div>
                </BorderGlow>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
