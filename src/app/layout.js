import { Inter } from "next/font/google";
import "./globals.css";
import BackTop from "../../components/BacktoTop/BackToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Food-Ordering",
  description: "Eat if you want!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <BackTop />
      </body>
    </html>
  );
}
