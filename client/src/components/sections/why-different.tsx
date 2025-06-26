import { motion } from "framer-motion";

export default function WhyDifferent() {
  const parameters = [
    {
      title: "Weather Intelligence",
      description: "Real-time weather & temperature impact",
      icon: "🌤️",
      color: "primary"
    },
    {
      title: "Holiday Calendar",
      description: "National & local holidays analysis",
      icon: "📅",
      color: "secondary"
    },
    {
      title: "Promotion History",
      description: "Discount effectiveness tracking",
      icon: "🏷️",
      color: "accent"
    },
    {
      title: "Temporal Patterns",
      description: "Day-of-week & seasonality behavior",
      icon: "⏰",
      color: "primary"
    },
    {
      title: "SKU Intelligence",
      description: "Product & region-level analysis",
      icon: "📊",
      color: "secondary"
    }
  ];

  return (
    <section id="why-different" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Why Aurorix.Retail is <span className="gradient-text">Different</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unlike traditional solutions, we analyze the complete context of retail demand with unique parameters.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {parameters.map((param, index) => (
            <motion.div
              key={param.title}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 card-hover group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {param.icon}
                </div>
                <h4 className="font-bold text-sm mb-2">{param.title}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">{param.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-5xl font-bold gradient-text mb-3">98%+</div>
          <h3 className="text-xl font-bold font-poppins mb-2">Forecast Accuracy Target</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Unlike traditional solutions that rely only on sales history, our multi-parameter approach delivers unmatched precision.
          </p>
        </motion.div>
      </div>
    </section>
  );
}