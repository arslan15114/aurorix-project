import { motion } from "framer-motion";

export default function ProductOverview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="product" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Revolutionize Your <span className="gradient-text">Retail Operations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Harness the power of artificial intelligence to predict demand, optimize inventory, 
            and make smarter purchasing decisions with real-time data from weather, holidays, and market events.
          </p>
        </motion.div>
        
        <motion.div
          className="grid lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="bg-card rounded-2xl p-8 card-hover" variants={itemVariants}>
            <div className="bg-primary/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold font-poppins mb-4">Demand Forecasting</h3>
            <p className="text-muted-foreground mb-6">
              Advanced ML algorithms analyze historical sales, seasonal patterns, and external factors 
              to predict demand with 98% accuracy.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Seasonal trend analysis
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Weather impact modeling
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Event-driven predictions
              </li>
            </ul>
          </motion.div>
          
          <motion.div className="bg-card rounded-2xl p-8 card-hover" variants={itemVariants}>
            <div className="bg-secondary/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold font-poppins mb-4">Inventory Optimization</h3>
            <p className="text-muted-foreground mb-6">
              Maintain optimal stock levels while minimizing waste and storage costs 
              through intelligent inventory management.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Auto-reorder triggers
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Waste reduction algorithms
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Cost optimization
              </li>
            </ul>
          </motion.div>
          
          <motion.div className="bg-card rounded-2xl p-8 card-hover" variants={itemVariants}>
            <div className="bg-accent/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold font-poppins mb-4">Smart Purchasing</h3>
            <p className="text-muted-foreground mb-6">
              Make data-driven purchasing decisions with automated supplier recommendations 
              and price optimization strategies.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Supplier performance analysis
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Price trend forecasting
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Automated procurement
              </li>
            </ul>
          </motion.div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern retail supermarket with advanced technology systems" 
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold font-poppins mb-6">Integrated Analytics Dashboard</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Monitor all your retail operations from a single, intuitive dashboard. 
              Get real-time insights, performance metrics, and actionable recommendations.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-primary w-3 h-3 rounded-full mr-4"></div>
                <span>Real-time sales tracking and analysis</span>
              </div>
              <div className="flex items-center">
                <div className="bg-secondary w-3 h-3 rounded-full mr-4"></div>
                <span>Inventory levels and alerts</span>
              </div>
              <div className="flex items-center">
                <div className="bg-accent w-3 h-3 rounded-full mr-4"></div>
                <span>Supplier performance metrics</span>
              </div>
              <div className="flex items-center">
                <div className="bg-primary w-3 h-3 rounded-full mr-4"></div>
                <span>Predictive analytics and forecasts</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
