/* eslint-disable no-undef */

/* eslint-disable no-magic-numbers */

module.exports = {
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'access',
    ACTION_TOKEN_SECRET: process.env.ACTION_TOKEN_SECRET || 'action',
    BAD_REQUEST: 400,
    CONFLICT: 409,
    CREATE: 201,
    DB_MONGO: process.env.DB_MONGO || 'mongodb://localhost:27017/inoxoft',
    EMAIL: process.env.EMAIL || 'test@gmail.com',
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD || '12345',
    FORBIDDEN: 403,
    FRONTED_URL: 'https://www.google.com',
    InternalServerError: 500,
    NOT_FOUND: 404,
    NO_CONTENT: 204,
    OK: 200,
    PORT: process.env.PORT || 5001,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || 'refresh',
    SALT: 7,
    UNAUTHORIZED: 401,
    ZERO: 0
}
