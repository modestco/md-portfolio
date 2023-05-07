function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<a
					href="https://github.com/modestco/md-portfolio"
					target="__blank"
					className="hover:underline hover:text-rose-600 dark:hover:text-rose-300 ml-1 duration-500"
				>
					Coded by Jen Luchka - md.co 
				</a>
				.
				<a
					href="https://modestco.ca"
					target="__blank"
					className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-rose-600 dark:hover:text-rose-300 ml-1 duration-500"
				>
					modest.co
				</a>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
