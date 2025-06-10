import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <div className="flex flex-col items-center justify-between gap-12 px-6 lg:flex-row lg:px-12">
        {/* Left side: text */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="mb-8 text-6xl font-bold leading-tight">
            <span className="block">Simple</span>
            <span className="block mt-4">Budgeting</span>
          </h1>
          <p className="mt-2 text-2xl text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="mt-6">
            <Link
              href="/register"
              className="px-8 py-4 text-lg font-semibold rounded-full btn btn-primary">
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
            className="object-cover mx-auto rounded-lg lg:mx-0"
          />
        </div>
      </div>
    </div>
  );
}
