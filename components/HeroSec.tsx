import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const HeroSec = () => {
  return (
    <section className="bg-[url('/keep.jpg')] w-full h-[80vh] lg:max-w-full bg-cover bg-center flex items-center justify-center -mt-8 rounded-b-3xl">
      <div className="w-full py-20 items-center text-center text-white tracking-tight flex flex-col justify-center">
        {/* Content */}
        <h1 className="font-bold text-2xl lg:text-6xl mb-4">
          The Best Cleaning Service in Malawi
        </h1>
        <p className="text-sm lg:text-lg mb-8 max-w-xl px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Modi, culpa! Maiores,
          accusantium.
        </p>
        {/* Button */}
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