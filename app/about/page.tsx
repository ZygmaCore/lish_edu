'use client';

import React from 'react';
import { Users, Award, Clock, Target, BookOpen, Zap } from 'lucide-react';

export default function About() {
  const stats = [
    { number: "5000+", label: "Siswa Bahagia", icon: <Users className="w-6 h-6" /> },
    { number: "98%", label: "Tingkat Keberhasilan", icon: <Award className="w-6 h-6" /> },
    { number: "10+", label: "Tahun Pengalaman", icon: <Clock className="w-6 h-6" /> },
    { number: "50+", label: "Pengajar Ahli", icon: <Target className="w-6 h-6" /> }
  ];

  const values = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Keunggulan dalam Pendidikan",
      description: "Kami menjaga standar tertinggi dalam pendidikan Bahasa Inggris dengan metode pengajaran terkini."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Pendekatan Berpusat pada Siswa",
      description: "Setiap program disesuaikan dengan gaya belajar dan tujuan karir masing-masing individu."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Inovasi & Teknologi",
      description: "Menggunakan teknologi pendidikan terbaru untuk meningkatkan pengalaman belajar Anda."
    }
  ];

  return (
    <div className="theme-blue min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-blue-800/20"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-float"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Tentang
            <span className="block bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent">
              Lish Edu
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Menghadirkan masa depan pendidikan Bahasa Inggris untuk para profesional muda yang ambisius melalui metode pengajaran inovatif dan pengalaman belajar yang dipersonalisasi.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="card-3d text-center p-8 rounded-2xl glassmorphism hover:bg-blue-500/10 transition-all duration-500 border border-blue-500/20 group"
              >
                <div className="text-blue-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">{stat.number}</div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Kisah <span className="text-blue-400">Kami</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Didirikan pada tahun 2014, Lish Edu bermula dari sebuah visi sederhana namun kuat: merevolusi pendidikan Bahasa Inggris untuk generasi modern. Kami menyadari bahwa metode pembelajaran bahasa tradisional tidak lagi relevan bagi para profesional muda yang ambisius.
                </p>
                <p>
                  Kini, kami bangga berada di garis depan pendidikan Bahasa Inggris yang inovatif, menggabungkan teknologi canggih dengan metode pedagogi yang terbukti efektif. Lulusan kami bekerja di perusahaan multinasional ternama, melanjutkan studi ke luar negeri, dan percaya diri dalam komunikasi bisnis global.
                </p>
                <p>
                  Yang membedakan kami adalah komitmen kami untuk menciptakan lingkungan belajar eksklusif dan premium, di mana setiap siswa mendapatkan perhatian dan dukungan yang dipersonalisasi untuk mencapai tujuan berbahasa Inggris mereka.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="glassmorphism rounded-2xl p-8 border border-blue-500/20">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                  alt="Kelas Bahasa Inggris modern"
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <blockquote className="text-lg text-gray-300 italic">
                  "Di Lish Edu, kami tidak hanya mengajar Bahasa Inggris – kami memberdayakan mimpi dan membuka peluang global."
                </blockquote>
                <cite className="block mt-4 text-blue-400 font-semibold">- Sarah Johnson, Pendiri & CEO</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nilai-Nilai <span className="text-blue-400">Kami</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Prinsip yang membimbing semua hal yang kami lakukan di Lish Edu
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="card-3d p-8 rounded-2xl glassmorphism hover:bg-blue-500/10 transition-all duration-500 border border-blue-500/20 text-center group"
              >
                <div className="text-blue-400 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tim <span className="text-blue-400">Ahli Kami</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Pengajar kelas dunia yang berdedikasi untuk kesuksesan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Michael Chen",
                role: "Kepala Kurikulum",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
                credentials: "PhD Linguistik Terapan, Oxford University"
              },
              {
                name: "Sarah Johnson",
                role: "Pendiri & CEO",
                image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
                credentials: "MA TESOL, Cambridge University"
              },
              {
                name: "James Wilson",
                role: "Instruktur Senior",
                image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
                credentials: "Sertifikat CELTA, Pengalaman 15+ tahun"
              }
            ].map((member, index) => (
              <div
                key={index}
                className="card-3d glassmorphism rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 group"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.credentials}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
