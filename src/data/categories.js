// Blog Categories Data Structure
// This is the data-driven architecture for maintainable and scalable blog categories

export const categories = [
  {
    id: 'technology',
    name: 'Technology',
    slug: 'technology',
    description: 'Programming, development, and software engineering topics',
    accentColor: '#72DDF7',
    icon: 'Code2',
    subtopics: [
      { id: 'programming', name: 'Programming', slug: 'programming' },
      { id: 'web-development', name: 'Web Development', slug: 'web-development' },
      { id: 'software-development', name: 'Software Development', slug: 'software-development' },
      { id: 'ai-ml', name: 'AI & Machine Learning', slug: 'ai-ml' },
      { id: 'tools-resources', name: 'Tools & Resources', slug: 'tools-resources' },
    ],
  },
  {
    id: 'tech-insights',
    name: 'Tech Insights',
    slug: 'tech-insights',
    description: 'Technology trends, reviews, and industry analysis',
    accentColor: '#AC98E8',
    icon: 'Lightbulb',
    subtopics: [
      { id: 'tech-trends', name: 'Tech Trends', slug: 'tech-trends' },
      { id: 'emerging-technologies', name: 'Emerging Technologies', slug: 'emerging-technologies' },
      { id: 'product-reviews', name: 'Product Reviews', slug: 'product-reviews' },
      { id: 'industry-insights', name: 'Industry Insights', slug: 'industry-insights' },
      { id: 'tech-opinions', name: 'Tech Opinions', slug: 'tech-opinions' },
    ],
  },
  {
    id: 'learning-experience',
    name: 'Learning & Experience',
    slug: 'learning-experience',
    description: 'Personal journey, internships, and career growth',
    accentColor: '#B5FFFC',
    icon: 'GraduationCap',
    subtopics: [
      { id: 'internship-journey', name: 'Internship Journey', slug: 'internship-journey' },
      { id: 'challenges-lessons', name: 'Challenges & Lessons', slug: 'challenges-lessons' },
      { id: 'study-notes', name: 'Study Notes', slug: 'study-notes' },
      { id: 'problem-solving', name: 'Problem Solving', slug: 'problem-solving' },
      { id: 'career-growth', name: 'Career Growth', slug: 'career-growth' },
    ],
  },
  {
    id: 'food',
    name: 'Food',
    slug: 'food',
    description: 'Restaurant reviews, recipes, and food experiences',
    accentColor: '#FFC897',
    icon: 'Utensils',
    subtopics: [
      { id: 'restaurant-reviews', name: 'Restaurant Reviews', slug: 'restaurant-reviews' },
      { id: 'street-food', name: 'Street Food', slug: 'street-food' },
      { id: 'recipes', name: 'Recipes', slug: 'recipes' },
      { id: 'food-experiences', name: 'Food Experiences', slug: 'food-experiences' },
    ],
  },
  {
    id: 'travel',
    name: 'Travel',
    slug: 'travel',
    description: 'Travel diaries, guides, and exploration stories',
    accentColor: '#FF8ECC',
    icon: 'Plane',
    subtopics: [
      { id: 'travel-diaries', name: 'Travel Diaries', slug: 'travel-diaries' },
      { id: 'travel-guides', name: 'Travel Guides', slug: 'travel-guides' },
      { id: 'places-nepal', name: 'Places in Nepal', slug: 'places-nepal' },
      { id: 'budget-travel', name: 'Budget Travel', slug: 'budget-travel' },
    ],
  },
];

// Helper function to get category by slug
export const getCategoryBySlug = (slug) => {
  return categories.find((category) => category.slug === slug);
};

// Helper function to get subtopic by slug
export const getSubtopicBySlug = (categorySlug, subtopicSlug) => {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return null;
  return category.subtopics.find((subtopic) => subtopic.slug === subtopicSlug);
};

// Helper function to get all subtopics
export const getAllSubtopics = () => {
  return categories.flatMap((category) =>
    category.subtopics.map((subtopic) => ({
      ...subtopic,
      categoryId: category.id,
      categoryName: category.name,
      categorySlug: category.slug,
    }))
  );
};

// Helper function to get category color theme
export const getCategoryTheme = (categorySlug) => {
  const category = getCategoryBySlug(categorySlug);
  if (!category) {
    return {
      bg: 'bg-slate-100 dark:bg-gray-800',
      text: 'text-slate-700 dark:text-slate-200',
      border: 'border-slate-200 dark:border-gray-700',
      gradient: 'from-slate-50 to-white',
      accent: '#94A3B8',
    };
  }
  return {
    bg: 'bg-slate-100 dark:bg-gray-800',
    text: 'text-slate-700 dark:text-slate-200',
    border: 'border-slate-200 dark:border-gray-700',
    gradient: 'from-slate-50 to-white',
    accent: category.accentColor,
  };
};
