"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const teamMembers = [
  {
    id: 1,
    name: "Andi Wijaya",
    role: "CEO & Founder",
    bio: "Andi memiliki lebih dari 10 tahun pengalaman di industri kuliner dan teknologi. Sebelum mendirikan Pesan Yuk, ia bekerja sebagai konsultan manajemen restoran dan mengembangkan beberapa aplikasi kuliner yang sukses. Andi memiliki visi untuk menghubungkan pelanggan dengan kuliner terbaik melalui teknologi yang inovatif.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    contact: {
      email: "andi.wijaya@pesanyuk.id",
      phone: "+62 812 3456 7890",
      linkedin: "andiwijaya",
      github: "andiwijaya"
    },
    education: "S2 Manajemen Bisnis, Universitas Indonesia",
    skills: ["Kepemimpinan", "Manajemen Strategis", "Pengembangan Bisnis", "Pemasaran Digital"]
  },
  {
    id: 2,
    name: "Siti Rahmawati",
    role: "Chief Technology Officer",
    bio: "Siti adalah seorang insinyur perangkat lunak dengan keahlian dalam pengembangan aplikasi mobile dan web. Dia telah memimpin tim teknologi di beberapa startup sukses sebelum bergabung dengan Pesan Yuk. Keahliannya dalam arsitektur sistem dan pengalaman pengguna telah membantu Pesan Yuk menjadi platform yang handal dan mudah digunakan.",
    image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    contact: {
      email: "siti.rahmawati@pesanyuk.id",
      phone: "+62 812 3456 7891",
      linkedin: "sitirahmawati",
      github: "sitirahmawati"
    },
    education: "S1 Teknik Informatika, Institut Teknologi Bandung",
    skills: ["Pengembangan Web", "Pengembangan Mobile", "Cloud Architecture", "UI/UX Design"]
  },
  {
    id: 3,
    name: "Budi Santoso",
    role: "Chief Marketing Officer",
    bio: "Budi adalah ahli pemasaran digital dengan pengalaman luas dalam mengembangkan strategi pemasaran yang efektif untuk bisnis e-commerce dan aplikasi. Sebelumnya, ia bekerja di beberapa agensi pemasaran terkemuka dan memimpin kampanye untuk brand nasional. Budi berperan penting dalam membangun awareness dan pertumbuhan pengguna Pesan Yuk.",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    contact: {
      email: "budi.santoso@pesanyuk.id",
      phone: "+62 812 3456 7892",
      linkedin: "budisantoso",
      github: "budisantoso"
    },
    education: "S1 Manajemen Bisnis, Universitas Gadjah Mada",
    skills: ["Digital Marketing", "Brand Strategy", "Content Marketing", "Social Media Management"]
  },
  {
    id: 4,
    name: "Diana Putri",
    role: "Head of Operations",
    bio: "Diana memiliki pengalaman dalam operasional logistik dan manajemen rantai pasok. Ia bertanggung jawab atas efisiensi operasional dan memastikan pengiriman yang tepat waktu. Sebelum bergabung dengan Pesan Yuk, Diana bekerja di perusahaan logistik multinasional dan mengembangkan sistem yang meningkatkan efisiensi pengiriman.",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    contact: {
      email: "diana.putri@pesanyuk.id",
      phone: "+62 812 3456 7893",
      linkedin: "dianaputri",
      github: "dianaputri"
    },
    education: "S1 Manajemen Logistik, Universitas Diponegoro",
    skills: ["Manajemen Operasional", "Logistik", "Manajemen Rantai Pasok", "Analisis Data"]
  },
  {
    id: 5,
    name: "Reza Pratama",
    role: "Head of Partnerships",
    bio: "Reza fokus pada pengembangan kemitraan dengan restoran dan bisnis kuliner. Dia memiliki jaringan yang luas di industri makanan dan minuman, serta pengalaman dalam negosiasi bisnis. Berkat upayanya, Pesan Yuk kini bermitra dengan lebih dari 500 restoran di seluruh Indonesia.",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    contact: {
      email: "reza.pratama@pesanyuk.id",
      phone: "+62 812 3456 7894",
      linkedin: "rezapratama",
      github: "rezapratama"
    },
    education: "S1 Komunikasi Bisnis, Universitas Padjajaran",
    skills: ["Pengembangan Bisnis", "Negosiasi", "Manajemen Hubungan", "Komunikasi"]
  },
  {
    id: 6,
    name: "Maya Indah",
    role: "Lead UI/UX Designer",
    bio: "Maya adalah desainer UI/UX yang berpengalaman dengan fokus pada menciptakan pengalaman pengguna yang intuitif dan menarik. Dia telah merancang antarmuka untuk berbagai aplikasi mobile dan web. Desain yang dibuat oleh Maya telah membantu Pesan Yuk mencapai tingkat keterlibatan pengguna yang tinggi.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    contact: {
      email: "maya.indah@pesanyuk.id",
      phone: "+62 812 3456 7895",
      linkedin: "mayaindah",
      github: "mayaindah"
    },
    education: "S1 Desain Komunikasi Visual, Institut Teknologi Bandung",
    skills: ["UI Design", "UX Research", "Prototyping", "Visual Design"]
  }
];

