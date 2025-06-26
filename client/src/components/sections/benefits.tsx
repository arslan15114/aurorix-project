import { motion } from "framer-motion";

export default function Benefits() {
  const benefits = [
    {
      title: "Reduce Costs by 35%",
      subtitle: "Average cost savings",
      description: "Eliminate waste, optimize purchasing decisions, and reduce excess inventory with AI-powered insights that directly impact your bottom line.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
        </svg>
      ),
      bgGradient: "from-primary/10 to-secondary/10 bg-primary text-white",
      highlight: "ROI within 3 months",
      highlightColor: "text-secondary"
    },
    {
      title: "98% Forecast Accuracy",
      subtitle: "Industry-leading precision",
      description: "Our advanced machine learning models achieve unprecedented accuracy by incorporating weather, events, and seasonal patterns.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      bgGradient: "from-secondary/10 to-accent/10 bg-secondary text-white",
      highlight: "Best-in-class performance",
      highlightColor: "text-accent"
    },
    {
      title: "Real-time Insights",
      subtitle: "24/7 monitoring",
      description: "Get instant alerts and recommendations based on live data streams, ensuring you never miss an opportunity or threat.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      ),
      bgGradient: "from-accent/10 to-primary/10 bg-accent text-white",
      highlight: "Instant decision support",
      highlightColor: "text-primary"
    },
    {
      title: "Scalable Solution",
      subtitle: "Enterprise-ready",
      description: "From single stores to global retail chains, our platform scales seamlessly to meet your growing business needs.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      bgGradient: "from-primary/10 to-accent/10 bg-primary text-white",
      highlight: "Grow with confidence",
      highlightColor: "text-secondary"
    }
  ];

  return (
    <section id="benefits" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Why Leading Retailers Choose <span className="gradient-text">Aurorix</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your business with measurable results and competitive advantages 
            that drive growth and profitability.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className={`bg-gradient-to-br ${benefit.bgGradient} rounded-3xl p-8 card-hover`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className={`${benefit.bgGradient.split(' ')[2]} w-16 h-16 rounded-xl flex items-center justify-center mr-4`}>
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-poppins">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.subtitle}</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                {benefit.description}
              </p>
              <div className={`flex items-center ${benefit.highlightColor}`}>
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">{benefit.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
