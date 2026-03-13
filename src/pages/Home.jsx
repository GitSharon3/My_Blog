import { motion } from 'framer-motion';
import { MapPin, Compass, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import TravelCarousel from '../components/TravelCarousel';
import { travelPosts } from '../data/posts';
import { staggerContainer, staggerItem } from '../animations/variants';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Travel Carousel Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="section-padding">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <Compass className="w-6 h-6 text-indigo-600" />
                <span className="text-lg font-medium text-indigo-600">
                  Travel Stories
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Discover <span className="text-indigo-600">Nepal</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                From the ancient kingdom of Mustang to the spiritual lakeside ceremonies of Pokhara, 
                explore the hidden gems of Nepal through my journeys.
              </p>
            </motion.div>

            {/* Carousel */}
            <TravelCarousel posts={travelPosts} />
          </div>
        </div>
      </section>

      {/* Featured Destinations Grid */}
      <section className="py-20 lg:py-32">
        <div className="section-padding">
          <div className="container-max">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {travelPosts.map((post) => (
                <motion.div
                  key={post.id}
                  variants={staggerItem}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <MapPin className="w-4 h-4 text-white/80" />
                          <span className="text-white/80 text-sm">Nepal</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-white/80 text-sm line-clamp-2">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center gap-2 mt-4 text-white font-medium">
                          <span>Read Story</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="section-padding">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Let&apos;s <span className="text-indigo-600">Connect</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Have a travel question or want to share your own Nepal stories? 
                I&apos;d love to hear from you!
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold
                         bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
