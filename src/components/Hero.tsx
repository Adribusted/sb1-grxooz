import { motion } from 'framer-motion';
import { Wallet2, TrendingDown, ArrowBigDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 to-purple-900 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
            fumble.pro
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8">
            Calculate Your "What If" Moments in Solana Memecoin Trading
          </p>
          
          <div className="flex justify-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="claimButton flex items-center space-x-2 bg-purple-600 text-white px-8 py-4 rounded-lg cursor-pointer"
            >
              <Wallet2 className="w-6 h-6" />
              <span>Connect Wallet</span>
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl"
            >
              <TrendingDown className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Track Fumbles</h3>
              <p className="text-gray-400">Monitor your early exits and calculate potential gains</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl"
            >
              <ArrowBigDown className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Real-time Analysis</h3>
              <p className="text-gray-400">Get instant calculations of missed opportunities</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl"
            >
              <Wallet2 className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Portfolio Insights</h3>
              <p className="text-gray-400">Comprehensive view of your trading history</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}