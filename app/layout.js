import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Analytics } from '@vercel/analytics/next';
import "../styles/globals.css";

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
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
