import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar/>
      <main className="pt-16">     
        <div className="grid grid-cols-2 min-h-[calc(100vh-4rem)] px-16 text-[#00085E] gap-x-16">
          {/* Top left */}
          <div className="self-center">
            <p className="text-[6rem] font-bold">shyamkrishna</p>
            <p className="text-[6rem] font-bold">b nair.</p>
          </div>

          {/* Top right */}
          <div className="self-center">
            <p className="text-[3rem] font-semibold">I create. edit. & code.</p>
          </div>

          {/* Bottom left */}
          <div>
            <p>
              Final year undergrad in data science who loves to make stuff
            </p>
          </div>

          {/* Bottom right */}
          <div>
            <p>
              From graphic design to video editing, I bring ideas to life with a creative touch. With passion for modern technologies, I love building data-driven solutions and webapps.
            </p>
          </div>
        </div>

    
      </main>
    </>
  );
}
