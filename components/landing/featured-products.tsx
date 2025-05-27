"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Plus, ArrowRight } from "lucide-react";
import Link from "next/link";

// Sample product data
const featuredProducts = [
  {
    id: 1,
    name: "Nasi Goreng Spesial",
    description: "Nasi goreng dengan telur, ayam, dan sayuran segar",
    price: 35000,
    rating: 4.8,
    reviewCount: 124,
    image: "https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    badge: "Terlaris",
    category: "Makanan Utama"
  },
  {
    id: 2,
    name: "Ayam Bakar Madu",
    description: "Ayam bakar dengan saus madu spesial dan lalapan",
    price: 45000,
    rating: 4.7,
    reviewCount: 98,
    image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    badge: "Favorit",
    category: "Makanan Utama"
  },
  {
    id: 3,
    name: "Sate Ayam",
    description: "Sate ayam dengan bumbu kacang khas Indonesia",
    price: 30000,
    rating: 4.9,
    reviewCount: 156,
    image: "https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    badge: "Rekomendasi",
    category: "Makanan Ringan"
  },
  {
    id: 4,
    name: "Es Teh Manis",
    description: "Teh manis dingin dengan es batu yang menyegarkan",
    price: 10000,
    rating: 4.6,
    reviewCount: 87,
    image: "https://images.pexels.com/photos/792613/pexels-photo-792613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    badge: "Minuman",
    category: "Minuman"
  }
];

export default function FeaturedProducts() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Animation variants for cards
  const cardVariants = {
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    },
    initial: {
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="py-24 w-full bg-muted/30">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Menu Favorit</h2>
            <p className="text-muted-foreground max-w-2xl">
              Jelajahi menu favorit pelanggan kami dengan rasa yang lezat dan penyajian yang menggugah selera.
            </p>
          </div>
          <Button variant="ghost" className="mt-4 md:mt-0 group" asChild>
            <Link href="/katalog">
              Lihat Semua Menu
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              initial="initial"
              animate={hoveredId === product.id ? "hover" : "initial"}
              whileHover="hover"
              onHoverStart={() => setHoveredId(product.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="h-full"
            >
              <Card className="h-full overflow-hidden border-border/50 group hover:border-primary/50 transition-colors">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {product.badge && (
                    <Badge className="absolute top-3 right-3 bg-primary">
                      {product.badge}
                    </Badge>
                  )}
                </div>
                <CardContent className="pt-6">
                  <div className="text-xs text-muted-foreground mb-2">
                    {product.category}
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center space-x-1 mb-2">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-medium text-sm">{product.rating}</span>
                    <span className="text-muted-foreground text-xs">
                      ({product.reviewCount} ulasan)
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="font-bold">{formatPrice(product.price)}</span>
                  <Button size="sm" variant="default">
                    <Plus className="h-4 w-4 mr-1" /> Tambah
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}