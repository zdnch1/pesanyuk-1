"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

export default function ContactInfo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-6">Informasi Kontak</h2>
        <p className="text-muted-foreground mb-8">
          Kami siap membantu Anda. Silakan hubungi kami melalui salah satu kanal komunikasi berikut atau kunjungi kantor kami.
        </p>
      </motion.div>

      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex items-start space-x-4"
          variants={itemVariants}
        >
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-bold mb-1">Alamat Kantor</h3>
            <p className="text-muted-foreground">
              Jl. Jenderal Sudirman No. 123<br />
              Jakarta Pusat, DKI Jakarta<br />
              Indonesia 10220
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex items-start space-x-4"
          variants={itemVariants}
        >
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Phone className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-bold mb-1">Telepon</h3>
            <p className="text-muted-foreground">
              +62 812 3456 7890 (Layanan Pelanggan)<br />
              +62 21 1234 5678 (Kantor Pusat)
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex items-start space-x-4"
          variants={itemVariants}
        >
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Mail className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-bold mb-1">Email</h3>
            <p className="text-muted-foreground">
              info@pesanyuk.id (Informasi Umum)<br />
              bantuan@pesanyuk.id (Layanan Pelanggan)<br />
              karir@pesanyuk.id (Lowongan Kerja)
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex items-start space-x-4"
          variants={itemVariants}
        >
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Clock className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-bold mb-1">Jam Operasional</h3>
            <p className="text-muted-foreground">
              Senin - Jumat: 08:00 - 20:00 WIB<br />
              Sabtu: 09:00 - 18:00 WIB<br />
              Minggu: 10:00 - 16:00 WIB
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex items-start space-x-4"
          variants={itemVariants}
        >
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <MessageSquare className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-bold mb-1">Live Chat</h3>
            <p className="text-muted-foreground">
              Tersedia di aplikasi Pesan Yuk<br />
              Setiap hari: 07:00 - 22:00 WIB
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-12 pt-8 border-t border-border"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <h3 className="font-bold mb-4">Lokasi Kami</h3>
        <div className="w-full h-[300px] bg-muted rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4688505693166!2d106.82184707570484!3d-6.195299393781432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f421963cd607%3A0x503cb9e9306e657a!2sJl.%20Jend.%20Sudirman%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sen!2sid!4v1713884427058!5m2!1sen!2sid"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
}