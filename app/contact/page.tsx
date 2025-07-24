'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Instagram, Clock, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', program: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Our Campus",
      details: [" Jl. Poras No.07", "Loji, Kec. Bogor", "Indonesia"]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+62 8221 9173 046", "Available 8 AM - 8 PM"]
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Instagram",
      details: ["@lish_edu"]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Office Hours",
      details: ["Online (Senin - Jumat) : 19.00 - 21.00 WIB", "Offline (Sabtu) : 12.00 - 20.00 WIB", "Minggu : Libur"]
    }
  ];

  return (
    <div className="theme-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 via-transparent to-gray-700/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
           Minat Bergabung
            <span className="block bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent">
            Bersama Kami
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
           Siap belajar Bahasa Inggris? Hubungi contact kami untuk bantu capai tujuan Anda.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="card-3d glassmorphism rounded-2xl p-8 border border-white/10">
              <div className="flex items-center space-x-3 mb-8">
                <MessageCircle className="w-8 h-8 text-white" />
                <h2 className="text-3xl font-bold text-white">Kirimkan Pesan Kepada Kami</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Nama Lengkap</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:ring-2 focus:ring-white/20 transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="Masukan Nama Lengkap"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:ring-2 focus:ring-white/20 transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="Masukan Email Anda"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Nomer Telpon</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:ring-2 focus:ring-white/20 transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="Mauskan Nomor Telpon"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Pilih Program</label>
<select
  name="program"
  value={formData.program}
  onChange={handleChange}
  className="w-full px-4 py-3 rounded-xl bg-gray-100/10 text-white border border-gray-300/20 focus:border-white focus:ring-2 focus:ring-white/30 placeholder-white transition-all duration-300 backdrop-blur-sm"
  required
>
  <option value="" className="text-gray-300 bg-gray-700">Pilih program</option>
  <option value="foundation" className="text-black">Kelas Online</option>
  <option value="business" className="text-black">Kelas Offline</option>
</select>

                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Pesan</label>
                  <textarea
                    name="pesan"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:ring-2 focus:ring-white/20 transition-all duration-300 text-white placeholder-gray-400 resize-none"
                    placeholder="Ceritakan kepada kami tentang tujuan Anda dan pertanyaan apa pun yang Anda miliki..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 transition-all duration-300 text-white font-semibold flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Kirim Pesan</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Informasi Kontak</h2>
                <p className="text-gray-300 leading-relaxed">
     Kami siap membantu Anda memulai perjalanan belajar bahasa Inggris Anda. Hubungi kami melalui salah satu saluran di bawah ini, dan tim kami yang ramah akan segera menghubungi Anda.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="card-3d glassmorphism rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 group"
                  >
                    <div className="text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gray-200 transition-colors duration-300">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

{/* Map */}
<div className="relative card-3d glassmorphism rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 group">
  {/* Link ke Google Maps langsung */}
  <a
    href="https://www.google.com/maps/place/SMP-SMA+-+SMK+PESAT/@-6.5832144,106.7667541,17z"
    target="_blank"
    rel="noopener noreferrer"
    className="absolute inset-0 z-10"
    aria-label="Buka Google Maps"
  ></a>

  {/* Iframe Peta */}
  <div className="w-full h-64 rounded-lg overflow-hidden">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1981.7555179932842!2d106.76675406943814!3d-6.58321439888776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c4ff86736073%3A0xc6f6cd26a63bd243!2sSMP-SMA%20-%20SMK%20PESAT!5e0!3m2!1sid!2sid!4v1753326088241!5m2!1sid!2sid"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  {/* Info lokasi */}
  <div className="mt-4 text-center">
    <p className="text-white font-semibold">Lokasi SMK Informatika Pesat</p>
    <p className="text-gray-400 text-sm">Jl. Raya Pajajaran No.100, Bogor</p>
  </div>
</div>



              
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Quick <span className="text-gray-300">Answers</span>
            </h2>
            <p className="text-xl text-gray-400">
              Common questions from prospective students
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "How do I enroll in a program?",
                answer: "Simply fill out the contact form above or call us directly. We'll schedule a consultation to discuss your goals and recommend the best program for you."
              },
              {
                question: "Do you offer free trial classes?",
                answer: "Yes! We offer a complimentary consultation and trial class so you can experience our teaching methodology before enrolling."
              },
              {
                question: "What if I need to reschedule classes?",
                answer: "We understand life happens. You can reschedule classes up to 24 hours in advance through our student portal or by contacting your coordinator."
              },
              {
                question: "Are classes available on weekends?",
                answer: "Absolutely! We offer flexible scheduling including evening and weekend classes to accommodate working professionals."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="glassmorphism rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
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