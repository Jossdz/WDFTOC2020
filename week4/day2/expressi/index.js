const express = require("express")

const app = express()

//con esta linea le decimos a express que sirva de forma publica los archivos de /public
app.use(express.static("public"))

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html")
})

app.get("/cat", (req, res) => {
  res.sendFile(`${__dirname}/views/cat.html`)
})

app.listen(3000)
