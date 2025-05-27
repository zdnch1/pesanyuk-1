import { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/kontak/contact-form";
import ContactInfo from "@/components/kontak/contact-info";

export const metadata: Metadata = {
  title: "Kontak - Pesan Yuk",
  description: "Hubungi kami untuk pertanyaan, bantuan, atau kerjasama",
};

export default function KontakPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      <div className="w-full py-8 bg-muted/30">
        <div className="container">
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-bold">Kontak</h1>
            <div className="flex items-center text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">
                Beranda
              </Link>
              <span className="mx-2">/</span>
              <span>Kontak</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </main>
  );
}