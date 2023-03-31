import Header from "./Header";
import Footer from "./Footer";
import Popup from "./Popup";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
	const footerVisibility = useRouter().pathname === "/Contact" ? false : true;
	return (
		<>
			<Header />
			<Popup />
			<main>{children}</main>
			{footerVisibility && <Footer />}
		</>
	);
};

export default Layout;
