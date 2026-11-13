// src/components/services/Services.tsx
import { services } from '@content/services';
import { useLocale } from '@hooks/useLocale';
import { Card, CardContent, Link } from '@components/ui';
import { motion } from 'motion/react';
import ServiceIcon from './ServiceIcon';

export function Services() {
  const locale = useLocale();
  const serviceList = services[locale];
  
  return (
    <section id="layanan" className="py-16 lg:py-24" aria-labelledby="services-title">
      <div className="wrap">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block sticker bg-lime text-ink mb-4">
            {locale === 'id' ? 'Layanan Kami' : 'Our Services'}
          </span>
          <h2 id="services-title" className="t-h2 text-paper mb-4">
            {locale === 'id' ? 'Apa yang bisa kami bantu?' : 'What can we help with?'}
          </h2>
          <p className="t-lede text-paper-muted">
            {locale === 'id'
              ? 'IT support, website, SEO, otomasi, bot, dan AI agent — dikerjakan jarak jauh oleh satu tim.'
              : 'From daily IT support to custom AI agents — one remote team handles it all.'
            }
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {serviceList.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
            >
              <Card variant="bordered" padding="lg" className="h-full flex flex-col on-paper group">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <ServiceIcon name={service.icon} className="text-orange shrink-0" size={32} />
                  <span className="chip border-lime text-lime shrink-0">
                    {index + 1}
                  </span>
                </div>
                <CardContent className="flex-1 flex flex-col">
                  <h3 className="t-h3 text-ink mb-3">{service.name}</h3>
                  <p className="t-body text-ink-muted mb-6 flex-1">{service.description}</p>
                  <ul className="space-y-2 text-sm text-ink-muted font-mono" role="list">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-lime shrink-0" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>
        
        <div className="text-center mt-12 lg:mt-16">
          <Link
            href="mailto:it@newall.network"
            variant="pill-solid"
            className="text-base min-h-[52px] px-10"
          >
            {locale === 'id' ? 'Mulai Diskusi Proyek' : 'Start Project Discussion'}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}