import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Connect Your Data",
      description: "Integrate your sales history, inventory data, and external sources through our simple API or data upload.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      step: "02", 
      title: "AI Analysis",
      description: "Our models analyze 50+ parameters including weather, holidays, promotions, and seasonal patterns to understand demand drivers.",
      icon: (
        <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      step: "03",
      title: "Smart Predictions",
      description: "Get accurate demand forecasts and automated procurement recommendations delivered through web dashboard or Telegram.",
      icon: (
        <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      step: "04",
      title: "Optimize & Scale",
      description: "Continuously improve with AI Assistant feedback, custom reports, and real-time adjustments to maximize profitability.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            How <span className="gradient-text">It Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your retail operations in four simple steps with AI-powered intelligence.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Connection Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden xl:block absolute top-20 -right-4 z-10">
                  <svg className="w-8 h-8 text-primary/40" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
              
              <div className="bg-gradient-to-br from-card to-card/80 rounded-3xl p-8 border border-border group-hover:border-primary/30 card-hover h-full relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Step number badge */}
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-primary to-secondary w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-2xl">{step.step}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="bg-background w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto border border-border group-hover:border-primary/30 transition-colors duration-300">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold font-poppins mb-4 text-center">{step.title}</h3>
                  <p className="text-muted-foreground text-center leading-relaxed">{step.description}</p>
                  
                  {/* Bottom indicator */}
                  <div className="mt-6 w-full h-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 max-w-2xl mx-auto border border-primary/20">
            <p className="text-muted-foreground">
              <span className="font-semibold text-accent">MVP Ready:</span> Core functionality available for testing. 
              Full workflow optimization coming in production release.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}