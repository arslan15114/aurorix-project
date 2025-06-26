import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Aurorix has revolutionized our inventory management. We've reduced waste by 40% and improved our profit margins significantly. The accuracy of their demand forecasting is incredible.",
      name: "Sarah Johnson",
      title: "VP of Operations, FreshMart Chain",
      initials: "SJ",
      gradient: "from-primary to-secondary"
    },
    {
      quote: "The ROI was immediate. Within the first quarter, we saw a 25% reduction in stockouts and a 30% improvement in inventory turnover. Aurorix pays for itself.",
      name: "Michael Chen",
      title: "Chief Procurement Officer, Metro Retail",
      initials: "MC",
      gradient: "from-secondary to-accent"
    },
    {
      quote: "The platform's ability to factor in weather and local events for demand prediction is game-changing. We're now proactive instead of reactive in our purchasing decisions.",
      name: "Amanda Rodriguez",
      title: "Analytics Director, SuperSave Markets",
      initials: "AR",
      gradient: "from-accent to-primary"
    }
  ];

  const clients = ["FreshMart", "Metro Retail", "SuperSave", "QuickShop", "ValuePlus"];

  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how leading retailers are transforming their operations with Aurorix
          </p>
        </motion.div>
        
        <motion.div
          className="grid lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="text-4xl text-accent mr-2">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.5 2.25c-.905 0-1.64.735-1.64 1.64v4.22c0 .905.735 1.64 1.64 1.64h2.36c.905 0 1.64-.735 1.64-1.64V3.89c0-.905-.735-1.64-1.64-1.64H6.5zM15.5 2.25c-.905 0-1.64.735-1.64 1.64v4.22c0 .905.735 1.64 1.64 1.64h2.36c.905 0 1.64-.735 1.64-1.64V3.89c0-.905-.735-1.64-1.64-1.64H15.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground text-lg mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center mr-4`}>
                  <span className="text-white font-bold">{testimonial.initials}</span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-muted-foreground">{testimonial.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Client Logos */}
        <motion.div
          className="border-t border-card pt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <p className="text-muted-foreground font-medium">Trusted by leading retailers worldwide</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {clients.map((client) => (
              <div key={client} className="bg-card px-6 py-3 rounded-lg font-bold text-lg">
                {client}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
