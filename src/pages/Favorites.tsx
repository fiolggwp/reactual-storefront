
import React from 'react';
import Navbar from '@/components/Navbar';
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const favorites = [
    {
      id: 1,
      name: "Wireless Bluetooth Earbuds with Noise Cancellation",
      price: 39.99,
      originalPrice: 69.99,
      image: "https://placehold.co/300x300/8B5CF6/FFFFFF?text=Earbuds",
      rating: 4,
      inStock: true,
    },
    {
      id: 2,
      name: "Smart Watch with Heart Rate Monitor",
      price: 59.99,
      originalPrice: 89.99,
      image: "https://placehold.co/300x300/e2e8f0/1e293b?text=Watch",
      rating: 5,
      inStock: true,
    },
    {
      id: 3,
      name: "Portable Bluetooth Speaker Waterproof",
      price: 29.99,
      originalPrice: 49.99,
      image: "https://placehold.co/300x300/e2e8f0/1e293b?text=Speaker",
      rating: 4,
      inStock: false,
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="container py-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Favorites</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="flex items-center justify-between mt-6 mb-8">
          <div className="flex items-center gap-2">
            <Heart className="text-pink-500 h-6 w-6" />
            <h1 className="text-3xl font-bold">My Favorites</h1>
          </div>
          <Button variant="outline" className="text-red-500 border-red-500 hover:bg-red-500/10">
            Clear All
          </Button>
        </div>
        
        {favorites.length > 0 ? (
          <div className="space-y-6">
            {favorites.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <div className="flex flex-col sm:flex-row">
                  <div className="w-full sm:w-48 h-48 bg-muted">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <Link to={`/product/${item.id}`} className="text-lg font-medium hover:text-primary transition-colors">
                        {item.name}
                      </Link>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-primary font-bold text-lg">${item.price.toFixed(2)}</span>
                        {item.originalPrice && (
                          <span className="text-muted-foreground line-through">
                            ${item.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground mt-2">
                        <span className="flex items-center">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <span key={i} className={i < item.rating ? "text-amber-400" : "text-gray-400"}>
                                ★
                              </span>
                            ))}
                        </span>
                      </div>
                      <div className="mt-2">
                        <span className={item.inStock ? "text-green-500" : "text-red-500"}>
                          {item.inStock ? "In Stock" : "Out of Stock"}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Button className="flex-1 sm:flex-none">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Button variant="outline" size="icon" className="text-red-500">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Your favorites list is empty</h3>
            <p className="text-muted-foreground mb-6">
              Items added to your favorites will appear here
            </p>
            <Button asChild>
              <Link to="/electronics">Continue Shopping</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
