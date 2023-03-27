import styles from "../../styles/Common/Footer.module.css";
import FOOTER_LINKS from "../Constants/footer_links";

export default function Footer() {
	return (
		<div className={styles.root}>
			<div className={styles.tech_council_outer}>
				<div className={styles.name_text}>
					<h1 className={styles.ignite_text}>
						G20- <br /> IGNITE
					</h1>
					<h1 className={styles.tech_council_text}>
						Technical Council <br /> IIT Gandhinagar
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
					Gandhinagar, Gujarat, India - 382355
				</p>

				<div className="flex flex-row items-center">
					<a href={FOOTER_LINKS.social.facebook} target="_blank">
						<img
							src="/assets/icons/icons8-facebook-48.png"
							className={styles.social_link}
						/>
					</a>
					<a href={FOOTER_LINKS.social.instagram} target="_blank">
						<img
							src="/assets/icons/icons8-instagram-48.png"
							className={styles.social_link}
						/>
					</a>
					<a
						href={`mailto:${FOOTER_LINKS.social.email}`}
						target="_blank"
					>
						<img
							src="/assets/icons/icons8-envelope-48.png"
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
