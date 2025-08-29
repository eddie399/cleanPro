import Link from "next/link";
import { title } from "process";

 

const CardData = [
    {
        title: "PRICES",
        price: "MK",
        period: "/month",
        features: [
            "1 Bathroom Cleaning",
            "Up To 3 Bedrooms Cleaning",
            "1 Living Room Cleaning",
            "Small Kitchen Cleaning",
            "Dusting & Vacuuming",
            "Mopping & Sweeping",  
        ],
        button: "See More"
    },
    {
        title: "Basic Plan",
        price: "MK10,000",
        period: "/month",
        features: [
            "1 Bathroom Cleaning",
            "Up To 3 Bedrooms Cleaning",
            "1 Living Room Cleaning",
            "Small Kitchen Cleaning",
            "Dusting & Vacuuming",
            "Mopping & Sweeping",  
        ],
        button: "Get Started"
    },
     {
        title: "Premium Plan",
        price: "MK30,000",
        period: "/month",
        features: [
            "2 Bathrooms Cleaning",
            "Up To 6 Bedrooms Cleaning",
            "4 Living Room Cleaning",
            "Big/Small Kitchen Cleaning",
            "Dusting & Vacuuming",
            "Mopping & Sweeping",  
            "Window Cleaning",
            "Appliance Cleaning",
        ],
        button: "Purchase Now"
    },
     {
        title: "Post Renovation",
        price: "MK50,000",
        period: "/month",
        features: [
            "1 Bathroom Cleaning",
            "Up To 3 Bedrooms Cleaning",
            "1 Living Room Cleaning",
            "Small Kitchen Cleaning",
            "Dusting & Vacuuming",
            "Mopping & Sweeping",  
        ],
        button: "Get Started"
    },
]



const Pricing = () => {
  return (
    <section className="py-10 px-4 w-full text-center">
      <div>
        <div>
          <div className="pb-12 flex items-center justify-center flex-col">
            <h2 className="text-green-500 font-bold text-sm mb-2">Pricing Table</h2>
            <h1 className="font-bold text-3xl">Prices For Our Services</h1>
          </div>
          <div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 justify-center">
              {CardData.map((card, index) => (
                <div
                  key={index}
                  className={`p-4 shadow-lg flex flex-col items-center ${
                    index % 2 === 0
                      ? "border border-green-500 rounded-tl-3xl rounded-br-3xl"
                      : "bg-green-500 text-white rounded-tr-3xl rounded-bl-3xl"
                  }`}
                  style={{
                    minHeight: "350px", // Set a minimum height
                  }}
                >
                  <h3 className="font-bold text-lg mb-4">{card.title}</h3>
                  <p className="mb-4">
                    <span className="font-bold text-3xl tracking-close">
                      {card.price}
                    </span>
                    <span className="">{card.period}</span>
                  </p>
                  <ul className="text-center my-4 space-y-2">
                    {card.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <Link
                    className="bg-gradient-to-r from-green-400 to-green-800 text-white text-sm px-5 py-3 rounded-full shadow-md hover:bg-green-700 transition inline-block"
                    href="/pricing"
                  >
                    {card.button}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;