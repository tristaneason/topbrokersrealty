module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // Top Brokers Realty
    {
      name      : "topbrokersrealty",
      script    : "server.js",
      env_staging : {
        NODE_ENV: "staging"
      },
      env_production : {
        NODE_ENV: "production"
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : "teason",
      host : "44.55.212.133",
      ref  : "origin/master",
      repo : "https://github.com/tristaneason/topbrokersrealty.git",
      path : "/var/www/topbrokersrealty.com",
      "post-deploy" : "nvm install && npm install && /home/teason/.nvm/versions/node/v7.2.1/bin/pm2 startOrRestart ecosystem.json --env production"
    },
    dev : {
      user : "node",
      host : "44.55.212.133",
      ref  : "origin/master",
      repo : "git@github.com:repo.git",
      path : "/var/www/development",
      "post-deploy" : "nvm install && npm install && pm2 startOrRestart ecosystem.json --env dev",
      env  : {
        NODE_ENV: "dev"
      }
    }
  }
}
