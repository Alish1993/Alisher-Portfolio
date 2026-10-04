import React from 'react';
import logo from '../assets/As.png';
import { FaGithub, FaInstagram, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';

const socialLinks = [
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/alisher-sarin-4b5096338/', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/Alish1993', label: 'GitHub' },
  { icon: FaTelegramPlane, href: 'https://t.me/alisher_sarin', label: 'Telegram' },
  { icon: FaInstagram, href: 'https://www.instagram.com/sarinalisher/', label: 'Instagram' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="Alisher Sarin home">
          <img src={logo} alt="Alisher Sarin logo" className="h-12 w-12 rounded-full border border-cyan-400/40 bg-slate-900/80 p-1" />
          <div>
            <p className="text-lg font-semibold tracking-tight text-white">Alisher Sarin</p>
            <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">Full Stack</p>
          </div>
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          <a href="#about" className="transition hover:text-cyan-300">About</a>
          <a href="#experience" className="transition hover:text-cyan-300">Experience</a>
          <a href="#projects" className="transition hover:text-cyan-300">Projects</a>
          <a href="#contact" className="transition hover:text-cyan-300">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-400/40 hover:text-cyan-300"
            >
              <Icon />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
