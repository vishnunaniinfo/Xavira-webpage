import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Calendar, Tag, MessageSquare, RefreshCw, Download, Phone } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { ParticleBackground } from './ParticleBackground';
import { supabase, ContactSubmission } from '../lib/supabase';

export function AdminPanel() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSubmissions = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      setSubmissions(data || []);
    } catch (err: any) {
      setError(err.message || 'Failed to load submissions');
      console.error('Error fetching submissions:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const exportToCSV = () => {
    const headers = ['Date', 'Name', 'Email', 'Phone', 'Service', 'Message'];
    const rows = submissions.map(sub => [
      sub.created_at ? formatDate(sub.created_at) : '',
      sub.name,
      sub.email,
      sub.phone || '',
      sub.service,
      sub.message.replace(/\n/g, ' '),
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `contact-submissions-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="relative min-h-screen pt-32 px-6 pb-20">
      <ParticleBackground />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="mb-4 text-white">Contact Form Submissions</h1>
          <p className="text-xl text-gray-400">View and manage visitor inquiries</p>
        </motion.div>

        {/* Actions */}
        <div className="flex justify-end gap-4 mb-8">
          <button
            onClick={fetchSubmissions}
            disabled={loading}
            className="px-6 py-3 bg-gradient-to-r from-blue-900 to-violet-900 rounded-lg hover:shadow-[0_0_40px_rgba(126,34,206,0.6)] transition-all text-white flex items-center gap-2 disabled:opacity-50"
          >
            <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
          <button
            onClick={exportToCSV}
            disabled={submissions.length === 0}
            className="px-6 py-3 bg-gradient-to-r from-violet-900 to-purple-900 rounded-lg hover:shadow-[0_0_40px_rgba(126,34,206,0.6)] transition-all text-white flex items-center gap-2 disabled:opacity-50"
          >
            <Download className="w-5 h-5" />
            Export CSV
          </button>
        </div>

        {/* Error State */}
        {error && (
          <div className="mb-8 p-6 bg-red-900/20 border border-red-500/30 rounded-lg text-red-300">
            <p className="mb-2">Error loading submissions:</p>
            <p className="text-sm">{error}</p>
            <p className="text-sm mt-4 text-gray-400">
              Note: You need to be authenticated to view submissions. Please set up the Supabase table first.
              See SUPABASE_SETUP.md for instructions.
            </p>
          </div>
        )}

        {/* Loading State */}
        {loading && !error && (
          <div className="text-center py-20">
            <div className="inline-block w-12 h-12 border-4 border-violet-500/30 border-t-violet-500 rounded-full animate-spin" />
            <p className="mt-4 text-gray-400">Loading submissions...</p>
          </div>
        )}

        {/* Submissions List */}
        {!loading && !error && submissions.length === 0 && (
          <div className="text-center py-20">
            <Mail className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-xl">No submissions yet</p>
            <p className="text-gray-500 mt-2">Form submissions will appear here</p>
          </div>
        )}

        {!loading && !error && submissions.length > 0 && (
          <div className="space-y-6">
            <div className="text-gray-400 mb-4">
              Total Submissions: {submissions.length}
            </div>
            
            {submissions.map((submission, index) => (
              <motion.div
                key={submission.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <GlassCard delay={0}>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                      {/* Left Column */}
                      <div>
                        <div className="mb-4">
                          <h3 className="text-white mb-2">{submission.name}</h3>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-violet-400">
                              <Mail className="w-4 h-4" />
                              <a 
                                href={`mailto:${submission.email}`}
                                className="hover:text-violet-300 transition-colors"
                              >
                                {submission.email}
                              </a>
                            </div>
                            {submission.phone && (
                              <div className="flex items-center gap-2 text-violet-400">
                                <Phone className="w-4 h-4" />
                                <a 
                                  href={`tel:${submission.phone}`}
                                  className="hover:text-violet-300 transition-colors"
                                >
                                  {submission.phone}
                                </a>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-gray-400 mb-2">
                          <Tag className="w-4 h-4" />
                          <span className="text-sm">Service: {submission.service}</span>
                        </div>

                        {submission.created_at && (
                          <div className="flex items-center gap-2 text-gray-400">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{formatDate(submission.created_at)}</span>
                          </div>
                        )}
                      </div>

                      {/* Right Column - Message */}
                      <div>
                        <div className="flex items-start gap-2 mb-2">
                          <MessageSquare className="w-4 h-4 text-violet-400 mt-1 flex-shrink-0" />
                          <span className="text-violet-400">Message:</span>
                        </div>
                        <div className="bg-black/30 rounded-lg p-4 border border-violet-500/20">
                          <p className="text-gray-300 whitespace-pre-wrap">{submission.message}</p>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="flex justify-end pt-4 border-t border-violet-500/20">
                      <a
                        href={`mailto:${submission.email}?subject=Re: Your inquiry about ${submission.service}`}
                        className="px-4 py-2 bg-violet-900/30 hover:bg-violet-900/50 rounded-lg text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        Reply via Email
                      </a>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
