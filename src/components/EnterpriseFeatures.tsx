import React from 'react';
import { motion } from 'motion/react';
import { Monitor, Home, User } from 'lucide-react';

const EnterpriseFeatures = () => {
  const features = [
    {
      title: 'Online Classes',
      desc: 'Join live sessions from anywhere via Zoom. Ideal for students outside Bengaluru or those who prefer learning from home.',
      icon: Monitor
    },
    {
      title: 'Offline at Studio',
      desc: 'Train at our Horamavu studio with hands-on corrections, and the energy of dancing alongside peers.',
      icon: Home
    },
    {
      title: 'One-to-One',
      desc: 'Personalised private sessions tailored to your pace and goals - perfect for exam prep, Arangetram, or focused improvement.',
      icon: User
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 md:py-32 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-brand-gold tracking-[3px] sm:tracking-[4px] uppercase text-[10px] sm:text-[11px] font-bold mb-3 block">
            Flexible Options
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[50px] text-white leading-[1.2] mb-4">
            Learning Formats
          </h2>
          <p className="text-white/80 font-light text-[14px] sm:text-[15px] max-w-2xl mx-auto">
            Choose the learning format that best fits your location, schedule, and personal artistic goals.
          </p>
          <div className="w-12 h-[1.5px] bg-brand-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-white/5 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-400 border border-white/10 hover:border-brand-gold/30 text-center group"
              >
                <div className="w-14 h-14 mx-auto bg-brand-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-gold/20 transition-colors">
                  <Icon className="text-brand-gold w-6 h-6" strokeWidth={1.5} />
                </div>
                <h4 className="font-serif text-xl sm:text-2xl font-medium text-white mb-3">{feature.title}</h4>
                <p className="text-white/70 font-light text-[13px] sm:text-[14px] leading-[1.6]">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseFeatures;
