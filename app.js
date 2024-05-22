const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello semaphore, we are up and running!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})