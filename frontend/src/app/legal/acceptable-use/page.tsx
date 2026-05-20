'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';

const sections = [
  {
    id: 'purpose',
    title: '1. Purpose of This Policy',
    content: `This Acceptable Use Policy ("AUP") defines the standards of conduct required of all clients and collaborators engaging with Wivern Digital's services. It exists to protect the integrity of the Guild, our contributors, third parties, and the broader digital environment. Violation of this policy may result in immediate termination of services, forfeiture of fees, and reporting to relevant authorities where required by law.`,
  },
  {
    id: 'permitted',
    title: '2. Permitted Uses',
    content: `Clients may commission Wivern Digital to create AI avatar constructs for: legitimate commercial and personal branding purposes; entertainment, storytelling, and creative projects; educational content and instructional media; internal communications and corporate presentations; marketing and social media campaigns where the synthetic nature of the content is disclosed. All permitted uses must comply with applicable laws and our ethical standards as outlined in this document.`,
  },
  {
    id: 'prohibited',
    title: '3. Prohibited Uses',
    content: `The following uses are strictly prohibited. Wivern Digital will not create, and clients may not use our deliverables for: non-consensual synthetic media depicting real individuals without documented consent; disinformation campaigns, political propaganda, or electoral manipulation; content designed to harass, intimidate, or harm specific individuals or groups; impersonation of public figures for deceptive purposes; any content that violates applicable laws, including but not limited to those pertaining to defamation, privacy, intellectual property, and hate speech; adult or sexually explicit content; content depicting minors in any inappropriate context; training datasets for competing AI systems without explicit written agreement.`,
  },
  {
    id: 'consent',
    title: '4. Consent & Likeness Rights',
    content: `If a commissioned avatar is based on or intended to represent a real, living individual — including the client themselves — Wivern Digital requires documented proof of informed consent before commencing production. This consent must specify the scope, duration, and permitted uses of the resulting avatar. Clients are solely responsible for obtaining and maintaining all necessary consents from third parties and agree to indemnify Wivern Digital against any claims arising from insufficient or invalid consent.`,
  },
  {
    id: 'disclosure',
    title: '5. Disclosure Obligations',
    content: `In jurisdictions where AI-generated content must be labelled or disclosed, clients are solely responsible for ensuring compliance with applicable disclosure requirements. Wivern Digital strongly recommends the proactive disclosure of synthetic media origin in all public-facing contexts, regardless of local legal requirements. This is consistent with our Guild's ethical framework and our commitment to a transparent, trustworthy digital environment.`,
  },
  {
    id: 'enforcement',
    title: '6. Enforcement & Consequences',
    content: `Wivern Digital reserves the right to monitor the use of delivered assets to the extent reasonably practicable. If we become aware of a violation of this AUP, we may: suspend or terminate the client relationship immediately; refuse future commissions from the client; issue a cease-and-desist request; seek injunctive relief and damages; report the matter to relevant regulatory or law enforcement authorities. No refunds will be issued in the event of termination due to an AUP violation.`,
  },
  {
    id: 'reporting',
    title: '7. Reporting Violations',
    content: `If you become aware of any use of Wivern Digital's services or deliverables that may constitute a violation of this policy, we encourage you to report it to us promptly at commissions@wiverndigital.com. We take all reports seriously and will investigate in accordance with our internal protocols.`,
  },
  {
    id: 'amendments',
    title: '8. Amendments',
    content: `This Acceptable Use Policy may be updated periodically to reflect changes in law, technology, or our operational standards. Active clients will be notified of material changes via email with a minimum of fourteen (14) days' notice. Continued use of our services constitutes acceptance of the revised policy.`,
  },
];

export default function AcceptableUsePage() {
  return (
    <>
      <Nav />
      <main className="selection:bg-yellow-900/40 selection:text-white">

        {/* Hero */}
        <section className="relative pt-40 pb-24 bg-[#111111] border-b border-yellow-900/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/80 to-[#111111]" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Link href="/" className="text-gray-500 hover:text-yellow-600 text-xs tracking-widest uppercase transition-colors">Home</Link>
              <span className="text-yellow-900">◈</span>
              <span className="text-gray-600 text-xs tracking-widest uppercase">Legal</span>
              <span className="text-yellow-900">◈</span>
              <span className="text-yellow-600 text-xs tracking-widest uppercase">Acceptable Use</span>
            </div>
            <span className="section-label block mb-4">Legal Documentation</span>
            <h1 className="serif-font text-5xl lg:text-7xl text-white leading-none tracking-wide mb-6">
              Acceptable <span className="gradient-gold">Use</span>
            </h1>
            <div className="w-px h-12 bg-gradient-to-b from-yellow-600 to-transparent mb-6" />
            <p className="text-gray-400 font-light leading-relaxed max-w-xl">
              Our Acceptable Use Policy defines the ethical boundaries within which Wivern Digital's services may be used. These standards reflect the Guild's commitment to responsible AI creation.
            </p>
            <p className="text-gray-600 text-xs tracking-widest uppercase mt-6">Last updated: May 2025 &mdash; Effective immediately</p>
          </motion.div>
        </section>

        {/* Core values banner */}
        <section className="py-12 bg-[#111111] border-b border-yellow-900/20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: '⚖', label: 'Ethical Creation', desc: 'Every avatar is created within a framework of consent and responsibility.' },
                { icon: '◈', label: 'Transparent Intent', desc: 'Clients must disclose the intended use of all commissioned assets.' },
                { icon: '✦', label: 'No Harm Principle', desc: 'We will not produce content that harms individuals or communities.' },
              ].map((item) => (
                <div key={item.label} className="glass-panel p-6 text-center">
                  <div className="text-yellow-600 text-2xl mb-3">{item.icon}</div>
                  <h3 className="serif-font text-white text-sm tracking-wider mb-2">{item.label}</h3>
                  <p className="text-gray-500 text-xs font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-24 bg-[#0e0e0e]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="space-y-0">
              {sections.map((section, i) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 * i }}
                  id={section.id}
                  className="py-12 border-b border-yellow-900/10 last:border-b-0"
                >
                  <h2 className="serif-font text-xl text-white mb-4 tracking-wider">{section.title}</h2>
                  <p className="text-gray-400 font-light leading-relaxed text-sm">{section.content}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 glass-panel p-10 text-center"
            >
              <span className="section-label block mb-4">Questions?</span>
              <h3 className="serif-font text-2xl text-white mb-4">Reach the Guild</h3>
              <div className="gold-line mx-auto mb-6" />
              <a
                href="mailto:commissions@wiverndigital.com"
                className="inline-block text-[11px] font-medium tracking-[0.2em] uppercase border border-yellow-700 text-yellow-500 px-10 py-3 hover:bg-yellow-900/20 transition-all duration-300"
              >
                commissions@wiverndigital.com
              </a>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
