'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const formations = [
  { id: 'permis-b', name: 'Permis B', basePrice: 1290, hourlyRate: 55, minHours: 20 },
  { id: 'aac', name: 'Conduite Accompagnée', basePrice: 1190, hourlyRate: 55, minHours: 20 },
  { id: 'permis-auto', name: 'Permis Boîte Auto', basePrice: 990, hourlyRate: 55, minHours: 13 },
  { id: 'code', name: 'Code seul', basePrice: 350, hourlyRate: 0, minHours: 0 },
];

export function CostSimulator() {
  const [selectedFormation, setSelectedFormation] = useState(formations[0]);
  const [hours, setHours] = useState(25);
  const [includeCode, setIncludeCode] = useState(true);
  const [useCPF, setUseCPF] = useState(false);
  const [cpfAmount, setCpfAmount] = useState(1500);

  const calculation = useMemo(() => {
    const formation = selectedFormation;
    let total = 0;

    if (formation.id === 'code') {
      total = formation.basePrice;
    } else {
      const baseHours = formation.minHours;
      const extraHours = Math.max(0, hours - baseHours);
      total = formation.basePrice + extraHours * formation.hourlyRate;

      if (!includeCode && formation.id !== 'code') {
        total -= 350; // Code price if not included
      }
    }

    const remaining = useCPF ? Math.max(0, total - cpfAmount) : total;

    return {
      total,
      cpfUsed: useCPF ? Math.min(cpfAmount, total) : 0,
      remaining,
      monthly: Math.round(remaining / 6),
    };
  }, [selectedFormation, hours, includeCode, useCPF, cpfAmount]);

  return (
    <div className="rounded-2xl border-2 border-formaroute-blue-200 bg-gradient-to-br from-formaroute-blue-50 to-white p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-formaroute-blue-600">
          <Calculator className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="font-heading text-xl font-bold text-slate-900">
            Simulateur de coût
          </h3>
          <p className="text-sm text-slate-600">
            Estimez le coût de votre formation
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Formation Selection */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Type de formation
          </label>
          <div className="grid grid-cols-2 gap-2">
            {formations.map((formation) => (
              <button
                key={formation.id}
                onClick={() => {
                  setSelectedFormation(formation);
                  if (formation.id === 'code') {
                    setHours(0);
                  } else if (hours < formation.minHours) {
                    setHours(formation.minHours + 5);
                  }
                }}
                className={cn(
                  'rounded-xl border-2 px-4 py-3 text-sm font-medium transition-all',
                  selectedFormation.id === formation.id
                    ? 'border-formaroute-blue-600 bg-formaroute-blue-600 text-white'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-formaroute-blue-300'
                )}
              >
                {formation.name}
              </button>
            ))}
          </div>
        </div>

        {/* Hours Slider */}
        {selectedFormation.id !== 'code' && (
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm font-medium text-slate-700">
                Nombre d'heures de conduite
              </label>
              <span className="font-mono text-lg font-bold text-formaroute-blue-600">
                {hours}h
              </span>
            </div>
            <input
              type="range"
              min={selectedFormation.minHours}
              max={50}
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-formaroute-blue-600"
            />
            <div className="mt-1 flex justify-between text-xs text-slate-500">
              <span>{selectedFormation.minHours}h (minimum)</span>
              <span>50h</span>
            </div>
          </div>
        )}

        {/* Options */}
        {selectedFormation.id !== 'code' && (
          <div className="space-y-3">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={includeCode}
                onChange={(e) => setIncludeCode(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-formaroute-blue-600"
              />
              <span className="text-sm text-slate-700">
                Code de la route inclus (+350€)
              </span>
            </label>
          </div>
        )}

        {/* CPF */}
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={useCPF}
              onChange={(e) => setUseCPF(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-formaroute-blue-600"
            />
            <span className="text-sm font-medium text-slate-700">
              Utiliser mon CPF
            </span>
          </label>
          {useCPF && (
            <div className="mt-4">
              <label className="mb-2 block text-sm text-slate-600">
                Montant disponible sur votre CPF
              </label>
              <input
                type="number"
                value={cpfAmount}
                onChange={(e) => setCpfAmount(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 px-4 py-2 text-right font-mono"
                min={0}
                max={10000}
              />
            </div>
          )}
        </div>

        {/* Results */}
        <motion.div
          layout
          className="rounded-xl bg-slate-900 p-6 text-white"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Coût total formation</span>
              <span className="font-mono text-xl font-bold">
                {calculation.total.toLocaleString('fr-FR')}€
              </span>
            </div>
            {useCPF && calculation.cpfUsed > 0 && (
              <div className="flex items-center justify-between text-green-400">
                <span>Pris en charge par le CPF</span>
                <span className="font-mono">
                  -{calculation.cpfUsed.toLocaleString('fr-FR')}€
                </span>
              </div>
            )}
            <div className="border-t border-slate-700 pt-3">
              <div className="flex items-center justify-between">
                <span className="font-medium">Reste à votre charge</span>
                <span className="font-mono text-2xl font-bold text-formaroute-blue-400">
                  {calculation.remaining.toLocaleString('fr-FR')}€
                </span>
              </div>
              {calculation.remaining > 0 && (
                <p className="mt-1 text-sm text-slate-400">
                  Soit {calculation.monthly}€/mois en 6 fois sans frais
                </p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Info */}
        <div className="flex items-start gap-2 rounded-lg bg-formaroute-blue-50 p-3 text-sm text-formaroute-blue-700">
          <Info className="mt-0.5 h-4 w-4 shrink-0" />
          <p>
            Cette estimation est donnée à titre indicatif. Le nombre d'heures réel
            sera déterminé lors de votre évaluation initiale gratuite.
          </p>
        </div>

        {/* CTA */}
        <Button asChild className="w-full">
          <Link href="/reservation">
            Réserver mon évaluation gratuite
            <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
