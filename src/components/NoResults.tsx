import React from 'react';
import { motion } from 'framer-motion';

interface NoResultsProps {
  searchTerm: string;
}

const NoResults: React.FC<NoResultsProps> = ({ searchTerm }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-12"
    >
      <div className="max-w-md mx-auto">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          No books found
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          {searchTerm 
            ? `No books match your search for "${searchTerm}"`
            : "No books match your current filters"}
        </p>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Try adjusting your search terms or filters
        </p>
      </div>
    </motion.div>
  );
};

export default NoResults; 