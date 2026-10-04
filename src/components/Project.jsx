import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { fadeInLeft, fadeInUp, fadeIn } from '../constants/motion';

export default function Project() {
  return (
    <section id="projects" className="section-shell mt-10 px-5 py-10 sm:px-8 lg:px-10">
      <div className="mb-8 text-center lg:text-left">
        <span className="section-tag">Projects</span>
        <h2 className="section-title mt-4">Selected work.</h2>
      </div>

      <div className="space-y-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            {...(index % 2 === 0 ? fadeInLeft : fadeInUp)}
            className="glass-card overflow-hidden rounded-[1.75rem] p-4 sm:p-5"
          >
            <div className="grid items-center gap-6 lg:grid-cols-[220px_1fr]">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
                <img src={project.image} alt={project.title} className="h-44 w-full object-cover" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-300">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
