import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const OtherProductsSection = ({ products, addToCart }) => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Otros Productos</h2>
        <p className="text-orange-200">Prueba nuestras deliciosas picadas</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {products.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => addToCart(product.id)}
              className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-orange-500/30 flex flex-col cursor-pointer group"
            >
              <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:brightness-75 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-xl font-bold text-white">{product.name}</h3>
                    <p className="text-2xl font-bold text-orange-400">
                        ${product.price.toLocaleString()}
                    </p>
                  </div>
                  <div className="absolute top-2 right-2 bg-orange-600/80 text-white p-2 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Plus className="h-6 w-6"/>
                  </div>
              </div>
              <div className="p-4 pt-2">
                <p className="text-orange-200 text-sm">{product.description}</p>
              </div>
            </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OtherProductsSection;