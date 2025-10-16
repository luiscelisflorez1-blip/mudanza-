import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';

const QuoteForm = ({ children }) => {
  const [state, handleSubmit] = useForm("mnnbrqrl");
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Thank you!",
        description: "Your quote request has been sent. We will get back to you soon.",
      });
      setOpen(false);
    }
  }, [state.succeeded, toast]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await handleSubmit(event);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-blue-950 border-blue-800 text-blue-200">
        <DialogHeader>
          <DialogTitle className="text-blue-100 text-xl">Quote Form</DialogTitle>
        </DialogHeader>
        <motion.form 
          onSubmit={handleFormSubmit} 
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="space-y-2">
            <Label htmlFor="name" className="text-blue-300">Full Name</Label>
            <Input
              id="name"
              name="name"
              required
              className="bg-blue-900 border-blue-700 text-white"
              placeholder="Your full name"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-blue-300">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              className="bg-blue-900 border-blue-700 text-white"
              placeholder="Your phone number"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-blue-300">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="bg-blue-900 border-blue-700 text-white"
              placeholder="you@email.com"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
              className="text-red-400 text-sm"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="date" className="text-blue-300">Preferred Date</Label>
            <Input
              id="date"
              name="date"
              type="date"
              required
              className="bg-blue-900 border-blue-700 text-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="details" className="text-blue-300">Service Details</Label>
            <Textarea
              id="details"
              name="details"
              required
              className="bg-blue-900 border-blue-700 text-white"
              placeholder="Please describe the service you need..."
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={state.submitting}
            className="w-full bg-blue-200 text-blue-950 hover:bg-blue-300 font-semibold"
          >
            {state.submitting ? 'Submitting...' : 'Submit Quote'}
          </Button>
          <ValidationError 
            errors={state.errors}
            className="text-red-400 text-sm mt-2"
          />
        </motion.form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteForm;