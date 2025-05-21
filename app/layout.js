import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import PostStudio from "@/components/PostStudio/PostStudio";
import { Analytics } from '@vercel/analytics/next';
import "../styles/globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: 'ValmosWorld',
  description: 'Noticias y reviews de anime, películas y videojuegos.',
  icons: {
    icon: '/logohv.webp',
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
