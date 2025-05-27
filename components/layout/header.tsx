"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X, Home, Utensils, Users, Phone, Sun, Moon } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link 
          href="/" 
          className="text-2xl font-bold flex items-center gap-2"
        >
          <Utensils className="h-6 w-6" />
          <span>Pesan Yuk</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <Link href="/" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent">
            Beranda
          </Link>
          <Link href="/katalog" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent">
            Katalog
          </Link>
          <Link href="/tim" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent">
            Tim Kami
          </Link>
          <Link href="/kontak" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent">
            Kontak
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <ModeToggle />
          <Button variant="outline" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button>Pesan Sekarang</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden gap-2">
          <ModeToggle />
          <Button variant="outline" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-md p-4">
          <nav className="flex flex-col space-y-2">
            <Link 
              href="/" 
              className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Home className="h-4 w-4" />
              <span>Beranda</span>
            </Link>
            <Link 
              href="/katalog" 
              className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Utensils className="h-4 w-4" />
              <span>Katalog</span>
            </Link>
            <Link 
              href="/tim" 
              className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Users className="h-4 w-4" />
              <span>Tim Kami</span>
            </Link>
            <Link 
              href="/kontak" 
              className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone className="h-4 w-4" />
              <span>Kontak</span>
            </Link>
            <Button 
              className="w-full mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pesan Sekarang
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}