/**
 * Technology Posts
 * Posts related to programming, web development, software engineering, AI/ML, and dev tools
 */

export const technologyPosts = [
  {
    id: 'tech-001',
    slug: 'building-scalable-react-applications',
    title: 'Building Scalable React Applications',
    excerpt: 'Best practices for architecting large-scale React applications with performance and maintainability in mind.',
    content: `
## Introduction

React applications can start simple but quickly grow complex. In this article, I'll share patterns I've learned for building scalable React apps.

## Folder Structure

A well-organized folder structure is crucial:

\`\`\`
src/
  components/       # Reusable UI components
  features/         # Feature-specific modules
  hooks/            # Custom React hooks
  utils/            # Helper functions
  services/         # API and external services
  store/            # State management
\`\`\`

## Component Design

### Atomic Design Principles

- Atoms: Basic building blocks (Button, Input)
- Molecules: Simple component groups (SearchBar)
- Organisms: Complex sections (Header, Footer)
- Templates: Page layouts
- Pages: Final composed views

## State Management

For large applications, consider:
- **Local state**: Component-level with useState
- **Server state**: React Query or SWR
- **Global state**: Zustand or Redux for truly global data

## Performance Optimization

1. Code splitting with React.lazy
2. Memoization with useMemo and useCallback
3. Virtualization for long lists
4. Image optimization

## Conclusion

Scalability is about making decisions that won't hurt you later. Start simple, but keep these patterns in mind as you grow.
    `,
    category: 'technology',
    subtopic: 'web-development',
    categoryName: 'Technology',
    subtopicName: 'Web Development',
    tags: ['react', 'javascript', 'architecture', 'performance'],
    date: '2024-02-01',
    readingTime: 8,
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
    featured: true,
    author: {
      name: 'Your Name',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    },
  },
  {
    id: 'tech-002',
    slug: 'getting-started-with-typescript',
    title: 'Getting Started with TypeScript',
    excerpt: 'A beginner-friendly guide to adding type safety to your JavaScript projects.',
    content: `
## Why TypeScript?

TypeScript adds static typing to JavaScript, catching errors at compile time rather than runtime.

## Basic Types

\`\`\`typescript
// Primitive types
let name: string = "John";
let age: number = 25;
let isActive: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];

// Objects
interface Person {
  name: string;
  age: number;
}

let person: Person = { name: "John", age: 25 };
\`\`\`

## Function Types

\`\`\`typescript
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

// Arrow functions
const add = (a: number, b: number): number => a + b;
\`\`\`

## Generic Types

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("myString");
\`\`\`

## Conclusion

Start gradually - you can adopt TypeScript incrementally in existing projects.
    `,
    category: 'technology',
    subtopic: 'programming',
    categoryName: 'Technology',
    subtopicName: 'Programming',
    tags: ['typescript', 'javascript', 'types', 'beginners'],
    date: '2024-01-20',
    readingTime: 6,
    coverImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800',
    featured: false,
    author: {
      name: 'Your Name',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    },
  },
  {
    id: 'tech-003',
    slug: 'docker-for-developers',
    title: 'Docker for Web Developers',
    excerpt: 'Learn how containerization can streamline your development workflow and deployment process.',
    content: `
## What is Docker?

Docker packages applications with all their dependencies into standardized units called containers.

## Why Use Docker?

- Consistent environments across development and production
- Easy onboarding for new team members
- Simplified deployment process
- Better resource utilization

## Basic Commands

\`\`\`bash
# Build an image
docker build -t myapp .

# Run a container
docker run -p 3000:3000 myapp

# List running containers
docker ps

# Stop a container
docker stop <container-id>
\`\`\`

## Docker Compose

\`\`\`yaml
version: '3'
services:
  web:
    build: .
    ports:
      - "3000:3000"
  db:
    image: postgres:13
    environment:
      POSTGRES_DB: mydb
\`\`\`

## Best Practices

1. Keep images small
2. Use multi-stage builds
3. Don't run as root
4. Use .dockerignore

## Conclusion

Docker is essential knowledge for modern web development.
    `,
    category: 'technology',
    subtopic: 'tools-resources',
    categoryName: 'Technology',
    subtopicName: 'Tools & Resources',
    tags: ['docker', 'devops', 'containers', 'deployment'],
    date: '2024-03-05',
    readingTime: 7,
    coverImage: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800',
    featured: false,
    author: {
      name: 'Your Name',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    },
  },
];

export default technologyPosts;
