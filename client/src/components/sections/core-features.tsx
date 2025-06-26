import { motion } from "framer-motion";

export default function CoreFeatures() {
  const features = [
    {
      title: "Demand Forecasting",
      description: "AI-powered predictions using 50+ parameters for superior accuracy.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Smart Procurement",
      description: "Automated recommendations for optimal inventory and purchasing decisions.",
      icon: (
        <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
      )
    },
    {
      title: "Multi-Platform Access",
      description: "Web dashboard and Telegram bot for real-time insights anywhere.",
      icon: (
        <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Visual Analytics",
      description: "Customizable dashboards with key metrics and trend analysis.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <section id="core-features" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Core Prediction <span className="gradient-text">Model</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Essential AI capabilities for retail intelligence and demand prediction.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-card rounded-2xl p-8 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}  
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start mb-6">
                <div className="bg-background w-16 h-16 rounded-xl flex items-center justify-center mr-4">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-poppins mb-2">{feature.title}</h3>
                </div>
              </div>
              <p className="text-muted-foreground text-lg">
                {feature.description}
              </p>
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
          <div className="bg-accent/20 border border-accent/30 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-accent font-semibold mb-2">MVP Status</p>
            <p className="text-muted-foreground">
              Core features are currently in active development and testing with select partners. 
              Full functionality will be available in the production release.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}