import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const galleryItems = [
  {
    src: "https://horizons-cdn.hostinger.com/f1607b38-678b-42ad-ac55-eb1e2efd175f/a7a005c9aeca19f901ffa4a6b6014ce6.png",
    alt: "Modern living room furniture setup",
    description: "Spacious living room furniture assembly and arrangement."
  },
  {
    src: "https://horizons-cdn.hostinger.com/f1607b38-678b-42ad-ac55-eb1e2efd175f/d42b5933b47dfc48308889c86cc8cb78.png",
    alt: "Assembling a modern table",
    description: "Careful assembly of designer furniture for a common area."
  },
  {
    src: "https://horizons-cdn.hostinger.com/f1607b38-678b-42ad-ac55-eb1e2efd175f/80ad291c1f6a75ff855727e5cba697c9.png",
    alt: "Outdoor picnic table setup",
    description: "Outdoor furniture setup for a relaxing patio space."
  }
];

const GallerySection = () => {
  return (
    <section className="py-16 px-4 bg-blue-950">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Recent Work
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-blue-900 border-blue-800 group">
                <div className="overflow-hidden">
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <p className="text-blue-300">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;