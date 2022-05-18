module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    timezone: '+07:00',
    dialectOptions: {
      bigNumberStrings: true,
    },
    define: {
      freezeTableName: 1,
      underscored: true,
      underscoredAll: true,
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  },
  production: {
    username: 'xjmrfwbombtmee',
    password: 'b942041e5ee5d8eb7601a310aab121383a657a069284ec5d0460d3c61782bbdb',
    database: 'danunrr5vomb6r',
    host: 'ec2-52-3-2-245.compute-1.amazonaws.com',
    port: 5432,
    dialect: 'postgres',
    timezone: '+07:00',
    logging: false,
    dialectOptions: {
      ssl: {
        require: true, // This will help you. But you will see nwe error
        rejectUnauthorized: false // This line will fix new error
      }
    },
    define: {
      freezeTableName: 1,
      underscored: true,
      underscoredAll: true,
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  },
}
