import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Building Scalable React Applications",
      excerpt: "Learn the best practices for structuring and organizing large React applications for maintainability and performance.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "React",
      slug: "building-scalable-react-applications"
    },
    {
      id: 2,
      title: "Modern JavaScript: ES2024 Features",
      excerpt: "Explore the latest JavaScript features and how they can improve your development workflow and code quality.",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "JavaScript",
      slug: "modern-javascript-es2024-features"
    },
    {
      id: 3,
      title: "Understanding TypeScript Generics",
      excerpt: "A deep dive into TypeScript generics and how to use them effectively to write more flexible and reusable code.",
      date: "2024-01-05",
      readTime: "12 min read",
      category: "TypeScript",
      slug: "understanding-typescript-generics"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              My <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Thoughts, tutorials, and insights about software development, technology, and the journey of a developer.
            </p>
          </div>

          <div className="space-y-8">
            {posts.map((post) => (
              <article 
                key={post.id}
                className="card-elegant hover:shadow-elegant transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center space-x-4 mb-2 md:mb-0">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-sm text-muted-foreground space-x-4">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                <Button 
                  variant="ghost" 
                  className="p-0 h-auto font-medium group-hover:text-primary transition-colors"
                >
                  Read More 
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              More posts coming soon! Follow me on social media for updates.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;