"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // activate after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center pl-16 p-4 transition-all duration-300 ${
        scrolled
          ? "bg-white/5 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <ul className="flex gap-6">
        <li>
          <Link
            href="/projects"
            className="text-[#00085E] hover:text-blue-500 hover:underline"
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-[#00085E] hover:text-blue-500 hover:underline"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-[#00085E] hover:text-blue-500 hover:underline"
          >
            Contact
          </Link>
        </li>
      </ul>

      <h1 className="font-bold text-[#00085E]">
        <Link href="/">Creative Developer</Link>
      </h1>
    </nav>
  );
}
