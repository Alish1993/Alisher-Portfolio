import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'motion/react';
import { fadeInLeft, fadeInUp, fadeIn } from '../constants/motion';

export default function Project() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 {...fadeIn} className="my-20 text-center text-4xl">
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap flex-center">
            <motion.div {...fadeInLeft} className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounder"
              />
            </motion.div>
            <motion.div {...fadeInUp} className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rouded bg-neutral-900 text-sm font-medium text-purple-800 px-2 py-1 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
