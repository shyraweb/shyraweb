import React from 'react';
import { motion } from 'framer-motion';
import { cardVariants } from '@/constants/animationVariants';

type Props = {
  icon: string;
  title: string;
  description: string;
};

const FeatureCard: React.FC<Props> = ({ icon, title, description }) => {
  return (
    <motion.div
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100"
      variants={cardVariants}
      whileHover={{ scale: 1.03, boxShadow: '0px 10px 20px rgba(0,0,0,0.15)' }}
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h4 className="text-xl font-semibold text-gray-900 mb-3">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;