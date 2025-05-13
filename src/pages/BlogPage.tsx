import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowUpRight, Search } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import { BlogPost } from '../types/BlogPost';
import { blogPosts } from '../data/blogPosts';

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setPosts(blogPosts);
      setLoading(false);
    }, 800);
  }, []);

  // Extract unique categories
  const categories = Array.from(
    new Set(blogPosts.flatMap(post => post.categories))
  ).sort();

  // Filter posts based on search term and category
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === '' || 
                            post.categories.includes(selectedCategory);
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <SectionTitle
          title="Our Real Estate Blog"
          subtitle="Insights, guides, and news about the Lahore property market"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar with search and categories */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-semibold text-primary-600 mb-4">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-4 py-2 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-semibold text-primary-600 mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      selectedCategory === '' 
                        ? 'bg-primary-600 text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setSelectedCategory('')}
                  >
                    All Categories
                  </button>
                </li>
                {categories.map((category, index) => (
                  <li key={index}>
                    <button
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        selectedCategory === category 
                          ? 'bg-primary-600 text-white' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-primary-600 mb-4">Popular Posts</h3>
              <div className="space-y-4">
                {posts
                  .sort((a, b) => b.views - a.views)
                  .slice(0, 3)
                  .map(post => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.id}`}
                      className="flex gap-3 group"
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                      />
                      <div>
                        <h4 className="font-medium text-primary-600 group-hover:text-accent-500 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-sm text-gray-500">{post.date}</p>
                      </div>
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
          
          {/* Main content with blog posts */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-pulse flex flex-col items-center">
                  <div className="w-16 h-16 border-4 border-accent-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                  <p className="text-gray-600">Loading articles...</p>
                </div>
              </div>
            ) : (
              <>
                {filteredPosts.length === 0 ? (
                  <div className="text-center py-12 bg-secondary-50 rounded-lg">
                    <h3 className="text-xl font-semibold text-primary-600 mb-2">No articles found</h3>
                    <p className="text-gray-600 mb-4">
                      We couldn't find any articles matching your search criteria.
                    </p>
                    <button
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('');
                      }}
                      className="btn btn-primary"
                    >
                      View All Articles
                    </button>
                  </div>
                ) : (
                  <div className="space-y-8">
                    {filteredPosts.map(post => (
                      <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="md:flex">
                          <div className="md:w-1/3">
                            <Link to={`/blog/${post.id}`}>
                              <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 md:h-full object-cover"
                              />
                            </Link>
                          </div>
                          <div className="p-6 md:w-2/3">
                            <div className="flex flex-wrap gap-2 mb-3">
                              {post.categories.map((category, index) => (
                                <span
                                  key={index}
                                  className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                                    category === selectedCategory
                                      ? 'bg-accent-500 text-white'
                                      : 'bg-secondary-100 text-primary-600'
                                  }`}
                                >
                                  {category}
                                </span>
                              ))}
                            </div>
                            
                            <h2 className="text-xl md:text-2xl font-semibold text-primary-600 mb-3">
                              <Link to={`/blog/${post.id}`} className="hover:text-accent-500 transition-colors">
                                {post.title}
                              </Link>
                            </h2>
                            
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
                            
                            <p className="text-gray-600 mb-4">
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
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </>
            )}
            
            {/* Pagination - would be dynamic in a real app */}
            <div className="mt-12 flex justify-center">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100">
                  Previous
                </button>
                <button type="button" className="px-4 py-2 text-sm font-medium text-white bg-primary-600 border border-primary-600 hover:bg-primary-700">
                  1
                </button>
                <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100">
                  2
                </button>
                <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100">
                  3
                </button>
                <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-r-lg border border-gray-200 hover:bg-gray-100">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;