export default function TeamGallery() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  const [visibleBio, setVisibleBio] = useState<number | null>(null);

  const toggleBio = (id: number) => {
    if (visibleBio === id) {
      setVisibleBio(null);
    } else {
      setVisibleBio(id);
    }
  };

  return (
    <section className="w-full py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Tim Profesional Kami</h2>
          <p className="text-muted-foreground">
            Kenali para ahli di balik layanan Pesan Yuk yang bekerja keras untuk memberikan pengalaman terbaik bagi pelanggan kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full border-border/50 hover:border-primary/50 transition-colors">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center transition-transform hover:scale-105 duration-300"
                  />
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-4">{member.role}</p>

                  <div className="mb-4">
                    <p className={`text-muted-foreground text-sm ${visibleBio === member.id ? '' : 'line-clamp-3'}`}>
                      {member.bio}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-2 h-8 px-2 text-xs"
                      onClick={() => toggleBio(member.id)}
                    >
                      {visibleBio === member.id ? (
                        <>
                          <ChevronUp className="h-3 w-3 mr-1" /> Lebih Sedikit
                        </>
                      ) : (
                        <>
                          <ChevronDown className="h-3 w-3 mr-1" /> Baca Selengkapnya
                        </>
                      )}
                    </Button>
                  </div>

                  <div className="flex space-x-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="default" size="sm" onClick={() => setSelectedMember(member.id)}>
                          Lihat Profil
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-lg">
                        <DialogHeader>
                          <DialogTitle>Profil Tim</DialogTitle>
                          <DialogDescription>
                            Informasi lengkap tentang anggota tim kami
                          </DialogDescription>
                        </DialogHeader>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                          <div className="relative h-40 md:h-full rounded-lg overflow-hidden">
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          
                          <div className="md:col-span-2 space-y-4">
                            <div>
                              <h3 className="text-xl font-bold">{member.name}</h3>
                              <p className="text-primary text-sm font-medium">{member.role}</p>
                            </div>
                            
                            <p className="text-sm text-muted-foreground">{member.bio}</p>
                            
                            <div>
                              <h4 className="text-sm font-medium mb-1">Pendidikan</h4>
                              <p className="text-sm text-muted-foreground">{member.education}</p>
                            </div>
                            
                            <div>
                              <h4 className="text-sm font-medium mb-1">Keahlian</h4>
                              <div className="flex flex-wrap gap-2">
                                {member.skills.map((skill, i) => (
                                  <span key={i} className="text-xs bg-muted px-2 py-1 rounded-md">
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="text-sm font-medium mb-1">Kontak</h4>
                              <div className="space-y-2">
                                <div className="flex items-center text-sm">
                                  <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                                  <span>{member.contact.email}</span>
                                </div>
                                <div className="flex items-center text-sm">
                                  <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                                  <span>{member.contact.phone}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <div className="flex space-x-1">
                      <Button variant="ghost" size="icon" className="h-9 w-9" aria-label="LinkedIn">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-9 w-9" aria-label="Email">
                        <Mail className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}