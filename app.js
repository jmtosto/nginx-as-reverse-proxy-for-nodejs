// Import dependencies
const express = require('express')
const mysql = require('mysql')

// Setup express and port
const app = express()
const port = 8080

// Setup db connection
const config = {
  host: 'mysql-db',
  user: 'root',
  password: 'node-app',
  database: 'mysql-db'
}
const connection = mysql.createConnection(config)

// Define query
const sql = `INSERT INTO people(name) values('João')`

// Insert query into db
connection.query(sql)
connection.end()

// Setup app communication
app.get('/', (req,res) => {
  res.send(`<h1>Full Cycle Rocks!</h1>`)
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})