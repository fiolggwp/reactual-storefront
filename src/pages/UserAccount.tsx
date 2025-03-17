
import React, { useState } from 'react';
import { User, Package, Heart, Settings, LogOut, CreditCard, MapPin, Bell } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import Navbar from '@/components/Navbar';

const UserAccount = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-3xl font-bold mb-8 neon-text">Личный кабинет</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <Card className="lg:col-span-1 h-fit sticky top-24 dark:glass-dark glass">
            <CardContent className="p-6">
              <div className="flex flex-col items-center mb-6">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-4 border-2 border-primary">
                  <User className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold text-lg">Александр Петров</h3>
                <p className="text-muted-foreground">alex@example.com</p>
              </div>
              
              <Separator className="my-4" />
              
              <nav className="space-y-2">
                <Button 
                  variant={activeTab === 'profile' ? 'default' : 'ghost'} 
                  className="w-full justify-start gap-3" 
                  onClick={() => setActiveTab('profile')}
                >
                  <User className="h-4 w-4" />
                  Профиль
                </Button>
                <Button 
                  variant={activeTab === 'orders' ? 'default' : 'ghost'} 
                  className="w-full justify-start gap-3"
                  onClick={() => setActiveTab('orders')}
                >
                  <Package className="h-4 w-4" />
                  Заказы
                </Button>
                <Button 
                  variant={activeTab === 'favorites' ? 'default' : 'ghost'} 
                  className="w-full justify-start gap-3"
                  onClick={() => setActiveTab('favorites')}
                >
                  <Heart className="h-4 w-4" />
                  Избранное
                </Button>
                <Button 
                  variant={activeTab === 'settings' ? 'default' : 'ghost'} 
                  className="w-full justify-start gap-3"
                  onClick={() => setActiveTab('settings')}
                >
                  <Settings className="h-4 w-4" />
                  Настройки
                </Button>
                
                <Separator className="my-2" />
                
                <Button variant="ghost" className="w-full justify-start gap-3 text-destructive hover:text-destructive hover:bg-destructive/10">
                  <LogOut className="h-4 w-4" />
                  Выйти
                </Button>
              </nav>
            </CardContent>
          </Card>
          
          <div className="lg:col-span-3">
            {activeTab === 'profile' && (
              <Card>
                <CardHeader>
                  <CardTitle>Персональные данные</CardTitle>
                  <CardDescription>Обновите ваши персональные данные и контакты</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium">Имя</label>
                        <Input id="firstName" defaultValue="Александр" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium">Фамилия</label>
                        <Input id="lastName" defaultValue="Петров" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <Input id="email" type="email" defaultValue="alex@example.com" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">Телефон</label>
                        <Input id="phone" defaultValue="+7 (999) 123-45-67" />
                      </div>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div className="flex flex-wrap gap-4">
                      <Button className="hover-glow">Сохранить изменения</Button>
                      <Button variant="outline">Отмена</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}
            
            {activeTab === 'orders' && (
              <Card>
                <CardHeader>
                  <CardTitle>История заказов</CardTitle>
                  <CardDescription>Просмотр ваших прошлых и текущих заказов</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[500px] pr-4">
                    <div className="space-y-4">
                      {[1, 2, 3, 4, 5].map((order) => (
                        <Card key={order} className="hover:neon-border transition-all duration-300">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-bold">Заказ #{order + 10235}</span>
                              <span className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary">Доставлен</span>
                            </div>
                            <div className="flex flex-wrap justify-between text-sm mb-4">
                              <span className="text-muted-foreground">Дата: {new Date(2023, 10 - order, 15).toLocaleDateString()}</span>
                              <span className="font-medium">{(12990 * order).toLocaleString()} ₽</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground text-sm">
                              <Package className="h-4 w-4" />
                              <span>{order * 2} товара</span>
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2">
                              <Button variant="outline" size="sm">Подробнее</Button>
                              <Button variant="ghost" size="sm">Повторить заказ</Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            )}
            
            {activeTab === 'favorites' && (
              <Card>
                <CardHeader>
                  <CardTitle>Избранные товары</CardTitle>
                  <CardDescription>Товары, которые вы добавили в избранное</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <Card key={item} className="overflow-hidden hover:neon-border transition-all duration-300">
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={`https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&auto=format&fit=crop&q=80&crop=entropy`} 
                            alt="Product" 
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-medium mb-1 truncate">Беспроводные наушники Pro X{item}</h3>
                          <p className="text-primary font-bold mb-3">{(5990 + item * 1000).toLocaleString()} ₽</p>
                          <div className="flex justify-between gap-2">
                            <Button variant="outline" size="sm" className="flex-1">В корзину</Button>
                            <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600 hover:bg-red-100/10">
                              <Heart className="h-4 w-4 fill-current" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
            
            {activeTab === 'settings' && (
              <Card>
                <CardHeader>
                  <CardTitle>Настройки аккаунта</CardTitle>
                  <CardDescription>Управление настройками аккаунта и уведомлениями</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="security">
                    <TabsList className="mb-6">
                      <TabsTrigger value="security">Безопасность</TabsTrigger>
                      <TabsTrigger value="payments">Платежи</TabsTrigger>
                      <TabsTrigger value="notifications">Уведомления</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="security">
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label htmlFor="current-password" className="text-sm font-medium">Текущий пароль</label>
                          <Input id="current-password" type="password" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="new-password" className="text-sm font-medium">Новый пароль</label>
                          <Input id="new-password" type="password" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="confirm-password" className="text-sm font-medium">Подтвердите пароль</label>
                          <Input id="confirm-password" type="password" />
                        </div>
                        
                        <Button className="hover-glow">Обновить пароль</Button>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="payments">
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <CreditCard className="h-10 w-10 text-primary" />
                          <div>
                            <h3 className="font-medium">Способы оплаты</h3>
                            <p className="text-muted-foreground text-sm">Управляйте своими способами оплаты</p>
                          </div>
                        </div>
                        
                        <Card>
                          <CardContent className="p-4 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                                V
                              </div>
                              <div>
                                <p className="font-medium">Visa •••• 4242</p>
                                <p className="text-muted-foreground text-xs">Срок действия: 12/25</p>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm">Удалить</Button>
                          </CardContent>
                        </Card>
                        
                        <Button variant="outline" className="gap-2">
                          <CreditCard className="h-4 w-4" />
                          Добавить способ оплаты
                        </Button>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="notifications">
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <Bell className="h-10 w-10 text-primary" />
                          <div>
                            <h3 className="font-medium">Настройки уведомлений</h3>
                            <p className="text-muted-foreground text-sm">Настройте, какие уведомления вы хотите получать</p>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          {['Обновления статуса заказа', 'Акции и скидки', 'Новые поступления', 'Отзывы на ваши комментарии'].map((item, i) => (
                            <Card key={i}>
                              <CardContent className="p-4 flex justify-between items-center">
                                <span>{item}</span>
                                <div className="flex gap-3">
                                  <label className="flex items-center gap-2">
                                    <input type="checkbox" className="accent-primary" defaultChecked={i < 2} />
                                    <span className="text-sm">Email</span>
                                  </label>
                                  <label className="flex items-center gap-2">
                                    <input type="checkbox" className="accent-primary" defaultChecked />
                                    <span className="text-sm">Push</span>
                                  </label>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                        
                        <Button className="hover-glow">Сохранить настройки</Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserAccount;
