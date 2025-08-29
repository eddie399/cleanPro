import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";



const HeroSec = () => {
  return (
    <section className="bg-[url('/spray.JPG')] w-full h-screen bg-cover bg-center -mx-4 -mt-8">
        <div className="container mx-auto px-4 py-20 items-center text-center">
            <div className="grid grid-col-1 md:grid-cols-2 gap-4 text-center items-center">
                <h1 className="font-bold text-2xl">The Best Cleaning Service in Malawi</h1>
                <p>Lorem ipsum dolor sit amet 
                    consectetur adipisicing
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, culpa!
                     elit. Maiores, accusantium.
                </p>

                
            </div>

            <div className="mt-8">
                <Link
                    className="bg-gradient-to-r from-green-400 to-green-800 text-white text-sm px-5 py-3 rounded-full hover:bg-green-700 transition"
                    href="/pricing"
                >
                    View Plan
                    <ArrowRightCircleIcon 
                    className="inline-block w-5 h-5 ml-2 animate-bounce"
                    />
                </Link>
            </div>
        </div>
    </section>
    );
};

export default HeroSec;