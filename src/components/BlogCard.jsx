import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Tag, ArrowRight } from 'lucide-react';
import { cardHover, imageMorph } from '../animations/variants';

const categoryColors = {
  technology: { bg: 'bg-blue-50 dark:bg-blue-900/20', text: 'text-blue-700 dark:text-blue-300' },
  'tech-insights': { bg: 'bg-slate-100 dark:bg-slate-800', text: 'text-slate-700 dark:text-slate-300' },
  'learning-experience': { bg: 'bg-indigo-50 dark:bg-indigo-900/20', text: 'text-indigo-700 dark:text-indigo-300' },
  food: { bg: 'bg-orange-50 dark:bg-orange-900/20', text: 'text-orange-700 dark:text-orange-300' },
  travel: { bg: 'bg-emerald-50 dark:bg-emerald-900/20', text: 'text-emerald-700 dark:text-emerald-300' },
};

const getCategoryStyle = (category) => {
  return categoryColors[category] || { bg: 'bg-gray-100 dark:bg-gray-800', text: 'text-gray-700 dark:text-gray-300' };
};

const BlogCard = ({ post, index = 0, featured = false }) => {
  const style = getCategoryStyle(post.category);
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover="hover"
      variants={cardHover}
      className={`group relative bg-white/80 dark:bg-gray-900/60 backdrop-blur rounded-2xl overflow-hidden shadow-sm 
                  hover:shadow-xl transition-shadow duration-300 border border-black/5 
                  dark:border-white/10 ${featured ? 'lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-0' : ''}`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${featured ? 'lg:h-full' : 'h-48'}`}>
        <motion.div
          variants={imageMorph}
          className="w-full h-full"
        >
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium 
                           ${style.bg} ${style.text}`}>
            {post.categoryName}
          </span>
        </div>

        {/* Featured Badge */}
        {post.featured && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium 
                             bg-gray-900 dark:bg-white text-white dark:text-gray-900">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`p-5 ${featured ? 'lg:p-6 lg:flex lg:flex-col lg:justify-center' : ''}`}>
        {/* Meta */}
        <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
          <span>{new Date(post.date).toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
          })}</span>
          <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readingTime} min read
          </span>
        </div>

        {/* Title */}
        <h3 className={`font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 
                       dark:group-hover:text-indigo-400 transition-colors 
                       ${featured ? 'text-xl lg:text-2xl' : 'text-lg'} line-clamp-2`}>
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className={`text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 ${featured ? 'lg:line-clamp-3' : ''}`}>
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs 
                        bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>

        {/* Read More Link */}
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium 
                     text-indigo-600 dark:text-indigo-400 hover:gap-3 transition-all"
        >
          Read More
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogCard;
