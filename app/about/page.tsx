'use client';

import React from 'react';
import { Users, Award, Clock, Target, BookOpen, Zap } from 'lucide-react';

export default function About() {
  const stats = [
    { number: "5000+", label: "Happy Students", icon: <Users className="w-6 h-6" /> },
    { number: "98%", label: "Success Rate", icon: <Award className="w-6 h-6" /> },
    { number: "10+", label: "Years Experience", icon: <Clock className="w-6 h-6" /> },
    { number: "50+", label: "Expert Teachers", icon: <Target className="w-6 h-6" /> }
  ];

  const values = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Excellence in Education",
      description: "We maintain the highest standards in English language education with cutting-edge methodologies."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Student-Centered Approach",
      description: "Every program is tailored to individual learning styles and career aspirations."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Innovation & Technology",
      description: "Leveraging the latest educational technology to enhance your learning experience."
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
            About
            <span className="block bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent">
              Lish Edu
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Pioneering the future of English education for ambitious young professionals 
            through innovative teaching methods and personalized learning experiences.
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
                Our <span className="text-blue-400">Story</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Founded in 2014, Lish Edu began with a simple yet powerful vision: to revolutionize 
                  English language education for the modern generation. We recognized that traditional 
                  language learning methods weren't meeting the needs of ambitious young professionals.
                </p>
                <p>
                  Today, we're proud to be at the forefront of innovative English education, combining 
                  cutting-edge technology with proven pedagogical methods. Our graduates work at top 
                  multinational companies, pursue advanced degrees abroad, and confidently communicate 
                  in global business environments.
                </p>
                <p>
                  What sets us apart is our commitment to creating an exclusive, premium learning 
                  environment where every student receives personalized attention and support to 
                  achieve their English language goals.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="glassmorphism rounded-2xl p-8 border border-blue-500/20">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                  alt="Modern English classroom"
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <blockquote className="text-lg text-gray-300 italic">
                  "At Lish Edu, we don't just teach English – we empower dreams and unlock global opportunities."
                </blockquote>
                <cite className="block mt-4 text-blue-400 font-semibold">- Sarah Johnson, Founder & CEO</cite>
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
              Our <span className="text-blue-400">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do at Lish Edu
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
              Meet Our <span className="text-blue-400">Expert Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              World-class educators dedicated to your success
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Michael Chen",
                role: "Head of Curriculum",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
                credentials: "PhD in Applied Linguistics, Oxford University"
              },
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
                credentials: "MA in TESOL, Cambridge University"
              },
              {
                name: "James Wilson",
                role: "Senior Instructor",
                image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
                credentials: "CELTA Certified, 15+ years experience"
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