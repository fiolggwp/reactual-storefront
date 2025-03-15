
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  Menu,
  Bell,
  Package,
  Sparkles,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  // Add a class to body on component mount and remove on unmount
  useEffect(() => {
    // Set dark mode as default if not already set
    if (!localStorage.getItem('theme')) {
      document.documentElement.classList.add('dark');
    }
    
    return () => {
      // Clean up if needed
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background transition-colors duration-300">
      {/* Header with glassmorphism effect */}
      <header className="sticky top-0 z-50 dark:glass-dark glass">
        <div className="container py-3 flex items-center justify-between">
          {/* Logo and menu */}
          <div className="flex items-center gap-4">
            <button className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/" className="text-2xl font-bold neon-text">
              NeoShop
            </Link>
          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-xl mx-4">
            <div className="relative w-full group">
              <Input
                type="text"
                placeholder="Search for products..."
                className="w-full pr-10 bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary/50 transition-all"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-4">
            <ThemeToggle />
            <Link 
              to="/cart" 
              className="relative hover:text-primary transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center animate-pulse-neon">
                0
              </span>
            </Link>
            <Link 
              to="/wishlist" 
              className="hidden sm:block hover:text-primary transition-colors"
            >
              <Heart className="h-6 w-6" />
            </Link>
            <Link 
              to="/notifications" 
              className="hidden sm:block hover:text-primary transition-colors"
            >
              <Bell className="h-6 w-6" />
            </Link>
            <Link 
              to="/account" 
              className="hidden sm:block hover:text-primary transition-colors"
            >
              <User className="h-6 w-6" />
            </Link>
          </nav>
        </div>

        {/* Mobile search */}
        <div className="md:hidden container pb-3">
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Search for products..."
              className="w-full pr-10 bg-background/50 backdrop-blur-sm border-primary/20"
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        {/* Hero section with neon effect */}
        <section className="bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-purple-950/10 py-16 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20">
            <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-pink-500/20 rounded-full filter blur-3xl"></div>
          </div>
          <div className="container relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                Discover Next-Gen Products
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Explore cutting-edge tech and futuristic designs with worldwide shipping
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 hover:shadow-neon-purple transition-all duration-300">
                <Link to="/catalog" className="flex items-center gap-2">
                  Shop Now
                  <Sparkles className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Categories with neon glow effect */}
        <section className="py-16 bg-background">
          <div className="container">
            <h2 className="text-2xl font-bold mb-6 neon-text">Popular Categories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${category.id}`}
                  className="flex flex-col items-center p-6 border dark:border-gray-800 rounded-lg transition-all dark:hover:neon-border hover:shadow-lg hover:-translate-y-1 duration-300"
                >
                  <div className="bg-primary/10 p-4 rounded-full mb-3 dark:text-primary text-accent group-hover:text-primary">
                    {category.icon}
                  </div>
                  <span className="text-center">{category.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured products with hover glow effect */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900/30">
          <div className="container">
            <h2 className="text-2xl font-bold mb-6 neon-text">Featured Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {featuredProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="dark:product-card-dark product-card dark:bg-gray-800/50 group"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <button className="absolute top-2 right-2 bg-white/20 dark:bg-black/30 backdrop-blur-md p-1.5 rounded-full hover:bg-pink-500/20 transition-colors duration-300">
                      <Heart className="h-4 w-4 text-white dark:text-pink-500" />
                    </button>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full">
                        <Button className="w-full dark:bg-primary/90 bg-white/90 dark:text-white text-gray-900 backdrop-blur-md hover:bg-primary dark:hover:bg-primary transition-colors">
                          Quick View
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-sm line-clamp-2 mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-primary font-bold">${product.price.toFixed(2)}</span>
                      {product.originalPrice && (
                        <span className="text-muted-foreground text-xs line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <span className="flex items-center">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <span key={i} className={i < product.rating ? "text-amber-400" : "text-gray-400"}>
                              ★
                            </span>
                          ))}
                      </span>
                      <span className="ml-1">({product.reviews})</span>
                      <span className="ml-auto">{product.orders}+ orders</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline" className="dark:border-primary/50 dark:text-primary hover:dark:bg-primary/10 transition-colors">
                <Link to="/catalog">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits with neon icons */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 border dark:border-gray-800 rounded-lg hover-glow transition-all duration-300 hover:-translate-y-1">
                <div className="bg-primary/10 p-4 rounded-full mb-4 text-primary">
                  <Package className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
                <p className="text-muted-foreground">On thousands of products</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 border dark:border-gray-800 rounded-lg hover-glow transition-all duration-300 hover:-translate-y-1">
                <div className="bg-primary/10 p-4 rounded-full mb-4 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Buyer Protection</h3>
                <p className="text-muted-foreground">100% secure payments</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 border dark:border-gray-800 rounded-lg hover-glow transition-all duration-300 hover:-translate-y-1">
                <div className="bg-primary/10 p-4 rounded-full mb-4 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                    <path d="M12 9v4" />
                    <path d="M12 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                <p className="text-muted-foreground">Dedicated support team</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with glassmorphism effect */}
      <footer className="bg-gray-100 dark:bg-gray-900/50 dark:backdrop-blur-md py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 dark:text-purple-400 text-purple-600">Shop</h3>
              <ul className="space-y-2">
                <li><Link to="/catalog" className="text-muted-foreground hover:text-primary transition-colors">All Products</Link></li>
                <li><Link to="/deals" className="text-muted-foreground hover:text-primary transition-colors">Deals & Discounts</Link></li>
                <li><Link to="/new" className="text-muted-foreground hover:text-primary transition-colors">New Arrivals</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 dark:text-purple-400 text-purple-600">Account</h3>
              <ul className="space-y-2">
                <li><Link to="/account" className="text-muted-foreground hover:text-primary transition-colors">My Account</Link></li>
                <li><Link to="/orders" className="text-muted-foreground hover:text-primary transition-colors">Orders</Link></li>
                <li><Link to="/wishlist" className="text-muted-foreground hover:text-primary transition-colors">Wishlist</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 dark:text-purple-400 text-purple-600">Help</h3>
              <ul className="space-y-2">
                <li><Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQs</Link></li>
                <li><Link to="/shipping" className="text-muted-foreground hover:text-primary transition-colors">Shipping Info</Link></li>
                <li><Link to="/returns" className="text-muted-foreground hover:text-primary transition-colors">Returns Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 dark:text-purple-400 text-purple-600">Contact</h3>
              <ul className="space-y-2">
                <li><a href="mailto:support@neoshop.com" className="text-muted-foreground hover:text-primary transition-colors">support@neoshop.com</a></li>
                <li><a href="tel:+18001234567" className="text-muted-foreground hover:text-primary transition-colors">+1 800 123 4567</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t dark:border-gray-800 mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} NeoShop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Mock data for categories
const categories = [
  {
    id: 1,
    name: "Electronics",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <line x1="8" x2="16" y1="21" y2="21" />
        <line x1="12" x2="12" y1="17" y2="21" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Fashion",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
        <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
        <path d="M12 3v6" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Home & Garden",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Beauty",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
        <path d="M8 8H7a4 4 0 1 0 0 8h1" />
        <line x1="8" x2="16" y1="12" y2="12" />
      </svg>
    ),
  },
  {
    id: 5,
    name: "Sports",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" x2="22" y1="12" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    id: 6,
    name: "Toys",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
        <polyline points="17 2 12 7 7 2" />
      </svg>
    ),
  },
];

// Mock data for featured products
const featuredProducts = [
  {
    id: 1,
    name: "Wireless Bluetooth Earbuds with Noise Cancellation",
    price: 39.99,
    originalPrice: 69.99,
    image: "https://placehold.co/300x300/8B5CF6/FFFFFF?text=Earbuds",
    rating: 4,
    reviews: 1542,
    orders: 3000,
  },
  {
    id: 2,
    name: "Smart Watch with Heart Rate Monitor",
    price: 59.99,
    originalPrice: 89.99,
    image: "https://placehold.co/300x300/e2e8f0/1e293b?text=Watch",
    rating: 5,
    reviews: 2345,
    orders: 5000,
  },
  {
    id: 3,
    name: "Portable Bluetooth Speaker Waterproof",
    price: 29.99,
    originalPrice: 49.99,
    image: "https://placehold.co/300x300/e2e8f0/1e293b?text=Speaker",
    rating: 4,
    reviews: 987,
    orders: 2500,
  },
  {
    id: 4,
    name: "Ultra HD 4K Action Camera with Accessories Kit",
    price: 79.99,
    originalPrice: 119.99,
    image: "https://placehold.co/300x300/e2e8f0/1e293b?text=Camera",
    rating: 4,
    reviews: 765,
    orders: 1500,
  },
  {
    id: 5,
    name: "Laptop Backpack with USB Charging Port",
    price: 35.99,
    originalPrice: 45.99,
    image: "https://placehold.co/300x300/e2e8f0/1e293b?text=Backpack",
    rating: 5,
    reviews: 1876,
    orders: 4000,
  },
];

export default Index;
