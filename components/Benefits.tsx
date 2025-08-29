import Link from "next/link";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";

const cardData = [
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
		title: "Eco-Friendly Products",
		desc: "Safe for your family and the environment.",
	},
	{
		icon: <ShieldCheckIcon className="w-12 h-12" />,
		title: "Trusted Professionals",
		desc: "Experienced and background-checked staff.",
	},
	{
		icon: <ShieldCheckIcon className="w-12 h-12" />,
		title: "Flexible Scheduling",
		desc: "Book cleaning at your convenience.",
	},
];

const Benefits = () => {
	return (
		<section className="w-full bg-gray-100/50 py-10 px-4">
			<div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center">
				{/* Text Section */}
				<div className="max-w-lg w-full">
					<h2 className="text-medium font-bold pt-6 pb-2 text-green-500">
						Our Benefits
					</h2>
					<h1 className="text-3xl font-bold">What We Offer</h1>
					<p className="mt-6">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis non
						commodi officiis cupiditate numquam unde impedit optio, ad quibusdam
						libero!
					</p>
					<p className="mt-4">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
						quis dolorem esse soluta hic consequatur.
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
				{/* Cards Section */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md w-full mx-auto">
					{cardData.map((card, idx) => (
						<div
							key={idx}
							className="group bg-white p-4 rounded-lg shadow-md flex flex-row items-center text-left hover:bg-green-500 cursor-pointer transition-colors"
						>
							<div className="mr-4 text-green-500 group-hover:text-white transition-colors">
								{card.icon}
							</div>
							<div>
								<h2 className="font-semibold text-black group-hover:text-white px-2 rounded transition-colors">
									{card.title}
								</h2>
								{Array.isArray(card.desc) ? (
									card.desc.map((line, i) => (
										<p key={i} className="mt-1 text-sm text-gray-600 group-hover:text-gray-600 transition-colors">
											{line}
										</p>
									))
								) : (
									<p className="mt-1 text-sm text-gray-600 group-hover:text-gray-600 transition-colors">
										{card.desc}
									</p>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Benefits;