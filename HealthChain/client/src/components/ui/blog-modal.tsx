import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import type { BlogPost } from "@shared/schema";

interface BlogModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function BlogModal({ post, isOpen, onClose }: BlogModalProps) {
  const { toast } = useToast();
  
  if (!post) return null;

  // Convert markdown-style content to HTML
  const formatContent = (content: string) => {
    return content
      .replace(/## (.*)/g, '<h2 class="text-xl font-semibold text-accent-custom mb-4 mt-6">$1</h2>')
      .replace(/### (.*)/g, '<h3 class="text-lg font-semibold text-blue-100 mb-3 mt-5">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-blue-100">$1</strong>')
      .replace(/- (.*)/g, '<li class="ml-4 mb-1">$1</li>')
      .replace(/^\d+\. (.*)/gm, '<li class="ml-4 mb-1 list-decimal">$1</li>')
      .split('\n\n')
      .map(paragraph => {
        if (paragraph.includes('<h2>') || paragraph.includes('<h3>') || paragraph.includes('<li>')) {
          return paragraph;
        }
        return paragraph.trim() ? `<p class="mb-4 leading-relaxed">${paragraph}</p>` : '';
      })
      .join('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-card border border-white/10 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-accent2 text-white px-3 py-1 rounded-lg text-sm font-medium">
              {post.category}
            </span>
            <span className="text-muted-foreground text-sm">
              {new Date(post.publishedAt!).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
          </div>
          <DialogTitle className="text-2xl text-accent-custom mb-2">
            {post.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {post.imageUrl && (
            <img 
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-64 object-cover rounded-xl border border-white/10"
            />
          )}
          
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-blue-100 mb-6 leading-relaxed font-medium">
              {post.excerpt}
            </p>
            
            <div 
              className="text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
            />
          </div>

          <div className="flex justify-between items-center pt-6 border-t border-white/10">
            <div className="flex gap-4">
              <Button
                onClick={() => {
                  const text = `Check out this article: ${post.title} - ${post.excerpt}`;
                  const url = window.location.href;
                  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
                  window.open(twitterUrl, '_blank');
                }}
                variant="outline"
                size="sm"
                className="border-white/20 text-accent-custom hover:bg-white/5"
              >
                <i className="fab fa-twitter mr-2"></i>
                Share
              </Button>
              
              <Button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  toast({
                    title: "Link Copied!",
                    description: "The article link has been copied to your clipboard.",
                  });
                }}
                variant="outline"
                size="sm"
                className="border-white/20 text-accent-custom hover:bg-white/5"
              >
                <i className="fas fa-link mr-2"></i>
                Copy Link
              </Button>
            </div>
            
            <Button
              onClick={onClose}
              variant="ghost"
              className="text-muted-foreground hover:text-blue-100"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}