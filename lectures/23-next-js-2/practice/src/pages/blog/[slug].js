import { pages } from '@/mock/nav';

const blogPages = pages.find((page) => page.path === '/blog');

export function getStaticPaths() {
	const paths = blogPages.subPages.map((page) => {
		return [
			{
				params: {
					slug: page.path,
					locale: 'en-US',
				},
			},
			{
				params: {
					slug: page.path,
					locale: 'fr',
				},
			},
		];
	});

	return {
		paths: paths.flat(),
		fallback: 'blocking',
	};
}

// export function getStaticPaths() {
// 	const paths = blogPages.subPages.map((page) => {
// 		return {
// 			params: {
// 				slug: page.path,
// 			},
// 		};
// 	});
// 	console.log(paths);
// 	return {
// 		paths: paths,
// 		fallback: 'blocking',
// 	};
// }

export function getStaticProps({ params, locale }) {
	return {
		props: {
			params,
			locale,
		},
	};
}

export default function Blog({ params, locale = '' }) {
	return (
		<h1>
			{params.slug} - {locale}
		</h1>
	);
}
