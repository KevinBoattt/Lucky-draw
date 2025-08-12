import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { BlogPost } from "@shared/schema";
import BlogModal from "@/components/ui/blog-modal";

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog'],
  });

  const openPostModal = (post: BlogPost) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  if (isLoading) {
    return (
      <section id="blog" className="glass-panel p-8 mb-8 reveal">
        <h2 className="text-2xl font-bold text-accent-custom mb-5 flex items-center gap-3">
          <i className="fas fa-blog"></i>
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-panel rounded-xl overflow-hidden border border-white/5 animate-pulse">
              <div className="w-full h-48 bg-muted/20"></div>
              <div className="p-5">
                <div className="h-4 bg-muted/20 rounded mb-3"></div>
                <div className="h-6 bg-muted/20 rounded mb-3"></div>
                <div className="h-4 bg-muted/20 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="glass-panel p-8 mb-8 reveal">
      <h2 className="text-2xl font-bold text-accent-custom mb-5 flex items-center gap-3">
        <i className="fas fa-blog"></i>
        Latest Articles
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {posts?.map((post) => (
          <article
            key={post.id}
            onClick={() => openPostModal(post)}
            className="bg-panel rounded-xl overflow-hidden border border-white/5 transition-all duration-300 hover:bg-panel-hover hover:-translate-y-1 cursor-pointer"
          >
            {post.imageUrl && (
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover border-b border-white/5"
              />
            )}
            
            <div className="p-5">
              <div className="flex items-center gap-3 text-xs text-muted-custom mb-2">
                <span className="bg-accent2 text-white px-2 py-1 rounded font-medium">
                  {post.category}
                </span>
                <span>
                  {new Date(post.publishedAt!).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
              </div>
              
              <h3 className="font-semibold mb-2 text-blue-100">
                {post.title}
              </h3>
              
              <p className="text-muted-custom text-sm leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
      
      <div className="text-center">
        <button className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-white/10 text-accent-custom rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-white/5 hover:border-accent-custom">
          View All Articles
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
      
      <BlogModal 
        post={selectedPost}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}
