"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, ChevronRight } from "lucide-react";
import { blogPosts, getAllCategories } from "@/data/blog-posts";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = getAllCategories();
  const sortedPosts = [...blogPosts]
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

  const displayedPosts =
    selectedCategory === "all"
      ? sortedPosts
      : sortedPosts.filter((post) => post.category === selectedCategory);

  const featuredPost = displayedPosts[0];
  const otherPosts = displayedPosts.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-primary text-primary-foreground py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center">
          <Button variant="ghost" size="sm" asChild className="mr-4 text-primary-foreground hover:bg-primary-foreground/20">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-xl font-semibold">Expert Acoustic Blog</h1>
        </div>
      </nav>

      <main className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Acoustic <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Expertise</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Professional insights, tips, and guides from South Africa's acoustic specialists.
              Learn about soundproofing, noise control, and acoustic treatment solutions.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Browse by Category</h3>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={selectedCategory === "all" ? "default" : "outline"}
                className="px-4 py-2 text-sm cursor-pointer transition-colors"
                onClick={() => setSelectedCategory("all")}
              >
                All Posts ({sortedPosts.length})
              </Badge>
              {categories.map((category) => {
                const count = sortedPosts.filter((post) => post.category === category).length;
                return (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className="px-4 py-2 text-sm cursor-pointer transition-colors"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category} ({count})
                  </Badge>
                );
              })}
            </div>
          </div>

          {featuredPost && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-primary/20">
                <Link href={`/blog/${featuredPost.slug}`}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <User className="w-12 h-12 text-primary" />
                        </div>
                        <p className="text-muted-foreground">Featured Image Coming Soon</p>
                      </div>
                    </div>
                    <CardContent className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary">{featuredPost.category}</Badge>
                        <Badge variant="outline">{featuredPost.readTime} min read</Badge>
                      </div>
                      <CardTitle className="text-2xl mb-3 hover:text-primary transition-colors">
                        {featuredPost.title}
                      </CardTitle>
                      <CardDescription className="text-base mb-4 leading-relaxed">
                        {featuredPost.excerpt}
                      </CardDescription>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(featuredPost.publishDate).toLocaleDateString("en-GB", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {featuredPost.author}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="group">
                          Read More
                          <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Link>
              </Card>
            </div>
          )}

          {otherPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherPosts.map((post) => (
                  <Card key={post.id} className="hover:shadow-xl transition-all duration-300 group">
                    <Link href={`/blog/${post.slug}`}>
                      <div className="aspect-[16/10] bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                        <div className="text-center p-6">
                          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                            <User className="w-8 h-8 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground">Image Coming Soon</p>
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            {post.readTime} min
                          </div>
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <CardDescription className="line-clamp-3 mb-4">
                          {post.excerpt}
                        </CardDescription>
                        <div className="flex items-center justify-between">
                          <div className="text-xs text-muted-foreground">
                            {new Date(post.publishDate).toLocaleDateString("en-GB", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </div>
                          <Button variant="ghost" size="sm" className="group">
                            Read More
                            <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {displayedPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground mb-4">
                No articles in the "{selectedCategory}" category yet.
              </p>
            </div>
          )}

          <div className="text-center bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-12">
            <h3 className="text-2xl font-bold mb-4">Need Professional Acoustic Solutions?</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our team provides custom acoustic assessments and solutions across South Africa,
              DRC, Zambia, Mozambique, and Namibia.
            </p>
            <div className="flex justify-center">
              <Button size="lg" asChild className="w-96 h-14 text-lg font-semibold">
                <Link href="/contact">Get Free Consultation*</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
