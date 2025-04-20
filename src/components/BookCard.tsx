import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Book } from '../data/books';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInReadingList, setIsInReadingList] = useState(false);

  const toggleReadingList = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsInReadingList(!isInReadingList);
  };

  return (
    <>
      <motion.div
        whileHover={{ y: -5 }}
        className="relative group h-[500px] rounded-xl overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src={book.coverImage}
            alt={book.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative h-full flex flex-col justify-end p-6"
        >
          <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-100 backdrop-blur-sm rounded-full">
                {book.genre}
              </span>
              <div className="flex items-center bg-yellow-500/20 text-yellow-100 backdrop-blur-sm rounded-full px-3 py-1">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-xs font-semibold">{book.rating.toFixed(1)}</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 line-clamp-2">
              {book.title}
            </h3>
            
            <p className="text-gray-300 text-sm mb-3">
              by <span className="text-white font-medium">{book.author}</span>
            </p>

            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-gray-300 text-sm line-clamp-3 mb-4">
                {book.description}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-lg font-medium transition-colors duration-300"
              >
                View Details
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full overflow-hidden"
            >
              <div className="flex">
                <div className="relative w-1/3 h-[500px]">
                  <Image
                    src={book.coverImage}
                    alt={`${book.title} cover`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-2/3 p-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {book.title}
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                    by {book.author}
                  </p>
                  <div className="flex items-center mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(book.rating)
                              ? 'text-yellow-400'
                              : 'text-gray-300 dark:text-gray-600'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-gray-600 dark:text-gray-300">
                        {book.rating.toFixed(1)}
                      </span>
                    </div>
                    <span className="ml-4 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm rounded-full">
                      {book.genre}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    {book.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <button
                      onClick={toggleReadingList}
                      className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                        isInReadingList
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100'
                      }`}
                    >
                      {isInReadingList ? 'Added to Reading List' : 'Add to Reading List'}
                    </button>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BookCard; 