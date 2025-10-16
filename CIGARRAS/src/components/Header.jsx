import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-black/20 backdrop-blur-md border-b border-orange-500/30 sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4"
            >
              <img 
                src="https://horizons-cdn.hostinger.com/c3a947c9-89ec-44f2-aee8-ddad15aac58b/4247899bd52b700625d8f591d64baf7e.png" 
                alt="Logo Pizzería Rincón de las Cigarras" 
                className="h-16 w-auto"
              />
              <div> {/* Removed hidden sm:block */}
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-200">Pizzería Rincón de las Cigarras</h1>
              </div>
            </motion.div>

            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-orange-200">
                <Phone className="h-4 w-4 text-orange-400" />
                <span className="text-sm">3173785955</span>
              </div>
              <div className="flex items-center space-x-2 text-orange-200">
                <MapPin className="h-4 w-4 text-orange-400" />
                <span className="text-sm">Calle 61 #6-77</span>
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-orange-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </motion.header>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/90 backdrop-blur-md border-b border-orange-500/30 p-4"
        >
          <div className="space-y-3 text-orange-200">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-orange-400" />
              <span>3173785955</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-orange-400" />
              <span>Calle 61 #6-77, Ciudadela Real de Minas</span>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Header;