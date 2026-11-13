// src/components/faq/FAQ.tsx
import { faq } from '@content/faq';
import { useLocale } from '@hooks/useLocale';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export function FAQ() {
  const locale = useLocale();
  const faqList = faq[locale];
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  return (
    <section id="faq" className="py-16 lg:py-24" aria-labelledby="faq-title">
      <div className="wrap">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block sticker bg-lime text-ink mb-4">
            {locale === 'id' ? 'Pertanyaan Umum' : 'Frequently Asked'}
          </span>
          <h2 id="faq-title" className="t-h2 text-paper mb-4">
            {locale === 'id' ? 'Masih punya pertanyaan?' : 'Still have questions?'}
          </h2>
          <p className="t-lede text-paper-muted">
            {locale === 'id'
              ? 'Jika jawaban Anda tidak di sini, kirim email ke it@newall.network — kami balas cepat.'
              : 'If your question isn\'t here, email it@newall.network — we reply fast.'
            }
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <dl className="space-y-4" role="list">
            {faqList.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="group">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between gap-4 p-4 lg:p-6 bg-paper/5 border border-paper/10 rounded-2xl text-left transition-all duration-300 ease-out hover:bg-paper/10 hover:border-paper/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange"
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${item.id}`}
                  >
                    <dt className="t-h3 text-paper pr-12 text-balance">
                      {item.question}
                    </dt>
                    <motion.span
                      className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-paper/10 text-lime font-mono font-bold text-xl transition-transform duration-300 ease-out"
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                    >
                      +
                    </motion.span>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.dd
                        id={`faq-answer-${item.id}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 lg:px-6 pb-4 lg:pb-6 pt-2 border-t border-paper/10 mt-2">
                          <p className="t-body text-paper-muted leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.dd>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </dl>
          
          <div className="text-center mt-12 pt-8 border-t border-paper/10">
            <p className="t-body text-paper-muted mb-6">
              {locale === 'id'
                ? 'Pertanyaan lain? Kami siap bantu.'
                : 'Another question? We\'re ready to help.'
              }
            </p>
            <a
              href="mailto:it@newall.network"
              className="pill pill-solid inline-flex text-base min-h-[52px] px-10"
            >
              {locale === 'id' ? 'Email Kami' : 'Email Us'}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}