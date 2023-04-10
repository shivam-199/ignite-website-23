import styles from "../../styles/Common/Footer.module.css";
import FOOTER_LINKS from "../Constants/footer_links";

export default function Footer() {
	return (
		<div className={styles.root}>
			<div className={styles.tech_council_outer}>
				<div className={styles.name_text}>
					<h1 className={styles.ignite_text}>G20- IGNITE</h1>
					<h1 className={styles.tech_council_text}>
						IIT Gandhinagar
					</h1>
				</div>
				<h3 className={styles.tech_council_quote}>
					"To create a culture where technology is the solution of
					every problem."
				</h3>
			</div>
			<div className={styles.useful_links_outer}>
				<h1 className={styles.section_title}>USEFUL LINKS</h1>
				{FOOTER_LINKS.quick.map((link) => {
					return (
						<a
							className={styles.useful_links}
							key={link.id}
							href={link.path}
						>
							<img
								src={link.icon}
								width="15%"
								height="15%"
								className={styles.icon_style}
							/>
							<p>{link.name}</p>
						</a>
					);
				})}
			</div>
			<div className={styles.contact_us_outer}>
				<h1 className={styles.section_title}>CONTACT US</h1>
				<p className={styles.contact_text}>
					Indian Institute of Technology Gandhinagar Palaj,
					Gandhinagar, Gujarat, India - 382055
					<br />
					<span className="inline-flex items-center">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline mr-2 my-2">
							<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
						</svg>
						+91 79 2395 2132
					</span>
				</p>

				<div className="flex flex-row items-center gap-3">
					<a href={FOOTER_LINKS.social.facebook} target="_blank">
						<img
							src="/ignite/assets/icons/icons8-facebook-48.png"
							className={styles.social_link}
						/>
					</a>
					<a href={FOOTER_LINKS.social.instagram} target="_blank">
						<img
							src="/ignite/assets/icons/icons8-instagram-48.png"
							className={styles.social_link}
						/>
					</a>
					<a
						href={`mailto:${FOOTER_LINKS.social.email}`}
						target="_blank"
					>
						<img
							src="/ignite/assets/icons/icons8-envelope-48.png"
							className={styles.social_link}
						/>
					</a>
				</div>
			</div>
			{/* <div className={styles.torque_magazine_outer}>
				<h1 className={styles.section_title}>TORQUE MAGAZINE</h1>
				<p className={styles.torque_text}>
					Torque is the technical magazine of IIT Gandhinagar. It
					highlights the works of IITGN community in technical field.
				</p>
				<div className="flex flex-row items-center">
					<a href={FOOTER_LINKS.social.torque_fb} target="_blank">
						<img
							src="/assets/icons/icons8-facebook-48.png"
							className={styles.social_link}
						/>
					</a>

					<a
						href={`mailto:${FOOTER_LINKS.social.torque_email}`}
						target="_blank"
					>
						<img
							src="/assets/icons/icons8-envelope-48.png"
							className={styles.social_link}
						/>
					</a>
				</div>
			</div> */}
		</div>
	);
}
