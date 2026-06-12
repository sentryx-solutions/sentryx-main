import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote } from 'lucide-react'
import BorderGlow from './BorderGlow'

const reviews = [
  {
    name: 'Mohammed Ilyas',
    role: 'Business Owner, Hyderabad',
    rating: 5,
    text: "Sentryx completely transformed our online presence. The WhatsApp marketing campaign they ran for us resulted in 40% more inquiries within the first month. Highly professional team!",
    initials: 'MI',
    color: 'from-lime-400/30 to-emerald-400/10',
  },
  {
    name: 'Priya Sharma',
    role: 'School Principal, Telangana',
    rating: 5,
    text: "The school management ERP they built for us is outstanding. Attendance, fees, communication — everything in one place. Our staff productivity has improved dramatically.",
    initials: 'PS',
    color: 'from-blue-400/30 to-blue-400/10',
  },
  {
    name: 'Rahul Verma',
    role: 'E-commerce Founder, Hyderabad',
    rating: 5,
    text: "I was skeptical about AI agents, but Sentryx proved me wrong. Our customer support bot now handles 70% of queries automatically. Best investment we've made this year.",
    initials: 'RV',
    color: 'from-purple-400/30 to-purple-400/10',
  },
  {
    name: 'Ananya Reddy',
    role: 'Boutique Owner, Secunderabad',
    rating: 5,
    text: "The logo and branding Sentryx did for us is exceptional. We've received so many compliments from customers. The WhatsApp marketing that followed doubled our sales inquiries.",
    initials: 'AR',
    color: 'from-orange-400/30 to-orange-400/10',
  },
  {
    name: 'Kiran Patel',
    role: 'Restaurant Owner, Hyderabad',
    rating: 5,
    text: "Our promotional website ranks on Google page 1 now. The team is responsive, creative, and delivers exactly what they promise. Highly recommend for any local business.",
    initials: 'KP',
    color: 'from-rose-400/30 to-rose-400/10',
  },
]

const Testimonials = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="testimonials" className="py-28 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Aggregate rating */}
          <div className="inline-flex items-center gap-2 bg-[#c8f135]/08 border border-[#c8f135]/20 rounded-full px-4 py-2 mb-5">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#c8f135" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <span className="text-[#c8f135] text-xs font-black">4.9/5</span>
            <span className="text-[#555] text-xs">from 50+ clients</span>
          </div>

          <span className="section-tag">TESTIMONIALS</span>
          <h2 className="text-4xl lg:text-5xl font-black leading-tight mt-0" style={{ fontFamily: 'Outfit' }}>
            What Our Clients<br />
            <span className="lime-text">Say About Us</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <BorderGlow borderRadius={16} backgroundColor="#111111" className="h-full" glowRadius={25}>
                <div className="testimonial-card h-full group" style={{ background: 'transparent', border: 'none', transform: 'none', boxShadow: 'none' }}>
                  {/* Decorative quote mark */}
                  <div className="absolute top-4 right-4 opacity-[0.04]" aria-hidden="true">
                    <Quote size={64} className="text-white" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4" role="img" aria-label={`${review.rating} stars`}>
                    {[...Array(review.rating)].map((_, j) => (
                      <svg key={j} width="13" height="13" viewBox="0 0 24 24" fill="#c8f135" aria-hidden="true">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>

                  <p className="text-[#999] text-sm leading-relaxed mb-6 italic relative z-10">"{review.text}"</p>

                  <div className="flex items-center gap-3 pt-4 border-t border-[#1a1a1a]">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white text-xs font-black" style={{ fontFamily: 'Outfit' }}>{review.initials}</span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold" style={{ fontFamily: 'Outfit' }}>{review.name}</p>
                      <p className="text-[#444] text-xs">{review.role}</p>
                    </div>
                  </div>
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
