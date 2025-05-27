"use client";

import { motion } from "framer-motion";
import { Clock, Truck, Award, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Clock className="h-10 w-10" />,
    title: "Pengiriman Cepat",
    description: "Pesanan Anda akan diantar dengan cepat ke lokasi tujuan, masih hangat dan lezat."
  },
  {
    icon: <Truck className="h-10 w-10" />,
    title: "Gratis Ongkir",
    description: "Nikmati gratis biaya pengiriman untuk pesanan di atas Rp100.000 dalam radius 5km."
  },
  {
    icon: <Award className="h-10 w-10" />,
    title: "Kualitas Terjamin",
    description: "Semua makanan dibuat dengan bahan berkualitas dan diolah dengan standar kebersihan yang ketat."
  },
  {
    icon: <ShieldCheck className="h-10 w-10" />,
    title: "Pembayaran Aman",
    description: "Berbagai metode pembayaran yang aman dan terpercaya untuk kenyamanan Anda."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export default function ValueProposition() {
  return (
    <section className="py-24 w-full bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Mengapa Memilih Kami?</h2>
          <p className="text-muted-foreground">
            Kami berkomitmen memberikan pengalaman pesan antar makanan terbaik dengan keunggulan-keunggulan berikut.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border/50 hover:border-primary/30 hover:shadow-md transition-all"
              variants={item}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}