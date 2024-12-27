import React from 'react';
import { motion } from 'framer-motion';

export default function VideoPlayer() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-gray-800"
    >
      <div className="relative aspect-video">
        <iframe
          className="absolute inset-0 w-full h-full rounded-2xl"
          src="https://www.youtube.com/embed/iETChn3MVrE"
          title="Fumble Pro Dashboard Walkthrough"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          aria-label="Video walkthrough of the Fumble Pro dashboard interface"
        />
      </div>
    </motion.div>
  );
}