import { motion } from "framer-motion";

export default function AIAssistant() {
  const features = [
    {
      title: "Plain English Explanations",
      description: "Complex forecasting data explained in simple terms for all team members.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Custom Report Generation",
      description: "Instant PDF and Excel reports with analytics and recommendations.",
      icon: (
        <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Smart Anomaly Detection",
      description: "AI identifies unusual patterns and trends before they impact your business.",
      icon: (
        <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Chat Interface",
      description: "Ask questions and get instant insights via Telegram or web chat.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
          <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
        </svg>
      )
    },
    {
      title: "Context Memory",
      description: "AI remembers your business context and preferences for personalized insights.",
      icon: (
        <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <section id="ai-assistant" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-4">
            <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium">
              Premium Add-on
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            AI <span className="gradient-text">Assistant</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conversational AI that explains predictions and generates reports in plain language.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {features.slice(0, 3).map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-card rounded-2xl p-8 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-background w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold font-poppins mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {features.slice(3).map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-card rounded-2xl p-8 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start mb-6">
                <div className="bg-background w-16 h-16 rounded-xl flex items-center justify-center mr-4">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-poppins mb-2">{feature.title}</h3>
                </div>
              </div>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-poppins mb-4">Premium Feature</h3>
            <p className="text-muted-foreground mb-6">
              The AI Assistant is designed as a premium add-on to the core prediction model. 
              It enhances the base functionality with conversational intelligence and advanced analytics capabilities.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                <span>Advanced AI Features</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                <span>Premium Tier Only</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}