export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  rating: number;
  genre: string;
  description: string;
}

export const books: Book[] = [
  {
    id: '1',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    coverImage: '/images/books/midnight-library.jpg',
    rating: 4.5,
    genre: 'Fiction',
    description: 'Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.'
  },
  {
    id: '2',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    coverImage: '/images/books/project-hail-mary.jpg',
    rating: 4.8,
    genre: 'Science Fiction',
    description: 'Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the Earth itself will perish.'
  },
  {
    id: '3',
    title: 'Atomic Habits',
    author: 'James Clear',
    coverImage: '/images/books/atomic-habits.jpg',
    rating: 4.9,
    genre: 'Self-Help',
    description: 'No matter your goals, Atomic Habits offers a proven framework for improving—every day.'
  },
  {
    id: '4',
    title: 'Dune',
    author: 'Frank Herbert',
    coverImage: '/images/books/dune.jpg',
    rating: 4.7,
    genre: 'Science Fiction',
    description: 'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world.'
  },
  {
    id: '5',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    coverImage: '/images/books/psychology-of-money.jpg',
    rating: 4.7,
    genre: 'Finance',
    description: 'Timeless lessons on wealth, greed, and happiness doing well with money isn\'t necessarily about what you know.'
  },
  {
    id: '6',
    title: 'Foundation',
    author: 'Isaac Asimov',
    coverImage: '/images/books/foundation.jpg',
    rating: 4.6,
    genre: 'Science Fiction',
    description: 'For twelve thousand years the Galactic Empire has ruled supreme. Now it is dying. Only Hari Seldon, creator of the revolutionary science of psychohistory, can see into the future.'
  },
  {
    id: '7',
    title: 'Snow Crash',
    author: 'Neal Stephenson',
    coverImage: '/images/books/snow-crash.jpg',
    rating: 4.4,
    genre: 'Cyberpunk',
    description: 'In reality, Hiro Protagonist delivers pizza for Uncle Enzo\'s CosoNostra Pizza Inc., but in the Metaverse he\'s a warrior prince.'
  },
  {
    id: '8',
    title: 'Neuromancer',
    author: 'William Gibson',
    coverImage: '/images/books/neuromancer.jpg',
    rating: 4.3,
    genre: 'Cyberpunk',
    description: 'Case was the sharpest data-thief in the matrix—until he crossed the wrong people and they crippled his nervous system.'
  },
  {
    id: '9',
    title: 'The Three-Body Problem',
    author: 'Cixin Liu',
    coverImage: '/images/books/three-body-problem.jpg',
    rating: 4.5,
    genre: 'Science Fiction',
    description: 'Set against the backdrop of China\'s Cultural Revolution, a secret military project sends signals into space to establish contact with aliens.'
  },
  {
    id: '10',
    title: 'Ready Player One',
    author: 'Ernest Cline',
    coverImage: '/images/books/ready-player-one.jpg',
    rating: 4.6,
    genre: 'Science Fiction',
    description: 'In 2045, reality is an ugly place. The only time Wade Watts really feels alive is when he\'s jacked into the OASIS, a vast virtual world.'
  }
]; 