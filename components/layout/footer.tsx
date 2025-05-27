import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-muted pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Pesan Yuk</h3>
            <p className="text-sm text-muted-foreground">
              Layanan pesan antar makanan terbaik dengan berbagai pilihan menu dari restoran-restoran terpercaya.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Youtube">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Tautan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/katalog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Katalog
                </Link>
              </li>
              <li>
                <Link href="/tim" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Tim Kami
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Kontak
                </Link>
              </li>
              <li>
                <Link href="/syarat-ketentuan" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Syarat & Ketentuan
                </Link>
              </li>
              <li>
                <Link href="/kebijakan-privasi" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Kebijakan Privasi
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Jl. Jenderal Sudirman No. 123, Jakarta Pusat, DKI Jakarta
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  +62 812 3456 7890
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  info@pesanyuk.id
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Berlangganan</h3>
            <p className="text-sm text-muted-foreground">
              Dapatkan informasi terbaru tentang promo dan menu baru.
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Email Anda" 
                className="max-w-[220px]" 
              />
              <Button type="submit">Kirim</Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Pesan Yuk. Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center space-x-4">
            <Link href="/bantuan" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Bantuan
            </Link>
            <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </Link>
            <Link href="/dukungan" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Dukungan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}