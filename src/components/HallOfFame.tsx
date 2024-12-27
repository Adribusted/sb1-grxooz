import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Flame, TrendingUp } from 'lucide-react';

export default function HallOfFame() {
  const fumbles = [
    {
      token: "BONK",
      amount: "$892,451.67",
      wallet: "8ZUc...dNhV",
      exitPrice: "$0.000002341",
      peakPrice: "$0.000034892",
      tokens: "381,224,156"
    },
    {
      token: "MYRO",
      amount: "$1,247,893.21",
      wallet: "3xKm...9vPq",
      exitPrice: "$0.000089231",
      peakPrice: "$0.001243567",
      tokens: "14,892,341"
    },
    {
      token: "WIF",
      amount: "$673,129.45",
      wallet: "5nWp...kR2j",
      exitPrice: "$0.000127834",
      peakPrice: "$0.001892341",
      tokens: "5,267,891"
    }
  ];

  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-white mb-4">
            Hall of Fame
          </h2>
          <p className="text-gray-400 text-xl">
            The biggest fumbles we've ever recorded
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fumbles.map((fumble, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Flame className="w-6 h-6 text-orange-500" />
                  <span className="text-white font-bold">{fumble.token}</span>
                </div>
                <TrendingUp className="w-6 h-6 text-red-400" />
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400">Missed Gains</p>
                  <p className="text-2xl font-bold text-purple-400">{fumble.amount}</p>
                </div>
                
                <div>
                  <p className="text-gray-400">Wallet</p>
                  <p className="text-white font-mono text-sm">{fumble.wallet}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400">Exit Price</p>
                    <p className="text-white">{fumble.exitPrice}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Peak Price</p>
                    <p className="text-white">{fumble.peakPrice}</p>
                  </div>
                </div>

                <div>
                  <p className="text-gray-400">Tokens Held</p>
                  <p className="text-white">{fumble.tokens}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}