'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function OurStoryPage() {
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
              <span className="text-yellow-600 text-xs tracking-widest uppercase">Our Story</span>
            </div>
            <span className="section-label block mb-4">Est. 2011</span>
            <h1 className="serif-font text-5xl lg:text-7xl text-white leading-none tracking-wide mb-6">
              Our <span className="gradient-gold">Story</span>
            </h1>
            <div className="w-px h-12 bg-gradient-to-b from-yellow-600 to-transparent mb-6" />
            <p className="text-gray-400 font-light leading-relaxed max-w-xl">
              From award-winning children's storytelling to AI-powered avatar production — a creative journey spanning more than a decade.
            </p>
          </motion.div>
        </section>

        {/* Chapter 1 — Origins */}
        <section className="py-24 bg-[#0e0e0e]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="serif-font text-yellow-900/60 text-5xl leading-none">01</span>
                <div>
                  <span className="section-label block">Origins</span>
                  <h2 className="serif-font text-3xl text-white tracking-wide">Founded in 2011</h2>
                </div>
              </div>
              <div className="gold-line mb-8" />
              <p className="text-gray-400 font-light leading-relaxed text-sm mb-6">
                Founded in 2011, Wivern Digital began as a creative vehicle dedicated to transmedia storytelling and digital innovation. Early work as a digital publishing house centered on <em className="text-gray-300">Addison's Tales</em>, a collection of interactive children's stories crafted by storytelling founder Jerome Goerke that blended music, animation, and narrative depth in the tradition of classic literary world-building.
              </p>
              <p className="text-gray-400 font-light leading-relaxed text-sm">
                In 2015, the first tale <em className="text-gray-300">"Tom Thorneval"</em> was released with songs and animation, winning acclaim as a Moonbeam Children's Book prize medal recipient and Digital Gold in the Benjamin Franklin Independent Publisher awards. Strong reviews from readers followed, with Kirkus even comparing its central character's dream-making to Roald Dahl's BFG!
              </p>
            </motion.div>

            {/* Awards strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
            >
              {[
                { award: 'Moonbeam Children\'s Book Award', detail: 'Prize Medal Recipient', year: '2015' },
                { award: 'Benjamin Franklin Independent Publisher', detail: 'Digital Gold Award', year: '2015' },
                { award: 'Kirkus Reviews', detail: '"Compares to Roald Dahl\'s BFG"', year: '2015' },
              ].map((item) => (
                <div key={item.award} className="glass-panel p-6 text-center card-hover">
                  <span className="text-yellow-700 text-[10px] tracking-widest uppercase block mb-3">{item.year}</span>
                  <h3 className="serif-font text-white text-sm tracking-wider mb-2 leading-snug">{item.award}</h3>
                  <p className="text-yellow-600 text-[10px] tracking-wider uppercase">{item.detail}</p>
                </div>
              ))}
            </motion.div>

            {/* Divider */}
            <div className="flex items-center gap-6 mb-20">
              <div className="flex-1 h-px bg-yellow-900/20" />
              <span className="text-yellow-700 text-lg">◈</span>
              <div className="flex-1 h-px bg-yellow-900/20" />
            </div>

            {/* Chapter 2 — Today */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="serif-font text-yellow-900/60 text-5xl leading-none">02</span>
                <div>
                  <span className="section-label block">Present Day</span>
                  <h2 className="serif-font text-3xl text-white tracking-wide">A Highly Augmented Studio</h2>
                </div>
              </div>
              <div className="gold-line mb-8" />
              <p className="text-gray-400 font-light leading-relaxed text-sm mb-6">
                Today, Wivern operates as a highly augmented production studio that replicates traditional animation and film techniques through AI technology and large language models. This allows us to rapidly produce short, high-quality avatar-led sequences, helping companies and individuals build a new, engaging environment on the web — a "dreamscape" where human intelligence, creativity and play converge.
              </p>
            </motion.div>

            {/* Dreamscape callout */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-panel p-10 mb-20 text-center mystic-glow"
            >
              <span className="text-yellow-700 text-2xl block mb-4">✦</span>
              <blockquote className="serif-font text-2xl lg:text-3xl text-white italic leading-snug mb-6">
                &ldquo;A dreamscape where human intelligence, creativity and play converge.&rdquo;
              </blockquote>
              <div className="gold-line mx-auto" />
            </motion.div>

            {/* Divider */}
            <div className="flex items-center gap-6 mb-20">
              <div className="flex-1 h-px bg-yellow-900/20" />
              <span className="text-yellow-700 text-lg">◈</span>
              <div className="flex-1 h-px bg-yellow-900/20" />
            </div>

            {/* Chapter 3 — Ethics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="serif-font text-yellow-900/60 text-5xl leading-none">03</span>
                <div>
                  <span className="section-label block">Responsibility</span>
                  <h2 className="serif-font text-3xl text-white tracking-wide">Ethical & Ecological Commitment</h2>
                </div>
              </div>
              <div className="gold-line mb-8" />
              <p className="text-gray-400 font-light leading-relaxed text-sm mb-6">
                We acknowledge that this technological offering carries an ecological cost. Consequently, we have permanently coupled our creative production with the ethical and ecological principles of <a href="https://greentech.training" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-400 transition-colors">greentech.training</a>. Our operations are governed by a transparent, post-capitalist system that is intentionally decoupled from stock market incentives.
              </p>
              <p className="text-gray-400 font-light leading-relaxed text-sm mb-6">
                Every project is structured to ensure that 15% of our net revenue is reinvested into the Ecological Fund, which provides scholarships for global training within the food, energy, and water nexus and finances community-led restoration projects at our server sites.
              </p>
              <p className="text-gray-400 font-light leading-relaxed text-sm">
                Wivern Digital exists as a service for clients and their audiences, delivering entertainment in an ethical, democratic, and restorative manner.
              </p>
            </motion.div>

            {/* Three pillars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
            >
              {[
                { icon: '◈', label: 'Ethical', desc: 'Every commission operates within a framework of informed consent and social responsibility.' },
                { icon: '✦', label: 'Democratic', desc: 'Revenue is shared equitably among contributors in a post-capitalist operational model.' },
                { icon: '⚖', label: 'Restorative', desc: '15% of net revenue is permanently allocated to ecological scholarship and restoration.' },
              ].map((item) => (
                <div key={item.label} className="glass-panel p-6 text-center card-hover">
                  <div className="text-yellow-600 text-2xl mb-3">{item.icon}</div>
                  <h3 className="serif-font text-white text-sm tracking-wider mb-2">{item.label}</h3>
                  <p className="text-gray-500 text-xs font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-10 text-center"
            >
              <span className="section-label block mb-4">Continue the Story</span>
              <h3 className="serif-font text-2xl text-white mb-4">Commission Your Avatar</h3>
              <div className="gold-line mx-auto mb-6" />
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/commissions"
                  className="inline-block text-[11px] font-medium tracking-[0.2em] uppercase bg-yellow-700 text-black px-10 py-3 hover:bg-yellow-500 transition-all duration-300"
                >
                  View Tariffs
                </Link>
                <Link
                  href="/master"
                  className="inline-block text-[11px] font-medium tracking-[0.2em] uppercase border border-yellow-700 text-yellow-500 px-10 py-3 hover:bg-yellow-900/20 transition-all duration-300"
                >
                  Ecology Fund + Data
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
