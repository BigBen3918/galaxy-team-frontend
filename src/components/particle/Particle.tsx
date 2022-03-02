import Particles from "react-tsparticles";
import "./particle.scss";

const Particle = () => {
	return (
		<Particles
			className="particle"
			options={{
				fullScreen: false,
				fpsLimit: 60,
				interactivity: {
					events: {
						onClick: {
							enable: true,
							mode: "push",
						},
						onHover: {
							enable: true,
							mode: "grab",
						},
						resize: true,
					},
					modes: {
						grab: {
							distance: 150,
							links: {
								color: "#6c8b7b",
								opacity: 0.5,
							},
							line_linked: {
								color: "#6c8b7b",
								opacity: 0.3,
							},
						},
					},
				},
				particles: {
					color: {
						value: "#6c8b7b",
					},
					links: {
						color: "#6c8b7b",
						distance: 150,
						enable: true,
						opacity: 0.5,
						width: 1,
					},
					collisions: {
						enable: true,
					},
					move: {
						direction: "none",
						enable: true,
						outMode: "bounce",
						random: false,
						speed: 0.3,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 1000,
						},
						value: 80,
					},
					opacity: {
						value: 0.3,
					},
					shape: {
						type: "circle",
					},
					size: {
						random: true,
						value: 5,
					},
				},
				detectRetina: true,
			}}
		/>
	);
};

export default Particle;
