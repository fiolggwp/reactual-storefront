
import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user has a theme preference saved
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
      toast({
        title: "Light Mode активирован",
        description: "Интерфейс переключен на светлую тему",
        duration: 2000,
      });
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
      toast({
        title: "Dark Mode активирован",
        description: "Интерфейс переключен на темную тему с неоновыми акцентами",
        duration: 2000,
      });
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full hover:bg-accent/10 transition-all duration-300 relative overflow-hidden group"
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-amber-300 transition-all duration-500 ease-out hover:rotate-45 group-hover:scale-110" />
      ) : (
        <Moon className="h-5 w-5 text-purple-600 transition-all duration-500 ease-out hover:-rotate-12 group-hover:scale-110" />
      )}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 group-hover:animate-pulse-neon transition-opacity duration-300"></span>
      <span className="sr-only">Переключить тему</span>
    </Button>
  );
};

export default ThemeToggle;
