const express = require('express')
const app = express()
const port = 8080
const fs = require('fs')
const cors = require('cors')


app.use(cors())
// app.options('*', cors());
app.use(express.static('./assets/images/etchings'))
app.use(express.static('./assets/images/digital'))


app.get('/', (req, res)=> {
  res.send("haho")
})

app.get('/a', (req, res) =>{

  const data = JSON.parse(fs.readFileSync("./assets/etchings.json"))

  res.send(data)
} )
app.get('/d', (req, res) =>{

  const data = JSON.parse(fs.readFileSync("./assets/digital.json"))
console.log(data)
  res.send(data)
} )


app.listen(port, () => {
  console.log(`Megy a szerver a ${port}-es porton` );
})