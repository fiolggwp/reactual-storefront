
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
import { Filter, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

const Electronics = () => {
  const products = [
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
    {
      id: 6,
      name: "Wireless Gaming Mouse",
      price: 49.99,
      originalPrice: 69.99,
      image: "https://placehold.co/300x300/e2e8f0/1e293b?text=Mouse",
      rating: 4,
      reviews: 1243,
      orders: 2800,
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
              <BreadcrumbPage>Electronics</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="flex items-center justify-between mt-6 mb-8">
          <h1 className="text-3xl font-bold">Electronics</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Sort
            </Button>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="group">
              <Card className="overflow-hidden dark:product-card-dark product-card dark:bg-gray-800/50">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-4">
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
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Electronics;
