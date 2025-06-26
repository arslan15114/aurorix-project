import { motion } from "framer-motion";

export default function Products() {
  return (
    <section id="products" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Our <span className="gradient-text">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Modular AI solutions designed to solve specific industry challenges with precision and scalability.
          </p>
        </motion.div>
        
        <div className="space-y-12">
          {/* Aurorix.Retail */}
          <motion.div
            className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-primary w-16 h-16 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold font-poppins text-primary mb-2">Aurorix.Retail</h3>
                    <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                      MVP Development
                    </span>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-lg mb-6">
                  AI-powered demand forecasting and procurement intelligence for retail operations. 
                  Our flagship product that transforms how retailers predict demand and manage inventory.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="bg-primary w-2 h-2 rounded-full mr-3"></div>
                    <span>50+ parameter demand forecasting</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-secondary w-2 h-2 rounded-full mr-3"></div>
                    <span>Weather & holiday impact analysis</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-accent w-2 h-2 rounded-full mr-3"></div>
                    <span>Automated procurement recommendations</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary w-2 h-2 rounded-full mr-3"></div>
                    <span>Multi-platform access (Web + Telegram)</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-card/60 rounded-xl p-6 border border-secondary/20">
                  <div className="flex items-center mb-4">
                    <svg className="w-6 h-6 text-secondary mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z" clipRule="evenodd" />
                    </svg>
                    <span className="font-bold text-secondary text-lg">AI Assistant (Premium)</span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Conversational AI that explains predictions in plain language, generates custom reports, 
                    and provides intelligent recommendations through natural chat interface.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <div className="bg-secondary w-1.5 h-1.5 rounded-full mr-2"></div>
                      <span>Plain English explanations</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="bg-secondary w-1.5 h-1.5 rounded-full mr-2"></div>
                      <span>Custom report generation</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="bg-secondary w-1.5 h-1.5 rounded-full mr-2"></div>
                      <span>Anomaly detection & alerts</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <a 
                    href="#waitlist"
                    className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                  >
                    Join MVP Testing
                    <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Aurorix.Health */}
          <motion.div
            className="bg-card/50 rounded-2xl p-8 border border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-muted w-16 h-16 rounded-xl flex items-center justify-center mr-4 border-2 border-dashed border-muted-foreground/30">
                    <svg className="w-8 h-8 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path d="M9 6a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold font-poppins text-muted-foreground mb-2">Aurorix.Health</h3>
                    <span className="bg-muted/50 text-muted-foreground px-3 py-1 rounded-full text-sm font-medium border border-muted-foreground/30">
                      Coming Soon
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-muted-foreground text-lg">
                    We're working on another game-changing product — Aurorix.Health.
                  </p>
                  
                  <p className="text-muted-foreground">
                    While we can't share the full details yet, it's designed to solve one of the most 
                    frustrating real-world problems in healthcare using AI.
                  </p>
                  
                  <p className="text-muted-foreground font-medium">
                    Stay tuned — it's worth the wait.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="bg-muted/30 rounded-2xl p-12 border border-dashed border-muted-foreground/20 text-center">
                  <svg className="w-16 h-16 text-muted-foreground mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-muted-foreground">
                    <span className="font-semibold">Planning Stage</span><br />
                    Details coming soon
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Future Products */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-8 border border-accent/20">
              <h4 className="text-2xl font-bold font-poppins mb-4">Future Products</h4>
              <p className="text-muted-foreground text-lg mb-6">
                The Aurorix ecosystem is designed for expansion. After mastering retail and healthcare, 
                we'll bring AI intelligence to finance, logistics, manufacturing, and beyond.
              </p>
              <div className="inline-flex items-center text-accent font-semibold">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
                Modular AI for Every Industry
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}