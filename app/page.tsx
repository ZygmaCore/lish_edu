'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Users, Award, Globe, Sparkles } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Native speakers and certified instructors"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Small Classes",
      description: "Maximum 8 students per class for focused learning"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certified Programs",
      description: "International recognized certifications"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Network",
      description: "Connect with learners worldwide"
    }
  ];

  const courses = [
    {
      level: "Beginner",
      title: "Foundation English",
      duration: "3 months",
      price: "Rp 2,500,000",
      features: ["Basic Grammar", "Vocabulary Building", "Speaking Practice", "Writing Basics"]
    },
    {
      level: "Intermediate", 
      title: "Business English",
      duration: "4 months",
      price: "Rp 3,500,000",
      features: ["Business Communication", "Presentation Skills", "Email Writing", "Meeting English"],
      popular: true
    },
    {
      level: "Advanced",
      title: "Professional English",
      duration: "6 months", 
      price: "Rp 4,500,000",
      features: ["Advanced Grammar", "Academic Writing", "IELTS Preparation", "Interview Skills"]
    }
  ];

  return (
    <div className="theme-red min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-transparent to-red-800/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-float"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glassmorphism mb-8">
            <Sparkles className="w-5 h-5 text-red-400" />
            <span className="text-sm text-red-300">WKWKWKWKWK</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Master English with
            <span className="block bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent">
              Lish Edu
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join the exclusive community of young professionals mastering English 
            with our innovative and luxurious learning experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/pricing"
              className="group px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 transition-all duration-300 glow-effect text-lg font-semibold flex items-center justify-center space-x-2"
            >
              <span>Start Learning</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 rounded-xl border border-red-500/30 hover:bg-red-500/10 transition-all duration-300 text-lg font-semibold"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-red-400">Lish Edu?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the difference with our premium approach to English education
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-3d group p-8 rounded-2xl glassmorphism hover:bg-red-500/10 transition-all duration-500 border border-red-500/20"
              >
                <div className="text-red-400 mb-4 group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-red-400">Premium Courses</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Carefully crafted programs designed for ambitious learners
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className={`card-3d relative p-8 rounded-2xl glassmorphism transition-all duration-500 border ${
                  course.popular 
                    ? 'border-red-400/50 bg-red-500/10' 
                    : 'border-red-500/20 hover:border-red-400/40'
                } hover:shadow-2xl hover:shadow-red-500/20`}
              >
                {course.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-sm text-red-400 font-semibold mb-2">{course.level}</div>
                <h3 className="text-2xl font-bold mb-4 text-white">{course.title}</h3>
                <div className="text-3xl font-bold text-red-400 mb-2">{course.price}</div>
                <div className="text-gray-400 mb-6">{course.duration}</div>
                
                <ul className="space-y-3 mb-8">
                  {course.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/pricing"
                  className="block w-full py-3 rounded-lg bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 transition-all duration-300 text-center font-semibold"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-red-800/20"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your English?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands of successful learners who chose Lish Edu for their English journey
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 transition-all duration-300 glow-effect text-lg font-semibold"
          >
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}