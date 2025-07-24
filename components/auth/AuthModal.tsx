// components/AuthModal.tsx
'use client';

import React, { useState } from 'react';
import { X, LogIn, UserPlus, Loader2 } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'login' | 'register';
  onSwitchMode: (mode: 'login' | 'register') => void;
}

export function AuthModal({ isOpen, onClose, mode, onSwitchMode }: AuthModalProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullname: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState('');
  const { login, register, isLoading } = useAuth();

  if (!isOpen) return null;

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    // Fullname validation (only for register mode)
    if (mode === 'register' && !formData.fullname) {
      newErrors.fullname = 'Full name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    setServerError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const success = mode === 'login'
          ? await login(formData.email, formData.password)
          : await register(formData.email, formData.password, formData.fullname);

      if (success) {
        onClose();
        // Reset form
        setFormData({ email: '', password: '', fullname: '' });
        setErrors({});
        setServerError('');
      } else {
        setServerError(mode === 'login'
            ? 'Invalid credentials. Please try again.'
            : 'Registration failed. Please try again.');
      }
    } catch (err) {
      setServerError('An unexpected error occurred. Please try again.');
    }
  };

  return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
        <div className="relative glassmorphism rounded-2xl p-8 w-full max-w-md shadow-2xl">
          {/* Close button */}
          <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
              {mode === 'login' ? <LogIn className="w-8 h-8" /> : <UserPlus className="w-8 h-8" />}
            </div>
            <h2 className="text-2xl font-bold">
              {mode === 'login' ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-gray-400 mt-2">
              {mode === 'login' ? 'Sign in to continue' : 'Start your journey with us'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'register' && (
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                      type="text"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                          errors.fullname ? 'border-red-500' : 'border-white/10'
                      } focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300`}
                      placeholder="Enter your full name"
                  />
                  {errors.fullname && (
                      <p className="mt-1 text-sm text-red-500">{errors.fullname}</p>
                  )}
                </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                      errors.email ? 'border-red-500' : 'border-white/10'
                  } focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300`}
                  placeholder="Enter your email"
              />
              {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                      errors.password ? 'border-red-500' : 'border-white/10'
                  } focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300`}
                  placeholder="Enter your password"
              />
              {errors.password && (
                  <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
            </div>

            {serverError && (
                <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400 text-sm">
                  {serverError}
                </div>
            )}

            <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                  <>
                    {mode === 'login' ? <LogIn className="w-5 h-5" /> : <UserPlus className="w-5 h-5" />}
                    <span>{mode === 'login' ? 'Sign In' : 'Create Account'}</span>
                  </>
              )}
            </button>
          </form>

          {/* Switch mode */}
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}
              <button
                  type="button"
                  onClick={() => onSwitchMode(mode === 'login' ? 'register' : 'login')}
                  className="ml-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                {mode === 'login' ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </div>
  );
}