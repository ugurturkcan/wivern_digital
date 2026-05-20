'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';

const sections = [
  {
    id: 'agreement',
    title: '1. Agreement to Terms',
    content: `By accessing or using the services of Wivern Digital ("the Guild", "we", "us", or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms in their entirety, you may not access or use our services. These terms constitute a legally binding agreement between you and Wivern Digital, governing your use of our avatar creation, AI production, and associated digital services.`,
  },
  {
    id: 'services',
    title: '2. Description of Services',
    content: `Wivern Digital provides bespoke AI avatar creation services, including but not limited to: structural analysis and parameter setting, generative character formulation, audio-to-labial synchronization, temporal video rendering, and delivery of final digital constructs. All services are delivered on a commission basis following a formal requisition and approval process. We reserve the right to decline any commission at our sole discretion.`,
  },
  {
    id: 'ip',
    title: '3. Intellectual Property Rights',
    content: `Upon full payment of all agreed fees, Wivern Digital grants the client a perpetual, non-exclusive, worldwide licence to use the delivered avatar constructs for the purposes stipulated in the commission agreement. Wivern Digital retains all underlying intellectual property, including generative models, pipeline methodologies, prompt architectures, and proprietary assembly processes. Clients may not reverse-engineer, sublicence, or transfer ownership of the core technology. Portfolio and reference rights are retained by Wivern Digital unless explicitly waived in writing.`,
  },
  {
    id: 'payment',
    title: '4. Payment & Ecology Fund',
    content: `All services are invoiced according to the commission tier agreed at the time of requisition. Fifteen percent (15%) of net revenue (post-VAT) from every commission is automatically allocated to the Wivern Digital Ecological Impact and Innovation Fund. This allocation is not an optional surcharge — it is a foundational component of our pricing structure. Invoices will clearly delineate this allocation. Payment is due within fourteen (14) days of invoice issuance unless otherwise agreed in writing.`,
  },
  {
    id: 'conduct',
    title: '5. Acceptable Use',
    content: `Clients agree not to use Wivern Digital's services to create content that: depicts real individuals without documented consent; constitutes defamatory, harassing, or abusive material; violates any applicable law or regulation; is used for disinformation, political manipulation, or non-consensual synthetic media ("deepfakes"). Wivern Digital reserves the right to terminate any project and retain partial payment if, during production, the intended use is found to violate this clause.`,
  },
  {
    id: 'confidentiality',
    title: '6. Confidentiality',
    content: `Both parties agree to maintain the confidentiality of all proprietary information exchanged during the commission process. Wivern Digital will not disclose client briefs, source materials, or project specifications to third parties without prior written consent. Clients agree not to disclose proprietary elements of the Wivern Digital pipeline, methodology, or internal guild protocols.`,
  },
  {
    id: 'liability',
    title: '7. Limitation of Liability',
    content: `To the fullest extent permitted by applicable law, Wivern Digital shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of delivered assets. Our total liability shall not exceed the total fees paid for the specific commission giving rise to the claim. We make no warranties, express or implied, regarding the fitness of delivered assets for any particular commercial purpose.`,
  },
  {
    id: 'termination',
    title: '8. Termination',
    content: `Either party may terminate a commission agreement with fourteen (14) days' written notice. In the event of termination, fees for work completed to the date of termination are non-refundable. If termination is initiated by Wivern Digital due to a breach of these terms by the client, all fees paid are forfeited. If termination is initiated by Wivern Digital without cause, a pro-rata refund of unused fees will be issued within thirty (30) days.`,
  },
  {
    id: 'governing',
    title: '9. Governing Law',
    content: `These Terms of Service shall be governed by and construed in accordance with the laws of the European Union and the jurisdiction in which Wivern Digital is registered. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts of that jurisdiction. If any provision of these terms is found to be unenforceable, the remaining provisions shall remain in full force and effect.`,
  },
  {
    id: 'changes',
    title: '10. Changes to Terms',
    content: `Wivern Digital reserves the right to modify these Terms of Service at any time. Material changes will be communicated to active clients via email or posted notice with a minimum of thirty (30) days' notice before taking effect. Continued use of our services following any modification constitutes acceptance of the revised terms.`,
  },
];

export default function TermsOfServicePage() {
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
              <span className="text-yellow-600 text-xs tracking-widest uppercase">Terms of Service</span>
            </div>
            <span className="section-label block mb-4">Legal Documentation</span>
            <h1 className="serif-font text-5xl lg:text-7xl text-white leading-none tracking-wide mb-6">
              Terms of <span className="gradient-gold">Service</span>
            </h1>
            <div className="w-px h-12 bg-gradient-to-b from-yellow-600 to-transparent mb-6" />
            <p className="text-gray-400 font-light leading-relaxed max-w-xl">
              These terms govern your engagement with Wivern Digital and the Guild of Avatarists. Please read them carefully before commissioning any work.
            </p>
            <p className="text-gray-600 text-xs tracking-widest uppercase mt-6">Last updated: May 2025 &mdash; Effective immediately</p>
          </motion.div>
        </section>

        {/* Content */}
        <section className="py-24 bg-[#0e0e0e]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">

            {/* Intro callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-panel p-8 mb-16 border-l-2 border-yellow-700"
            >
              <p className="text-gray-300 font-light leading-relaxed text-sm">
                Wivern Digital operates as a post-capitalist guild. These terms reflect our commitment to transparency, equitable collaboration, and ethical AI creation. If you have questions about any clause, we encourage you to reach out before commissioning.
              </p>
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

            {/* Contact block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 glass-panel p-10 text-center"
            >
              <span className="section-label block mb-4">Questions?</span>
              <h3 className="serif-font text-2xl text-white mb-4">Reach the Guild</h3>
              <div className="gold-line mx-auto mb-6" />
              <p className="text-gray-400 text-sm font-light mb-8 max-w-md mx-auto">
                For any questions regarding these terms or our commission process, contact us directly.
              </p>
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
