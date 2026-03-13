import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Utensils, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';
import { staggerContainer, staggerItem } from '../animations/variants';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 bg-white" />

      <div className="relative z-10 section-padding w-full">
        <div className="container-max">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={staggerItem} className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium 
                               bg-orange-50 border border-orange-200 text-orange-600">
                <Utensils className="w-4 h-4 mr-2" />
                Food Blogger & Taste Explorer
              </span>
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="text-gray-900">Hi, I am </span>
              <span className="text-orange-600">Sharon</span>
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto"
            >
              Coffee-powered coder by day, food explorer by night. 
              Join me as I review restaurants, rant about pumpkins, 
              and celebrate Nepal&apos;s most beloved momos.
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold
                           bg-orange-600 text-white hover:bg-orange-700 transition-colors"
                >
                  <Coffee className="w-5 h-5" />
                  Explore Stories
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-12 inline-flex items-center gap-2 px-4 py-2 rounded-xl 
                       bg-white shadow-lg border border-orange-100"
            >
              <span className="text-2xl">🍜</span>
              <span className="text-sm font-medium text-gray-700">Always Hungry for Good Stories</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center text-gray-400"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
