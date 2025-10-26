import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '*',
			},
		],
	},
	devIndicators: {
		position: 'bottom-right', // only valid property left
	},
};

export default nextConfig;
