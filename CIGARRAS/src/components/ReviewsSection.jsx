import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Eye, EyeOff } from 'lucide-react';

const ReviewsSection = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: '', comment: '', rating: 5 });
  const [visibleReviews, setVisibleReviews] = useState({});
  const { toast } = useToast();

  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem('reviews') || '[]');
    setReviews(savedReviews);
    
    const visibility = {};
    savedReviews.forEach(review => {
      visibility[review.id] = true;
    });
    setVisibleReviews(visibility);
  }, []);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    const review = {
      ...newReview,
      id: Date.now(),
      date: new Date().toLocaleDateString()
    };
    
    const updatedReviews = [...reviews, review];
    setReviews(updatedReviews);
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));
    
    setVisibleReviews(prev => ({ ...prev, [review.id]: true }));
    
    toast({
      title: "Review added!",
      description: "Thank you for sharing your experience.",
    });
    
    setNewReview({ name: '', comment: '', rating: 5 });
  };

  const toggleReviewVisibility = (reviewId) => {
    setVisibleReviews(prev => ({
      ...prev,
      [reviewId]: !prev[reviewId]
    }));
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`}
      />
    ));
  };
  
  const filteredReviews = reviews.filter(review => review.rating >= 4);

  return (
    <section className="py-16 px-4 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Customer Reviews
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* New review form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gray-50 border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-900">Share Your Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div>
                    <Label htmlFor="reviewName" className="text-gray-700">Name</Label>
                    <Input
                      id="reviewName"
                      value={newReview.name}
                      onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                      required
                      className="bg-white border-gray-300 text-black"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-gray-700">Rating</Label>
                    <div className="flex space-x-1 mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewReview({...newReview, rating: star})}
                          className="focus:outline-none"
                        >
                          <Star
                            className={`w-6 h-6 transition-colors ${star <= newReview.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="reviewComment" className="text-gray-700">Comment</Label>
                    <Textarea
                      id="reviewComment"
                      value={newReview.comment}
                      onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                      required
                      className="bg-white border-gray-300 text-black"
                      placeholder="Tell us about your experience..."
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-blue-950 text-white hover:bg-blue-800">
                    Submit Review
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Reviews list */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-h-96 overflow-y-auto p-2"
          >
            <AnimatePresence>
              {filteredReviews.map((review) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-gray-50 border-gray-200">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <span className="font-semibold text-gray-900">{review.name}</span>
                          <div className="flex items-center space-x-1 mt-1">
                            {renderStars(review.rating)}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">{review.date}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleReviewVisibility(review.id)}
                            className="text-gray-500 hover:text-black"
                          >
                            {visibleReviews[review.id] ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                          </Button>
                        </div>
                      </div>
                      
                      <AnimatePresence>
                        {visibleReviews[review.id] && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-gray-700 text-sm"
                          >
                            {review.comment}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {filteredReviews.length === 0 && (
              <div className="text-center text-gray-500 py-8">
                <p>No reviews with 4+ stars yet. Be the first to share your great experience!</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;