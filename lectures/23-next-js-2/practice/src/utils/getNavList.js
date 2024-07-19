import Link from 'next/link';
import { pages } from '@/mock/nav';

const getNavItem = (page, parentPage) => {
	return (
		<li key={page.path}>
			<Link href={parentPage ? `${parentPage}${page.path}` : page.path}>
				{page.name}
			</Link>
		</li>
	);
};

const getListWrapper = (children) => {
	return <ul>{children}</ul>;
};

const getListItemWrapper = (children, page) => {
	return <li key={page.name}>{children}</li>;
};

const getNavList = (pages, parentPage) => {
	const result = [];

	pages.forEach((page) => {
		result.push(getNavItem(page, parentPage));

		if (page.subPages) {
			result.push(
				getListItemWrapper(getNavList(page.subPages, page.path), page)
			);
		}
	});

	return getListWrapper(result);
};

export default getNavList;
