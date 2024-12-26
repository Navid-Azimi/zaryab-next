/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns : [
            {
                protocol : "https",
                hostname : "zariab.cyborgtech.co",
                pathname : "/wp-content/uploads/**"
            }
        ]
    }
};

export default nextConfig;
