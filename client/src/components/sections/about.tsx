import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Who is <span className="gradient-text">Aurorix</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are AI entrepreneurs with huge ideas and potential, building the future of intelligent business solutions.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold font-poppins mb-4 flex items-center">
                <svg className="w-6 h-6 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z" clipRule="evenodd" />
                </svg>
                Our Mission
              </h3>
              <p className="text-muted-foreground mb-4">
                Aurorix is building a modular AI ecosystem that solves real-world problems across critical industries. 
                We believe artificial intelligence should be accessible, practical, and transformative.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="bg-primary w-2 h-2 rounded-full mr-3"></div>
                  <span className="text-sm">Modular AI solutions for different industries</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-secondary w-2 h-2 rounded-full mr-3"></div>
                  <span className="text-sm">Focus on real-world business problems</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-accent w-2 h-2 rounded-full mr-3"></div>
                  <span className="text-sm">Innovative approaches to AI implementation</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold font-poppins mb-4 flex items-center">
                <svg className="w-6 h-6 text-secondary mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Our Team
              </h3>
              <p className="text-muted-foreground mb-4">
                We are young AI entrepreneurs driven by huge ideas and unlimited potential. 
                Our team combines passion, innovation, and deep expertise in artificial intelligence.
              </p>
              <div className="bg-secondary/10 rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-secondary">Focus:</span> Creating intelligent solutions that businesses actually need and can implement effectively.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20 rounded-2xl p-12 max-w-5xl mx-auto border-2 border-primary/30 shadow-2xl shadow-primary/20">
            <div className="mb-8">
              <h4 className="text-3xl lg:text-4xl font-bold font-poppins mb-6 gradient-text">
                The Aurorix Ecosystem Vision
              </h4>
              <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mx-auto mb-6"></div>
              <p className="text-xl text-foreground font-medium mb-4">
                Like the mystical Aurora Borealis that dances across northern skies, we create AI solutions that illuminate and transform entire industries.
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Just as the northern lights are born from the collision of solar particles with Earth's atmosphere, 
                Aurorix emerges from the collision of ambitious vision with cutting-edge AI technology — creating something truly magical and unprecedented.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <motion.div 
                className="relative text-center group"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="relative bg-gradient-to-br from-primary via-purple-600 to-blue-700 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-primary/60 transition-all duration-500 animate-custom-pulse">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                </div>
                <h5 className="font-bold text-xl mb-3 gradient-text">Retail Aurora</h5>
                <p className="text-sm text-muted-foreground mb-4">
                  Like the mesmerizing northern lights illuminating the Arctic sky, Aurorix.Retail brings unprecedented clarity to the $4.9T retail landscape.
                </p>
                <div className="text-xs text-primary font-semibold">✨ First Light in the AI Revolution</div>
              </motion.div>
              
              <motion.div 
                className="relative text-center group"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-emerald-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="relative bg-gradient-to-br from-secondary via-emerald-600 to-teal-700 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-secondary/60 transition-all duration-500 animate-custom-pulse">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  </svg>
                </div>
                <h5 className="font-bold text-xl mb-3 gradient-text">Healthcare Aurora</h5>
                <p className="text-sm text-muted-foreground mb-4">
                  The next spectacular aurora will dance through healthcare's $12T ecosystem, healing what seemed impossible with AI's magical touch.
                </p>
                <div className="text-xs text-secondary font-semibold">🌟 Coming Soon - The Next Wonder</div>
              </motion.div>
              
              <motion.div 
                className="relative text-center group"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-orange-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="relative bg-gradient-to-br from-accent via-orange-600 to-yellow-700 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-accent/60 transition-all duration-500 animate-custom-pulse">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <h5 className="font-bold text-xl mb-3 gradient-text">Global Aurora</h5>
                <p className="text-sm text-muted-foreground mb-4">
                  When our auroras unite across finance, logistics, and manufacturing, they'll create the most breathtaking AI symphony the world has ever witnessed.
                </p>
                <div className="text-xs text-accent font-semibold">🌍 Infinite Horizons Await</div>
              </motion.div>
            </div>
            
            <div className="mt-8">
              <p className="text-lg font-semibold text-center">
                <span className="gradient-text">Witness the dawn of the most spectacular AI aurora our world has ever seen.</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}