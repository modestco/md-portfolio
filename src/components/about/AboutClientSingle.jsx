const AboutClientSingle = ({ title, image }) => {
	return (
		<>
			<img
				src={image}
				className="w-64 py-5 px-10 border bg-White border-Gold dark:border-tSage shadow-sm rounded-lg mb-8 cursor-pointer"
				alt={title}
			/>
		</>
	);
};

export default AboutClientSingle;
