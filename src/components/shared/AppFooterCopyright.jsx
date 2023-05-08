function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-Sage dark:text-Gold">
				&copy; {new Date().getFullYear()}
				<a
					href="https://github.com/modestco/md-portfolio"
					target="__blank"
					className="hover:underline hover:text-rose-600 dark:hover:text-rose-300 ml-1 duration-500"
				>
					Jen Luchka 
				</a>
				.
				<a
					href="https://modestco.ca"
					target="__blank"
					className="text-Rosee dark:text-White font-medium uppercase hover:underline hover:text-rose-600 dark:hover:text-rose-300 ml-1 duration-500"
				>
					modest.co
				</a>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
