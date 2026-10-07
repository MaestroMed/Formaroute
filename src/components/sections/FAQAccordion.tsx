'use client';

import { useId, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQQuestion {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  questions: FAQQuestion[];
}

export function FAQAccordion({ questions }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className="space-y-3">
      {questions.map((item, index) => (
        <div
          key={index}
          className={cn(
            'overflow-hidden rounded-xl border-2 transition-colors',
            openIndex === index
              ? 'border-formaroute-blue-200 bg-formaroute-blue-50/50'
              : 'border-slate-200 bg-white hover:border-slate-300'
          )}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between px-6 py-4 text-left"
            type="button"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${baseId}-${index}`}
          >
            <span className="pr-4 font-semibold text-slate-900">{item.question}</span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="shrink-0"
            >
              <ChevronDown
                className={cn(
                  'h-5 w-5 transition-colors',
                  openIndex === index ? 'text-formaroute-blue-600' : 'text-slate-400'
                )}
              />
            </motion.div>
          </button>
          <div
            id={`faq-answer-${baseId}-${index}`}
            role="region"
            hidden={openIndex !== index}
            className="border-t border-slate-200 px-6 py-4"
          >
            <p className="text-slate-600">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
