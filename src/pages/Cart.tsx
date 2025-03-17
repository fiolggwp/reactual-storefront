
import React, { useState } from 'react';
import { Trash2, ShoppingBag, Plus, Minus, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Беспроводные наушники Neo X9',
      price: 12990,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=300&auto=format&fit=crop'
    },
    {
      id: '2',
      name: 'Смартфон Galaxy Ultra',
      price: 89990,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=300&auto=format&fit=crop'
    }
  ]);

  const updateQuantity = (id: string, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeFromCart = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex items-center mb-6">
          <Link to="/" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" />
            <span>Вернуться к покупкам</span>
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-8 neon-text">Корзина</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {cartItems.length > 0 ? (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:neon-border transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="flex items-center p-4">
                        <div className="w-20 h-20 rounded-md overflow-hidden mr-4">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        
                        <div className="flex-grow">
                          <h3 className="font-medium text-lg">{item.name}</h3>
                          <p className="text-primary font-bold">{item.price.toLocaleString()} ₽</p>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Button 
                            variant="outline" 
                            size="icon"
                            onClick={() => updateQuantity(item.id, -1)}
                            className="rounded-full hover:bg-primary/20"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          
                          <span className="w-8 text-center">{item.quantity}</span>
                          
                          <Button 
                            variant="outline" 
                            size="icon"
                            onClick={() => updateQuantity(item.id, 1)}
                            className="rounded-full hover:bg-primary/20"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="ml-4 text-lg font-bold">
                          {(item.price * item.quantity).toLocaleString()} ₽
                        </div>
                        
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => removeFromCart(item.id)}
                          className="ml-4 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-medium mb-2">Ваша корзина пуста</h3>
                <p className="text-muted-foreground mb-6">Добавьте товары, чтобы продолжить покупки</p>
                <Link to="/electronics">
                  <Button className="hover-glow">
                    Перейти к товарам
                  </Button>
                </Link>
              </div>
            )}
          </div>
          
          <div>
            <Card className="dark:glass-dark glass sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Итого</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Товары ({cartItems.length})</span>
                    <span>{totalPrice.toLocaleString()} ₽</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Доставка</span>
                    <span>Бесплатно</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>Итого</span>
                    <span className="text-primary">{totalPrice.toLocaleString()} ₽</span>
                  </div>
                </div>
                
                <Button className="w-full mt-6 hover-glow">
                  Оформить заказ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
