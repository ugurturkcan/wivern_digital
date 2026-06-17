import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-yellow-900/20 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full border-[1.5px] border-[#c5a059] flex items-center justify-center bg-[#f4f1ea] shadow-[0_0_15px_rgba(197,160,89,0.3)] shrink-0 overflow-hidden relative">
                <video 
                  src="/wivern_animated_logo_v2.mp4" 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  className="w-full h-full object-cover scale-[1.15] drop-shadow-sm pointer-events-none" 
                />
              </div>
              <span className="serif-font text-lg tracking-widest text-white uppercase">Wivern Digital</span>
            </div>
            <p className="text-gray-500 text-xs tracking-wider uppercase font-light mb-4">Guild of Avatarists &bull; Est. 2011</p>
            <p className="text-gray-600 text-sm font-light leading-relaxed max-w-xs mb-8">
              Precision engineering of bespoke AI avatars. Ancient principles. Modern computation.
            </p>
          </div>

          {/* Legal */}
          <div>
            <h4 className="section-label mb-6">Legal</h4>
            <ul className="space-y-3">
              {[
                { href: '/legal/terms-of-service', label: 'Terms of Service' },
                { href: '/legal/acceptable-use', label: 'Acceptable Use' },
                { href: '/legal/gdpr', label: 'GDPR' },
                { href: '/legal/privacy-data-policy', label: 'Privacy & Data Policy' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-gray-500 hover:text-yellow-600 text-sm font-light transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Protocols */}
          <div>
            <h4 className="section-label mb-6">Protocols</h4>
            <ul className="space-y-3">
              {[
                { href: '/protocols/client-confidentiality', label: 'Client Confidentiality' },
                { href: '/protocols/creation-standards', label: 'Creation Standards' },
                { href: '/our-story', label: 'Our Story' },
                { href: '/imprint', label: 'Imprint' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-gray-500 hover:text-yellow-600 text-sm font-light transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <hr className="gold-rule mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-light tracking-wider uppercase">
          <span>Sector 4R, Ward 2330 &mdash; The Manor Estate &mdash; Access by documented appointment</span>
          <span>&copy; 2011 Wivern Digital. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
