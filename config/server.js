module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', '5e9b8cda3c3fac8b65951d497b37dd97eced9df65a6c5e54a13d5f0f8cf76101,06aaf0d5c86d55dfa4847d63bdd83e258a9b22eaf9711fb9d8181d8915e223fc'),
  },
  url: env('STRAPI_URL'),
});
