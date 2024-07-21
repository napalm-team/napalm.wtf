import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/navbar";
import Background from "@/component/background";
import Footer from "@/component/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Napalm | Utility-First AI",
  description: "Napalm is a utility-first AI that helps you play your games better.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Background>
          <Navbar />
          {children}
        </Background>
        <Footer />
      </body>
    </html>
  );
}
