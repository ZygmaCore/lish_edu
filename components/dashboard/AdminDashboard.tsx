'use client';

import React, { useState } from 'react';
import { MessageSquare, Send, Clock, CheckCircle } from 'lucide-react';

interface StudentRequest {
  id: string;
  studentName: string;
  email: string;
  goal: string;
  description: string;
  status: 'pending' | 'responded';
  createdAt: string;
  response?: string;
}

export function AdminDashboard() {
  const [requests, setRequests] = useState<StudentRequest[]>([
    {
      id: '1',
      studentName: 'John Doe',
      email: 'john@example.com',
      goal: 'Improve Business Presentation Skills',
      description: 'I need help with presenting to international clients confidently',
      status: 'pending',
      createdAt: '2024-01-15'
    },
    {
      id: '2',
      studentName: 'Jane Smith',
      email: 'jane@example.com',
      goal: 'IELTS Preparation',
      description: 'Planning to take IELTS exam in 3 months, need guidance on preparation strategy',
      status: 'responded',
      createdAt: '2024-01-14',
      response: 'I recommend starting with our IELTS Intensive course. Let me schedule a consultation to discuss your specific needs.'
    },
    {
      id: '3',
      studentName: 'Michael Chen',
      email: 'michael@example.com',
      goal: 'Technical Writing',
      description: 'Need to improve technical documentation skills for software engineering role',
      status: 'pending',
      createdAt: '2024-01-13'
    }
  ]);

  const [responses, setResponses] = useState<{ [key: string]: string }>({});

  const handleResponseChange = (requestId: string, response: string) => {
    setResponses(prev => ({
      ...prev,
      [requestId]: response
    }));
  };

  const handleSubmitResponse = (requestId: string) => {
    const response = responses[requestId];
    if (!response.trim()) return;

    setRequests(prev => prev.map(request => 
      request.id === requestId 
        ? { ...request, status: 'responded', response }
        : request
    ));

    setResponses(prev => {
      const newResponses = { ...prev };
      delete newResponses[requestId];
      return newResponses;
    });
  };

  const pendingCount = requests.filter(r => r.status === 'pending').length;
  const respondedCount = requests.filter(r => r.status === 'responded').length;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Admin Dashboard</h1>
        <p className="text-gray-400">Manage student requests and provide guidance</p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="glassmorphism rounded-xl p-6 border border-white/10">
          <div className="flex items-center space-x-3">
            <Clock className="w-8 h-8 text-yellow-400" />
            <div>
              <div className="text-2xl font-bold text-white">{pendingCount}</div>
              <div className="text-gray-400">Pending Requests</div>
            </div>
          </div>
        </div>
        
        <div className="glassmorphism rounded-xl p-6 border border-white/10">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-8 h-8 text-green-400" />
            <div>
              <div className="text-2xl font-bold text-white">{respondedCount}</div>
              <div className="text-gray-400">Responded</div>
            </div>
          </div>
        </div>
        
        <div className="glassmorphism rounded-xl p-6 border border-white/10">
          <div className="flex items-center space-x-3">
            <MessageSquare className="w-8 h-8 text-blue-400" />
            <div>
              <div className="text-2xl font-bold text-white">{requests.length}</div>
              <div className="text-gray-400">Total Requests</div>
            </div>
          </div>
        </div>
      </div>

      {/* Requests List */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Student Requests</h2>
        
        {requests.length === 0 ? (
          <div className="text-center py-12 glassmorphism rounded-2xl border border-white/10">
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No requests yet</h3>
            <p className="text-gray-500">Student requests will appear here</p>
          </div>
        ) : (
          requests.map((request) => (
            <div
              key={request.id}
              className={`glassmorphism rounded-2xl p-6 border transition-all duration-300 ${
                request.status === 'pending' 
                  ? 'border-yellow-500/30 bg-yellow-500/5' 
                  : 'border-green-500/30 bg-green-500/5'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-bold text-white">{request.studentName}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                      request.status === 'pending'
                        ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                        : 'bg-green-500/20 text-green-400 border-green-500/30'
                    }`}>
                      {request.status}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-2">{request.email}</p>
                  <p className="text-sm text-gray-500">Submitted: {request.createdAt}</p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-semibold text-white mb-2">Learning Goal:</h4>
                <p className="text-blue-400 font-medium mb-3">{request.goal}</p>
                <h4 className="text-lg font-semibold text-white mb-2">Description:</h4>
                <p className="text-gray-300">{request.description}</p>
              </div>

              {request.status === 'responded' && request.response ? (
                <div className="mt-4 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                  <h4 className="text-lg font-semibold text-green-400 mb-2">Your Response:</h4>
                  <p className="text-gray-300">{request.response}</p>
                </div>
              ) : (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-white mb-3">Provide Response:</h4>
                  <div className="space-y-3">
                    <textarea
                      value={responses[request.id] || ''}
                      onChange={(e) => handleResponseChange(request.id, e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-white resize-none"
                      rows={3}
                      placeholder="Write your response to help this student..."
                    />
                    <button
                      onClick={() => handleSubmitResponse(request.id)}
                      disabled={!responses[request.id]?.trim()}
                      className="flex items-center space-x-2 px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Response</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}