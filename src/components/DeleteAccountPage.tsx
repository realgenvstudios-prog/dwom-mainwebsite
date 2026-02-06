'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';

export default function DeleteAccountPage() {
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    reason: '',
    confirmed: false,
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/account/deletion-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber: formData.phone,
          email: formData.email,
          reason: formData.reason,
          requestedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit deletion request');
      }

      setSubmitted(true);
      setFormData({ phone: '', email: '', reason: '', confirmed: false });
    } catch (err: any) {
      setError(err.message || 'An error occurred. Please try again.');
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center"
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Request Submitted Successfully
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              Your account deletion request has been received. We will process it within 30 days and send you a confirmation email at <span className="font-semibold">{formData.email}</span>.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 text-left">
              <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
              <ul className="text-blue-800 space-y-2 text-sm">
                <li>✓ Our team will verify your request within 48 hours</li>
                <li>✓ You'll receive an email confirmation</li>
                <li>✓ Your account and data will be permanently deleted within 30 days</li>
                <li>✓ You'll receive a final confirmation email when completed</li>
              </ul>
            </div>
            <a
              href="/"
              className="inline-block px-8 py-3 bg-[#e53935] text-white rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300"
            >
              Return to Home
            </a>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#e53935] to-red-700 px-8 py-12 text-white">
            <h1 className="text-4xl font-bold mb-2">Delete Account & Data</h1>
            <p className="text-red-100">Permanently remove your account and associated information</p>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Warning Box */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded"
            >
              <div className="flex gap-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-yellow-900 mb-1">⚠️ This action is permanent</h3>
                  <p className="text-yellow-800 text-sm">
                    Once your account is deleted, you will not be able to recover your data. Please resolve any pending orders or refunds before deleting.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Info Box */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded"
            >
              <h3 className="font-semibold text-blue-900 mb-2">What gets deleted?</h3>
              <ul className="text-blue-800 text-sm space-y-1 ml-5 list-disc">
                <li>Phone number and account credentials</li>
                <li>Order history and delivery preferences</li>
                <li>Subscription information</li>
                <li>Saved payment methods</li>
                <li>Profile preferences and dietary selections</li>
              </ul>
            </motion.div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number (linked to your account)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+233 XX XXX XXXX"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e53935] focus:border-transparent outline-none transition-colors"
                />
                <p className="text-xs text-gray-600 mt-1">We'll use this to verify your account</p>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e53935] focus:border-transparent outline-none transition-colors"
                />
                <p className="text-xs text-gray-600 mt-1">We'll send confirmation to this email</p>
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-semibold text-gray-900 mb-2">
                  Reason for Deletion (Optional)
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  placeholder="Help us improve - tell us why you're deleting your account..."
                  value={formData.reason}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e53935] focus:border-transparent outline-none transition-colors resize-none"
                />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="confirmed"
                    checked={formData.confirmed}
                    onChange={handleInputChange}
                    required
                    className="w-5 h-5 text-[#e53935] rounded focus:ring-2 focus:ring-[#e53935] mt-1 flex-shrink-0"
                  />
                  <span className="text-sm text-gray-700">
                    I understand that this action is permanent and will result in complete removal of my account and data from DWOM
                  </span>
                </label>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-200 rounded-lg p-4 flex gap-3"
                >
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-red-700 text-sm">{error}</p>
                </motion.div>
              )}

              <div className="flex gap-4 pt-4">
                <a
                  href="/"
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300 text-center"
                >
                  Cancel
                </a>
                <button
                  type="submit"
                  disabled={!formData.confirmed || loading}
                  className="flex-1 px-6 py-3 bg-[#e53935] text-white rounded-lg font-semibold hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-300"
                >
                  {loading ? 'Processing...' : 'Delete My Account'}
                </button>
              </div>
            </form>

            {/* FAQ */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">How long will it take to delete my account?</h3>
                  <p className="text-gray-600 text-sm">We process account deletion requests within 30 days. You'll receive a confirmation email once your data has been completely removed from our systems.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Can I cancel my deletion request?</h3>
                  <p className="text-gray-600 text-sm">Yes, you can contact us at support@dwom.app within 48 hours of submitting your request. After 48 hours, your account deletion will be processed and cannot be reversed.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">What about my pending orders?</h3>
                  <p className="text-gray-600 text-sm">If you have active orders, please cancel them first or wait for delivery completion before requesting account deletion. We cannot process deletion requests for accounts with incomplete transactions.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Will my contacts be notified?</h3>
                  <p className="text-gray-600 text-sm">No. Your account deletion is confidential. We will not notify any contacts or linked accounts about your deletion unless required by law.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">What data is retained after deletion?</h3>
                  <p className="text-gray-600 text-sm">For legal and financial compliance, we may retain aggregated transaction data (without personal identifiers) and transaction records as required by law for 7 years. Your personal information will be permanently deleted.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Can I delete my account through the app?</h3>
                  <p className="text-gray-600 text-sm">Currently, account deletion requests are only available through this web form. We recommend submitting your request here to ensure your data is completely removed from our systems.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Need help? Contact us</h3>
                  <p className="text-gray-600 text-sm">If you have additional questions or need assistance, reach out to our support team at <a href="mailto:support@dwom.app" className="text-[#e53935] font-semibold hover:underline">support@dwom.app</a></p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
