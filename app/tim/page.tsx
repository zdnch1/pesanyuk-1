import { Metadata } from "next";
import Link from "next/link";
import TeamGallery from "@/components/tim/team-gallery";

export const metadata: Metadata = {
  title: "Tim Kami - Pesan Yuk",
  description: "Kenali tim profesional di balik layanan Pesan Yuk",
};

export default function TimPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      <div className="w-full py-8 bg-muted/30">
        <div className="container">
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-bold">Tim Kami</h1>
            <div className="flex items-center text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">
                Beranda
              </Link>
              <span className="mx-2">/</span>
              <span>Tim Kami</span>
            </div>
          </div>
        </div>
      </div>
      <TeamGallery />
    </main>
  );
}