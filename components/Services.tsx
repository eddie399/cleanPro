import { ShieldCheckIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";



const cardData = [
    {
        icon: <WrenchScrewdriverIcon className="w-12 h-12" />,
        title: "Satisfaction Guarantee",
        desc: [ 
            "We ensure every job meets your expectations.",
                
            "We ensure every job meets your expectations."
        ],
    },

    {
        icon: <ShieldCheckIcon className="w-12 h-12" />,
        title: "Satisfaction Guarantee",
        desc: [ 
            "We ensure every job meets your expectations.",
                
            "We ensure every job meets your expectations."
        ],
    },

     {
        icon: <ShieldCheckIcon className="w-12 h-12" />,
        title: "Satisfaction Guarantee",
        desc: [ 
            "We ensure every job meets your expectations.",
                
            "We ensure every job meets your expectations."
        ],
    },
    {
        icon: <ShieldCheckIcon className="w-12 h-12" />,
        title: "Satisfaction Guarantee",
        desc: [ 
            "We ensure every job meets your expectations.",
                
            "We ensure every job meets your expectations."
        ],
    },
];


const Services = () => {
    return (
        <section>
            <div className="text-center py-10 px-4">
                <div>
                    <h2 className="text-green-500 font-bold pb-2 text-medium">Our Services</h2>
                    <h1 className="font-bold text-3xl">What You Get</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8 max-w-5xl mx-auto">
                  {cardData.map((card, index) => (
                    <div
                      key={index}
                      className="group bg-white shadow-md cursor-pointer rounded-lg hover:bg-green-600 p-6 flex flex-col items-center text-center"
                    >
                      <div className="text-green-500 mb-2 bg-green-200 group-hover:bg-white shadow-sm rounded-full p-2">
                        {card.icon}
                      </div>
                      <h2 className="font-semibold text-black group-hover:text-white">{card.title}</h2>
                      {Array.isArray(card.desc) ? (
                        card.desc.map((line, i) => (
                          <p key={i} className="mt-1 text-sm text-gray-600">
                            {line}
                          </p>
                        ))
                      ) : (
                        <p className="mt-1 text-sm text-gray-600 group-hover:text-white">
                          {card.desc}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
            </div>
        </section>
    )
}

export default Services;