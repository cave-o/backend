module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '13a81a817f7929713953340282cf20d7ae236d24c5542e6f784a539c2a905192'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', '219a8e06d2ea1028d0a5ccaf3f5408a36ef4bcd0d5328f8815f70e2d2c409085'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'e81d9a7b5dbf5ffc2ef99c83fcbd24a3ecb323630cc9c92245c8c097b474b08e'),
    }
  }
});
