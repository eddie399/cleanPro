import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const HeroSec = () => {
  return (
    <section className="relative bg-[url('/keep.jpg')] w-full h-[80vh] lg:w-full bg-cover bg-center flex items-center justify-center -mt-8">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-green-400/50 to-transparent z-0"></div>

      {/* Content */}
      <div className="relative w-full py-20 items-center text-center text-white tracking-tight lg:tracking-wider flex flex-col justify-center z-10">
        <h1 className="px-2 font-bold text-4xl lg:text-6xl max-w-xl mb-4 lg:tracking-wide">
          The Best Cleaning Service in Malawi
        </h1>
        <p className="text-sm lg:text-lg mb-8 max-w-xl px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Modi, culpa! Maiores,
          accusantium.
        </p>
        <div className="mt-8">
          <Link
            className="bg-gradient-to-r from-green-400 to-green-800 text-white text-sm px-5 py-3 rounded-full hover:bg-green-700 transition"
            href="/pricing"
          >
            View Plan
            <ArrowRightCircleIcon className="inline-block w-5 h-5 ml-2 animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSec;