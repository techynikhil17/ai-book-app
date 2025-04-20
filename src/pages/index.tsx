import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import BookCard from '../components/BookCard';
import NoResults from '../components/NoResults';
import { books } from '../data/books';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const results = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(results);
  }, [searchTerm]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Head>
        <title>BookAI - Your Personal Book Recommendation Platform</title>
        <meta name="description" content="Discover your next favorite book with AI-powered recommendations" />
      </Head>

      <main className="min-h-screen hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6 animate-float">
              Discover Your Next Adventure
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our curated collection of books spanning multiple genres and embark on a journey of knowledge and imagination.
            </p>
          </motion.div>

          <div className="relative max-w-2xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="glass-effect rounded-2xl p-2"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by title, author, or genre..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-8 py-6 text-lg rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-2 border-white/20 dark:border-gray-700/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 transition-all duration-300"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <motion.svg
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 text-gray-400 dark:text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </motion.svg>
                </div>
              </div>
            </motion.div>
          </div>

          {isLoading ? (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[...Array(6)].map((_, i) => (
                <motion.div key={i} variants={item} className="loading-shimmer h-[500px] rounded-xl" />
              ))}
            </motion.div>
          ) : filteredBooks.length > 0 ? (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredBooks.map((book) => (
                <motion.div
                  key={book.id}
                  variants={item}
                  className="book-card animate-glow"
                >
                  <BookCard book={book} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <NoResults searchTerm={searchTerm} />
          )}
        </div>
      </main>
    </>
  );
};

export default Home; 