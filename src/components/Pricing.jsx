import BorderGlow from './BorderGlow'

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '₹4,999',
      period: '/month',
      tag: null,
      popular: false,
      features: [
        'Promotional Website Design',
        'Basic SEO Setup',
        'WhatsApp Business Setup',
        'Social Media (2 platforms)',
        'Monthly Report',
        '1 Revision Round',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Growth',
      price: '₹14,999',
      period: '/month',
      tag: 'MOST POPULAR',
      popular: true,
      features: [
        'Full Website + Landing Page',
        'Advanced SEO + Google Ads',
        'WhatsApp Bulk Campaign (5K)',
        'AI Chatbot Integration',
        'Logo + 10 Social Creatives',
        '4 Revision Rounds',
        'Priority Support',
      ],
      cta: 'Get This Plan',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      tag: 'BEST VALUE',
      popular: false,
      features: [
        'School/College ERP System',
        'Unlimited WhatsApp Campaigns',
        'Full AI Agents Suite',
        'Custom Automation Workflows',
        'Dedicated Account Manager',
        'Unlimited Revisions',
        '24/7 Priority Support',
      ],
      cta: 'Contact Us',
    },
  ]

  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-[#0d0d0d]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <span className="section-tag">PRICING PLANS</span>
          <h2 className="text-4xl lg:text-5xl font-black leading-tight" style={{fontFamily:'Outfit'}}>
            Transparent Pricing,<br />
            <span className="lime-text">Real Value</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div key={i} className={`relative h-full ${plan.popular ? 'scale-105' : ''}`}>
              {plan.tag && (
                <div className={`absolute z-10 -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${plan.popular ? 'bg-[#0a0a0a] text-[#c8f135]' : 'bg-[#c8f135] text-[#0a0a0a]'}`}>
                  {plan.tag}
                </div>
              )}
              <BorderGlow
                borderRadius={16}
                backgroundColor={plan.popular ? '#c8f135' : '#111111'}
                glowColor={plan.popular ? '0 0 100' : '73 89 57'}
                colors={plan.popular ? ['#ffffff', '#f4f4f5', '#e4e4e7'] : ['#c8f135', '#a3e635', '#65a30d']}
                className={`h-full ${plan.popular ? 'shadow-2xl' : ''}`}
                glowRadius={30}
              >
                <div className={`pricing-card h-full relative flex flex-col ${plan.popular ? 'popular' : ''}`} style={{ background: 'transparent', border: 'none', transform: 'none', boxShadow: 'none' }}>
                  <div className="mb-6">
                    <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${plan.popular ? 'text-[#0a0a0a]/70' : 'text-[#666]'}`}>{plan.name}</p>
                    <div className="flex items-end gap-1">
                      <span className={`text-4xl font-black leading-none ${plan.popular ? 'text-[#0a0a0a]' : 'text-white'}`} style={{fontFamily:'Outfit'}}>{plan.price}</span>
                      {plan.period && <span className={`text-sm mb-1 ${plan.popular ? 'text-[#0a0a0a]/60' : 'text-[#555]'}`}>{plan.period}</span>}
                    </div>
                  </div>

                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-xs">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${plan.popular ? 'bg-[#0a0a0a]/15' : 'bg-[#1a1a1a]'}`}>
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path d="M1.5 4l1.5 1.5L6.5 2" stroke={plan.popular ? '#0a0a0a' : '#c8f135'} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className={plan.popular ? 'text-[#0a0a0a]' : 'text-[#aaa]'}>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`w-full text-center py-3 rounded-xl text-sm font-bold transition-all ${
                      plan.popular
                        ? 'bg-[#0a0a0a] text-[#c8f135] hover:bg-[#111]'
                        : 'bg-[#c8f135] text-[#0a0a0a] hover:bg-[#d4f54a]'
                    }`}
                    style={{fontFamily:'Outfit'}}
                  >
                    {plan.cta}
                  </a>
                </div>
              </BorderGlow>
            </div>
          ))}
        </div>

        <p className="text-center text-[#555] text-xs mt-8">All prices are in INR · GST extra · Custom packages available on request</p>
      </div>
    </section>
  )
}

export default Pricing
