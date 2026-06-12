import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import BorderGlow from './BorderGlow'

const allProjects = [
  {
    title: 'EduTrack School ERP',
    category: 'ERP',
    tag: 'School Management System',
    img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
  },
  {
    title: 'NexaShop Landing Page',
    category: 'Websites',
    tag: 'Promotional Website',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    title: 'AutoReach WhatsApp Bot',
    category: 'Marketing',
    tag: 'AI Agent & WhatsApp',
    img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
  },
  {
    title: 'BrandForge Identity Kit',
    category: 'Design',
    tag: 'Logo & Poster Design',
    img: 'https://images.unsplash.com/photo-1609921205586-7e8a57516512?w=800&q=80',
  },
  {
    title: 'VetConnect Clinic Portal',
    category: 'Websites',
    tag: 'Business Website',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
  },
  {
    title: 'GrowthPilot Ad Campaign',
    category: 'Marketing',
    tag: 'Digital Marketing',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
]

const FILTERS = ['All', 'Websites', 'Marketing', 'Design', 'ERP']

const Portfolio = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? allProjects : allProjects.filter(p => p.category === active)

  return (
    <section id="portfolio" className="py-28 relative" ref={ref}>
      <div className="absolute inset-0 bg-[#0c0c0c]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-6"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <span className="section-tag">OUR WORK</span>
            <h2 className="text-4xl lg:text-5xl font-black leading-tight" style={{ fontFamily: 'Outfit' }}>
              Projects That Speak<br />
              <span className="lime-text">For Themselves</span>
            </h2>
          </div>
          <motion.a
            href="#contact"
            className="btn-lime self-start sm:self-auto whitespace-nowrap"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Start New Project
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </motion.a>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap gap-2 mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
          role="tablist"
          aria-label="Portfolio filter"
        >
          {FILTERS.map(f => (
            <motion.button
              key={f}
              className={`filter-tab ${active === f ? 'active' : ''}`}
              onClick={() => setActive(f)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              role="tab"
              aria-selected={active === f}
            >
              {f}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                style={{ height: '280px' }}
              >
                <BorderGlow borderRadius={16} backgroundColor="#111111" className="h-full" glowRadius={25}>
                  <div className="project-card h-full group" style={{ border: 'none', transform: 'none', boxShadow: 'none' }}>
                    <img src={project.img} alt={project.title} />
                    <div className="overlay" />

                    {/* Hover info panel */}
                    <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-[#c8f135] text-[10px] font-bold uppercase tracking-widest mb-1">{project.tag}</p>
                      <div className="flex items-end justify-between">
                        <p className="text-white text-lg font-bold leading-tight" style={{ fontFamily: 'Outfit' }}>{project.title}</p>
                        <motion.div
                          className="w-9 h-9 bg-[#c8f135] rounded-lg flex items-center justify-center flex-shrink-0 ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ scale: 1.1 }}
                        >
                          <ArrowUpRight size={16} className="text-[#0a0a0a]" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </BorderGlow>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-16 text-[#444]">No projects found.</div>
        )}

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className="text-[#555] text-sm mb-4">Want to see more of our work?</p>
          <motion.a
            href="#contact"
            className="btn-outline"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Discuss Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
