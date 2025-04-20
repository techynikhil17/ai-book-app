import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { ReadingListProvider } from '../context/ReadingListContext';
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import '../styles/globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ReadingListProvider>
        <Head>
          <title>BookAI - Your Personal Book Recommendation Platform</title>
          <meta name="description" content="Discover your next favorite book with AI-powered recommendations" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Navbar />
          <main className="pt-16">
            <Component {...pageProps} />
          </main>
          <ScrollToTop />
        </div>
      </ReadingListProvider>
    </ThemeProvider>
  );
};

export default MyApp; 