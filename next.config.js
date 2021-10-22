module.exports = {
  // Prefer loading of ES Modules over CommonJS
  experimental: { esmExternals: true },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }
    return config
  },

}