import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Filter, ChevronDown, Grid, List } from 'lucide-react';
import { posts as allPosts, getPostsByCategory, getPostsBySubtopic, searchPosts } from '../data/posts';
import { categories, getCategoryBySlug } from '../data/categories';
import BlogCard from '../components/BlogCard';
import { staggerContainer, staggerItem, fadeInUp } from '../animations/variants';

const BlogListing = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState('grid');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  
  // Get filter values from URL
  const searchQuery = searchParams.get('q') || '';
  const selectedCategory = searchParams.get('category') || '';
  const selectedSubtopic = searchParams.get('subtopic') || '';
  const selectedTag = searchParams.get('tag') || '';
  const showFeatured = searchParams.get('featured') === 'true';

  // Filter posts based on URL params
  const filteredPosts = useMemo(() => {
    let result = [...allPosts];

    // Search filter
    if (searchQuery) {
      result = searchPosts(searchQuery);
    }

    // Category filter
    if (selectedCategory) {
      result = result.filter((post) => post.category === selectedCategory);
    }

    // Subtopic filter
    if (selectedSubtopic) {
      result = result.filter((post) => post.subtopic === selectedSubtopic);
    }

    // Tag filter
    if (selectedTag) {
      result = result.filter((post) => post.tags.includes(selectedTag));
    }

    // Featured filter
    if (showFeatured) {
      result = result.filter((post) => post.featured);
    }

    // Sort by date (newest first)
    return result.sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [searchQuery, selectedCategory, selectedSubtopic, selectedTag, showFeatured]);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set();
    allPosts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags).sort();
  }, []);

  // Get subtopics for selected category
  const availableSubtopics = useMemo(() => {
    if (!selectedCategory) return [];
    const category = getCategoryBySlug(selectedCategory);
    return category ? category.subtopics : [];
  }, [selectedCategory]);

  // Update URL when filters change
  const updateFilters = (updates) => {
    const newParams = new URLSearchParams(searchParams);
    Object.entries(updates).forEach(([key, value]) => {
      if (value) {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
    });
    setSearchParams(newParams);
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchParams({});
  };

  // Get active filters count
  const activeFiltersCount = [selectedCategory, selectedSubtopic, selectedTag, showFeatured].filter(Boolean).length;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="section-padding">
        <div className="container-max">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {searchQuery ? (
                <>Search Results for "{searchQuery}"</>
              ) : selectedCategory ? (
                <>
                  {getCategoryBySlug(selectedCategory)?.name || 'Posts'}
                </>
              ) : showFeatured ? (
                <>Featured Stories</>
              ) : (
                <>All <span className="text-gradient">Posts</span></>
              )}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} found
            </p>
          </motion.div>

          {/* Search and Filters Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 space-y-4"
          >
            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={(e) => updateFilters({ q: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 
                           bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
                           focus:outline-none focus:ring-2 focus:ring-indigo-500/30 dark:focus:ring-indigo-400/30
                           placeholder-gray-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => updateFilters({ q: '' })}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full 
                             hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <X className="w-4 h-4 text-gray-400" />
                  </button>
                )}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-colors
                           ${isFiltersOpen 
                             ? 'bg-indigo-50/60 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800' 
                             : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'}`}
                >
                  <Filter className="w-5 h-5" />
                  <span className="hidden sm:inline">Filters</span>
                  {activeFiltersCount > 0 && (
                    <span className="ml-1 px-2 py-0.5 text-xs rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900">
                      {activeFiltersCount}
                    </span>
                  )}
                  <ChevronDown className={`w-4 h-4 transition-transform ${isFiltersOpen ? 'rotate-180' : ''}`} />
                </button>

                <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-3 transition-colors ${viewMode === 'grid' 
                      ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300' 
                      : 'bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400'}`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-3 transition-colors ${viewMode === 'list' 
                      ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300' 
                      : 'bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Filters Panel */}
            <AnimatePresence>
              {isFiltersOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl space-y-4">
                    {/* Category Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Category
                      </label>
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => updateFilters({ category: '', subtopic: '' })}
                          className={`px-3 py-1.5 rounded-lg text-sm transition-colors
                                   ${!selectedCategory 
                                     ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900' 
                                     : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600/60'}`}
                        >
                          All
                        </button>
                        {categories.map((category) => (
                          <button
                            key={category.id}
                            onClick={() => updateFilters({ category: category.slug, subtopic: '' })}
                            className={`px-3 py-1.5 rounded-lg text-sm transition-colors
                                     ${selectedCategory === category.slug 
                                       ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900' 
                                       : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600/60'}`}
                          >
                            {category.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Subtopic Filter */}
                    {availableSubtopics.length > 0 && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Subtopic
                        </label>
                        <div className="flex flex-wrap gap-2">
                          <button
                            onClick={() => updateFilters({ subtopic: '' })}
                            className={`px-3 py-1.5 rounded-lg text-sm transition-colors
                                     ${!selectedSubtopic 
                                       ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900' 
                                       : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600/60'}`}
                          >
                            All
                          </button>
                          {availableSubtopics.map((subtopic) => (
                            <button
                              key={subtopic.id}
                              onClick={() => updateFilters({ subtopic: subtopic.slug })}
                              className={`px-3 py-1.5 rounded-lg text-sm transition-colors
                                       ${selectedSubtopic === subtopic.slug 
                                         ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900' 
                                         : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600/60'}`}
                            >
                              {subtopic.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tags Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Tags
                      </label>
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => updateFilters({ tag: '' })}
                          className={`px-3 py-1.5 rounded-lg text-sm transition-colors
                                   ${!selectedTag 
                                     ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900' 
                                     : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600/60'}`}
                        >
                          All
                        </button>
                        {allTags.map((tag) => (
                          <button
                            key={tag}
                            onClick={() => updateFilters({ tag })}
                            className={`px-3 py-1.5 rounded-lg text-sm transition-colors
                                     ${selectedTag === tag 
                                       ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900' 
                                       : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600/60'}`}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Clear Filters */}
                    {activeFiltersCount > 0 && (
                      <button
                        onClick={clearFilters}
                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 
                                 dark:text-gray-400 dark:hover:text-gray-200"
                      >
                        <X className="w-4 h-4" />
                        Clear all filters
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Posts Grid/List */}
          {filteredPosts.length > 0 ? (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className={viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
                : 'space-y-4'}
            >
              {filteredPosts.map((post, index) => (
                <motion.div key={post.id} variants={staggerItem}>
                  <BlogCard post={post} index={index} featured={viewMode === 'list'} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No posts found matching your criteria.
              </p>
              <button
                onClick={clearFilters}
                className="mt-4 text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogListing;
