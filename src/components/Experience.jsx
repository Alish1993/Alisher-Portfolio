import React from 'react';
import { motion } from 'motion/react';
import { EXPERIENCES } from '../constants';
import { fadeInLeft, fadeInUp } from '../constants/motion';

export default function Experience() {
  return (
    <section id="experience" className="section-shell mt-10 px-5 py-10 sm:px-8 lg:px-10">
      <div className="mb-8">
        <span className="section-tag">Experience</span>
        <h2 className="section-title mt-4">Career highlights.</h2>
      </div>

      <div className="space-y-8">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="relative grid gap-5 lg:grid-cols-[180px_1fr] lg:gap-8">
            <div className="absolute left-[18px] top-4 bottom-0 hidden w-px bg-white/10 lg:block" />

            <motion.div {...fadeInLeft} className="relative z-10 flex items-center lg:justify-end">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10 text-xs font-bold text-cyan-300">
                {index + 1}
              </span>
              <p className="ml-4 text-sm font-medium uppercase tracking-[0.2em] text-slate-400 lg:ml-6">{experience.year}</p>
            </motion.div>

            <motion.div {...fadeInUp} className="glass-card rounded-2xl p-5 sm:p-6">
              <h3 className="text-2xl font-semibold text-white">
                {experience.role} <span className="text-base font-medium text-cyan-300">@ {experience.company}</span>
              </h3>
              <p className="mt-4 leading-7 text-slate-300">{experience.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {experience.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-sm text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
