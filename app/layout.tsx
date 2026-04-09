import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import AOSProvider from "./aosProvider";
import BootstrapClient from "./components/BootstrapClient";
import '../styles/global.scss';
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // optional, choose weights you need
});

export const metadata: Metadata = {
  title: "Nike",
  description: "Build Different",
  icons: {
    icon: '/images/nikeLogotab.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <AOSProvider />
        <BootstrapClient />
        <ToastContainer/>
        {children}
      </body>
    </html>
  );
}
