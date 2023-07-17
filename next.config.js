/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: [
        {
            protocol: "https",
            hostname: "lh3.gooleusercontent.com"
        },
        {
            protocol: "https",
            hostname: "i.ibb.co"
        }
    ]
}

module.exports = nextConfig
