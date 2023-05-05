const express = require('express')
const { Pool } = require('pg')
const port = 5000
const app = express()
const cors = require('cors')
app.use(cors())
app.get('/',(req,res)=>{
  res.send('hello you are cool')
})
const pool = new Pool({
  user: "postgres",
  password: "Tariq@1234",
  host: "localhost",
  port: 5432,
  database: "video"
})
 
app.listen(port,()=>{
  console.log(`http://localhost:${port}`)
})