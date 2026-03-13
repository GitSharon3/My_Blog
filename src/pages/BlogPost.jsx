import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Clock, Calendar, ArrowLeft, Share2, Twitter, Linkedin, Facebook,
  ChevronUp, Tag, User
} from 'lucide-react';
import { getPostBySlug, getRelatedPosts } from '../data/posts';
import { getCategoryTheme } from '../data/categories';
import BlogCard from '../components/BlogCard';
import { fadeInUp, staggerContainer, staggerItem } from '../animations/variants';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const contentRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const post = getPostBySlug(slug);
  
  // Scroll progress for reading indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Show scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Redirect if post not found
  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The blog post you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold
                     bg-gray-900 dark:bg-white text-white dark:text-gray-900
                     hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const theme = getCategoryTheme(post.category);
  const relatedPosts = getRelatedPosts(post.id, 3);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Share functionality
  const sharePost = (platform) => {
    const url = window.location.href;
    const text = `Check out this article: ${post.title}`;
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    };
    
    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    } else {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Reading Progress Bar */}
      <motion.div
        className="reading-progress"
        style={{ scaleX }}
      />

      <article className="pt-24 pb-16">
        <div className="section-padding">
          <div className="container-max">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 
                         hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            </motion.div>

            {/* Post Header */}
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto mb-12"
            >
              {/* Category Badge */}
              <Link
                to={`/blog?category=${post.category}`}
                className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6
                          ${theme.bg} ${theme.text}`}
              >
                {post.categoryName}
              </Link>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                {post.excerpt}
              </p>

              {/* Meta Info - Simplified */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readingTime} min read
                </div>
              </div>
            </motion.header>

            {/* Cover Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-5xl mx-auto mb-12"
            >
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Main Content */}
                <motion.div
                  ref={contentRef}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="lg:col-span-3"
                >
                  <div className="prose prose-lg dark:prose-invert max-w-none
                                 prose-headings:text-gray-900 dark:prose-headings:text-white
                                 prose-p:text-gray-600 dark:prose-p:text-gray-400
                                 prose-strong:text-gray-900 dark:prose-strong:text-white
                                 prose-a:text-indigo-600 dark:prose-a:text-indigo-400
                                 prose-li:text-gray-600 dark:prose-li:text-gray-400">
                    {/* Parse and render markdown-like content */}
                    {post.content.split('\n\n').map((paragraph, index) => {
                      // Headers
                      if (paragraph.startsWith('## ')) {
                        return (
                          <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                            {paragraph.replace('## ', '')}
                          </h2>
                        );
                      }
                      if (paragraph.startsWith('### ')) {
                        return (
                          <h3 key={index} className="text-xl font-bold mt-6 mb-3 text-gray-900 dark:text-white">
                            {paragraph.replace('### ', '')}
                          </h3>
                        );
                      }
                      
                      // Lists
                      if (paragraph.startsWith('- ') || paragraph.startsWith('1. ')) {
                        const items = paragraph.split('\n').filter(item => item.trim());
                        const isOrdered = items[0]?.match(/^\d+\./);
                        const ListTag = isOrdered ? 'ol' : 'ul';
                        return (
                          <ListTag key={index} className={`my-4 ml-6 ${isOrdered ? 'list-decimal' : 'list-disc'}`}>
                            {items.map((item, i) => (
                              <li key={i} className="mb-2 text-gray-600 dark:text-gray-400">
                                {item.replace(/^[-\d.]+\s*/, '')}
                              </li>
                            ))}
                          </ListTag>
                        );
                      }

                      // Code blocks
                      if (paragraph.startsWith('```')) {
                        return (
                          <pre key={index} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto my-4">
                            <code className="text-sm text-gray-800 dark:text-gray-200">
                              {paragraph.replace(/```\w*\n?/g, '').replace(/```/g, '')}
                            </code>
                          </pre>
                        );
                      }

                      // Regular paragraph with inline formatting
                      if (paragraph.trim()) {
                        // Process inline bold text **text**
                        const processedText = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                        return (
                          <p key={index} className="mb-4 text-gray-600 leading-relaxed"
                             dangerouslySetInnerHTML={{ __html: processedText }} />
                        );
                      }
                      return null;
                    })}
                  </div>

                  {/* Tags */}
                  <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2 mb-4">
                      <Tag className="w-5 h-5 text-gray-500" />
                      <span className="font-medium text-gray-900 dark:text-white">Tags</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Link
                          key={tag}
                          to={`/blog?tag=${tag}`}
                          className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-800 
                                   text-gray-700 dark:text-gray-300 hover:bg-indigo-50 
                                   dark:hover:bg-indigo-900/20 transition-colors"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Share Buttons */}
                  <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2 mb-4">
                      <Share2 className="w-5 h-5 text-gray-500" />
                      <span className="font-medium text-gray-900 dark:text-white">Share this post</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => sharePost('twitter')}
                        className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#1DA1F2] 
                                 hover:text-white transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => sharePost('linkedin')}
                        className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#0A66C2] 
                                 hover:text-white transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => sharePost('facebook')}
                        className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#4267B2] 
                                 hover:text-white transition-colors"
                      >
                        <Facebook className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => sharePost('copy')}
                        className="px-4 py-3 rounded-full bg-gray-100 dark:bg-gray-800 
                                 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 
                                 text-gray-700 dark:text-gray-300 transition-colors text-sm font-medium"
                      >
                        Copy Link
                      </button>
                    </div>
                  </div>
                </motion.div>

                {/* Sidebar - Removed author card as requested */}
                <motion.aside
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="hidden lg:block"
                >
                  <div className="sticky top-24">
                    {/* Quick Navigation */}
                    <div className="p-6 rounded-xl bg-gray-50">
                      <p className="font-medium text-gray-900 mb-4">Quick Info</p>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="w-4 h-4" />
                          {post.readingTime} min read
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.aside>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
          <div className="section-padding">
            <div className="container-max">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
              >
                Related Posts
              </motion.h2>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {relatedPosts.map((relatedPost, index) => (
                  <motion.div key={relatedPost.id} variants={staggerItem}>
                    <BlogCard post={relatedPost} index={index} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0, 
          scale: showScrollTop ? 1 : 0.8,
          pointerEvents: showScrollTop ? 'auto' : 'none'
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 
                 shadow-lg shadow-black/10 dark:shadow-none hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors z-40"
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>
    </div>
  );
};

export default BlogPost;
