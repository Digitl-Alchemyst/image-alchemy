import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/c/Header';
import PromptInput from '@/c/PromptInput';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Alchemy Image Lab',
  description: 'Created by Digital Alchemyst @ Digital Alchemyst Studios',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-zinc-900 text-slate-200`}>
        {/* Header  */}
        <Header />
        {/* Prompt Input  */}
        <PromptInput body='Default Prompt Body' />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
