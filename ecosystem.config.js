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
      user : "deploy",
      host : "44.55.212.133",
      ref  : "origin/master",
      repo : "https://github.com/tristaneason/topbrokersrealty.git",
      path : "/var/www/topbrokersrealty.com",
      "post-deploy" : "nvm install && npm install && /home/deploy/.nvm/versions/node/v7.2.1/bin/pm2 startOrRestart ecosystem.json --env production"
    }
  }
}
