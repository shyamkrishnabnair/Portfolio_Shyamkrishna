import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <>
    <Navbar/>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">About Me</h1>
        <p className="text-lg text-gray-700 max-w-2xl mb-4">
          Hi, I’m Shyamkrishna, a Computer Science and Engineering undergrad specializing in Data Science.
          I’m passionate about building AI/ML projects, web development, and graphic design.
        </p>
        <p className="text-lg text-gray-700 max-w-2xl">
          I love creating practical solutions that combine design, data, and technology. Currently, I’m exploring Next.js, Tailwind CSS, and full-stack project development.
        </p>
      </main>
    </>
  );
}