module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  'users-permissions': {
    config: {
    jwtSecret: env('JWT_SECRET'),
    },
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: 'dq6a7lv2s',
        api_key: '136339939659823',
        api_secret: 'IP1moNuZnek4JHt2w-xcE5SuGvA',
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});