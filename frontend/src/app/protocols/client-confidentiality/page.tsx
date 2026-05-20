'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';

const sections = [
  {
    id: 'principle',
    title: 'Our Founding Principle',
    content: `The Guild of Avatarists operates on an unwavering commitment to client confidentiality. Every commission is treated as a matter of professional privilege. The details of your project — your identity, your creative brief, your source materials, your intended application — are known only to those directly responsible for delivering your commission. This is not merely a legal obligation; it is an ethical covenant embedded in the Guild's operational DNA.`,
  },
  {
    id: 'scope',
    title: 'Scope of Confidentiality',
    content: `Confidentiality applies to all information exchanged during and after the commission process, including but not limited to: the identity of the commissioning party and any individuals represented in the avatar construct; the creative brief, narrative intent, and strategic context of the commission; all reference materials, images, recordings, and likeness data submitted; the specific prompt architectures, seed configurations, and pipeline parameters developed for your project; any unpublished works, scripts, or unreleased content shared in confidence; and the financial details of the commission agreement.`,
  },
  {
    id: 'internal',
    title: 'Internal Access Controls',
    content: `Within the Guild, access to commission materials is governed by the principle of least privilege. Only Guild members directly assigned to your project — and the Master-in-Chief for quality oversight — are granted access to your project files. Internal communication regarding commissions occurs exclusively through encrypted, access-controlled channels. All Guild members are contractually bound by confidentiality obligations that survive the termination of their engagement with Wivern Digital.`,
  },
  {
    id: 'third-party',
    title: 'Third-Party Disclosures',
    content: `Wivern Digital does not disclose client information to third parties except in the following limited circumstances: where required by applicable law, court order, or regulatory authority; where the client has given explicit written consent; where disclosure is necessary to prevent imminent harm or illegal activity. In all cases where legally permissible, we will notify the client of any legally compelled disclosure before it occurs.`,
  },
  {
    id: 'portfolio',
    title: 'Portfolio & Reference Rights',
    content: `Unless explicitly waived in writing by the client prior to project commencement, Wivern Digital reserves the right to include anonymised or attributable examples of completed work in its portfolio for the purpose of demonstrating capability to prospective clients. Where a client requires complete confidentiality — including exclusion from our portfolio — this must be agreed in writing as part of the commission agreement and may be subject to an additional fee. Portfolio use will never disclose confidential brief details, proprietary source materials, or information that could identify protected individuals.`,
  },
  {
    id: 'duration',
    title: 'Duration of Obligation',
    content: `Our confidentiality obligations survive the conclusion of any commission agreement and remain in force indefinitely, unless the information in question: becomes publicly available through no action of Wivern Digital; is independently developed by Wivern Digital without reference to the client's confidential information; or is explicitly released by the client in writing.`,
  },
  {
    id: 'breach',
    title: 'Response to Breach',
    content: `In the unlikely event of an unauthorised disclosure of client information, Wivern Digital will: notify the affected client without undue delay; take immediate steps to contain and mitigate the breach; investigate the cause and implement corrective measures; comply with all applicable data breach notification obligations under GDPR and relevant law; and cooperate fully with the client in addressing any consequences.`,
  },
  {
    id: 'contact',
    title: 'Raising Concerns',
    content: `If you have any concerns regarding the handling of your confidential information, or if you wish to discuss confidentiality arrangements specific to your commission, we encourage you to contact us directly before, during, or after your project. Your trust is the foundation of every Guild engagement.`,
  },
];

export default function ClientConfidentialityPage() {
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
              <span className="text-gray-600 text-xs tracking-widest uppercase">Protocols</span>
              <span className="text-yellow-900">◈</span>
              <span className="text-yellow-600 text-xs tracking-widest uppercase">Client Confidentiality</span>
            </div>
            <span className="section-label block mb-4">Guild Protocols</span>
            <h1 className="serif-font text-5xl lg:text-7xl text-white leading-none tracking-wide mb-6">
              Client <span className="gradient-gold">Confidentiality</span>
            </h1>
            <div className="w-px h-12 bg-gradient-to-b from-yellow-600 to-transparent mb-6" />
            <p className="text-gray-400 font-light leading-relaxed max-w-xl">
              The Guild of Avatarists treats every commission as a matter of professional privilege. What is created within the Guild remains within the Guild — unless you choose otherwise.
            </p>
          </motion.div>
        </section>

        {/* Commitments strip */}
        <section className="py-12 bg-[#111111] border-b border-yellow-900/20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: '◈', label: 'Guild Oath', desc: 'Every Guild member is bound by confidentiality obligations that survive their engagement.' },
                { icon: '✦', label: 'Least Privilege', desc: 'Only those directly working on your commission have access to your project materials.' },
                { icon: '⚖', label: 'Perpetual Obligation', desc: 'Our confidentiality commitment does not expire when your project does.' },
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-panel p-8 mb-16 border-l-2 border-yellow-700"
            >
              <p className="text-gray-300 font-light leading-relaxed text-sm italic serif-font text-base">
                &ldquo;The construct we build for you is yours. The process by which we build it is ours. Neither leaves the Guild without your permission.&rdquo;
              </p>
              <p className="text-gray-600 text-xs tracking-widest uppercase mt-4">Guild Confidentiality Covenant</p>
            </motion.div>

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
              <span className="section-label block mb-4">Questions About Your Project?</span>
              <h3 className="serif-font text-2xl text-white mb-4">Speak With the Guild</h3>
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
