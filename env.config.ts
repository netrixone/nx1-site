const ENV = process.env.NX1_ENV || 'development';

export default {
  NX1_ENV: ENV,
  NX1_DEV: ENV === 'development',
  NX1_PROD: ENV === 'production',
  NX1_URL: process.env.NX1_URL || "https://nx1.cz",
}
