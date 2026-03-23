'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, Car, Star, ExternalLink } from 'lucide-react';

const stats = [
  {
    value: 85,
    suffix: '%',
    label: 'Taux de réussite',
    description: 'au premier passage',
    icon: Award,
    color: 'text-formaroute-blue-600',
    bgColor: 'bg-formaroute-blue-100',
  },
  {
    value: 1500,
    suffix: '+',
    label: 'Élèves formés',
    description: 'par nos moniteurs',
    icon: Users,
    color: 'text-formaroute-red-600',
    bgColor: 'bg-formaroute-red-100',
  },
  {
    value: 10,
    suffix: '',
    label: 'Années d\'expérience',
    description: 'de nos moniteurs',
    icon: Car,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
];

function AnimatedCounter({
  target,
  suffix,
  duration = 2,
}: {
  target: number;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    const isDecimal = target % 1 !== 0;
    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      const currentValue = target * easeOut;
      setCount(isDecimal ? parseFloat(currentValue.toFixed(1)) : Math.floor(currentValue));

      if (now < endTime) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="font-mono">
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="section relative overflow-hidden bg-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-formaroute-blue-500 via-transparent to-transparent" />
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="heading-lg text-white">
            Des résultats qui{' '}
            <span className="text-formaroute-blue-400">parlent d'eux-mêmes</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Notre engagement : votre réussite. Découvrez nos chiffres clés.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative rounded-2xl border border-slate-800 bg-slate-800/50 p-6 text-center backdrop-blur-sm"
              >
                {/* Icon */}
                <div
                  className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${stat.bgColor}`}
                >
                  <Icon className={`h-7 w-7 ${stat.color}`} />
                </div>

                {/* Value */}
                <div className="text-4xl font-bold text-white md:text-5xl">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    duration={2}
                  />
                </div>

                {/* Label */}
                <p className="mt-2 font-semibold text-white">{stat.label}</p>
                <p className="text-sm text-slate-400">{stat.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Google Reviews CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://g.page/r/CVku8ribbwIZEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            Laissez-nous un avis sur Google
            <ExternalLink className="h-4 w-4 text-slate-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
