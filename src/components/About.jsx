import React from 'react';
import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'motion/react';
import { fadeInLeft, fadeInRight } from '../constants/motion';

export default function About() {
  return (
    <div className="border-b border-neutral-300 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <sapn className="text-neutral-500"> Me</sapn>
      </h1>
      <div className="flex flex-wrap">
        <motion.div {...fadeInLeft} className="w-full lg:w-1/2 lg:p-8">
          <div className="flex item-center justify-center">
            <img className="rounder-2xl" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div {...fadeInRight} className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
