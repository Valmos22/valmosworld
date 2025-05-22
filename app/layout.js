import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import PostStudio from "@/components/PostStudio/PostStudio";
import { Analytics } from '@vercel/analytics/next';
import "../styles/globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: 'ValmosWorld | Noticias y reviews de anime, películas, videojuegos y más',
  description: 'Explora reseñas, noticias y análisis sobre tus animes, videojuegos y películas favoritas en ValmosWorld. Actualizaciones semanales y contenido original.',
  icons: {
    icon: '/logohv.webp',
  },
  keywords: [
    'anime', 'noticias anime', 'reseñas anime', 'valmosworld', 'teorias anime',
    'videojuegos', 'películas', 'estrenos', 'crunchyroll', 'otaku', 'netflix', 'paginas de peliculas',
    'Tecnologia', 'inventos tecnológicos', 'mundo digital',
  ],
  authors: [{ name: 'Hugo Valderrama', url: 'https://valmosworld.com' }],
  creator: 'ValmosWorld',
  publisher: 'ValmosWorld',
  metadataBase: new URL('https://valmosworld.com'),
  openGraph: {
    title: 'ValmosWorld',
    description: 'Noticias y reviews de anime, películas, videojuegos y tecnología.',
    url: 'https://valmosworld.com',
    siteName: 'ValmosWorld',
    images: [
      {
        url: '/og-image.webp', // crea esta imagen en public/
        width: 1200,
        height: 630,
        alt: 'ValmosWorld banner',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ValmosWorld',
    description: 'Noticias y reviews de anime, películas y videojuegos.',
    site: '@TuUsuarioDeTwitter', // opcional
    creator: '@TuUsuarioDeTwitter', // opcional
    images: ['/og-image.webp'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body id="body">
        <Providers>
          <Navbar />
          <PostStudio />
          {children}
          <Analytics />
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
