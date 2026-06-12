import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import BorderGlow from './BorderGlow'

const WA_NUMBER = '919542905904'

const features = [
  'Bulk WhatsApp campaign fulfillment (OPT-IN)',
  'Complete funnel setup & lead generation',
  'AI chatbot with custom trained responses',
  'Real-time analytics with transparent reports',
  'WhatsApp-integrated support ticket system',
]

const barData = [40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88]

const WhyUs = () => {
  const shouldReduceMotion = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-28 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="section-tag">WHATSAPP CAMPAIGN FEATURES</span>
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-5xl font-black leading-tight mb-6"
              style={{ fontFamily: 'Outfit' }}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              Reach <span className="lime-text">Thousands</span> of<br />
              Customers Instantly
            </motion.h2>

            <motion.p
              className="text-[#888] text-sm leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Our WhatsApp bulk marketing platform lets you send promotional offers and personalized campaigns. With 98% open rates and 5x more responses than email, our customers consistently achieve 30%+ conversion improvements.
            </motion.p>

            <ul className="space-y-3 mb-8">
              {features.map((feat, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-3 text-sm text-[#ccc]"
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.08, duration: 0.45 }}
                >
                  <div className="w-5 h-5 rounded-full bg-[#c8f135]/15 border border-[#c8f135]/40 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M2 5l2.5 2.5L8 2.5" stroke="#c8f135" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {feat}
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <motion.a
                href={`https://wa.me/${WA_NUMBER}`}
                className="btn-lime"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Start WhatsApp Campaign
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </motion.a>
            </motion.div>
          </div>

          {/* Right – Dashboard Preview */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <BorderGlow borderRadius={16} backgroundColor="#111111" glowRadius={30}>
              <div className="card-dark p-6 relative overflow-hidden" style={{ background: 'transparent', border: 'none', transform: 'none', boxShadow: 'none' }}>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-[#888] text-xs mb-1">Campaign Overview</p>
                    <p className="text-white font-bold text-lg" style={{ fontFamily: 'Outfit' }}>Sentryx Analytics</p>
                  </div>
                  <div className="bg-[#c8f135]/10 border border-[#c8f135]/20 rounded-lg px-3 py-1.5 flex items-center gap-1.5">
                    <span className="live-dot" aria-hidden="true" />
                    <p className="text-[#c8f135] text-xs font-bold">LIVE</p>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: 'Sent', value: '12.4K', change: '+18%' },
                    { label: 'Opened', value: '11.8K', change: '98%' },
                    { label: 'Replies', value: '3.6K', change: '+34%' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-[#1a1a1a] rounded-xl p-3">
                      <p className="text-[#666] text-[10px] uppercase tracking-wider mb-1">{stat.label}</p>
                      <p className="text-white text-xl font-black" style={{ fontFamily: 'Outfit' }}>{stat.value}</p>
                      <p className="text-[#c8f135] text-[10px] font-bold">{stat.change}</p>
                    </div>
                  ))}
                </div>

                {/* Animated Bar Chart */}
                <div className="bg-[#1a1a1a] rounded-xl p-4">
                  <p className="text-[#666] text-[10px] uppercase tracking-wider mb-4">Daily Performance</p>
                  <div className="flex items-end gap-2 h-24">
                    {barData.map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-sm"
                        style={{ background: i % 3 === 0 ? '#c8f135' : '#2a2a2a' }}
                        initial={{ height: 0 }}
                        animate={inView ? { height: `${h}%` } : { height: 0 }}
                        transition={{
                          delay: shouldReduceMotion ? 0 : 0.5 + i * 0.06,
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Floating ROI badge */}
                <motion.div
                  className="absolute -bottom-3 -right-3 bg-[#c8f135] rounded-xl px-4 py-2"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.1, rotate: -3 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <p className="text-[#0a0a0a] text-xs font-black">ROI: 340%</p>
                </motion.div>
              </div>
            </BorderGlow>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
