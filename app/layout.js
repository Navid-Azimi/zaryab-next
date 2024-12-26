'use client';
import './globals.css';
import Header from './components/header/header';
import Footer from "./components/footere/footer";
import {usePathname} from "next/navigation";
export default function RootLayout({ children }) {
    const pathname = usePathname();
  return (
    <html lang="en">
      <body className={`${pathname === '/about' ? 'bg-black' : 'bg-white'}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
