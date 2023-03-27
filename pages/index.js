import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import IGNITE_EVENTS from "../src/Constants/ignite_events";

const Home = () => {
	const [height, setHeight] = useState(null);

	let options = {
		rootMargin: "0px",
		threshold: 0.5,
	};

	let callback = (entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				window.location.replace(`/#${entry.target.id}`);
			}
		});
	};

	useEffect(() => {
		setHeight(window.innerHeight);

		const observer = new IntersectionObserver(callback, options);
		let targetIds = ["#Home", "#About", "#Events"];
		targetIds.forEach((id) => {
			let target = document.querySelector(id);
			observer.observe(target);
		});
	});

	return (
		<>
			<Head>
				<title>
					Ignite | Indian Institute of Technology Gandhinagar
				</title>
				<meta
					name="description"
					content="Page for Ignite tech festival of Indian Institute of Technology Gandhinagar"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.root}>
				<div
					id="Home"
					style={{ height: height }}
					className={styles.ignite_home}
				>
					<div className={styles.ignite_logo_div}>
						<img
							className={styles.ignite_logo}
							src="/assets/icons/ignite-logo.png"
						/>
						<h2 className={styles.ignite_text}>G20-IGNITE</h2>
						<h2 className={styles.ignite_sub_text}>
							A SCI-TECH FAIR
						</h2>
					</div>
					<div className={styles.ignite_desc}>
						<div className={styles.logos_div}>
							<img
								className={styles.main_logos}
								src="/assets/icons/g20-logo.png"
							/>
							<img
								className={styles.main_logos}
								src="/assets/icons/iitgn-logo-white.png"
							/>
							<img
								className={styles.main_logos}
								src="/assets/icons/tech-council-logo.png"
							/>
						</div>
						<h2 className={styles.ignite_iitgn_text}>
							INDIAN INSTITUTE OF TECHNOLOGY GANDHINAGAR
						</h2>
						<hr className={styles.ignite_hr} />
						<h2 className={styles.ignite_dates}>APRIL 15, 2023</h2>
						<button className={styles.register_btn}>
							{" "}
							Register Now!{" "}
						</button>
					</div>
				</div>
				<div
					id="About"
					style={{ height: height }}
					className={styles.mainpage}
				>
					<h3 className={styles.subtitle}>About G20-IGNITE</h3>
					<p className={styles.desc}>
						G20-Ignite is a Science and Technology Fair that aims to
						support and encourage critical thinking,
						problem-solving, and curiosity among school students
						from the disciplines of Science, Technology,
						Engineering, Arts, and Mathematics. The event will be a
						platform to introduce a new generation of engineers,
						scientists, and researchers to the diverse dimensions of
						science and technology. IIT Gandhinagar aspires to
						showcase its in-house technological prowess,
						state-of-the-art infrastructure and research facilities,
						exceptionally talented students, and creative learning
						programs. With a plethora of interactive showcases and
						exhibitions, hands-on training modules, and engaging
						competitions, Ignite is a celebration of technology,
						inspiration, discovery, and innovation.
					</p>
				</div>
				<div className={styles.event_main}>
					<h2 id="Events" className={styles.title}>
						Events
					</h2>
					<div className={styles.clubsOuter}>
						{IGNITE_EVENTS.map((event) => {
							return (
								<div
									className={styles.clubCard}
									key={event.id}
									style={{
										backgroundColor: event.backgroundColor,
									}}
								>
									<div className={styles.bannerOuter}>
										<img
											className={styles.clubBanner}
											src={event.banner}
										/>
									</div>
									<div className={styles.clubInfo}>
										<h2 className={styles.clubName}>
											{event.name}
										</h2>
										<p className={styles.clubDesc}>
											{event.desc}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<hr />
			</div>
		</>
	);
};

export default Home;
