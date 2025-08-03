import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Blog() {
  const blogPosts = [
    {
      title: "Hidden Markov Models & Quantum Computing In Machine Learning",
      date: "23/3/2025",
      author: "Samir Paudel"
    },
    {
      title: "A Letter To Time",
      date: "27/2/2025", 
      author: "Samir Paudel"
    },
    {
      title: "Machine Learning For Football Player Market Value Prediction: End-To-End Project",
      date: "14/2/2025",
      author: "Samir Paudel"
    },
    {
      title: "\"365 Days Of Data \"",
      date: "4/11/2024",
      author: "Samir Paudel"
    },
    {
      title: "Kicking Off My First EDA: FIFA Edition",
      date: "24/10/2024",
      author: "Samir Paudel"
    }
  ];

  const galleryImages = [
    { type: "portrait", content: "👤" },
    { type: "landscape", content: "🏔️" }, 
    { type: "code", content: "💻" },
    { type: "portrait", content: "👤" },
    { type: "landscape", content: "🏔️" }
  ];

  return (
    <Layout>
      <div className="max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Blogs</h1>
          <div className="h-1 w-16 bg-gradient-primary rounded-full"></div>
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer group">
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.author}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Gallery Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Gallery</h2>
          <div className="h-1 w-16 bg-gradient-primary rounded-full mb-6"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {galleryImages.map((item, index) => (
            <Card key={index} className="aspect-square bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer group overflow-hidden">
              {index === 2 ? (
                // Featured large image
                <div className="col-span-2 row-span-2 h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-4xl mb-4">📊</div>
                      <div className="space-y-2 text-xs font-mono">
                        <div>29144</div>
                        <div className="flex justify-center gap-8">
                          <span>108<br/>87%</span>
                          <span>101<br/>94%</span>
                          <span>99<br/>93%</span>
                          <span>146<br/>103%</span>
                          <span>123<br/>105%</span>
                          <span>111<br/>98%</span>
                        </div>
                        <div className="text-right">969976th</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full bg-gradient-to-br from-muted/50 to-accent/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-2xl">{item.content}</span>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}