import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Lightbulb, GraduationCap, Utensils, Plane } from 'lucide-react';
import { categories } from '../data/categories';
import { staggerContainer, staggerItem, fadeInUp } from '../animations/variants';

const iconMap = {
  Code2,
  Lightbulb,
  GraduationCap,
  Utensils,
  Plane,
};

const Categories = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="section-padding">
        <div className="container-max">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Explore <span className="text-gradient">Categories</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Dive into different topics that shape my journey. Each category offers unique 
              insights into technology, learning, travel, and more.
            </p>
          </motion.div>

          {/* Categories Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {categories.map((category) => {
              const Icon = iconMap[category.icon];
              return (
                <motion.div key={category.id} variants={staggerItem}>
                  <CategoryCard category={category} Icon={Icon} />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const CategoryCard = ({ category, Icon }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 
                 border border-gray-200 dark:border-gray-800 group 
                 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-none transition-shadow"
    >
      <Link to={`/blog?category=${category.slug}`} className="block p-6 lg:p-8">
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 5, scale: 1.1 }}
          className="w-14 h-14 rounded-xl bg-slate-100 dark:bg-gray-800 flex items-center justify-center mb-4"
        >
          <Icon className="w-7 h-7" style={{ color: category.accentColor }} />
        </motion.div>

        {/* Content */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {category.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {category.description}
        </p>

        {/* Subtopics Preview */}
        <div className="flex flex-wrap gap-2 mb-4">
          {category.subtopics.slice(0, 3).map((subtopic) => (
            <span
              key={subtopic.id}
              className="px-2 py-1 rounded-md text-xs bg-slate-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {subtopic.name}
            </span>
          ))}
          {category.subtopics.length > 3 && (
            <span className="px-2 py-1 rounded-md text-xs bg-slate-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              +{category.subtopics.length - 3} more
            </span>
          )}
        </div>

        {/* Link */}
        <div className="flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 
                        group-hover:gap-3 transition-all">
          Explore Posts
          <ArrowRight className="w-4 h-4" />
        </div>

        {/* Decorative Background Element */}
        <div
          className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-10 blur-2xl group-hover:opacity-20 transition-opacity"
          style={{ backgroundColor: category.accentColor }}
        />
      </Link>
    </motion.div>
  );
};

export default Categories;
