module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['pt', 'en'],
    defaultLocale: 'pt',
    localeDetection: false,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  }
}
