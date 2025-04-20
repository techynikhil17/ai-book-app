export const bookImages = {
  'great-gatsby': '/images/great-gatsby.jpg',
  'mockingbird': '/images/mockingbird.jpg',
  '1984': '/images/1984.jpg',
  'pride-prejudice': '/images/pride-prejudice.jpg',
  'hobbit': '/images/hobbit.jpg',
};

export const getBookImage = (bookId: string) => {
  return bookImages[bookId as keyof typeof bookImages] || '/images/default-book.jpg';
}; 