/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true,
		serverComponentsExternalPackages: ['mongoose']
	},
	images: {
		domains: ['assets.coingecko.com']
	}
}

module.exports = nextConfig
