/**
 * Learning & Experience Posts
 * Posts about personal journey, internships, career growth, and lessons learned
 */

export const learningPosts = [
  {
    id: 'learning-001',
    slug: 'my-internship-journey-at-tech-company',
    title: 'My Internship Journey at a Tech Company',
    excerpt: 'From nervous beginner to confident developer - my transformative 6-month internship experience building real-world applications.',
    content: `
## The Beginning

Starting my internship, I was filled with excitement and nervousness. Walking into the office on the first day, I wondered if I was truly ready for the challenges ahead.

## Week 1-4: Onboarding and Learning

The first month was all about learning the codebase, understanding the company culture, and getting comfortable with the development workflow. I was assigned a mentor who guided me through:

- Code review processes
- Git workflows
- Internal tools and frameworks
- Team communication protocols

## Month 2-3: First Real Projects

By the second month, I was contributing to real features. My first task was implementing a user authentication flow. It seemed daunting at first, but with guidance from my team, I successfully:

1. Designed the UI components
2. Integrated with the backend API
3. Wrote comprehensive tests
4. Deployed to staging

## Key Learnings

- **Communication is key**: Regular check-ins with my mentor saved me hours of debugging
- **Ask questions**: No question is too small when you're learning
- **Document everything**: Good documentation helps your future self and teammates

## Conclusion

This internship transformed me from a student who knew syntax to a developer who understands systems. I'm grateful for the opportunity and excited for what's next.
    `,
    category: 'learning-experience',
    subtopic: 'internship-journey',
    categoryName: 'Learning & Experience',
    subtopicName: 'Internship Journey',
    tags: ['internship', 'career', 'software-development', 'learning'],
    date: '2024-01-15',
    readingTime: 5,
    coverImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
    featured: true,
    author: {
      name: 'Your Name',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    },
  },
  {
    id: 'learning-002',
    slug: 'overcoming-imposter-syndrome',
    title: 'Overcoming Imposter Syndrome as a Developer',
    excerpt: 'My personal journey dealing with imposter syndrome and strategies that helped me build confidence in my abilities.',
    content: `
## The Silent Struggle

Imposter syndrome affects most developers at some point. That nagging feeling that you're not good enough, that you'll be "found out," that your success is just luck.

## My Experience

During my first job, I constantly compared myself to senior developers. I thought:
- "I don't belong here"
- "Everyone else knows more than me"
- "I just got lucky"

## Strategies That Helped

### 1. Document Your Wins

Keep a "brag document" of your accomplishments. When you feel like an imposter, read through it.

### 2. Talk About It

Sharing your feelings with peers often reveals they feel the same way. You're not alone.

### 3. Reframe Your Thinking

Instead of "I don't know this," think "I don't know this YET." Embrace the learning mindset.

### 4. Mentor Others

Teaching juniors reminds you how far you've come. You know more than you think.

### 5. Accept Imperfection

Nobody knows everything. Even seniors Google things daily.

## The Reality Check

Here's what I've learned:
- Being hired means someone believed in your abilities
- Struggling with problems is normal - it's the job
- Growth is gradual; you won't feel different overnight

## Conclusion

Imposter syndrome might never fully go away, but you can learn to manage it. Focus on growth, not perfection.
    `,
    category: 'learning-experience',
    subtopic: 'career-growth',
    categoryName: 'Learning & Experience',
    subtopicName: 'Career Growth',
    tags: ['imposter-syndrome', 'mental-health', 'career', 'developer-life'],
    date: '2024-03-15',
    readingTime: 6,
    coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
    featured: true,
    author: {
      name: 'Your Name',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    },
  },
  {
    id: 'learning-003',
    slug: 'how-i-learned-to-debug-effectively',
    title: 'How I Learned to Debug Effectively',
    excerpt: 'Debugging is a skill. Here is the systematic approach I developed over years of solving coding problems.',
    content: `
## Debugging is a Skill

When I started coding, I would randomly change things hoping for a fix. Now I follow a systematic approach.

## The DEBUG Method

### D - Define the Problem

Clearly articulate what's happening vs. what should happen. Be specific.

### E - Examine the Error

Read error messages carefully. They often tell you exactly what's wrong.

### B - Break It Down

Isolate the problem:
1. Comment out recent changes
2. Test components individually
3. Use binary search debugging

### U - Use the Right Tools

- Browser DevTools for frontend
- Debugger statements
- Console.log strategically
- Stack traces

### G - Get Help Wisely

Before asking for help:
1. Try for at least 30 minutes
2. Document what you've tried
3. Prepare a minimal reproduction

### S - Study the Solution

Once fixed, understand why it worked. Don't just move on.

## Common Mistakes

- **Assuming** you know what the code does
- **Changing** multiple things at once
- **Ignoring** error messages
- **Not** testing edge cases

## Conclusion

Good debugging saves hours. Invest time in learning this skill.
    `,
    category: 'learning-experience',
    subtopic: 'problem-solving',
    categoryName: 'Learning & Experience',
    subtopicName: 'Problem Solving',
    tags: ['debugging', 'problem-solving', 'skills', 'learning'],
    date: '2024-02-10',
    readingTime: 5,
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
    featured: false,
    author: {
      name: 'Your Name',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    },
  },
];

export default learningPosts;
