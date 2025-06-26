import { motion } from "framer-motion";

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            The <span className="gradient-text">Aurorix Ecosystem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Aurorix is building a modular AI ecosystem for critical industries. 
            Each product is designed to solve real-world problems with cutting-edge artificial intelligence.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Aurorix.Retail */}
          <motion.div
            className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20 card-hover"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-primary w-16 h-16 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-poppins text-primary">Aurorix.Retail</h3>
                <span className="bg-accent/20 text-accent px-2 py-1 rounded-full text-sm font-medium">
                  In Development (MVP)
                </span>
              </div>
            </div>
            
            <p className="text-muted-foreground text-lg mb-6">
              AI-powered demand forecasting and smart procurement optimization for retail operations.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <div className="bg-primary w-2 h-2 rounded-full mr-3"></div>
                <span>Dynamic demand forecasting with weather & holiday data</span>
              </div>
              <div className="flex items-center">
                <div className="bg-secondary w-2 h-2 rounded-full mr-3"></div>
                <span>Automated procurement suggestions</span>
              </div>
              <div className="flex items-center">
                <div className="bg-accent w-2 h-2 rounded-full mr-3"></div>
                <span>Multi-platform access (Web + Telegram)</span>
              </div>
            </div>
            
            <div className="bg-card/60 rounded-xl p-4 border border-secondary/20">
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold text-secondary">Premium: AI Assistant</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Natural language explanations, custom report generation, and intelligent decision support through conversational AI.
              </p>
            </div>
            
            <div className="mt-6">
              <a 
                href="#waitlist"
                className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                Join MVP Testing
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </motion.div>
          
          {/* Aurorix.Health */}
          <motion.div
            className="bg-card/50 rounded-2xl p-8 border border-border card-hover opacity-80"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 0.8, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-muted w-16 h-16 rounded-xl flex items-center justify-center mr-4 border-2 border-dashed border-muted-foreground/30">
                <svg className="w-8 h-8 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path d="M9 6a1 1 0 000 2h2a1 1 0 100-2H9z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-poppins text-muted-foreground">Aurorix.Health</h3>
                <span className="bg-muted/50 text-muted-foreground px-2 py-1 rounded-full text-sm font-medium border border-muted-foreground/30">
                  Coming Soon
                </span>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <p className="text-muted-foreground text-lg">
                We're working on another game-changing product — Aurorix.Health.
              </p>
              
              <p className="text-muted-foreground">
                While we can't share the full details yet, it's designed to solve one of the most 
                frustrating real-world problems using AI.
              </p>
              
              <p className="text-muted-foreground font-medium">
                Stay tuned — it's worth the wait.
              </p>
            </div>
            
            <div className="bg-muted/30 rounded-xl p-4 border border-dashed border-muted-foreground/20">
              <div className="flex items-center justify-center text-muted-foreground">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Planning Stage</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 max-w-2xl mx-auto border border-primary/20">
            <h4 className="font-bold text-lg mb-2">Modular AI Ecosystem</h4>
            <p className="text-muted-foreground">
              Each Aurorix product is built to integrate seamlessly with others, creating a 
              comprehensive AI solution for critical industries and real-world challenges.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}