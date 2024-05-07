/** @type {import('next').NextConfig} */
const nextConfig = {
    //it is forbidden to use remote images in next/image, if you need it you have to specify all urls in this array
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
};

export default nextConfig;
