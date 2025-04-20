import React, { createContext, useContext, useState, useEffect } from 'react';
import { Book } from '../data/books';

interface ReadingListContextType {
  readingList: Book[];
  addToReadingList: (book: Book) => void;
  removeFromReadingList: (bookId: string) => void;
  isInReadingList: (bookId: string) => boolean;
}

const ReadingListContext = createContext<ReadingListContextType | undefined>(undefined);

export const ReadingListProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [readingList, setReadingList] = useState<Book[]>([]);

  useEffect(() => {
    // Load reading list from localStorage on mount
    const savedReadingList = localStorage.getItem('readingList');
    if (savedReadingList) {
      setReadingList(JSON.parse(savedReadingList));
    }
  }, []);

  useEffect(() => {
    // Save reading list to localStorage whenever it changes
    localStorage.setItem('readingList', JSON.stringify(readingList));
  }, [readingList]);

  const addToReadingList = (book: Book) => {
    setReadingList(prev => {
      if (!prev.some(b => b.id === book.id)) {
        return [...prev, book];
      }
      return prev;
    });
  };

  const removeFromReadingList = (bookId: string) => {
    setReadingList(prev => prev.filter(book => book.id !== bookId));
  };

  const isInReadingList = (bookId: string) => {
    return readingList.some(book => book.id === bookId);
  };

  return (
    <ReadingListContext.Provider value={{ readingList, addToReadingList, removeFromReadingList, isInReadingList }}>
      {children}
    </ReadingListContext.Provider>
  );
};

export const useReadingList = () => {
  const context = useContext(ReadingListContext);
  if (context === undefined) {
    throw new Error('useReadingList must be used within a ReadingListProvider');
  }
  return context;
}; 