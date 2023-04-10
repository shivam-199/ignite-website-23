import React from "react";
import styles from "../../styles/Common/Popup.module.css";
import cross from "../../public/assets/icons/multiply-30.png";
import Image from "next/image";

const Popup = () => {
	const [isOpen, setIsOpen] = React.useState(true);

	return (
		<div className={styles.root}>
			{isOpen && (
				<>
					<h2 className={styles.heading}>
						{/* <span>Avail discount on group registration for 50+ students.</span> */}
						<span>Avail discounts on group registration: 15% for 30+ students, 20% for 50+ students, 30% for 80+ students</span>
					</h2>
					<img
						src="/ignite/assets/icons/multiply-30.png"
						className={styles.cross}
						onClick={() => setIsOpen(false)}
					/>
				</>
			)}
		</div>
	);
};

export default Popup;
