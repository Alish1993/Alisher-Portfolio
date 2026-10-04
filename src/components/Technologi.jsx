import React from 'react';
import { motion } from 'motion/react';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb } from 'react-icons/si';
import { DiRedis } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';

const technologyCards = [
  { icon: RiReactjsLine, label: 'React', color: 'text-cyan-400', duration: 2.5 },
  { icon: TbBrandNextjs, label: 'Next.js', color: 'text-slate-200', duration: 3.8 },
  { icon: SiMongodb, label: 'MongoDB', color: 'text-green-400', duration: 2.8 },
  { icon: DiRedis, label: 'Redis', color: 'text-red-500', duration: 4.5 },
  { icon: FaNodeJs, label: 'Node.js', color: 'text-green-400', duration: 3.3 },
  { icon: BiLogoPostgresql, label: 'PostgreSQL', color: 'text-cyan-500', duration: 2.2 },
];

const iconVariants = (duration) => ({
  initial: { y: -8 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

export default function Technologi() {
  return (
    <section className="section-shell mt-10 px-5 py-10 sm:px-8 lg:px-10">
      <div className="text-center">
        <span className="section-tag">Tech stack</span>
        <h2 className="section-title mt-4">Technologies I work with.</h2>
      </div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -60 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {technologyCards.map(({ icon: Icon, label, color, duration }) => (
          <motion.div
            key={label}
            variants={iconVariants(duration)}
            initial="initial"
            animate="animate"
            className="glass-card flex items-center justify-between rounded-2xl px-5 py-4"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-slate-900/80">
                <Icon className={`text-4xl ${color}`} />
              </div>
              <span className="text-lg font-medium text-slate-100">{label}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
