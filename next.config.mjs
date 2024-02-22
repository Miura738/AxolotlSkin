/** @type {import('next').NextConfig} */
import redirectMiddleware from './middlewares/redirectMiddleware';

const nextConfig = {
    serverMiddleware: [
        {
            handler: redirectMiddleware,
        },
    ]
};

export default nextConfig;
