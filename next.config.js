const { PHASE_PRODUCTION_BUILD, PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
  // Prefer loading of ES Modules over CommonJS



  if (phase === "PHASE_DEVELOPMENT_SERVER") {
    return {
      experimental: { esmExternals: true },
      webpack: (config, { isServer }) => {
        if (!isServer) {
          config.resolve.fallback.fs = false
        }
        return config
      },
      env: {
        NEXT_PUBLIC_MONGO_DB_HOST: 'mongodb + srv://',
        NEXT_PUBLIC_MONGO_DB_USERNAME: 'troias',
        NEXT_PUBLIC_MONGO_DB_PASS: 'troy20flavell',
        NEXT_PUBLIC_MONGO_DB_HOST_CLUSTER: '@cluster0.fzmw2.mongodb.net/my-site-dev?retryWrites=true&w=majority'
      },

    }
  }

  if (phase == 'PHASE_PRODUCTION_BUILD') {
    return {
      experimental: { esmExternals: true },
      webpack: (config, { isServer }) => {
        if (!isServer) {
          config.resolve.fallback.fs = false
        }
        return config
      },
      env: {
        NEXT_PUBLIC_MONGO_DB_HOST: 'mongodb + srv://',
        NEXT_PUBLIC_MONGO_DB_USERNAME: 'troias',
        NEXT_PUBLIC_MONGO_DB_PASS: 'troy20flavell',
        NEXT_PUBLIC_MONGO_DB_HOST_CLUSTER: '@cluster0.fzmw2.mongodb.net/my-site?retryWrites=true&w=majority'
      },
    }
  }



}