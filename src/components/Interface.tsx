import React from 'react';
import { motion } from 'framer-motion';
import { Wallet2 } from 'lucide-react';

export default function Interface() {
  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Your Fumble Dashboard
          </h2>
          <p className="text-gray-400 text-xl mb-8">
            Connect your wallet to track your paper hands moments
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="claimButton inline-flex items-center space-x-2 bg-purple-600 text-white px-8 py-4 rounded-lg"
          >
            <Wallet2 className="w-5 h-5" />
            <span>Connect Wallet</span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-white mb-8">
            How does it work?
          </h2>
          <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-gray-800">
            <div className="relative aspect-video">
              <iframe
                className="absolute inset-0 w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/iETChn3MVrE"
                title="Fumble Pro Dashboard Walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}