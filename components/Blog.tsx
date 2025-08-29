import Image from "next/image";
import Link from "next/link";

const BlogData = [
	{
		image: "/bike.jpg",
		date: "October 14, 2019 . by PaulBanda",
		caption: "Everything Nice With Them",
	},
	{
		image: "/bike.jpg",
		date: "October 14, 2019 . by PaulBanda",
		caption: "Everything Nice With Them",
	},
	{
		image: "/bike.jpg",
		date: "October 14, 2019 . by PaulBanda",
		caption: "Everything Nice With Them",
	},
];

const Blog = () => {
	return (
		<section className="py-10 px-4 w-full">
			<div>
				{/* Header */}
				<div className="text-left">
					<h2 className="text-green-400 font-bold text-sm">
						Blog And Articles
					</h2>
					<h1 className="text-3xl font-bold">Recent News</h1>
					<Link
						className="bg-gradient-to-r from-green-400 to-green-800 text-white text-sm px-5 py-3 rounded-full shadow-md hover:bg-green-700 transition inline-block mt-4"
						href="/pricing"
					>
						See More
					</Link>
				</div>

				{/* Blog Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
					{BlogData.map((blog, index) => (
						<div
							key={index}
							className="relative w-80 h-68 mx-auto flex flex-col items-center"
						>
							{/* Image */}
							<div className="w-full h-56 overflow-hidden rounded-lg shadow-md">
								<Image
									src={blog.image}
									alt="Blog Image"
									width={320}
									height={224}
									className="object-cover w-full h-full"
								/>
							</div>
							{/* Overlay */}
							<div className="absolute bottom-0 translate-y-1/50 w-3/4 bg-green-200 rounded-lg text-center py-4 z-10 shadow-md">
								<p className="text-sm text-gray-700">{blog.date}</p>
								<h2 className="text-sm font-bold text-gray-800">
									{blog.caption}
								</h2>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Blog;