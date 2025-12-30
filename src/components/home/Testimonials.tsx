import { Testimonial } from "@/services";
import React, { useState } from "react";

interface TestimonialsProps {
  testimonials: Testimonial[];
  isLoading?: boolean;
}

const Testimonials = ({ testimonials, isLoading = false }: TestimonialsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3;


  const maxIndex = Math.max(0, testimonials?.length - visibleCards);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Öğrencilerimiz <span className="text-primary">Ne Diyor?</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Başarı hikayelerimiz en büyük referansımızdır.
          </p>
        </div>
        
        <div className="relative overflow-x-hidden overflow-y-visible py-4">
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <span className="material-icons-outlined animate-spin text-primary text-4xl">
                refresh
              </span>
            </div>
          ) : testimonials.length === 0 ? (
            <div className="text-center py-12 text-gray-500 dark:text-gray-400">
              Henüz testimonial bulunmamaktadır.
            </div>
          ) : (
            <div
              className="flex transition-transform duration-500 ease-in-out gap-8 items-stretch"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`
              }}
            >
              {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id || index}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition relative flex-shrink-0"
                style={{
                  width: `calc((100% - 4rem) / ${visibleCards})`
                }}
              >
                <span className="text-6xl text-purple-100 dark:text-purple-900 absolute top-4 left-4 font-serif">
                  "
                </span>
                <p className="text-gray-600 dark:text-gray-300 mb-6 relative z-10">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center gap-3">
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                      {testimonial.client_fullname}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {testimonial.client_job}
                    </p>
                  </div>
                </div>
              </div>
              ))}
            </div>
          )}
        </div>

        {!isLoading && testimonials.length > visibleCards && (
          <div className="flex justify-center mt-10 gap-3">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:border-primary hover:text-primary transition"
            >
              <span className="material-icons">west</span>
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary-hover transition"
            >
              <span className="material-icons">east</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
