import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsVisible(true)}
      className="text-4xl lg:text-5xl font-bold gradient-text"
    >
      {count}{suffix}
    </motion.div>
  );
};

export default function Stats() {
  const stats = [
    {
      value: 98,
      suffix: "%+",
      label: "Forecast Accuracy Target",
      description: "Advanced AI models with 50+ parameter analysis"
    },
    {
      value: 100,
      suffix: "%",
      label: "AI Entrepreneurs",
      description: "Young specialists with huge ideas and potential"
    },
    {
      value: 50,
      suffix: "+",
      label: "Analysis Parameters",
      description: "Weather, holidays, promotions, trends, and more"
    },
    {
      value: 24,
      suffix: "/7",
      label: "Real-time Monitoring",
      description: "Continuous data processing and insights"
    }
  ];

  return (
    <section id="stats" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Powered by <span className="gradient-text">Innovation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built by a team of young AI specialists with expertise in intelligent agent development and machine learning.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-card rounded-2xl p-6 text-center card-hover group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="text-lg font-bold font-poppins mb-2 group-hover:text-primary transition-colors">
                {stat.label}
              </h3>
              <p className="text-muted-foreground text-sm">{stat.description}</p>
              
              <div className="mt-4 w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold font-poppins mb-4 flex items-center">
              <svg className="w-6 h-6 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z" clipRule="evenodd" />
              </svg>
              AI Expertise
            </h3>
            <p className="text-muted-foreground mb-4">
              We are AI entrepreneurs with huge ideas and unlimited potential, specializing in:
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="bg-primary w-2 h-2 rounded-full mr-3"></div>
                <span className="text-sm">Machine Learning & Deep Learning</span>
              </div>
              <div className="flex items-center">
                <div className="bg-secondary w-2 h-2 rounded-full mr-3"></div>
                <span className="text-sm">Intelligent Agent Development</span>
              </div>
              <div className="flex items-center">
                <div className="bg-accent w-2 h-2 rounded-full mr-3"></div>
                <span className="text-sm">Predictive Analytics & Forecasting</span>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold font-poppins mb-4 flex items-center">
              <svg className="w-6 h-6 text-secondary mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Innovation Focus
            </h3>
            <p className="text-muted-foreground mb-4">
              We're not just building software – we're crafting the future of AI-powered business intelligence.
            </p>
            <div className="bg-primary/10 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-primary">Mission:</span> Create modular AI solutions that solve real-world problems across critical industries, starting with retail intelligence.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}