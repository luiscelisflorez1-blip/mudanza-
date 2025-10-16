import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, Truck, Shield, Clock, Users, CheckCircle, Hammer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Toaster } from '@/components/ui/toaster';
import QuoteForm from '@/components/QuoteForm';
import ReviewsSection from '@/components/ReviewsSection';
import GallerySection from '@/components/GallerySection';

function App() {
  const handleCallNow = () => {
    window.location.href = 'tel:0461411223';
  };

  const services = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Residential Moves",
      description: "Full service for house and apartment moves"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Commercial Moves", 
      description: "Secure relocation of offices and businesses"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Express Service",
      description: "Fast moves for emergencies"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Professional Packing",
      description: "Complete protection for your belongings"
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Furniture Assembly",
      description: "Professional assembly and disassembly of furniture"
    }
  ];

  const rates = [
    { service: "Small Truck (1-2 rooms)", price: "from $165" },
    { service: "Med Truck (2-3 rooms)", price: "from $175" },
    { service: "Large Truck (3-4 rooms)", price: "from $190" },
    { service: "Extra Large Truck (6+ rooms)", price: "from $210" }
  ];

  const whyChooseUs = [
    "Over 10 years of experience",
    "Trained and insured staff",
    "Competitive and transparent pricing",
    "Available 7 days a week",
    "Guarantee on all our services"
  ];

  return (
    <div className="min-h-screen bg-blue-950 text-blue-200">
      <Helmet>
        <title>Westforce Removal | Professional Movers in Perth</title>
        <meta name="description" content="Westforce Removal offers professional moving services in Perth. Fast, safe, and reliable. Get a free quote now for your residential or commercial move." />
        <meta property="og:title" content="Westforce Removal | Professional Movers in Perth" />
        <meta property="og:description" content="Westforce Removal offers professional moving services in Perth. Fast, safe, and reliable. Get a free quote now for your residential or commercial move." />
        <meta name="keywords" content="movers perth, moving company perth, removalists perth, westforce removal, residential moves, commercial moves" />
        <link rel="canonical" href="https://www.removalwestforce.com.au" />
      </Helmet>

      <header className="py-4 px-4 border-b border-blue-800 bg-blue-950 sticky top-0 z-20">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-2 sm:gap-0">
          <div className="flex items-center space-x-4">
              <img  
                alt="Westforce Removal Company Logo Shield"
                className="w-8 h-8 object-contain"
                src="https://horizons-cdn.hostinger.com/f1607b38-678b-42ad-ac55-eb1e2efd175f/2c242f46cd3db0cd9cde635ef0bfbc8f.png" 
              />
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm sm:text-base font-semibold">0461411223</span>
              </div>
          </div>
          <div className="flex items-center space-x-2 text-sm text-blue-300">
            <Mail className="w-4 h-4" />
            <span>info.removalwestforce@gmail.com</span>
          </div>
        </div>
      </header>

      <main>
        <section 
          id="home"
          className="py-0 px-4 relative bg-cover bg-no-repeat bg-center"
          style={{ 
            backgroundImage: "url('https://horizons-cdn.hostinger.com/f1607b38-678b-42ad-ac55-eb1e2efd175f/c000aedeb28207af4c87d9bfe9169b42.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center justify-center min-h-[400px]">
              <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="w-full text-center py-20" 
              >
                  <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-shadow-lg text-white">
                  Westforce Removal<br />
                  <span className="text-gray-300">Fast & Secure Moves in Perth</span>
                  </h1>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                      onClick={handleCallNow}
                      className="bg-black/50 text-white border-2 border-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 text-lg font-semibold backdrop-blur-sm"
                      >
                      Call Now
                      </Button>
                      
                      <QuoteForm>
                      <Button className="bg-white text-black hover:bg-gray-300 transition-all duration-300 px-8 py-3 text-lg font-semibold">
                          Get a Quote
                      </Button>
                      </QuoteForm>
                  </div>
              </motion.div>
          </div>
        </section>

        <section id="services" className="py-16 px-4 bg-white text-black">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-8">Our Services</h2>
                <div className="space-y-6">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start space-x-4 p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="text-black">{service.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-black">{service.title}</h3>
                        <p className="text-gray-700">{service.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-8">Moving Rates</h2>
                <Card className="bg-white text-black border-gray-300">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {rates.map((rate, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="flex justify-between items-center py-3 border-b border-gray-300 last:border-b-0"
                        >
                          <span className="text-black text-sm sm:text-base">{rate.service}</span>
                          <span className="text-green-600 font-semibold">{rate.price}</span>
                        </motion.div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                      <p className="text-sm text-white">
                        * Prices may vary depending on distance and service complexity
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 px-4 bg-white text-black">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Why Choose Us?
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-4 rounded-lg bg-gray-100"
                >
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-black">{reason}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-12"
            >
              <img  alt="Professional moving team loading a sofa into a truck" src="https://horizons-cdn.hostinger.com/f1607b38-678b-42ad-ac55-eb1e2efd175f/6d32fa197ae66068fa015e02ad732cba.jpg" className="w-full" />
            </motion.div>
          </div>
        </section>

        <ReviewsSection />

        <GallerySection />
      </main>

      <footer className="py-12 px-4 border-t border-blue-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <img  
              alt="Westforce Removal Logo"
              className="w-16 h-16 mx-auto mb-4"
             src="https://horizons-cdn.hostinger.com/f1607b38-678b-42ad-ac55-eb1e2efd175f/2c242f46cd3db0cd9cde635ef0bfbc8f.png" />
            <span className="text-2xl font-bold">Westforce Removal</span>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>0461411223</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>info.removalwestforce@gmail.com</span>
            </div>
          </div>
          
          <p className="text-blue-400">
            © 2024 Westforce Removal. All rights reserved.
          </p>
        </div>
      </footer>

      <Toaster />
    </div>
  );
}

export default App;