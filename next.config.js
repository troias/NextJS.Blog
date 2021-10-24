const { PHASE_PRODUCTION_BUILD, PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {




  if (phase === PHASE_PRODUCTION_BUILD) {
 
    return {
      env: {
        MONGO_DB_HOST: 'mongodb+srv://',
        MONGO_DB_USERNAME: 'troias',
        MONGO_DB_PASS: 'troy20flavell',
        MONGO_DB_NAME:  'mysiteproduction',
        MONGO_DB_HOST_CLUSTER: `@cluster0.fzmw2.mongodb.net/mysiteproduction?retryWrites=true&w=majority`,
      }

    }
  }

  if (phase === PHASE_DEVELOPMENT_SERVER) {
  
    return {
      env: {
        MONGO_DB_HOST: 'mongodb+srv://',
        MONGO_DB_USERNAME: 'troias',
        MONGO_DB_PASS: 'troy20flavell',
        MONGO_DB_NAME:  'mysiteproduction',
        MONGO_DB_HOST_CLUSTER: `@cluster0.fzmw2.mongodb.net/mysiteproduction?retryWrites=true&w=majority`,
      },
      experimental: { esmExternals: true },
      webpack: (config, { isServer }) => {
        if (!isServer) {
          config.resolve.fallback.fs = false
        }
        return config
      },
    }
  }



}