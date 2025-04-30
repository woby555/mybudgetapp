import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: "MyBudgetPro",
  description: "Your personal finance management tool",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="corporate">
      <body
        className={`${poppins.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
