/**
 * Posts Data Aggregator
 * Combines all category posts
 */

import technologyPosts from './technologyPosts';
import techInsightsPosts from './techInsightsPosts';
import learningPosts from './learningPosts';
import foodPosts from './foodPosts';
import travelPosts from './travelPosts';

// Combine all posts
export const posts = [
  ...technologyPosts,
  ...techInsightsPosts,
  ...learningPosts,
  ...foodPosts,
  ...travelPosts,
];

/**
 * Get all posts
 */
export const getAllPosts = () => posts;

/**
 * Get featured posts
 */
export const getFeaturedPosts = () => posts.filter((post) => post.featured);

/**
 * Get post by slug
 */
export const getPostBySlug = (slug) => posts.find((post) => post.slug === slug);

/**
 * Get posts by category
 */
export const getPostsByCategory = (categorySlug) =>
  posts.filter((post) => post.category === categorySlug);

/**
 * Get posts by subtopic
 */
export const getPostsBySubtopic = (categorySlug, subtopicSlug) =>
  posts.filter(
    (post) => post.category === categorySlug && post.subtopic === subtopicSlug
  );

/**
 * Search posts
 */
export const searchPosts = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
};

/**
 * Get related posts
 */
export const getRelatedPosts = (currentPostId, limit = 3) => {
  const currentPost = posts.find((post) => post.id === currentPostId);
  if (!currentPost) return [];

  return posts
    .filter(
      (post) =>
        post.id !== currentPostId &&
        post.tags.some((tag) => currentPost.tags.includes(tag))
    )
    .slice(0, limit);
};

// Export all category posts
export {
  technologyPosts,
  techInsightsPosts,
  learningPosts,
  foodPosts,
  travelPosts,
};
