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
    username: 'ucwtsbwomjhhdu',
    password: 'ee46ca54f27e097dbd68071f9549f116f60ae486015afc688081255beefd74ae',
    database: 'd1ehooqp0ret6p',
    host: 'ec2-54-86-224-85.compute-1.amazonaws.com',
    port: 5432,
    dialect: 'postgres',
    timezone: '+07:00',
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
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
