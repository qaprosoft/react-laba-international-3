import { pages } from '@/mock/nav';

const blogPages = pages.find((page) => page.path === '/blog');

export function getStaticPaths() {
	const paths = blogPages.subPages.map((page) => {
		return {
			params: {
				slug: [page.path, 'a', 'b'],
			},
		};
	});

	return {
		paths,
		fallback: 'blocking',
	};
}

export function getStaticProps({ params }) {
	return {
		props: {
			params,
		},
	};
}

export default function Blog({ params }) {
	return <h1>Blog all segments{params.slug}</h1>;
}
