import './globals.css';
import { Poppins } from 'next/font/google';
import 'swiper/css';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

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
        className={`${poppins.className} bg-zinc-950 text-zinc-100 scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-zinc-500`}
      >
        {children}
      </body>
    </html>
  );
}
