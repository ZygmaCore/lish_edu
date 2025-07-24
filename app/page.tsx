'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Users, Award, Globe, Sparkles, CheckCircle } from 'lucide-react'; // Added CheckCircle for lists

export default function Home() {
  const features = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Joyful Learning",
      description: "Belajar dengan cara yang menyenangkan dan interaktif"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Meaningful Method",
      description: "Materi dikaitkan dengan kehidupan nyata siswa"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certified Instructor",
      description: "Pengajar berpengalaman & bersertifikat"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Flexible Mode",
      description: "Kelas online & offline sesuai kebutuhanmu"
    }
  ];

  const courses = [
    {
      level: "All Ages",
      title: "Conversation Class",
      duration: "Flexible Schedule",
      price: "Rp 2,000,000",
      features: [
        "Dialog & Diskusi",
        "Roleplay & Simulasi Nyata",
        "Latihan Percakapan Aktif",
        "Suasana Belajar Santai"
      ],
      popular: true
    },
    {
      level: "12–17 tahun",
      title: "English for Teens",
      duration: "4 bulan",
      price: "Rp 3,000,000",
      features: [
        "Aktif Berbahasa Inggris",
        "Materi Relevan & Menarik",
        "Presentasi & Project",
        "Konteks Kehidupan Remaja"
      ]
    },
    {
      level: "17 tahun ke atas",
      title: "English for Adults",
      duration: "4 bulan",
      price: "Rp 3,000,000",
      features: [
        "Bahasa Inggris Praktis",
        "Interview & Travel Prep",
        "Komunikasi Bisnis",
        "Diskusi Tematik"
      ]
    },
    {
      level: "Test Prep",
      title: "TOEFL/TOEIC Preparation",
      duration: "2–3 bulan",
      price: "Rp 3,500,000",
      features: [
        "Strategi Soal Lengkap",
        "Simulasi Tes Asli",
        "Tips Meningkatkan Skor",
        "Pendekatan Terstruktur"
      ]
    },
    {
      level: "5–11 tahun",
      title: "English for Kids",
      duration: "Currently Unavailable",
      price: "–",
      features: [
        "Games & Lagu Interaktif",
        "Storytelling Seru",
        "Aktivitas Visual",
        "Latih Percaya Diri"
      ]
    }
  ];

  return (
    <div className="theme-red min-h-screen bg-gray-950 text-white font-sans relative overflow-hidden">
      {/* Global Background Gradients/Blobs - More subtle and pervasive */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-20">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-red-800 rounded-full mix-blend-multiply filter blur-3xl animate-blob-slow"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-red-700 rounded-full mix-blend-multiply filter blur-3xl animate-blob-delay"></div>
        <div className="absolute top-1/4 left-1/2 w-64 h-64 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob-fast"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-red-800/5"></div>
        {/* Floating elements for depth */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/5 rounded-full blur-3xl animate-float opacity-70"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-float opacity-70"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glassmorphism-subtle mb-8 border border-red-500/20 shadow-lg animate-fade-in-down">
            <Sparkles className="w-5 h-5 text-red-400" />
            <span className="text-sm text-red-300">"Dari Nggak Bisa, Jadi Luar Biasa!"</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
           Master English with
          <span className="block bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-500">
              Lish Edu
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Kursus Bahasa Inggris fleksibel, menyenangkan, dan bermakna untuk anak-anak, remaja, hingga dewasa.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-400">
            <Link
              href="/pricing"
              className="group px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 transition-all duration-300 glow-effect-red text-lg font-bold flex items-center justify-center space-x-2 transform hover:scale-105 active:scale-95 button-hover-shadow"
            >
              <span>Daftar Sekarang</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 rounded-xl border border-red-500/30 hover:bg-red-500/10 transition-all duration-300 text-lg font-semibold transform hover:scale-105 active:scale-95 button-hover-shadow"
            >
              Tentang Kami
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Kenapa Pilih <span className="text-red-400">Lish Edu?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in delay-200">
              Rasakan pengalaman belajar Bahasa Inggris yang benar-benar berbeda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-3d group p-8 rounded-2xl glassmorphism hover:bg-red-500/10 transition-all duration-500 border border-red-500/20 transform hover:-translate-y-2 hover:shadow-red-800/50 hover:shadow-xl feature-card-animation"
              >
                <div className="text-red-400 mb-4 group-hover:scale-110 transition-transform duration-300 feature-icon-bounce">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Program <span className="text-red-400">Kursus Unggulan</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in delay-200">
              Pilih program yang sesuai dengan kebutuhan dan usia kamu
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {courses.map((course, index) => (
              <div
                key={index}
                className={`relative flex flex-col h-full rounded-2xl border glassmorphism p-8 transition-all duration-300 hover:shadow-2xl course-card-animation ${
                  course.popular
                    ? 'border-red-400/60 bg-red-500/15 shadow-red-500/30'
                    : 'border-red-500/20 hover:border-red-400/40 hover:bg-red-500/5'
                }`}
              >
                {course.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 popular-badge-animation">
                    <div className="px-4 py-1 text-sm font-semibold bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full shadow-md">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="mb-2 text-sm font-semibold text-red-300">{course.level}</div>  
                <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-300">{course.duration}</span>
                  <span className="text-red-400 text-lg font-semibold">{course.price}</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {course.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5 icon-pop-in" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/pricing"
                  className="mt-auto block w-full text-center py-3 rounded-lg bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 transition-all duration-300 text-white font-semibold transform hover:scale-[1.02] active:scale-95 button-hover-shadow"
                >
                  Daftar Sekarang
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Method Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-red-900/5 via-black/5 to-red-900/5 relative overflow-hidden z-10">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-red-500/5 rounded-full blur-3xl animate-float opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-float-slow opacity-50"></div>

        <div className="relative max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent animate-fade-in">
            Joyful, Meaningful, Mindful
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in delay-200">
            Kami merancang setiap sesi belajar agar tidak hanya menyenangkan, tetapi juga membentuk kebiasaan berpikir kritis dan percaya diri menggunakan Bahasa Inggris dalam kehidupan nyata.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
            {[
              "Rasa percaya diri meningkat",
              "Materi dikaitkan dengan kehidupan nyata",
              "Belajar kritis & kreatif"
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-4 bg-white/5 hover:bg-white/10 transition-all duration-300 p-5 rounded-xl border border-red-500/10 transform hover:scale-[1.02] hover:shadow-lg method-card-animation"
              >
                <div className="w-4 h-4 mt-1 bg-red-400 rounded-full flex-shrink-0 shadow-md animate-pulse-dot"></div>
                <p className="text-gray-200 text-md leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-24 px-4 relative bg-gradient-to-br from-black/5 via-red-900/5 to-black/5 overflow-hidden z-10">
        {/* Floating Backgrounds */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-red-600/5 rounded-full blur-3xl animate-float opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-float-slow opacity-60"></div>

        <div className="relative max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-10 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent animate-fade-in">
            Jadwal Kelas
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-gray-200 text-left">
            {/* Online Class */}
            <div className="group p-6 rounded-2xl border border-red-500/30 bg-white/5 hover:bg-red-500/10 transition-all duration-300 shadow-lg backdrop-blur schedule-card-animation transform hover:scale-[1.02]">
              <div className="flex items-center mb-4 space-x-3">
                <div className="text-red-400 text-2xl icon-scale-on-hover">💻</div>
                <h3 className="text-xl font-semibold text-white group-hover:text-red-200 transition-colors duration-300">
                  Kelas Online (Senin–Jumat)
                </h3>
              </div>
              <p className="mb-2">🕖 <span className="text-gray-300">19.00 – 21.00 WIB</span></p>
              <p>📍 <span className="text-gray-300">2x seminggu – via Zoom / Google Meet</span></p>
            </div>

            {/* Offline Class */}
            <div className="group p-6 rounded-2xl border border-red-500/30 bg-white/5 hover:bg-red-500/10 transition-all duration-300 shadow-lg backdrop-blur schedule-card-animation transform hover:scale-[1.02]">
              <div className="flex items-center mb-4 space-x-3">
                <div className="text-red-400 text-2xl icon-scale-on-hover">🏫</div>
                <h3 className="text-xl font-semibold text-white group-hover:text-red-200 transition-colors duration-300">
                  Kelas Offline (Sabtu)
                </h3>
              </div>
              <p className="mb-2">🕛 <span className="text-gray-300">12.00 – 20.00 WIB</span></p>
              <p>📍 <span className="text-gray-300">1x seminggu – Koopi Homey Cafe</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-red-800/10"></div>
        <div className="relative max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Siap Belajar Bahasa Inggris Sekarang?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Yuk gabung bersama ribuan siswa lainnya yang sudah berkembang bersama Lish Edu.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 transition-all duration-300 glow-effect-red text-lg font-semibold transform hover:scale-105 active:scale-95 button-hover-shadow"
          >
            <span>Daftar Sekarang</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  );
}