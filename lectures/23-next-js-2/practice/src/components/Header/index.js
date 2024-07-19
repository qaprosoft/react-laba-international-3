import { pages } from '@/mock/nav';

import getNavList from '@/utils/getNavList';

const Header = () => {
	return (
		<header>
			<nav>{getNavList(pages)}</nav>
		</header>
	);
};

export default Header;
