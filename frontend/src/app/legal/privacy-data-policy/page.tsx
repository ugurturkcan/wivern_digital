'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';

const sections = [
  {
    id: 'introduction',
    title: '1. Introduction',
    content: `This Privacy & Data Policy explains how Wivern Digital ("the Guild", "we", "us", "our") collects, uses, discloses, and safeguards your personal information when you visit our website, engage our services, or communicate with us. This policy should be read alongside our GDPR Compliance statement and Terms of Service. We are committed to ensuring that your privacy is protected and that data is processed lawfully, fairly, and transparently.`,
  },
  {
    id: 'collection',
    title: '2. Information We Collect',
    content: `We collect information you provide directly: when you submit a commission request, we collect your name, contact details, project brief, and any reference materials you supply. When you communicate with us by email, we retain correspondence records. If you visit our website, our hosting and analytics infrastructure may collect standard server log data including IP address, browser type, referring URLs, and pages visited. We do not use invasive tracking technologies or sell data to third parties.`,
  },
  {
    id: 'cookies',
    title: '3. Cookies & Tracking',
    content: `Our website uses only essential cookies necessary for its operation. We do not deploy advertising cookies, cross-site tracking pixels, or social media trackers. Where analytics cookies are used, they are configured to anonymise IP addresses and are governed by data processing agreements that comply with GDPR. You may disable cookies through your browser settings, though this may affect certain website functions.`,
  },
  {
    id: 'sharing',
    title: '4. Data Sharing & Third Parties',
    content: `We do not sell, rent, or trade your personal data to third parties. We may share data with carefully selected service providers who assist us in delivering our services — for example, payment processors, cloud storage providers, and communication tools. All third-party providers are subject to data processing agreements and are required to handle your data in compliance with applicable data protection law. Where data is transferred internationally, we apply appropriate safeguards as described in our GDPR statement.`,
  },
  {
    id: 'likeness',
    title: '5. Likeness & Biometric Data',
    content: `Where clients submit images, video, voice recordings, or other materials containing the likeness of real individuals for the purpose of avatar formulation, these materials are treated as sensitive personal data. Such materials are: used exclusively for the commissioned project; not shared with any third parties outside the production team; not used to train Wivern Digital's AI models without explicit written consent; deleted or archived at the client's instruction upon project completion. Clients are responsible for ensuring they have all necessary rights and consents before submitting likeness data.`,
  },
  {
    id: 'children',
    title: '6. Children\'s Privacy',
    content: `Our services are not directed at individuals under the age of eighteen (18). We do not knowingly collect personal data from minors. If you believe that a minor has provided us with personal data without appropriate parental or guardian consent, please contact us immediately and we will take steps to delete that information.`,
  },
  {
    id: 'security',
    title: '7. Data Security Measures',
    content: `We implement industry-standard technical and organisational security measures to protect your personal data. These include encrypted data transmission (TLS), encrypted storage, access controls limiting data access to authorised personnel on a need-to-know basis, and regular security assessments. While we take all reasonable precautions, no method of transmission over the internet is entirely secure. In the event of a breach affecting your data, we will notify you and relevant authorities as required by law.`,
  },
  {
    id: 'your-rights',
    title: '8. Your Rights',
    content: `Depending on your jurisdiction, you may have the right to: access the personal data we hold about you; request correction of inaccurate data; request deletion of your data where it is no longer required; object to or restrict certain forms of processing; request a portable copy of your data; withdraw consent where processing is consent-based. To exercise any of these rights, contact us at commissions@wiverndigital.com. We aim to respond within one calendar month.`,
  },
  {
    id: 'updates',
    title: '9. Policy Updates',
    content: `We may update this Privacy & Data Policy from time to time to reflect changes in law, our services, or our data practices. Material changes will be communicated to active clients and posted on this page with a revised effective date. We encourage you to review this policy periodically. Your continued engagement with our services after a policy update constitutes acceptance of the revised terms.`,
  },
  {
    id: 'contact',
    title: '10. Contact & Complaints',
    content: `For any questions about this policy, to exercise your rights, or to raise a data protection concern, please contact us at commissions@wiverndigital.com. If you are not satisfied with our response, you have the right to lodge a complaint with your local data protection supervisory authority. In the EU, supervisory authority contact details are available at edpb.europa.eu.`,
  },
];

export default function PrivacyDataPolicyPage() {
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
              <span className="text-yellow-600 text-xs tracking-widest uppercase">Privacy & Data Policy</span>
            </div>
            <span className="section-label block mb-4">Legal Documentation</span>
            <h1 className="serif-font text-5xl lg:text-7xl text-white leading-none tracking-wide mb-6">
              Privacy & <span className="gradient-gold">Data Policy</span>
            </h1>
            <div className="w-px h-12 bg-gradient-to-b from-yellow-600 to-transparent mb-6" />
            <p className="text-gray-400 font-light leading-relaxed max-w-xl">
              Your data is entrusted to us. This policy explains how we collect, use, and protect it — with clarity and without compromise.
            </p>
            <p className="text-gray-600 text-xs tracking-widest uppercase mt-6">Last updated: May 2025 &mdash; Effective immediately</p>
          </motion.div>
        </section>

        {/* Principles strip */}
        <section className="py-12 bg-[#111111] border-b border-yellow-900/20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: '◈', label: 'No Data Sales', desc: 'We do not sell or rent your personal data to any third party, ever.' },
                { icon: '✦', label: 'Minimal Collection', desc: 'We collect only what is necessary for your commission and our operations.' },
                { icon: '⚖', label: 'Your Control', desc: 'You retain the right to access, correct, and delete your data at any time.' },
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
              <span className="section-label block mb-4">Your Privacy Matters</span>
              <h3 className="serif-font text-2xl text-white mb-4">Contact Us</h3>
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
