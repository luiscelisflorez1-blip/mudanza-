import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, ShoppingCart, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OrderSection = ({
  orderForm,
  setOrderForm,
  products,
  cart,
  updateCart,
  getTotalPrice,
  sendOrderAndPrint,
  deliveryCost,
  setDeliveryCost
}) => {
  const subtotal = Object.entries(cart).reduce((total, [itemId, quantity]) => {
      const product = products.find(p => p.id === parseInt(itemId));
      return total + (product ? product.price * quantity : 0);
  }, 0);

  const isLocalOrder = !!orderForm.tableNumber;
  const isDeliveryOrder = !!orderForm.address;
  const numericDeliveryCost = Number(deliveryCost) || 0;
  
  return (
    <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="bg-black/70 backdrop-blur-sm rounded-xl p-6 border border-orange-500/30 space-y-6"
    >
      <h3 className="text-2xl font-bold text-orange-200 text-center">Tu Pedido</h3>
      
      <div className="space-y-4">
        {Object.keys(cart).length === 0 ? (
          <div className="text-center py-10">
            <ShoppingCart className="mx-auto h-12 w-12 text-orange-400/50" />
            <p className="mt-4 text-orange-200">Tu carrito está vacío.</p>
            <p className="text-sm text-orange-300/70">Selecciona productos del menú.</p>
          </div>
        ) : (
          <div className="space-y-4 max-h-60 overflow-y-auto pr-2">
            {Object.entries(cart).map(([itemId, quantity]) => {
              const product = products.find(p => p.id === parseInt(itemId));
              if (!product) return null;
              return (
                <div key={product.id} className="flex items-center space-x-4">
                  <img src={product.image} alt={product.name} className="w-16 h-16 rounded-lg object-cover" />
                  <div className="flex-1">
                    <h4 className="font-bold text-orange-200 text-sm">{product.name}</h4>
                    <p className="text-orange-400 text-xs">${product.price.toLocaleString()}</p>
                    <p className="text-orange-200 font-bold">Total: ${(product.price * quantity).toLocaleString()}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button size="icon" variant="outline" onClick={() => updateCart(product.id, Math.max(0, quantity - 1))} className="h-8 w-8 border-orange-500/30 text-orange-400 hover:bg-orange-500/20">
                      {quantity > 1 ? <Minus className="h-4 w-4" /> : <Trash2 className="h-4 w-4" />}
                    </Button>
                    <span className="text-orange-200 w-5 text-center font-bold">{quantity}</span>
                    <Button size="icon" variant="outline" onClick={() => updateCart(product.id, quantity + 1)} className="h-8 w-8 border-orange-500/30 text-orange-400 hover:bg-orange-500/20">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

       {Object.keys(cart).length > 0 && (
          <div className="border-t border-b border-orange-500/30 py-4 space-y-2">
            <div className="flex justify-between items-center text-md text-orange-200">
                <span>Subtotal:</span>
                <span className="text-orange-300">${subtotal.toLocaleString()}</span>
            </div>
            {numericDeliveryCost > 0 && (
              <div className="flex justify-between items-center text-md text-orange-200">
                  <span>Domicilio:</span>
                  <span className="text-orange-300">${numericDeliveryCost.toLocaleString()}</span>
              </div>
            )}
            <div className="flex justify-between items-center text-xl font-bold text-orange-200 pt-2">
                <span>Gran Total:</span>
                <span className="text-orange-400">${getTotalPrice().toLocaleString()}</span>
            </div>
          </div>
      )}

      <div className="space-y-4">
        <h4 className="text-xl font-bold text-orange-200 text-center">Completa tus datos</h4>
        <div>
          <label className="block text-orange-200 text-sm mb-1">Nombre</label>
          <input type="text" value={orderForm.name} onChange={(e) => setOrderForm('name', e.target.value)} className="w-full p-2 rounded-lg bg-black/50 border border-orange-500/30 text-orange-200 placeholder-orange-300/50" placeholder="Tu nombre" />
        </div>
        <div>
          <label className="block text-orange-200 text-sm mb-1">Celular</label>
          <input type="tel" value={orderForm.phone} onChange={(e) => setOrderForm('phone', e.target.value)} className="w-full p-2 rounded-lg bg-black/50 border border-orange-500/30 text-orange-200 placeholder-orange-300/50" placeholder="3123456789" />
        </div>
        
        <div className="flex gap-4">
            <div className="w-[60%]">
              <label className="block text-orange-200 text-sm mb-1">Dirección</label>
              <textarea value={orderForm.address} onChange={(e) => setOrderForm('address', e.target.value)} className="w-full p-2 rounded-lg bg-black/50 border border-orange-500/30 text-orange-200 placeholder-orange-300/50 h-16 resize-none disabled:opacity-50 disabled:cursor-not-allowed" placeholder="Tu dirección completa" disabled={isLocalOrder} />
            </div>
            <div className="w-[40%]">
              <label className="block text-orange-200 text-sm mb-1">Mesa (Local)</label>
              <select value={orderForm.tableNumber} onChange={(e) => setOrderForm('tableNumber', e.target.value)} className="w-full p-2 rounded-lg bg-black/50 border border-orange-500/30 text-orange-200 h-16 disabled:opacity-50 disabled:cursor-not-allowed" disabled={isDeliveryOrder}>
                  <option value="">Para llevar</option>
                  {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>Mesa {i + 1}</option>
                  ))}
              </select>
            </div>
        </div>

        <div>
          <label className="block text-orange-200 text-sm mb-1">Recomendaciones (opcional)</label>
          <textarea value={orderForm.recommendations} onChange={(e) => setOrderForm('recommendations', e.target.value)} className="w-full p-2 rounded-lg bg-black/50 border border-orange-500/30 text-orange-200 placeholder-orange-300/50 h-16 resize-none" placeholder="Ej: Sin cebolla, extra queso, etc." />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-orange-200 text-sm mb-1">Domicilio ($)</label>
            <input 
                type="number" 
                value={deliveryCost}
                onChange={(e) => setDeliveryCost(e.target.value)}
                className="w-full p-2 rounded-lg bg-black/50 border border-orange-500/30 text-orange-200 h-[42px] disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Valor domicilio"
                disabled={isLocalOrder}
            />
          </div>
          <div>
            <label className="block text-orange-200 text-sm mb-1">Forma de pago</label>
            <select value={orderForm.paymentMethod} onChange={(e) => setOrderForm('paymentMethod', e.target.value)} className="w-full p-2 rounded-lg bg-black/50 border border-orange-500/30 text-orange-200 h-[42px]">
              <option value="efectivo">Efectivo</option>
              <option value="transferencia">Transferencia</option>
            </select>
          </div>
        </div>

        {orderForm.paymentMethod === 'transferencia' && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="flex flex-col items-center space-y-2 bg-white/10 p-3 rounded-lg">
            <p className="text-orange-200 font-semibold text-sm">Escanea para pagar</p>
            <img class="w-40 h-40 rounded-md" alt="Código QR para transferencia" src="https://images.unsplash.com/photo-1595079676339-1534801ad6cf" />
            <p className="text-xs text-orange-200 text-center">Envía el comprobante por WhatsApp para confirmar tu pedido.</p>
            </motion.div>
        )}
      </div>
      
      <div className="pt-4 border-t border-orange-500/30">
          <Button onClick={sendOrderAndPrint} className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-bold flex items-center justify-center" disabled={Object.keys(cart).length === 0}>
            <ShoppingCart className="h-6 w-6 mr-3" />
            Enviar Pedido por WhatsApp <span className="ml-2 text-yellow-300">Comprar ahora</span>
          </Button>
      </div>
    </motion.div>
  );
};

export default OrderSection;