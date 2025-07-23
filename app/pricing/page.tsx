'use client';

import React from 'react';
import Link from 'next/link';
import { Check, Star, Zap, Crown } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Foundation",
      price: "2,500,000",
      duration: "3 months",
      description: "Perfect for beginners starting their English journey",
      features: [
        "20 hours of live classes per month",
        "Basic grammar and vocabulary",
        "Speaking practice sessions",
        "Writing fundamentals",
        "Mobile app access",
        "Community forum access"
      ],
      icon: <Star className="w-8 h-8" />,
      popular: false
    },
    {
      name: "Business Pro",
      price: "3,500,000", 
      duration: "4 months",
      description: "Ideal for professionals advancing their careers",
      features: [
        "30 hours of live classes per month",
        "Business communication skills",
        "Presentation & meeting English",
        "Email writing mastery",
        "1-on-1 coaching sessions",
        "Career guidance",
        "Premium materials",
        "Certificate of completion"
      ],
      icon: <Zap className="w-8 h-8" />,
      popular: true
    },
    {
      name: "Executive",
      price: "4,500,000",
      duration: "6 months", 
      description: "Comprehensive program for leadership roles",
      features: [
        "40 hours of live classes per month",
        "Advanced grammar & writing",
        "IELTS/TOEFL preparation",
        "Interview & negotiation skills",
        "Weekly 1-on-1 mentoring",
        "Industry-specific vocabulary",
        "Global networking events",
        "Lifetime alumni access",
        "Job placement assistance"
      ],
      icon: <Crown className="w-8 h-8" />,
      popular: false
    }
  ];

  const addOns = [
    {
      name: "Personal Tutor",
      price: "500,000",
      unit: "per month",
      description: "Dedicated one-on-one sessions with expert tutors"
    },
    {
      name: "IELTS Intensive",
      price: "1,200,000",
      unit: "one-time",
      description: "Specialized IELTS preparation course"
    },
    {
      name: "Speaking Club",
      price: "300,000",
      unit: "per month", 
      description: "Daily conversation practice with native speakers"
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
            Investment in Your
            <span className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Future Success
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect program to accelerate your English mastery and unlock global opportunities.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`card-3d relative p-8 rounded-2xl glassmorphism transition-all duration-500 border ${
                  plan.popular 
                    ? 'border-yellow-400/50 bg-yellow-500/10 scale-105' 
                    : 'border-yellow-500/20 hover:border-yellow-400/40'
                } hover:shadow-2xl hover:shadow-yellow-500/20`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
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
                  Enroll Now
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
              Enhance Your <span className="text-yellow-400">Learning</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Optional add-ons to accelerate your progress
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
                <div className="text-2xl font-bold text-yellow-400 mb-2">
                  Rp {addon.price}
                </div>
                <div className="text-gray-400 mb-4">{addon.unit}</div>
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
              Frequently Asked <span className="text-yellow-400">Questions</span>
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "What payment methods do you accept?",
                answer: "We accept bank transfers, credit cards, and installment plans for your convenience."
              },
              {
                question: "Can I switch programs mid-course?",
                answer: "Yes, you can upgrade your program at any time. We'll adjust the pricing accordingly."
              },
              {
                question: "Do you offer refunds?",
                answer: "We offer a 30-day money-back guarantee if you're not completely satisfied."
              },
              {
                question: "Are there any hidden fees?",
                answer: "No, our pricing is transparent. The only additional costs are optional add-ons you choose."
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