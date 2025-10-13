export const newsData = [
    {
        id: 1,
        title: 'Vue 3.4 Released with Performance Improvements',
        description: 'The Vue.js team has released version 3.4 with significant performance enhancements and new features.',
        content: `
      <p>The Vue.js core team is excited to announce the release of Vue 3.4! This release brings several performance improvements and new features that make developing with Vue even better.</p>
      
      <h3>Key Highlights</h3>
      <ul>
        <li>Improved reactivity system performance</li>
        <li>Better TypeScript support</li>
        <li>New defineModel macro for easier v-model binding</li>
        <li>Enhanced DevTools integration</li>
      </ul>
      
      <p>These improvements make Vue 3.4 the fastest and most efficient version yet. The new defineModel macro simplifies component v-model patterns, reducing boilerplate code.</p>
      
      <p>The reactivity system has been optimized to handle large-scale applications more efficiently, with up to 30% performance improvement in some scenarios.</p>
    `,
        date: '2024-12-28',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
        category: 'Technology'
    },
    {
        id: 2,
        title: 'Modern Web Development Trends in 2025',
        description: 'Exploring the latest trends shaping web development this year, from AI integration to edge computing.',
        content: `
      <p>As we move through 2025, several key trends are reshaping how we build web applications. Let's explore the most impactful developments.</p>
      
      <h3>AI-Powered Development</h3>
      <p>AI coding assistants have become mainstream, helping developers write better code faster. Tools like GitHub Copilot and ChatGPT are now integral parts of the development workflow.</p>
      
      <h3>Edge Computing</h3>
      <p>Edge computing continues to gain traction, bringing computation closer to users for improved performance. Platforms like Cloudflare Workers and Vercel Edge Functions are leading this charge.</p>
      
      <h3>Component-Driven Design</h3>
      <p>The shift towards component-driven development has accelerated, with frameworks like Vue 3, React, and Svelte leading the way.</p>
    `,
        date: '2024-12-27',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop',
        category: 'Web Development'
    },
    {
        id: 3,
        title: 'CSS Container Queries: A Game Changer',
        description: 'Container queries are revolutionizing responsive design. Learn how to use them effectively in your projects.',
        content: `
      <p>CSS Container Queries have finally arrived in all major browsers, and they're changing how we think about responsive design.</p>
      
      <h3>What Are Container Queries?</h3>
      <p>Unlike media queries that respond to viewport size, container queries allow elements to respond to the size of their parent container. This enables truly modular, reusable components.</p>
      
      <h3>Practical Applications</h3>
      <p>Card components can now adapt their layout based on available space, not just screen size. This makes components much more flexible and reusable across different contexts.</p>
      
      <code>
        @container (min-width: 400px) {
          .card {
            display: grid;
            grid-template-columns: 1fr 2fr;
          }
        }
      </code>
    `,
        date: '2024-12-26',
        image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=400&fit=crop',
        category: 'CSS'
    },
    {
        id: 4,
        title: 'TypeScript 5.5: What\'s New',
        description: 'Microsoft releases TypeScript 5.5 with improved type inference and new language features.',
        content: `
      <p>TypeScript 5.5 brings several exciting improvements to the language, making type-safe JavaScript development even better.</p>
      
      <h3>Inferred Type Predicates</h3>
      <p>The compiler can now automatically infer type predicates in many cases, reducing the need for explicit type annotations.</p>
      
      <h3>Performance Improvements</h3>
      <p>Build times have been reduced by up to 20% in large projects through various compiler optimizations.</p>
      
      <h3>Better Error Messages</h3>
      <p>Error messages are now more descriptive and include helpful suggestions for fixing common issues.</p>
    `,
        date: '2024-12-25',
        image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop',
        category: 'TypeScript'
    },
    {
        id: 5,
        title: 'Building Accessible Web Applications',
        description: 'A comprehensive guide to creating web applications that everyone can use, regardless of their abilities.',
        content: `
      <p>Web accessibility isn't just a nice-to-have feature—it's essential for creating inclusive digital experiences. Here's how to build accessible applications from the ground up.</p>
      
      <h3>Semantic HTML</h3>
      <p>Using proper HTML elements like header, nav, main, and footer helps screen readers understand your page structure.</p>
      
      <h3>Keyboard Navigation</h3>
      <p>Ensure all interactive elements are keyboard-accessible. Users should be able to navigate your entire application using only a keyboard.</p>
      
      <h3>ARIA Attributes</h3>
      <p>When semantic HTML isn't enough, ARIA attributes can provide additional context for assistive technologies.</p>
      
      <h3>Color Contrast</h3>
      <p>Maintain sufficient color contrast ratios (at least 4.5:1 for normal text) to ensure readability for users with visual impairments.</p>
    `,
        date: '2024-12-24',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop',
        category: 'Accessibility'
    },
    {
        id: 6,
        title: 'The Rise of Server Components',
        description: 'Server components are changing how we think about rendering. Explore their benefits and use cases.',
        content: `
      <p>Server components represent a paradigm shift in how we build web applications, offering the best of both server-side and client-side rendering.</p>
      
      <h3>What Are Server Components?</h3>
      <p>Server components render on the server and stream HTML to the client, reducing JavaScript bundle size and improving initial page load times.</p>
      
      <h3>Benefits</h3>
      <ul>
        <li>Reduced client-side JavaScript</li>
        <li>Direct database access in components</li>
        <li>Improved SEO and initial load performance</li>
        <li>Better security (sensitive logic stays on server)</li>
      </ul>
      
      <h3>When to Use Them</h3>
      <p>Server components excel at rendering static or mostly-static content. For highly interactive features, client components are still the better choice.</p>
    `,
        date: '2024-12-23',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
        category: 'React'
    }
];

export function getNewsById(id) {
    return newsData.find(news => news.id === parseInt(id));
}

export function getLatestNews(count = 3) {
    return newsData.slice(0, count);
}