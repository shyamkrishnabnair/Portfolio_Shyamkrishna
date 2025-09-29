import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center  pl-16 p-4 ">
        <ul className="flex gap-6">
            <li><a href="/projects" className="text-[#00085E] hover:text-blue-500 hover:underline">Work</a></li>
            <li><a href="/about" className="text-[#00085E] hover:text-blue-500 hover:underline">About</a></li>
            <li><a href="/contact" className="text-[#00085E] hover:text-blue-500 hover:underline">Contact</a></li>
        </ul>

        <h1 className="font-bold text-[#00085E] "><a href="/">Creative Developer</a></h1>
    </nav>
  );
}
