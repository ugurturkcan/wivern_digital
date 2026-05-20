'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ImprintPage() {
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
              <span className="text-yellow-600 text-xs tracking-widest uppercase">Imprint</span>
            </div>
            <span className="section-label block mb-4">Legal Notice</span>
            <h1 className="serif-font text-5xl lg:text-7xl text-white leading-none tracking-wide mb-6">
              Im<span className="gradient-gold">print</span>
            </h1>
            <div className="w-px h-12 bg-gradient-to-b from-yellow-600 to-transparent mb-6" />
            <p className="text-gray-400 font-light leading-relaxed max-w-xl">
              Legal disclosure and contact information for Wivern Digital, as required under applicable European Union regulations.
            </p>
          </motion.div>
        </section>

        {/* Content */}
        <section className="py-24 bg-[#0e0e0e]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

              {/* Entity */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-panel p-8"
              >
                <h2 className="serif-font text-lg text-white mb-6 tracking-wider">Responsible Entity</h2>
                <div className="space-y-3 text-sm font-light">
                  <div>
                    <span className="text-yellow-700 text-[10px] tracking-widest uppercase block mb-1">Trading Name</span>
                    <span className="text-gray-300">Wivern Digital</span>
                  </div>
                  <div>
                    <span className="text-yellow-700 text-[10px] tracking-widest uppercase block mb-1">Operating As</span>
                    <span className="text-gray-300">Guild of Avatarists</span>
                  </div>
                  <div>
                    <span className="text-yellow-700 text-[10px] tracking-widest uppercase block mb-1">Founded</span>
                    <span className="text-gray-300">2011</span>
                  </div>
                  <div>
                    <span className="text-yellow-700 text-[10px] tracking-widest uppercase block mb-1">Nature of Business</span>
                    <span className="text-gray-300">AI Avatar Production &amp; Digital Media Services</span>
                  </div>
                </div>
              </motion.div>

              {/* Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass-panel p-8"
              >
                <h2 className="serif-font text-lg text-white mb-6 tracking-wider">Contact Information</h2>
                <div className="space-y-3 text-sm font-light">
                  <div>
                    <span className="text-yellow-700 text-[10px] tracking-widest uppercase block mb-1">Founder &amp; Director</span>
                    <span className="text-gray-300">Jerome Goerke</span>
                  </div>
                  <div>
                    <span className="text-yellow-700 text-[10px] tracking-widest uppercase block mb-1">Commission Enquiries</span>
                    <a href="mailto:commissions@wiverndigital.com" className="text-yellow-600 hover:text-yellow-400 transition-colors">
                      commissions@wiverndigital.com
                    </a>
                  </div>
                  <div>
                    <span className="text-yellow-700 text-[10px] tracking-widest uppercase block mb-1">Applications</span>
                    <a href="mailto:applications@wiverndigital.com" className="text-yellow-600 hover:text-yellow-400 transition-colors">
                      applications@wiverndigital.com
                    </a>
                  </div>
                  <div>
                    <span className="text-yellow-700 text-[10px] tracking-widest uppercase block mb-1">Website</span>
                    <span className="text-gray-300">wiverndigital.com</span>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Liability & Content */}
            <div className="space-y-0">
              {[
                {
                  id: 'content-liability',
                  title: 'Liability for Content',
                  content: `The content of this website has been prepared with the greatest possible care. Wivern Digital accepts no liability for the accuracy, completeness, or topicality of the content provided. As a service provider, we are responsible for our own content on these pages in accordance with applicable law. We are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under general law remain unaffected.`,
                },
                {
                  id: 'links-liability',
                  title: 'Liability for Links',
                  content: `This website contains links to external websites over which Wivern Digital has no control. Therefore, we cannot accept any liability for the content of these external sites. The respective operators of the linked pages are responsible for their content. Linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognisable at the time of linking. Permanent monitoring of the linked pages is not reasonable without concrete indications of a violation.`,
                },
                {
                  id: 'copyright',
                  title: 'Copyright',
                  content: `All content and works on this website created by the site operators are subject to copyright. Duplication, processing, distribution, or any form of commercialisation of such material beyond the scope of copyright law shall require the prior written consent of its respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected.`,
                },
                {
                  id: 'ai-disclosure',
                  title: 'AI-Generated Content Disclosure',
                  content: `In accordance with our commitment to transparency, Wivern Digital discloses that avatar constructs, visual specimens, and certain illustrative assets displayed on this website are AI-generated. These assets are produced using the Guild's proprietary pipeline and are presented as examples of production capability. They do not represent real individuals unless explicitly stated and documented. All AI-generated content on this site is clearly produced for demonstration purposes.`,
                },
              ].map((section, i) => (
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

            {/* Associated entities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 glass-panel p-8"
            >
              <h2 className="serif-font text-lg text-white mb-6 tracking-wider">Associated Entities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <span className="text-yellow-700 text-[10px] tracking-widest uppercase block mb-2">Ecological Partner</span>
                  <p className="text-gray-300 text-sm font-light mb-1">greentech.training</p>
                  <p className="text-gray-500 text-xs font-light leading-relaxed">
                    Founded by Jerome Goerke. Provides global scholarships within the food, energy, and water nexus. Recipient of Wivern Digital's 15% Ecological Fund allocation.
                  </p>
                </div>
                <div>
                  <span className="text-yellow-700 text-[10px] tracking-widest uppercase block mb-2">Creative Origin</span>
                  <p className="text-gray-300 text-sm font-light mb-1">Addison's Tales</p>
                  <p className="text-gray-500 text-xs font-light leading-relaxed">
                    The original storytelling vehicle through which Wivern Digital was established. Award-winning interactive children's literary series founded in 2011.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
