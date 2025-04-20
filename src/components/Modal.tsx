import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Book } from '../data/books';
import { useReadingList } from '../context/ReadingListContext';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  book: Book | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, book }) => {
  const { addToReadingList, removeFromReadingList, isInReadingList } = useReadingList();

  if (!book) return null;

  const handleAddToReadingList = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    addToReadingList(book);
  };

  const handleRemoveFromReadingList = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    removeFromReadingList(book.id);
  };

  const isInList = isInReadingList(book.id);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gradient-to-br from-black/70 via-black/80 to-black/90 backdrop-blur-lg"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-2xl bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-black rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.2)] dark:shadow-[0_0_40px_rgba(255,255,255,0.1)] overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 pointer-events-none" />
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200 z-10 bg-white/10 p-2 rounded-full backdrop-blur-sm"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8 relative">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="relative w-full md:w-1/3 h-[400px] group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
                  <Image
                    src={book.coverImage}
                    alt={book.title}
                    fill
                    className="rounded-xl shadow-2xl object-cover transform group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-xl" />
                </div>
                
                <div className="w-full md:w-2/3">
                  <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
                  >
                    {book.title}
                  </motion.h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">by {book.author}</p>
                  
                  <div className="flex items-center mb-6 bg-white/5 p-3 rounded-xl backdrop-blur-sm">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <motion.svg
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          key={i}
                          className={`w-6 h-6 ${
                            i < Math.floor(book.rating)
                              ? 'text-yellow-400'
                              : 'text-gray-300 dark:text-gray-600'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </motion.svg>
                      ))}
                      <span className="ml-3 text-lg font-semibold text-gray-700 dark:text-gray-300">
                        {book.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6 bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                    <h3 className="font-semibold mb-3 text-lg text-gray-900 dark:text-white">Description</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{book.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Genre</p>
                      <p className="text-gray-700 dark:text-gray-200 font-semibold">
                        {book.genre}
                      </p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Rating</p>
                      <p className="text-gray-700 dark:text-gray-200 font-semibold">
                        {book.rating.toFixed(1)} / 5.0
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={isInList ? handleRemoveFromReadingList : handleAddToReadingList}
                      className={`px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg ${
                        isInList 
                          ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600'
                          : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                      }`}
                    >
                      {isInList ? 'Remove from Reading List' : 'Add to Reading List'}
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal; 