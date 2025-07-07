import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main>

      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]">
      <section className="grid grid-cols-2 h-[90vh] ">
        <div className=" flex flex-col justify-center items-center gap-4">
          <h1 className="font-bold text-3xl">
            Try my best URL Shortner
          </h1>
          <p>It is the best URL shortner which doent even collect your data.</p>
          <div className="flex gap-4">
          <Link href={`/shorten`}><button  className="bg-purple-300 p-2 px-4 rounded-2xl hover:bg-purple-500 cursor-pointer hover:scale-105 transform transition duration-300 hover:text-white">Try Now</button></Link>
          <button className="bg-purple-300 p-2 px-4 rounded-2xl hover:bg-purple-500 cursor-pointer hover:scale-105 transform transition duration-300 hover:text-white">Github</button>
          </div>
        </div>
        <div className=" relative">
          <Image className="mix-blend-darken" src={"/vector.jpg"} alt="vectore img of shortner" fill={true} />
        </div>
      </section>
      </div>
      </div>
    </main>
  );
}
