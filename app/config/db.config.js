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
    username: 'mvryzyemofyoix',
    password: 'e776075414864ba598093eaf31c13f01407e06aa996baa5d38599c4af4f3ebea',
    database: 'db4nov73bfqde2',
    host: 'ec2-52-86-56-90.compute-1.amazonaws.com',
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
