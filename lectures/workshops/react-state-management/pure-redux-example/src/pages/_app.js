import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '@/styles/theme';
import createEmotionCache from '@/common/mui/createCache';
import { Provider } from 'react-redux';
import { store, wrapper } from '@/store/store';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	return (
		<Provider store={store}>
			<CacheProvider value={emotionCache}>
				<Head>
					<meta name='viewport' content='initial-scale=1, width=device-width' />
				</Head>
				<ThemeProvider theme={theme}>
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					<Component {...pageProps} />
				</ThemeProvider>
			</CacheProvider>
		</Provider>
	);
}

export default wrapper.withRedux(MyApp);
