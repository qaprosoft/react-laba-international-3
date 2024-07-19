/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		// These are all the locales you want to support in
		// your application
		locales: ['en-US', 'fr'],
		defaultLocale: 'en-US',
	},
};

export default nextConfig;
