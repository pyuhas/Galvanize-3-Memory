// Update with your config settings.

module.exports = {

  development: {
    client: "pg",
    connection: "postgres://localhost/Galvanize-3-Memory"
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  },
}
