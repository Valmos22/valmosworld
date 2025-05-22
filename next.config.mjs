/** @type {import('next').NextConfig} */

const securityHeaders = [
    {
        key: 'Content-Security-Policy',
        value: `
            default-src 'self';
            script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.youtube.com https://pagead2.googlesyndication.com https://*.sanity.io https://*.sanity-cdn.com;
            style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
            font-src 'self' https://fonts.gstatic.com;
            img-src 'self' data: https: blob:;
            connect-src 'self' https://*.sanity.io https://*.sanity-cdn.com;
            frame-src https://www.youtube.com https://*.google.com;
            object-src 'none';
            base-uri 'self';
            form-action 'self';
        `.replace(/\n/g, ''),
    },
    {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload',
    },
    {
        key: 'X-Frame-Options',
        value: 'DENY',
    },
    {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
    },
    {
        key: 'Referrer-Policy',
        value: 'strict-origin-when-cross-origin',
    },
    {
        key: 'Permissions-Policy',
        value: 'geolocation=(), microphone=(), camera=()',
    },
    {
        key: 'Cross-Origin-Opener-Policy',
        value: 'same-origin',
    },
];

const nextConfig = {
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: securityHeaders,
            },
        ];
    },
};

export default nextConfig;
