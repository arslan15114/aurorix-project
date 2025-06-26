import { motion } from "framer-motion";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Products from "@/components/sections/products";
import HowItWorks from "@/components/sections/how-it-works";
import PricingTiers from "@/components/sections/pricing-tiers";
import WhyDifferent from "@/components/sections/why-different";
import Waitlist from "@/components/sections/waitlist";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold font-poppins gradient-text">Aurorix</div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#about" className="hover:text-primary transition-colors hover-lift">About</a>
                <a href="#products" className="hover:text-primary transition-colors hover-lift">Products</a>
                <a href="#how-it-works" className="hover:text-primary transition-colors hover-lift">How It Works</a>
                <a href="#waitlist" className="hover:text-primary transition-colors hover-lift">Waitlist</a>
              </div>
            </div>
            
            <div className="hidden md:block">
              <a 
                href="#waitlist"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Join MVP Testing
              </a>
            </div>
            
            <div className="md:hidden">
              <button className="text-foreground hover:text-primary">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Hero />
      <About />
      <Products />
      <HowItWorks />
      <PricingTiers />
      <WhyDifferent />
      <Waitlist />
      <Footer />
    </div>
  );
}
