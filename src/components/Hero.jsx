import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { ArrowRight, Globe, Megaphone, Bot, MessageSquare, GraduationCap, Palette, Image } from 'lucide-react'
import LightRays from './LightRays'
import BorderGlow from './BorderGlow'
import RotatingText from './RotatingText'
import LogoLoop from './LogoLoop'

const WA_NUMBER = '919542905904'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
}

const wordReveal = {
  hidden: { y: '110%', opacity: 0 },
  visible: (i = 0) => ({
    y: '0%',
    opacity: 1,
    transition: { delay: 0.1 + i * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
}

const ticker = [
  'PROMOTIONAL WEBSITES',
  'DIGITAL MARKETING',
  'WHATSAPP MARKETING',
  'AI AGENTS',
  'SCHOOL MANAGEMENT SYSTEMS',
  'LOGO & POSTER DESIGN',
]

const topServices = [
  { icon: Megaphone, label: 'Digital Marketing', color: '#c8f135' },
  { icon: Bot, label: 'AI Agents', color: '#22d3ee' },
  { icon: MessageSquare, label: 'WhatsApp Bulk', color: '#25D366' },
]

const bottomServices = [
  { icon: GraduationCap, label: 'School & College Systems', color: '#818cf8' },
  { icon: Palette, label: 'Logo Design', color: '#fbbf24' },
  { icon: Image, label: 'Poster Design', color: '#fb7185' },
]

const headline = [['Grow', 'Your', 'Brand'], ['With', 'Sentryx']]

const Hero = () => {
  const shouldReduceMotion = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section
        id="home"
        className="relative min-h-screen flex flex-col justify-center pt-20 pb-0 overflow-hidden"
        ref={ref}
      >
      {/* Background subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Yellow Spotlight Rays */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0, opacity: 0.8 }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      {/* Radial glow (Left) */}
      <motion.div
        className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(200,241,53,0.06) 0%, transparent 70%)' }}
        animate={shouldReduceMotion ? {} : { opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Spotlight glow (Center-Right, reflection from the card) */}
      <motion.div
        className="absolute top-1/2 right-0 translate-x-1/4 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(200,241,53,0.08) 0%, transparent 60%)' }}
        animate={shouldReduceMotion ? {} : { opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Badge */}
        <motion.div
          className="mb-5"
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <span className="hero-badge" role="text">
            <span className="hero-badge-icon">⚡</span>
            DIGITAL MARKETING &amp; IT AGENCY
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-8 items-center">
          {/* ── LEFT COLUMN ── */}
          <div>
            {/* Headline */}
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[60px] xl:text-[70px] font-black leading-[1.05] tracking-tight mb-5"
              style={{ fontFamily: 'Outfit' }}
            >
              {headline.map((line, li) => (
                <span key={li} className="block overflow-hidden">
                  {line.map((word, wi) => (
                    <motion.span
                      key={wi}
                      className={`inline-block mr-[0.15em] ${word === 'Sentryx' ? 'lime-text' : ''}`}
                      variants={wordReveal}
                      custom={li * 2 + wi}
                      initial="hidden"
                      animate={inView ? 'visible' : 'hidden'}
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
              ))}
              <span className="block overflow-hidden">
                <motion.span
                  className="inline-block"
                  variants={wordReveal}
                  custom={5}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                >
                  Solutions
                </motion.span>
              </span>
            </h1>

            {/* Subtext */}
            <motion.p
              className="text-[#888] text-lg sm:text-xl lg:text-[19px] leading-relaxed mb-8 max-w-[600px]"
              style={{ fontFamily: 'Inter', lineHeight: '1.7' }}
              variants={fadeUp}
              custom={4}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              From{' '}
              <RotatingText
                texts={['WhatsApp marketing', 'AI agents', 'stunning websites', 'brand identities', 'school ERP systems']}
                mainClassName="text-white font-bold inline-flex transition-all duration-300 text-[1.1em]"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3200}
              />
              {' '}— we deliver results that matter.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-3"
              variants={fadeUp}
              custom={5}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <motion.a
                href="#contact"
                className="btn-lime"
                style={{ fontSize: '15px', padding: '14px 28px', borderRadius: '50px' }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Start a Project
                <ArrowRight size={16} />
              </motion.a>

              <motion.a
                href={`https://wa.me/${WA_NUMBER}`}
                className="hero-wa-btn"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
              >
                {/* WhatsApp icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.507 3.934 1.395 5.608L0 24l6.584-1.367A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.092-1.419l-.364-.218-3.91.813.841-3.8-.24-.385A9.818 9.818 0 1112 21.818z" />
                </svg>
                Chat on WhatsApp
              </motion.a>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN – Service Grid ── */}
          <motion.div
            className="relative"
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {/* Top row: 3 small cards */}
            <div className="grid grid-cols-3 gap-2.5 mb-2.5">
              {topServices.map((svc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4 }}
                  className="h-full"
                >
                  <BorderGlow borderRadius={14} backgroundColor="#111111" className="h-full" glowRadius={25}>
                    <div className="hero-service-card h-full" style={{ background: 'transparent', border: 'none', transform: 'none', boxShadow: 'none' }}>
                      <div
                        className="hero-svc-icon-wrap"
                        style={{ background: `${svc.color}22` }}
                      >
                        <svc.icon size={16} color={svc.color} />
                      </div>
                      <p className="hero-svc-label">{svc.label}</p>
                    </div>
                  </BorderGlow>
                </motion.div>
              ))}
            </div>

            {/* Featured card: Promotional Websites */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.55, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-3"
            >
              <BorderGlow borderRadius={18} backgroundColor="#c8f135" colors={['#ffffff', '#f4f4f5', '#e4e4e7']} glowColor="0 0 100" glowRadius={30}>
                <div className="hero-featured-card" style={{ background: 'transparent', border: 'none' }}>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="hero-featured-title">Promotional<br />Websites</h3>
                      <p className="hero-featured-sub">Beautiful, fast &amp; conversion-focused</p>
                    </div>
                    <div className="hero-featured-globe">
                      <Globe size={22} color="#0a0a0a" />
                    </div>
                  </div>

                  {/* 4.9★ floating badge */}
                  <motion.div
                    className="hero-rating-badge"
                    animate={shouldReduceMotion ? {} : { y: [0, -5, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <span className="hero-rating-stars">4.9★</span>
                    <span className="hero-rating-label">Client Rating</span>
                  </motion.div>

                  {/* Decorative circles */}
                  <div className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full bg-[#0a0a0a]/10" />
                  <div className="absolute -top-6 right-16 w-16 h-16 rounded-full bg-[#0a0a0a]/10" />
                </div>
              </BorderGlow>
            </motion.div>

            {/* Bottom row: 3 small cards */}
            <div className="grid grid-cols-3 gap-2.5">
              {bottomServices.map((svc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.65 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4 }}
                  className="h-full"
                >
                  <BorderGlow borderRadius={14} backgroundColor="#111111" className="h-full" glowRadius={25}>
                    <div className="hero-service-card h-full" style={{ background: 'transparent', border: 'none', transform: 'none', boxShadow: 'none' }}>
                      <div
                        className="hero-svc-icon-wrap"
                        style={{ background: `${svc.color}22` }}
                      >
                        <svc.icon size={16} color={svc.color} />
                      </div>
                      <p className="hero-svc-label">{svc.label}</p>
                    </div>
                  </BorderGlow>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Ticker Bar ── */}
      <div className="hero-ticker-bar mt-16">
        <LogoLoop
          logos={ticker.map((item) => ({
            node: (
              <span className="inline-flex items-center gap-4">
                <span className="hero-ticker-text">{item}</span>
                <span className="hero-ticker-dot">✦</span>
              </span>
            ),
            title: item
          }))}
          speed={60}
          direction="left"
          gap={32}
        />
      </div>
    </section>
  )
}

export default Hero
