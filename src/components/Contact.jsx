import React from 'react';
import { motion } from 'motion/react';
import { CONTACT } from '../constants';
import { fadeInLeft, fadeInUp } from '../constants/motion';

export default function Contact() {
  return (
    <section id="contact" className="section-shell mt-10 px-5 py-10 sm:px-8 lg:px-10">
      <div className="text-center">
        <span className="section-tag">Contact</span>
        <h2 className="section-title mt-4">Let’s build something meaningful.</h2>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <motion.a
          {...fadeInLeft}
          href={`mailto:${CONTACT.email}`}
          className="glass-card rounded-2xl p-5 text-center transition hover:-translate-y-1 hover:border-cyan-400/40"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Email</p>
          <p className="mt-3 text-lg font-medium text-white">{CONTACT.email}</p>
        </motion.a>

        <motion.a
          {...fadeInUp}
          href={`tel:${CONTACT.phoneNo.replace(/\s+/g, '')}`}
          className="glass-card rounded-2xl p-5 text-center transition hover:-translate-y-1 hover:border-cyan-400/40"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Phone</p>
          <p className="mt-3 text-lg font-medium text-white">{CONTACT.phoneNo}</p>
        </motion.a>

        <motion.div
          {...fadeInUp}
          className="glass-card rounded-2xl p-5 text-center"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Location</p>
          <p className="mt-3 text-lg font-medium text-white">{CONTACT.address}</p>
        </motion.div>
      </div>
    </section>
  );
}
