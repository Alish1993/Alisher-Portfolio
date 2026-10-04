import React from 'react';
import { motion } from 'motion/react';
import profilPic from '../assets/photo_2025-02-02_19-10-41.jpg';
import { HERO_CONTENT } from '../constants';
import { container } from '../constants/motion';

const stats = [
  { value: '5+', label: 'Years experience' },
  { value: '20+', label: 'Projects shipped' },
  { value: '8+', label: 'Core stacks' },
  { value: '24/7', label: 'Builder mindset' },
];

export default function Hero() {
  return (
    <section id="top" className="section-shell mt-8 overflow-hidden px-5 py-8 sm:px-8 lg:px-10 lg:py-12">
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="max-w-2xl">
          <motion.p
            variants={container(0.15)}
            initial="hidden"
            animate="visible"
            className="section-tag mb-6"
          >
            Available for opportunities
          </motion.p>

          <motion.h1
            variants={container(0.3)}
            initial="hidden"
            animate="visible"
            className="text-5xl font-semibold tracking-[-0.08em] text-white sm:text-6xl lg:text-[5.2rem]"
          >
            Alisher <span className="text-gradient">Sarin</span>
          </motion.h1>

          <motion.div
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="mt-5 text-xl font-medium tracking-tight text-slate-200 sm:text-2xl"
          >
            Full Stack Developer
          </motion.div>

          <motion.p
            variants={container(0.7)}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg"
          >
            {HERO_CONTENT}
          </motion.p>

          <motion.div
            variants={container(0.9)}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-col items-start gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/50 hover:text-cyan-300"
            >
              Let’s talk
            </a>
          </motion.div>

          <motion.div
            variants={container(1.1)}
            initial="hidden"
            animate="visible"
            className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card rounded-2xl border border-white/10 p-4 soft-glow">
                <div className="text-2xl font-semibold text-white">{stat.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute inset-10 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-3 shadow-[0_30px_80px_rgba(34,211,238,0.16)]">
            <img
              src={profilPic}
              alt="Alisher Sarin"
              className="h-[500px] w-full rounded-[1.6rem] object-cover object-center"
            />
          </div>
          <div className="glass-card absolute -bottom-4 left-4 rounded-2xl border border-cyan-400/20 px-4 py-3">
            <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">Core focus</div>
            <div className="mt-2 text-sm font-medium text-cyan-300">React • Node • Product UI</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
