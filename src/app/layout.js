"use client";

import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { SessionProvider } from "next-auth/react";
import { useSession, signOut } from "next-auth/react";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

// export const metadata = {
//   title: "MyBudgetPro",
//   description: "Your personal finance management tool",
// };

function Navbar() {
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";

  return (
    <div className="navbar bg-primary shadow-md">
      <div className="flex-1">
        <Link
          href="/"
          className="normal-case text-2xl text-primary-content font-bold">
          MyBudgetPro
        </Link>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 btn btn-primary text-xl">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href={isAuthenticated ? "/dashboard" : "/features"}>
              {isAuthenticated ? "Dashboard" : "Features"}
            </Link>
          </li>
          {isAuthenticated ? (
            <>
              <li>
                <button onClick={() => signOut({callbackUrl: "/"})} className="text-left w-full">
                  Logout
                </button>
              </li>
              <li className="text-white font-semibold ml-4">
                Hi, {session.user.name}!
              </li>
            </>
          ) : (
            <li>
              <Link href="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="corporate" className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <head />
      <body className="min-h-screen bg-base-100 text-base-content">
        <SessionProvider>
          <Navbar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}

