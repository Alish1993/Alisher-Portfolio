import React from 'react';
import { motion } from 'motion/react';
import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';
import { fadeInLeft, fadeInRight } from '../constants/motion';

const skills = ['React', 'Node.js', 'JavaScript', 'SQL', 'Python', 'MongoDB', 'PostgreSQL', 'UI/UX'];

export default function About() {
  return (
    <section id="about" className="section-shell mt-10 px-5 py-10 sm:px-8 lg:px-10">
      <div className="mb-8">
        <span className="section-tag">About me</span>
        <h2 className="section-title mt-4">A developer focused on useful, reliable products.</h2>
      </div>

      <div className="grid items-center gap-10 lg:grid-cols-2">
        <motion.div {...fadeInLeft} className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/60 p-3">
          <img src={aboutImg} alt="About Alisher" className="h-[440px] w-full rounded-[1.5rem] object-cover" />
        </motion.div>

        <motion.div {...fadeInRight} className="space-y-5">
          <p className="text-lg leading-8 text-slate-300">{ABOUT_TEXT}</p>

          <div className="grid gap-4 sm:grid-cols-3 pt-2">
            {[
              { value: 'Product', label: 'Mindset' },
              { value: 'Clean', label: 'Architecture' },
              { value: 'Fast', label: 'Execution' },
            ].map((item) => (
              <div key={item.label} className="glass-card rounded-2xl p-4 text-left">
                <div className="text-2xl font-semibold text-white">{item.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
