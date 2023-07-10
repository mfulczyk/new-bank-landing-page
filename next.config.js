const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
];

module.exports = {
  env: {
    space: '13pxfxm4n20r',
    accessToken: 'cemO2FLOA11kReZLDC9A81Auo9J6MgIvSRxaf8gNmzs',
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    loader: 'imgix',
    path: '',
  },
  trailingSlash: true,
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};
