'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function BetaRequestModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ name: '', whatsapp: '', area: '', email: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener('openBetaModal', handler);
    return () => window.removeEventListener('openBetaModal', handler);
  }, []);

  const close = () => {
    setIsOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', whatsapp: '', area: '', email: '' });
      setError('');
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/beta-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const field = (label: string, key: keyof typeof form, opts: {
    type?: string;
    placeholder?: string;
    required?: boolean;
    optional?: boolean;
  } = {}) => (
    <div>
      <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">
        {label}{' '}
        {opts.optional && <span className="text-gray-400 font-normal">(optional)</span>}
      </label>
      <input
        type={opts.type ?? 'text'}
        required={opts.required ?? false}
        placeholder={opts.placeholder}
        value={form[key]}
        onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#e53935] transition-colors placeholder:text-gray-400"
      />
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-md pointer-events-auto relative"
            >
              {/* Close */}
              <button
                onClick={close}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-8"
                  >
                    {/* Header */}
                    <p className="text-xs font-semibold text-[#e53935] uppercase tracking-widest mb-1">
                      Private Beta
                    </p>
                    <h3 className="text-2xl font-bold text-[#1a1a1a] mb-1">
                      Apply for Beta Access
                    </h3>
                    <p className="text-gray-500 text-sm mb-6">
                      We personally review every application. A founder will reach out on WhatsApp within 24 hours.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {field('Full Name', 'name', { required: true, placeholder: 'e.g. Abena Mensah' })}
                      {field('WhatsApp Number', 'whatsapp', { type: 'tel', required: true, placeholder: '+233 XX XXX XXXX' })}
                      {field('Area in Accra', 'area', { required: true, placeholder: 'e.g. East Legon, Adenta, Spintex...' })}
                      {field('Email Address', 'email', { type: 'email', optional: true, placeholder: 'you@example.com' })}

                      {error && <p className="text-[#e53935] text-sm">{error}</p>}

                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-black text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-gray-900 transition-colors disabled:opacity-60 mt-1"
                      >
                        {loading ? 'Submitting...' : 'Submit Application →'}
                      </motion.button>

                      <p className="text-center text-xs text-gray-400">
                        No spam. We only contact you about your application.
                      </p>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-10 text-center"
                  >
                    <div className="text-5xl mb-4">🎉</div>
                    <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Application received!</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8">
                      One of our founders will review your application and reach out to you on WhatsApp within 24 hours.
                    </p>
                    <button
                      onClick={close}
                      className="bg-black text-white px-8 py-3 rounded-xl font-semibold text-sm hover:bg-gray-900 transition-colors"
                    >
                      Done
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
