'use client';

import React from 'react';
import Link from 'next/link';
import { Check, Star, Zap, Crown } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Online Class",
      price: "350,000",
      duration: "2x seminggu (1x pertemuan = 1 jam)",
      description: "",
      features: [
        "Hari Senin – Jumat",
        "19.00 – 21.00 WIB",
        "Belajar dari rumah dengan tetap seru dan interaktif via Zoom/Google Meet!"
      ],
      icon: <Star className="w-8 h-8" />,
      popular: false
    },
    {
      name: "Offline Class",
      price: "350,000",
      duration: "1x seminggu (1 pertemuan = 1,5 jam)", 
      description: "",
      features: [
        "Hari Sabtu",
        "12.00 – 20.00 WIB",
        "Kelas tatap muka dengan fasilitas nyaman dan suasana menyenangkan di Koopi Homey Cafe",
      ],
      icon: <Star className="w-8 h-8" />,
      popular: false
    }
  ];

  const addOns = [
    {
      name: "English for Kids (Usia 5–11 tahun) – (Not Available during 2025)",
      description: "Belajar Bahasa Inggris jadi petualangan seru! Anak-anak akan diajak mengenal Bahasa Inggris melalui games interaktif, lagu, cerita, dan aktivitas seru lainnya. Kelas ini melatih anak untuk lebih percaya diri berbicara dalam Bahasa Inggris sejak dini."
    },
    {
      name: "English for Teens (Usia 12–17 tahun)",
      description: "Remaja butuh lebih dari sekadar hafalan grammar. Di kelas ini, mereka akan belajar bagaimana menggunakan Bahasa Inggris secara aktif dalam kehidupan sehari-hari, tugas sekolah, hingga presentasi. Disajikan dengan metode yang engaging dan relevan dengan dunia mereka."
    },
    {
      name: "English for Adults (17 tahun ke atas)",
      description: "Apakah kamu ingin lancar berbicara untuk kerja, interview, studi, atau traveling? Kelas dewasa kami dirancang agar kamu bisa berkomunikasi dengan percaya diri, dengan pendekatan praktis dan langsung bisa dipakai dalam situasi nyata."
    },
    {
      name: "Conversation Class (All ages)",
      description: "Latihan speaking secara aktif dalam suasana santai, tanpa takut salah! Kelas ini cocok untuk semua usia yang ingin memperlancar kemampuan berbicara dalam Bahasa Inggris melalui dialog, diskusi, roleplay, dan simulasi kehidupan nyata."
    },
    {
      name: "TOEFL/TOEIC Preparation",
      description: "Siapkan dirimu menghadapi tes internasional dengan strategi yang terstruktur dan latihan yang terarah. Kami bantu kamu memahami format soal, meningkatkan skor, dan menghadapi ujian dengan lebih siap."
    }
  ];

  return (
    <div className="theme-yellow min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/30 via-transparent to-yellow-800/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl animate-float"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Investasi untuk Kesuksesan
            <span className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
            Masa Depan Anda</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Pilih program yang tepat untuk mempercepat penguasaan bahasa Inggris Anda dan membuka peluang global.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4 relative">
        <div className="max-w-9xl mx-auto ">
        <div className="grid md:grid-cols-2 gap-8 justify-center">
        {plans.map((plan, index) => (
              <div
                key={index}
                className={`card-3d relative p-8 mx-auto rounded-2xl glassmorphism transition-all duration-500 border ${
                  plan.popular 
                    ? 'border-yellow-400/50 bg-yellow-500/10 scale-105' 
                    : 'border-yellow-500/20 hover:border-yellow-400/40'
                } hover:shadow-2xl hover:shadow-yellow-500/20`}
              >

                
                <div className="text-center mb-8">
                  <div className="text-yellow-400 mb-4 flex justify-center">
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-yellow-400 mb-2">
                    Rp {plan.price}
                  </div>
                  <div className="text-gray-400">{plan.duration} program</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/contact"
                  className={`block w-full py-4 rounded-lg text-center font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 glow-effect'
                      : 'bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600'
                  }`}
                >
                  Daftar Sekarang
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Program <span className="text-yellow-400">Lish Edu</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Beberapa program belajar dari Lish Edu
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="card-3d p-6 rounded-2xl glassmorphism hover:bg-yellow-500/10 transition-all duration-500 border border-yellow-500/20 group"
              >
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                  {addon.name}
                </h3>
                
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  {addon.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pertanyaan yang <span className="text-yellow-400"> Sering Diajukan</span>
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "Metode pembayaran apa saja yang Anda terima?",
                answer: "Kami menerima transfer bank, kartu kredit, dan cicilan demi kenyamanan Anda."
              },
              {
                question: "Bisakah saya mengganti program di tengah jalan?",
                answer: "Ya, Anda dapat meningkatkan program kapan saja."
              },
              {
                question: "Apakah ada biaya tersembunyi?",
                answer: "Tidak, Kami tidak memiliki biaya tambahan."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="glassmorphism rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}