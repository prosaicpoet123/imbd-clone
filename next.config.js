require('dotenv').config();

module.exports = {
  publicRuntimeConfig: {
    API_KEY: process.env.API_KEY || '',
    API_URL: process.env.API_URL || '',
  },
};
