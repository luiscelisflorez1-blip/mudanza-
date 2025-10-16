import React from 'react';
import { motion } from 'framer-motion';
import { Plus, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FastFoodSection = ({ products, addToCart }) => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Comidas Rápidas</h2>
        <p className="text-orange-200">Elige tu favorita y añádela al carrito.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {products.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-orange-500/30 flex flex-col group"
            >
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                />
              <div className="flex-1 p-4 flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                    <p className="text-orange-200 text-sm">{product.description}</p>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                    {product.variants.map((variant) => (
                        <motion.button
                            key={variant.id}
                            onClick={() => addToCart(variant.id)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-orange-600/80 hover:bg-orange-500 text-white font-bold py-3 px-2 rounded-lg text-center flex flex-col items-center justify-center transition-colors duration-200"
                        >
                            <span className="text-sm">{variant.name}</span>
                            <span className="text-lg">${variant.price.toLocaleString()}</span>
                        </motion.button>
                    ))}
                </div>
              </div>
            </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FastFoodSection;
