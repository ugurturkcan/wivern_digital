'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';

const sections = [
  {
    id: 'overview',
    title: '1. Overview & Our Commitment',
    content: `Wivern Digital is committed to complying with the General Data Protection Regulation (GDPR) (EU) 2016/679 and all applicable data protection legislation in the jurisdictions in which we operate. This document outlines how we collect, process, store, and protect personal data in connection with our services and business operations. We are committed to transparency and to exercising the highest standards of data governance.`,
  },
  {
    id: 'controller',
    title: '2. Data Controller',
    content: `Wivern Digital acts as the Data Controller for personal data processed in connection with client commissions, business operations, and this website. If you have any questions regarding our data practices, please contact our designated data point of contact at: commissions@wiverndigital.com. We are registered in accordance with applicable EU regulations and can provide our registration details upon request.`,
  },
  {
    id: 'collected',
    title: '3. Data We Collect',
    content: `We collect the following categories of personal data: Identity Data (name, professional title, organisation); Contact Data (email address, telephone number, mailing address); Commission Data (project briefs, reference materials, feedback); Financial Data (billing address, payment records — note: we do not store full payment card details); Technical Data (IP address, browser type, device identifiers when visiting our website); Usage Data (interaction patterns with our digital properties); and, where relevant, Likeness Data (images, voice recordings, or biometric reference materials submitted for avatar formulation purposes).`,
  },
  {
    id: 'legal-basis',
    title: '4. Legal Basis for Processing',
    content: `We process personal data on the following legal bases: Contract Performance — processing necessary to fulfil commission agreements; Legitimate Interests — operational data processing necessary for our business functions, where not overridden by your rights; Legal Obligation — where processing is required to comply with applicable law; and Consent — where you have freely given specific, informed consent, which you may withdraw at any time without detriment.`,
  },
  {
    id: 'use',
    title: '5. How We Use Your Data',
    content: `Your data is used for: delivering commissioned services and communicating regarding your project; billing and payment processing; maintaining client records and correspondence; improving our service quality and pipeline methodology; complying with legal obligations; and detecting, investigating, and preventing fraudulent or harmful activity. We do not use your personal data for unsolicited marketing without explicit consent.`,
  },
  {
    id: 'retention',
    title: '6. Data Retention',
    content: `We retain personal data for as long as necessary to fulfil the purposes outlined in this policy, and in compliance with applicable legal, tax, and accounting requirements. Commission records are typically retained for seven (7) years following project completion. Website analytics data is retained for a maximum of twenty-six (26) months. Likeness data submitted for avatar formulation is deleted or securely archived at the client's direction upon project completion.`,
  },
  {
    id: 'rights',
    title: '7. Your Rights Under GDPR',
    content: `As a data subject, you have the following rights: the right to access your personal data; the right to rectification of inaccurate data; the right to erasure ("right to be forgotten") where data is no longer necessary; the right to restriction of processing in certain circumstances; the right to data portability; the right to object to processing based on legitimate interests; and rights in relation to automated decision-making. To exercise any of these rights, please contact us in writing. We will respond within one (1) calendar month.`,
  },
  {
    id: 'transfers',
    title: '8. International Data Transfers',
    content: `Where personal data is transferred outside the European Economic Area (EEA), we ensure appropriate safeguards are in place in accordance with GDPR requirements, including Standard Contractual Clauses approved by the European Commission. We will not transfer your data to jurisdictions that do not provide an adequate level of protection without your explicit consent or without ensuring appropriate contractual safeguards.`,
  },
  {
    id: 'security',
    title: '9. Data Security',
    content: `We implement appropriate technical and organisational measures to protect personal data against accidental loss, unauthorised access, disclosure, alteration, or destruction. These measures include encryption at rest and in transit, access controls, and regular security reviews. In the event of a data breach that is likely to result in a risk to your rights and freedoms, we will notify the relevant supervisory authority within seventy-two (72) hours and inform affected individuals without undue delay.`,
  },
  {
    id: 'complaints',
    title: '10. Supervisory Authority',
    content: `You have the right to lodge a complaint with a supervisory authority if you believe your personal data has been processed in a manner that violates applicable data protection law. The lead supervisory authority for Wivern Digital is the data protection authority in our country of registration. Contact details for EU data protection authorities are available at: edpb.europa.eu.`,
  },
];

export default function GDPRPage() {
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
              <span className="text-yellow-600 text-xs tracking-widest uppercase">GDPR</span>
            </div>
            <span className="section-label block mb-4">Legal Documentation</span>
            <h1 className="serif-font text-5xl lg:text-7xl text-white leading-none tracking-wide mb-6">
              GDPR <span className="gradient-gold">Compliance</span>
            </h1>
            <div className="w-px h-12 bg-gradient-to-b from-yellow-600 to-transparent mb-6" />
            <p className="text-gray-400 font-light leading-relaxed max-w-xl">
              Our commitment to your data rights under the General Data Protection Regulation. Transparency is not a compliance exercise — it is a foundational Guild principle.
            </p>
            <p className="text-gray-600 text-xs tracking-widest uppercase mt-6">Last updated: May 2025 &mdash; Regulation (EU) 2016/679</p>
          </motion.div>
        </section>

        {/* Rights summary strip */}
        <section className="py-12 bg-[#111111] border-b border-yellow-900/20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="serif-font text-lg text-white mb-6 tracking-wider text-center">Your Rights at a Glance</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Access', 'Rectification', 'Erasure', 'Portability', 'Restriction', 'Objection', 'No Automation', 'Complaint'].map((right) => (
                <div key={right} className="glass-panel p-4 text-center">
                  <span className="text-yellow-600 text-[10px] tracking-widest uppercase font-semibold">{right}</span>
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
              <p className="text-gray-300 font-light leading-relaxed text-sm">
                The Guild of Avatarists handles personal data with the same structural rigour it applies to every avatar formulation. Your data is not a commodity — it is entrusted to us for a specific purpose and governed accordingly.
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 glass-panel p-10 text-center"
            >
              <span className="section-label block mb-4">Exercise Your Rights</span>
              <h3 className="serif-font text-2xl text-white mb-4">Contact Our Data Team</h3>
              <div className="gold-line mx-auto mb-6" />
              <p className="text-gray-400 text-sm font-light mb-8 max-w-md mx-auto">
                To exercise any of your GDPR rights or to raise a data protection concern, contact us directly. We will respond within one calendar month.
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
