import Link from "next/link";
import { Metadata } from "next";
import ProductCatalog from "@/components/katalog/product-catalog";

export const metadata: Metadata = {
  title: "Katalog - Pesan Yuk",
  description: "Jelajahi berbagai pilihan makanan lezat dari restoran terbaik",
};

export default function KatalogPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      <div className="w-full py-8 bg-muted/30">
        <div className="container">
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-bold">Katalog Menu</h1>
            <div className="flex items-center text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">
                Beranda
              </Link>
              <span className="mx-2">/</span>
              <span>Katalog</span>
            </div>
          </div>
        </div>
      </div>
      <ProductCatalog />
    </main>
  );
}