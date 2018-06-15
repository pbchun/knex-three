// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postsql://localhost/knex-3'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
