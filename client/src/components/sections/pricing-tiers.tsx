import { motion } from "framer-motion";

export default function PricingTiers() {
  const standardFeatures = [
    {
      title: "Demand Forecasting",
      description: "AI-powered predictions using 50+ parameters for superior accuracy.",
      icon: (
        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Smart Procurement",
      description: "Automated recommendations for optimal inventory and purchasing decisions.",
      icon: (
        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
      )
    },
    {
      title: "Multi-Platform Access",
      description: "Web dashboard and Telegram bot for real-time insights anywhere.",
      icon: (
        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Visual Analytics",
      description: "Customizable dashboards with key metrics and trend analysis.",
      icon: (
        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  const premiumFeatures = [
    {
      title: "Plain English Explanations",
      description: "Complex forecasting data explained in simple terms for all team members.",
      icon: (
        <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Custom Report Generation",
      description: "Instant PDF and Excel reports with analytics and recommendations.",
      icon: (
        <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Smart Anomaly Detection",
      description: "AI identifies unusual patterns and trends before they impact your business.",
      icon: (
        <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Context Memory",
      description: "AI remembers your business context and preferences for personalized insights.",
      icon: (
        <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <section id="pricing-tiers" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Aurorix.Retail <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose between our core prediction capabilities or upgrade to the full AI-powered experience with conversational intelligence.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Standard Tier */}
          <motion.div
            className="bg-card rounded-3xl p-8 border border-border relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-600"></div>
            
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-poppins text-primary">Standard</h3>
                  <p className="text-muted-foreground">Core Prediction Model</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Essential AI capabilities for retail intelligence and demand prediction with all the core features you need.
              </p>
            </div>
            
            <div className="space-y-4">
              {standardFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start space-x-3 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Premium Tier */}
          <motion.div
            className="bg-gradient-to-br from-secondary/10 to-emerald-500/10 rounded-3xl p-8 border-2 border-secondary/30 relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-emerald-500"></div>
            
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-secondary/10 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-poppins text-secondary">Premium</h3>
                  <p className="text-muted-foreground">AI Assistant Add-on</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Conversational AI that explains predictions and generates reports in plain language, plus all Standard features.
              </p>
            </div>
            
            <div className="space-y-4">
              {premiumFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start space-x-3 group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-secondary/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-6 bg-secondary/20 rounded-xl p-4 border border-secondary/30">
              <p className="text-sm text-center font-medium text-secondary">
                ✨ Includes all Standard features plus AI Assistant capabilities
              </p>
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
          <div className="bg-accent/10 rounded-xl p-6 max-w-2xl mx-auto border border-accent/20">
            <p className="text-muted-foreground">
              <span className="font-semibold text-accent">MVP Status:</span> Both tiers are available for testing with select partners. 
              Full functionality and pricing will be announced with the production release.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}