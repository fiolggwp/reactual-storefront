
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, Heart, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ThemeToggle from '@/components/ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg dark:glass-dark glass border-b border-border/40">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold neon-text">НеоТех</span>
        </Link>
        
        {/* Search bar - hidden on mobile */}
        <div className="hidden md:flex flex-1 mx-6 max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Поиск товаров..."
              className="w-full pl-8 pr-4 rounded-full h-9"
            />
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <Link to="/electronics" className="text-muted-foreground hover:text-primary transition-colors">
            Электроника
          </Link>
          <Link to="/favorites" className="text-muted-foreground hover:text-primary transition-colors">
            Избранное
          </Link>
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon" className="hover:bg-primary/20">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </Button>
          </Link>
          <Link to="/account" >
            <Button variant="ghost" size="icon" className="hover:bg-primary/20">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <ThemeToggle />
        </nav>
        
        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon" className="hover:bg-primary/20">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </Button>
          </Link>
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/40 backdrop-blur-lg dark:glass-dark glass">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <div className="relative w-full mb-2">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Поиск товаров..."
                className="w-full pl-8 pr-4 rounded-full h-9"
              />
            </div>
            <Link 
              to="/electronics" 
              className="px-2 py-2 hover:bg-primary/20 rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Электроника
            </Link>
            <Link 
              to="/favorites"
              className="px-2 py-2 hover:bg-primary/20 rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Избранное
            </Link>
            <Link 
              to="/account" 
              className="px-2 py-2 hover:bg-primary/20 rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Личный кабинет
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
