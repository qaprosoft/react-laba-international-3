import { useState, useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '@/styles/theme';
import createEmotionCache from '@/common/mui/createCache';
import {
	Hydrate,
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query';
import dynamic from 'next/dynamic';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const ReactQueryDevtoolsProduction = dynamic(
	() =>
		import('@tanstack/react-query-devtools/production').then((d) => ({
			default: d.ReactQueryDevtools,
		})),
	{ suspense: true }
);

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	const [queryClient] = useState(() => new QueryClient());
	const [showDevtools, setShowDevtools] = useState(false);

	useEffect(() => {
		// @ts-ignore
		window.toggleDevtools = () => setShowDevtools((old) => !old);
	}, []);

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<ReactQueryDevtools initialIsOpen />
				<CacheProvider value={emotionCache}>
					<Head>
						<meta
							name='viewport'
							content='initial-scale=1, width=device-width'
						/>
					</Head>
					<ThemeProvider theme={theme}>
						{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
						<CssBaseline />
						<Component {...pageProps} />
					</ThemeProvider>
				</CacheProvider>
			</Hydrate>
		</QueryClientProvider>
	);
}
