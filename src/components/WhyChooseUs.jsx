import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Target, BarChart3, Palette, CheckCircle2, Brush, Zap } from 'lucide-react'
import BorderGlow from './BorderGlow'

const WA_NUMBER = '919542905904'

const reasons = [
  { Icon: Target, title: 'Fast Turnaround', desc: 'We deliver projects on time, every time — without compromising quality.' },
  { Icon: BarChart3, title: 'Dedicated Support', desc: 'Your dedicated account manager is always just a WhatsApp message away.' },
  { Icon: Palette, title: 'Creative Websites', desc: 'Stunning, conversion-optimized designs that make your brand stand out.' },
  { Icon: CheckCircle2, title: 'Proven Results', desc: 'Data-backed campaigns with measurable ROI and transparent reporting.' },
  { Icon: Brush, title: 'Quality Designs', desc: 'Professional-grade visuals crafted by experienced designers.' },
  { Icon: Zap, title: 'AI-Powered Tools', desc: 'Cutting-edge automation and AI tools that give you a competitive edge.' },
]

const clients = [
  'EduTrack', 'NexaShop', 'AutoReach', 'BrandForge', 'VetConnect',
]

const WhyChooseUs = () => {
  const shouldReduceMotion = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section className="py-28 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="section-tag">WHY CHOOSE US</span>
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-5xl font-black leading-tight mb-6"
              style={{ fontFamily: 'Outfit' }}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              We Don't Just Deliver<br />
              Work — We Deliver<br />
              <span className="lime-text">Results</span>
            </motion.h2>

            <motion.p
              className="text-[#888] text-sm leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              We combine strategy, technology, and creativity to help your business grow. Our team of experts goes beyond execution to become a true partner in your success — understanding your goals, solving problems proactively, and delivering work that truly makes a difference.
            </motion.p>

            <motion.div
              className="flex gap-3 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.a href="#about" className="btn-lime" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>More About Us</motion.a>
              <motion.a
                href={`https://wa.me/${WA_NUMBER}`}
                className="btn-outline"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.507 3.934 1.395 5.608L0 24l6.584-1.367A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.092-1.419l-.364-.218-3.91.813.841-3.8-.24-.385A9.818 9.818 0 1112 21.818z"/></svg>
                Chat on WhatsApp
              </motion.a>
            </motion.div>

            {/* Trusted By Strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <p className="text-[#444] text-xs uppercase tracking-widest font-bold mb-4">Trusted by businesses like</p>
              <div className="flex flex-wrap gap-3">
                {clients.map((c, i) => (
                  <motion.div
                    key={i}
                    className="bg-[#111] border border-[#1e1e1e] rounded-lg px-4 py-2 text-[#444] text-xs font-black uppercase tracking-wider hover:border-[#c8f135]/30 hover:text-[#888] transition-all duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.07 }}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                  >
                    {c}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right – Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => {
              const { Icon } = r
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -3 }}
                  className="h-full"
                >
                  <BorderGlow borderRadius={16} backgroundColor="#111111" className="h-full" glowRadius={25}>
                    <div
                      className="card-dark p-5 relative overflow-hidden group h-full"
                      style={{ background: 'transparent', border: 'none', transform: 'none', boxShadow: 'none', borderLeftWidth: 2, borderLeftColor: 'transparent', transition: 'border-left-color 0.25s ease' }}
                      onMouseEnter={e => e.currentTarget.style.borderLeftColor = '#c8f135'}
                      onMouseLeave={e => e.currentTarget.style.borderLeftColor = 'transparent'}
                    >
                      <motion.div
                        className="w-10 h-10 bg-[#1a1a1a] rounded-xl flex items-center justify-center mb-3"
                        whileHover={shouldReduceMotion ? {} : { rotate: 15, scale: 1.15 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <Icon size={18} className="text-[#c8f135]" />
                      </motion.div>
                      <h4 className="text-white font-bold text-sm mb-1.5" style={{ fontFamily: 'Outfit' }}>{r.title}</h4>
                      <p className="text-[#555] text-xs leading-relaxed">{r.desc}</p>
                    </div>
                  </BorderGlow>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
