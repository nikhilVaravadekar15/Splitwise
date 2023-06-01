/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/auth',
                destination: '/auth/signin',
                permanent: true,
            },
            {
                source: '/get-started',
                destination: '/auth/signup',
                permanent: true,
            },
            {
                source: '/dashboard',
                destination: '/dashboard/board',
                permanent: true,
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/*',
            },
        ],
    },
};

module.exports = nextConfig
