import { motion } from "framer-motion";

export default function Footer() {
  const productLinks = [
    "Demand Forecasting",
    "Inventory Optimization", 
    "Smart Purchasing",
    "Analytics Dashboard",
    "API Integration"
  ];

  const companyLinks = [
    "About Us",
    "Careers",
    "Blog", 
    "Press",
    "Partners"
  ];

  const legalLinks = [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "Security"
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: "Twitter",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      )
    },
    {
      name: "YouTube",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2 6a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM6 8.001C6 7.449 6.448 7 7.001 7h.998C8.551 7 9 7.448 9 8.001v3.998C9 12.551 8.552 13 7.999 13H7.001C6.449 13 6 12.552 6 11.999V8.001z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-card py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl font-bold font-poppins gradient-text mb-4">Aurorix</div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Aurorix is building a modular AI ecosystem for critical industries.
              Aurorix.Retail is our first step. Aurorix.Health is already in motion — and more is coming.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="bg-background w-10 h-10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-muted-foreground">
              {productLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <motion.div
          className="border-t border-background pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 Aurorix. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            {legalLinks.map((link) => (
              <a key={link} href="#" className="hover:text-primary transition-colors">
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
