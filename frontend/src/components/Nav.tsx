'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/', label: 'The Shop' },
  { href: '/craft', label: 'The Guild' },
  { href: '/commissions', label: 'Commission' },
  { href: '/master', label: 'Ecology Fund & Data' },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen ? 'glass-panel shadow-2xl' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
              <div className="w-12 h-12 rounded-full border border-yellow-600/50 flex items-center justify-center bg-[#f4f1ea] shadow-[0_0_15px_rgba(202,138,4,0.3)] shrink-0 overflow-hidden group-hover:border-yellow-500 transition-colors duration-300">
                <Image src="/wivern_logo_hq.png" alt="Wivern Digital Logo" width={48} height={48} className="w-full h-full object-cover scale-110 drop-shadow-sm" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="serif-font text-base tracking-widest text-white uppercase">Wivern Digital</span>
                <span className="text-[10px] tracking-[0.2em] gold-accent uppercase">Guild of Avatarists</span>
              </div>
            </Link>

            {/* Desktop links */}
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

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                href="mailto:commissions@wiverndigital.com"
                className="text-[11px] font-medium tracking-[0.15em] uppercase border border-yellow-700 text-yellow-500 px-6 py-2.5 hover:bg-yellow-700 hover:text-black transition-all duration-300"
              >
                Request Avatar
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 group"
            >
              <span className={`block w-6 h-px bg-yellow-600 transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block w-6 h-px bg-yellow-600 transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block w-6 h-px bg-yellow-600 transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#111111]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-10 transition-all duration-500 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Nav links */}
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`serif-font text-2xl tracking-widest uppercase transition-colors duration-200 ${
                  active ? 'text-yellow-500' : 'text-white hover:text-yellow-400'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Gold divider */}
        <div className="w-12 h-px bg-yellow-700" />

        {/* Mobile CTA */}
        <Link
          href="mailto:commissions@wiverndigital.com"
          className="text-[11px] font-medium tracking-[0.2em] uppercase border border-yellow-700 text-yellow-500 px-10 py-4 hover:bg-yellow-700 hover:text-black transition-all duration-300"
        >
          Request Avatar
        </Link>

        <p className="text-gray-600 text-[10px] tracking-[0.2em] uppercase">Guild of Avatarists · Est. 2011</p>
      </div>
    </>
  );
}
