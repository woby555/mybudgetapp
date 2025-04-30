import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      {/* Navbar */}
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
              <Link href="/features">Features</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-24 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 gap-12">
        {/* Left side: text */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-6xl font-bold mb-8 leading-tight">
            <span className="block">Simple</span>
            <span className="block mt-4">Budgeting</span>
          </h1>
          <p className="text-2xl mt-2 text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="mt-6">
            <Link
              href="/signup"
              className="btn btn-primary rounded-full text-lg px-8 py-4 font-semibold">
              Get Started
            </Link>
          </div>
        </div>

        {/* Right side: image */}
        <div className="w-full lg:w-1/2 lg:ml-auto lg:translate-x-8">
          <Image
            src="/images/landing.png"
            alt="Hero Image"
            width={600}
            height={400}
            className="object-cover rounded-lg mx-auto lg:mx-0"
          />
        </div>
      </div>
    </div>
  );
}
