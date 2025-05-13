import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowUpRight } from 'lucide-react';

import SectionTitle from '../common/SectionTitle';
import { BlogPost } from '../../types/BlogPost';
import { blogPosts } from '../../data/blogPosts';

const BlogPreview = () => {
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  
  useEffect(() => {
    // Get the 3 most recent blog posts
    const recent = [...blogPosts]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
    
    setRecentPosts(recent);
  }, []);

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <SectionTitle
          title="Latest from Our Blog"
          subtitle="Stay updated with the latest real estate news, market trends, and lifestyle tips"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <article key={post.id} className="bg-secondary-50 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
              <Link to={`/blog/${post.id}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </Link>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-primary-600 mb-3">
                  <Link to={`/blog/${post.id}`} className="hover:text-accent-500 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center font-medium text-accent-500 hover:text-accent-600 transition-colors"
                >
                  <span>Read more</span>
                  <ArrowUpRight size={16} className="ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/blog" className="btn btn-outline">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;