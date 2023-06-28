import PWA from 'next-pwa'
const withPWA = PWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
})

const config = withPWA({
  images: {
    domains: ['tailwindui.com', 'flowbite.com', 's3-us-west-2.amazonaws.com'],
    allowFutureImage: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { dev, isServer }) => {
    Object.assign(config.resolve.alias, {
      react: 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat',
    })
    config.module.rules.push({
      test: /\.html$/i,
      loader: 'raw-loader',
    })
    return config
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
})

export default config
