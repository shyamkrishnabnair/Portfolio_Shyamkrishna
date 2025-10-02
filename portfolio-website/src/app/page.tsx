import Gallery from "@/components/Gallery";
import Navbar from "@/components/Navbar";
import Posters from "@/components/Posters";
import Image from "next/image";


export default function Home() {
  return (
    <>
    <Navbar/>
      <main className="pt-16 px-16">     
        <div className="grid grid-cols-2 min-h-[calc(100vh-4rem text-[#00085E] gap-x-16 gap-y-10 pt-48">
          {/* Top left */}
          <div className="self-end  ">
            <p className="text-[6rem] font-bold">shyamkrishna</p>
            <p className="text-[6rem] font-bold">b nair.</p>
          </div>

          {/* Top right */}
          <div className="self-end ">
            <p className="text-[3rem] font-semibold">I create. edit. & code.</p>
          </div>

          {/* Bottom left */}
          <div>
            <p className="text-[3rem] ">
              Final year undergrad in data science who loves to make stuff
            </p>
          </div>

          {/* Bottom right */}
          <div className="">
            <p>
              From graphic design to video editing, I bring ideas to life with a creative touch. With passion for modern technologies, I love building data-driven solutions and webapps.
            </p>
          </div>
        </div>

        <div className="about pt-48 pb-48 text-[#00085E] ">
          <p className="text-[3rem] font-bold">
            About
          </p>
          <div className="grid grid-cols-3 grid-rows-1 gap-4 pt-24 flex items-center justify-center">
              <div className="text-[3rem]" >
                <p className="">
                  hello im shyamkrishna b nair  
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-[500px] h-[500px] rounded-lg overflow-hidden">
                  <Image
                    src="/profile.jpg"
                    width={500}
                    height={500}
                    alt="shyamkrishna profile img"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="text-[1rem]" >
                <p>
                  i love doing creative stuff, organizing things and my inspirations are da vinci, hamilton and mr.perfect
                </p>
                <p>
                  with passion for design and tech i craft poster, edit videos and develop solutions that fit user needs and creativity.
                </p>
              </div>
          </div>
        </div>


        <div className="works text-[#00085E] pb-20">
          <p className="text-[3rem]">
            Works
          </p>
          <p className="text-[1rem]">
            Check out what i do
          </p>
          <Gallery />
          <Posters />
        </div>

        

  {/* <div
    className="flex h-screen w-full flex-col items-center justify-center rounded-lg p-6 dark:bg-slate-900"
  >
    <div className="grid h-full w-full grid-cols-10 grid-rows-5 gap-4 ">
      <div className="col-span-4 row-span-3 rounded-3xl bg-orange-400 flex justify-center items-center">Hello</div>
      <div className="col-span-5 row-span-1 rounded-3xl bg-orange-400"></div>
      <div className="col-span-1 row-span-1 rounded-3xl bg-orange-400"></div>
      <div className="col-span-2 row-span-2 rounded-3xl bg-orange-400"></div>
      <div className="col-span-4 row-span-2 rounded-3xl bg-orange-400"></div>
      <div className="col-span-4 row-span-2 rounded-3xl bg-orange-400"></div>
      <div className="col-span-6 row-span-2 rounded-3xl bg-orange-400"></div>
    </div>
  </div> */}

    
    
      </main>
    </>
  );
}
