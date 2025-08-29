import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const cardData = [
	{
		image: "/WIN.jpg",
		title: "Grace Banda",
		desc: [
			
			 "We ensure every job meets your expectations We ensure every job meets your expectations We ensure every job meets your expectations."
		
		],
	},
	{
		image: "/WIN.jpg",
		title: "John Doe",
		desc: [
			"The service was excellent and exceeded my expectations Highly recommend CleanPro!.",
			
		],
	},
	{
		image: "/WIN.jpg",
		title: "Jane Smith",
		desc: [
			"Professional and reliable cleaning services will definitely use them again!"
			                                             
		],
	},
];

const Testimonials = () => {
	return (
		<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<div>
				{/* Header */}
				<div className="py-8 flex items-center">
					<div className="bg-green-500 p-4 rounded-full inline-block mb-4 shadow-green-200 shadow-lg">
						<ChatBubbleLeftRightIcon className="h-10 w-10 text-white" />
					</div>
					<div className="ml-8">
						<h2 className="text-green-500 font-bold text-sm mb-2">
							Testimonials
						</h2>
						<h1 className="font-bold text-2xl">Our Customers</h1>
					</div>
				</div>

				{/* Carousel */}
				<div className="overflow-x-auto flex gap-6 snap-x snap-mandatory">
					{cardData.map((card, idx) => (
						<div
							key={idx}
							className="snap-center bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center min-w-[300px] max-w-xs mx-auto"
						>
							{/* Description */}
							<div>
								{Array.isArray(card.desc) ? (
									card.desc.map((line, i) => (
										<p key={i} className="text-sm text-gray-600 mb-2">
											{line}
										</p>
									))
								) : (
									<p className="text-sm text-gray-600 mb-2">
										{card.desc}
									</p>
								)}
							</div>

							{/* Image */}
							<div className="w-20 h-20 rounded-full overflow-hidden mx-auto mt-4">
								<Image
									src={card.image}
									alt={card.title}
									width={100}
									height={100}
									className="object-cover w-full h-full"
								/>
							</div>

							{/* Title */}
							<h2 className="font-semibold text-black mt-4">{card.title}</h2>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;