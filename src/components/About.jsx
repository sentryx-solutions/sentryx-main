import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import BorderGlow from './BorderGlow'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

function useCounter(target, inView, duration = 1600) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const raw = parseInt(target.replace(/[^0-9]/g, ''))
    const step = Math.ceil(raw / (duration / 30))
    const timer = setInterval(() => {
      start += step
      if (start >= raw) { setValue(raw); clearInterval(timer) }
      else setValue(start)
    }, 30)
    return () => clearInterval(timer)
  }, [inView, target, duration])
  const suffix = target.replace(/[0-9]/g, '')
  return `${value}${suffix}`
}

const stats = [
  { number: '500+', label: 'Projects Delivered' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '3+', label: 'Years Experience' },
  { number: '50+', label: 'Happy Clients' },
]

const offerings = [
  { icon: '📣', label: 'Digital Marketing' },
  { icon: '🤖', label: 'AI Agents' },
  { icon: '💬', label: 'WhatsApp Marketing' },
  { icon: '🏫', label: 'ERP Systems' },
]

function StatItem({ stat, inView }) {
  const animated = useCounter(stat.number, inView)
  return (
    <div>
      <p className="text-[#c8f135] text-3xl font-black mb-1" style={{ fontFamily: 'Outfit' }}>{animated}</p>
      <p className="text-[#555] text-xs leading-tight">{stat.label}</p>
    </div>
  )
}

const About = () => {
  const shouldReduceMotion = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" className="py-28 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – Image */}
          <motion.div
            className="relative"
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-[#111] relative">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                alt="Sentryx team collaborating on digital marketing strategy"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
            </div>

            {/* Floating card – top right */}
            <motion.div
              className="absolute -right-4 sm:-right-6 top-8 shadow-2xl"
              animate={shouldReduceMotion ? {} : { rotate: [-2, 2, -2] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <BorderGlow borderRadius={12} backgroundColor="#c8f135" glowColor="0 0 100" colors={['#ffffff', '#f4f4f5', '#e4e4e7']} glowRadius={20}>
                <div className="rounded-xl p-4" style={{ background: 'transparent', border: 'none', transform: 'none', boxShadow: 'none' }}>
                  <p className="text-[#0a0a0a] text-xs font-bold uppercase tracking-wider mb-1">We specialize in</p>
                  <p className="text-[#0a0a0a] text-lg font-black" style={{ fontFamily: 'Outfit' }}>Digital Growth</p>
                </div>
              </BorderGlow>
            </motion.div>

            {/* Floating card – bottom left */}
            <motion.div
              className="absolute -left-4 sm:-left-6 bottom-8 shadow-xl"
              animate={shouldReduceMotion ? {} : { y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <BorderGlow borderRadius={12} backgroundColor="#111111" glowRadius={20}>
                <div className="rounded-xl px-4 py-3" style={{ background: 'transparent', border: 'none', transform: 'none', boxShadow: 'none' }}>
                  <p className="text-[#555] text-[10px] uppercase tracking-wider mb-0.5">Based in</p>
                  <p className="text-white text-sm font-bold" style={{ fontFamily: 'Outfit' }}>🏙️ Hyderabad, India</p>
                </div>
              </BorderGlow>
            </motion.div>
          </motion.div>

          {/* Right – Content */}
          <div>
            <motion.div variants={fadeUp} custom={1} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              <span className="section-tag">ABOUT SENTRYX SOLUTIONS</span>
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-5xl font-black leading-tight mb-6"
              style={{ fontFamily: 'Outfit' }}
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              We Turn Your Vision<br />
              into <span className="lime-text">Digital Reality</span>
            </motion.h2>

            <motion.p
              className="text-[#888] leading-relaxed mb-4 text-sm"
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              At Sentryx, we're a results-driven digital agency helping businesses grow, attract, and empower their audience online. We specialize in building powerful marketing campaigns, intelligent business systems, and smart automations that deliver real value.
            </motion.p>

            <motion.p
              className="text-[#888] leading-relaxed mb-8 text-sm"
              variants={fadeUp}
              custom={3.5}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              Partner us for: <span className="text-white">promotional websites</span> · <span className="text-white">school management systems</span> · <span className="text-white">AI chatbots</span> · <span className="text-white">AI-lead gen funnels</span>
            </motion.p>

            {/* Offering Tags */}
            <motion.div
              className="flex flex-wrap gap-2 mb-10"
              variants={fadeUp}
              custom={4}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              {offerings.map((item, i) => (
                <motion.span
                  key={i}
                  className="inline-flex items-center gap-2 bg-[#111] border border-[#222] rounded-full px-4 py-1.5 text-xs font-medium text-[#ccc]"
                  whileHover={{ scale: 1.05, borderColor: '#c8f135', color: '#fff' }}
                >
                  <span>{item.icon}</span> {item.label}
                </motion.span>
              ))}
            </motion.div>

            {/* Animated Stats */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-[#1a1a1a]"
              variants={fadeUp}
              custom={5}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              {stats.map((s, i) => (
                <StatItem key={i} stat={s} inView={inView} />
              ))}
            </motion.div>

            <motion.div
              className="flex gap-3 mt-8"
              variants={fadeUp}
              custom={6}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <motion.a href="#services" className="btn-lime" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>Explore Services</motion.a>
              <motion.a href="#portfolio" className="btn-outline" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>Our Portfolio</motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
