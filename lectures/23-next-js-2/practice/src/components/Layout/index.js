import { Header } from '..';

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
};

export default Layout;
