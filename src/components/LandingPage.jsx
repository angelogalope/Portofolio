import { Link } from "react-scroll";

export const LandingPage = ({ darkMode }) => {
	return (
		<div
			className={`flex py-[210px] items-center justify-center ${
				darkMode
					? "bg-dark-100 transition-all duration-500"
					: "bg-white transition-all duration-500"
			}`}
		>
			<h1 className="text-lg sm:text-2xl md:text-4xl text-gray-400 text-center">
				"A tech dweeb{" "}
				<span
					className={`${
						darkMode ? "font-bold text-white" : "font-bold text-black"
					}`}
				>
					<span class="pulse-text">determined</span> to dive into the world of
					technology
				</span>{" "}
				with passion and drive."
			</h1>
			<button>
				<Link to="homeSection" smooth={true} offset={0} duration={500}>
					<div class="icon-scroll pt-5">
						<div className="mouse">
							<div className="wheel"></div>
						</div>
						<div className="icon-arrows">
							<span></span>
						</div>
					</div>
				</Link>
			</button>
		</div>
	);
};
