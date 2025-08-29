import Image from "next/image";
import Link from "next/link";




const About = () => {
    return(
        <section className="py-10 px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                <div className="">
                <div>
                    <h2 className="text-green-500 font-bold pb-2 text-medium">About Us</h2>
                    <h1 className="font-bold text-3xl">About Our Company</h1>
                </div>
                <div>
                    <Image
                    className="rounded-lg mt-4 mb-4"
                    src="/bike.jpg"
                    alt="about image"
                    height={400}
                    width={400}
                    />
                </div>
                
                </div>
                <div>

                <h2 className=" font-medium tracking-midium text-2xl pb-2">We Allow You To Be Lazy, Get Anything Done In An Instant</h2>
                <p className="text-gray-600 tracking-wide mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laudantium 
                    doloremque dolorum. Debitis quo eaque odio harum 
                    accusamus odit at provident quidem. Et expedita quod alias aut 
                    veritatis nobis inventore?
                </p>
                <div className="mt-8">
                  <Link
                      className="bg-gradient-to-r from-green-400 to-green-800 text-white text-sm px-5 py-3 rounded-full shadow-md hover:bg-green-700 transition inline-block"
                      href="/pricing"
                  >
                      Read More
                  </Link>
                </div>
                </div>
            </div>
        </section>
    )
}

export default About;