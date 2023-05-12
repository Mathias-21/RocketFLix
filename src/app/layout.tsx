import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'RocketFlix',
  description: 'Plataforma de filmes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} bg-zinc-950 text-zinc-100 scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-zinc-500`}
      >
        {children}
      </body>
    </html>
  );
}
