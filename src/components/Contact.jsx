import React from 'react';
import { CONTACT } from '../constants';
import { motion } from 'motion/react';
import { fadeInLeft, fadeInUp } from '../constants/motion';

export default function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1 {...fadeInUp} className="my-10 text-center text-4xl">
        Contact
      </motion.h1>
      <div className="text-center tracking-tightet">
        <motion.p {...fadeInLeft} className="my-4">
          {CONTACT.address}
        </motion.p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a
          href="https://myaccount.google.com/?utm_source=account-marketing-page&utm_medium=go-to-account-button&gar=WzEzMywiMjM2NzM2Il0&pli=1&ihs=1"
          className="my-4"
        >
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
}
