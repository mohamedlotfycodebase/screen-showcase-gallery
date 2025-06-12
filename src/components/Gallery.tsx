
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop',
      alt: 'Forest landscape',
      title: 'Forest Conservation'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=500&h=300&fit=crop',
      alt: 'Solar panels',
      title: 'Solar Energy Project'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1569163139723-de8aa0a48c7a?w=500&h=300&fit=crop',
      alt: 'Water body',
      title: 'Water Conservation'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1574263867128-a3d5c1b1decc?w=500&h=300&fit=crop',
      alt: 'Wind turbines',
      title: 'Wind Energy'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=500&h=300&fit=crop',
      alt: 'Mountain landscape',
      title: 'Ecosystem Monitoring'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=500&h=300&fit=crop',
      alt: 'Ocean view',
      title: 'Marine Conservation'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Project Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
            Explore our environmental projects and conservation efforts around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card 
              key={image.id} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-semibold">{image.title}</h3>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
