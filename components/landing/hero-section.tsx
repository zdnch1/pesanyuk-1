"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const whatsappLink = "https://wa.me/6289519128492?text=uji coba tombol pesan";

  return (
    <section className="w-full min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Loading Animation */}
      {isLoading && (
        <motion.div
          className="absolute inset-0 bg-background z-10 flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          onAnimationComplete={() => setIsLoading(false)}
        >
          <motion.div
            className="flex items-center space-x-2"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <motion.span
              className="text-3xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Pesan Yuk
            </motion.span>
          </motion.div>
        </motion.div>
      )}

      {/* Hero Content */}
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Nikmati Hidangan Lezat Langsung ke{" "}
            <span className="text-primary">Rumah Anda</span>
          </motion.h1>
          
          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            Temukan ragam kuliner terbaik dari restoran lokal favorit. Pesan dengan mudah, diantar dengan cepat.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <Button size="lg" className="group" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Pesan Sekarang
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/katalog">
                Lihat Menu
              </a>
            </Button>
          </motion.div>
          
          <motion.div
            className="flex items-center space-x-6 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            <div className="flex flex-col">
              <span className="text-3xl font-bold">15+</span>
              <span className="text-sm text-muted-foreground">Restoran Mitra</span>
            </div>
            <div className="h-12 border-l border-border"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold">250+</span>
              <span className="text-sm text-muted-foreground">Menu Tersedia</span>
            </div>
            <div className="h-12 border-l border-border"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold">30K+</span>
              <span className="text-sm text-muted-foreground">Pelanggan Puas</span>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <Image
            src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Hidangan lezat"
            fill
            className="object-cover rounded-lg"
            priority
          />
          
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
}