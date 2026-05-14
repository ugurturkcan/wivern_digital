'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/', label: 'The Shop' },
  { href: '/craft', label: 'The Guild' },
  { href: '/commissions', label: 'Commission' },
  { href: '/master', label: 'Master-in-Chief' },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-panel shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 rounded-full border border-yellow-700 flex items-center justify-center bg-black/60">
              <span className="serif-font text-yellow-600 text-lg">W</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="serif-font text-base tracking-widest text-white uppercase">Wivern Digital</span>
              <span className="text-[10px] tracking-[0.2em] gold-accent uppercase">Guild of Avatarists</span>
            </div>
          </Link>

          {/* Center Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-[11px] font-medium tracking-[0.15em] uppercase transition-colors duration-200 pb-0.5 ${
                    active
                      ? 'text-yellow-500 border-b border-yellow-600'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="mailto:commissions@wiverndigital.com"
              className="text-[11px] font-medium tracking-[0.15em] uppercase border border-yellow-700 text-yellow-500 px-6 py-2.5 hover:bg-yellow-700 hover:text-black transition-all duration-300"
            >
              Submit Requisition
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
