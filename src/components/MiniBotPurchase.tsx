import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronRight, Shield, Zap, Cpu } from 'lucide-react';
import ModelViewer from './ModelViewer';

const MiniBotPurchase = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('pro');

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: '4,999',
      features: [
        'Basic autonomous navigation',
        'Standard sensors package',
        '8-hour battery life',
        '1-year warranty'
      ]
    },
    {
      id: 'pro',
      name: 'Professional',
      price: '7,999',
      features: [
        'Advanced AI navigation',
        'Premium sensors suite',
        '12-hour battery life',
        'Extended 3-year warranty',
        'Priority support'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'Full autonomous capabilities',
        'Custom sensors configuration',
        'Extended battery options',
        'Lifetime warranty',
        '24/7 dedicated support',
        'Custom integrations'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Model Viewer Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-[500px] mx-auto">
              <ModelViewer />
            </div>
          </motion.div>

          {/* Purchase Options */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
              MiniBot X-1000
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Next-generation autonomous farming assistant with advanced AI capabilities
            </p>

            {/* Plans */}
            <div className="space-y-6 mb-12">
              {plans.map((plan) => (
                <motion.div
                  key={plan.id}
                  whileHover={{ scale: 1.02 }}
                  className={`p-6 rounded-xl border ${
                    selectedPlan === plan.id
                      ? 'border-green-500 bg-green-500/10'
                      : 'border-gray-800 hover:border-green-500/50'
                  } cursor-pointer transition-colors`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    <div className="text-2xl font-bold text-green-400">
                      ${plan.price}
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <Check size={16} className="text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Purchase Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:brightness-110 transition-all"
            >
              Purchase Now <ChevronRight size={20} />
            </motion.button>
          </motion.div>
        </div>

        {/* Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-32"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Specifications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Advanced Security',
                desc: 'Military-grade encryption and secure boot process'
              },
              {
                icon: Zap,
                title: 'Neural Processing',
                desc: 'Custom AI chip with 15 TOPS computing power'
              },
              {
                icon: Cpu,
                title: 'Sensor Array',
                desc: '360° environmental awareness with multi-spectral imaging'
              }
            ].map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20"
              >
                <spec.icon size={32} className="text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">{spec.title}</h3>
                <p className="text-gray-400">{spec.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MiniBotPurchase;