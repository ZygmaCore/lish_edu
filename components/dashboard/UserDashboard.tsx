'use client';

import React, { useState } from 'react';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';

interface LearningGoal {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  createdAt: string;
}

export function UserDashboard() {
  const [goals, setGoals] = useState<LearningGoal[]>([
    {
      id: '1',
      title: 'Improve Business Presentation Skills',
      description: 'Learn to present confidently to international clients',
      status: 'in-progress',
      createdAt: '2024-01-15'
    },
    {
      id: '2', 
      title: 'Master Email Communication',
      description: 'Write professional emails with proper tone and structure',
      status: 'completed',
      createdAt: '2024-01-10'
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'pending' as const
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingId) {
      setGoals(prev => prev.map(goal => 
        goal.id === editingId 
          ? { ...goal, ...formData }
          : goal
      ));
      setEditingId(null);
    } else {
      const newGoal: LearningGoal = {
        id: Date.now().toString(),
        ...formData,
        createdAt: new Date().toISOString().split('T')[0]
      };
      setGoals(prev => [...prev, newGoal]);
    }

    setFormData({ title: '', description: '', status: 'pending' });
    setShowForm(false);
  };

  const handleEdit = (goal: LearningGoal) => {
    setFormData({
      title: goal.title,
      description: goal.description,
      status: goal.status
    });
    setEditingId(goal.id);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    setGoals(prev => prev.filter(goal => goal.id !== id));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'in-progress': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">My Learning Dashboard</h1>
        <p className="text-gray-400">Track your English learning goals and progress</p>
      </div>

      {/* Add New Goal Button */}
      <div className="mb-8">
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 glow-effect"
        >
          <Plus className="w-5 h-5" />
          <span>Add Learning Goal</span>
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowForm(false)}></div>
          <div className="relative glassmorphism rounded-2xl p-8 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                {editingId ? 'Edit Goal' : 'Add New Goal'}
              </h2>
              <button
                onClick={() => setShowForm(false)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Goal Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-white"
                  placeholder="Enter your learning goal"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-white resize-none"
                  rows={3}
                  placeholder="Describe your goal in detail"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value as any }))}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-white"
                >
                  <option value="pending">Pending</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Save className="w-5 h-5" />
                <span>{editingId ? 'Update Goal' : 'Add Goal'}</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Goals List */}
      <div className="grid gap-6">
        {goals.length === 0 ? (
          <div className="text-center py-12 glassmorphism rounded-2xl border border-white/10">
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No learning goals yet</h3>
            <p className="text-gray-500">Add your first learning goal to get started!</p>
          </div>
        ) : (
          goals.map((goal) => (
            <div
              key={goal.id}
              className="glassmorphism rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                      {goal.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(goal.status)}`}>
                      {goal.status.replace('-', ' ')}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-3 group-hover:text-gray-300 transition-colors duration-300">
                    {goal.description}
                  </p>
                  <p className="text-sm text-gray-500">Created: {goal.createdAt}</p>
                </div>
                
                <div className="flex items-center space-x-2 ml-4">
                  <button
                    onClick={() => handleEdit(goal)}
                    className="p-2 rounded-lg hover:bg-blue-500/20 text-blue-400 hover:text-blue-300 transition-all duration-300"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(goal.id)}
                    className="p-2 rounded-lg hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-all duration-300"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}