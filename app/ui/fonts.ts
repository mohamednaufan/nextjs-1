import { Inter, Oswald, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const oswald = Oswald({subsets: ['latin']})

const lusitana = Lusitana({
  subsets: ['latin'], // Specify the 'latin' subset
  weight: '400', // Add the desired weight if needed
  preload: true,  // Preload if you still want to enable it
});

export default lusitana;