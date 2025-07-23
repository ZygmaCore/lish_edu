'use client';

import React from 'react';
import { Star, Quote, Briefcase, GraduationCap, TrendingUp } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Amanda Putri",
      role: "Marketing Manager at Microsoft",
      image: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg",
      content: "Lish Edu transformed my career. The business English program gave me the confidence to lead international meetings and present to global stakeholders. Within 6 months, I was promoted to a regional role!",
      rating: 5,
      achievement: "Got promoted to Regional Manager",
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      name: "Rizky Wijaya",
      role: "Software Engineer at Google",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      content: "The technical English and interview preparation at Lish Edu was incredible. I landed my dream job at Google after completing their Executive program. The instructors really understand what tech companies are looking for.",
      rating: 5,
      achievement: "Landed job at Google",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      name: "Diana Sari",
      role: "PhD Student at Cambridge",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      content: "Thanks to Lish Edu's IELTS preparation, I scored 8.5 and got accepted to Cambridge University with a full scholarship. The academic writing skills I learned here are invaluable for my research.",
      rating: 5,
      achievement: "Cambridge University Scholarship",
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      name: "Kevin Tanu",
      role: "Startup Founder",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
      content: "As an entrepreneur, communicating with international investors was crucial. Lish Edu's Executive program taught me negotiation skills and business communication that helped me raise $2M for my startup.",
      rating: 5,
      achievement: "Raised $2M funding",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      name: "Priscilla Chen",
      role: "UN Program Officer",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
      content: "The global perspective and cultural sensitivity training at Lish Edu prepared me perfectly for my role at the United Nations. I now facilitate international conferences with confidence.",
      rating: 5,
      achievement: "UN Career Achievement",
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      name: "Jonathan Lee",
      role: "Investment Banker",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
      content: "The financial English and presentation skills I learned at Lish Edu were game-changers. I now regularly present to international clients and close multi-million dollar deals with confidence.",
      rating: 5,
      achievement: "Top Performer Award",
      icon: <TrendingUp className="w-5 h-5" />
    }
  ];

  const stats = [
    { number: "98%", label: "Career Advancement" },
    { number: "95%", label: "Salary Increase" },
    { number: "100%", label: "Goal Achievement" },
    { number: "5000+", label: "Success Stories" }
  ];

  return (
    <div className="theme-green min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-transparent to-green-800/20"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-600/10 rounded-full blur-3xl animate-float"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Success
            <span className="block bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent">
              Stories
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover how Lish Edu graduates are achieving remarkable success in their careers and academic pursuits worldwide.
          </p>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl glassmorphism border border-green-500/20 hover:border-green-400/40 transition-all duration-500 group"
              >
                <div className="text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="text-green-400">Graduates Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real stories from real people who transformed their lives with Lish Edu
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card-3d glassmorphism rounded-2xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-500 group hover:shadow-2xl hover:shadow-green-500/20"
              >
                {/* Achievement Badge */}
                <div className="flex items-center space-x-2 mb-4 p-2 rounded-lg bg-green-500/10 border border-green-500/20">
                  <div className="text-green-400">
                    {testimonial.icon}
                  </div>
                  <span className="text-xs text-green-300 font-semibold">{testimonial.achievement}</span>
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-green-400/30" />
                  <p className="text-gray-300 leading-relaxed pl-6 group-hover:text-gray-200 transition-colors duration-300">
                    {testimonial.content}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-green-500/30 group-hover:border-green-400/50 transition-colors duration-300"
                  />
                  <div>
                    <div className="font-semibold text-white group-hover:text-green-300 transition-colors duration-300">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Video <span className="text-green-400">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Hear directly from our successful graduates
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Sarah Mitchell",
                title: "From Zero to Fluent in 8 Months",
                thumbnail: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
              },
              {
                name: "David Park",
                title: "How Lish Edu Got Me into Harvard MBA",
                thumbnail: "https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg"
              }
            ].map((video, index) => (
              <div
                key={index}
                className="card-3d glassmorphism rounded-2xl overflow-hidden border border-green-500/20 hover:border-green-400/40 transition-all duration-500 group cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-green-500/80 flex items-center justify-center backdrop-blur-sm">
                      <div className="w-0 h-0 border-l-4 border-r-0 border-t-4 border-b-4 border-transparent border-l-white ml-1"></div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-300 transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-green-400">{video.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-green-800/20"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands of ambitious learners who chose Lish Edu to transform their careers
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 transition-all duration-300 glow-effect text-lg font-semibold"
            >
              Start Your Journey
            </a>
            <a
              href="/pricing"
              className="px-8 py-4 rounded-xl border border-green-500/30 hover:bg-green-500/10 transition-all duration-300 text-lg font-semibold"
            >
              View Programs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}