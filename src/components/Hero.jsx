import React from 'react';
import { motion } from 'motion/react';
import { container } from '../constants/motion';
import profilPic from '../assets/photo_2025-02-02_19-10-41.jpg';
import { HERO_CONTENT } from '../constants';

export default function Hero() {
  return (
    <section id="top" className="section-shell mt-8 px-5 py-8 sm:px-8 lg:px-10 lg:py-12">
      <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full max-w-2xl text-center lg:text-left">
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
            className="text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl"
          >
            Alisher <span className="text-gradient">Sarin</span>
          </motion.h1>

          <motion.div
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="mt-5 text-2xl font-medium tracking-tight text-slate-200 sm:text-3xl"
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
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
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
              Contact me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full max-w-md"
        >
          <div className="absolute inset-8 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/60 p-3 shadow-[0_30px_80px_rgba(6,182,212,0.25)]">
            <img
              src={profilPic}
              alt="Alisher Sarin"
              className="h-[420px] w-full rounded-[1.6rem] object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
