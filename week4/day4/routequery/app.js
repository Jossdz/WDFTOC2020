const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(helloMiddleware)

function helloMiddleware(req, res, next) {
  console.log("Hola, alguien hiizo una nueva peticion al server")
  req.credits = 10
  next()
}

app.set("views", `${__dirname}/views`)
app.set("view engine", "hbs")

app.get("/", (req, res) => {
  console.log(req.credits)
  res.render("index")
})

app.get("/username/:username/:id", (req, res) => {
  res.send(req.params)
})

app.get("/search", (req, res) => {
  console.log(typeof req.query)
  res.send(req.query)
})
app.get("/buscar", (req, res) => {
  console.log(typeof req.query)
  res.send(req.query)
})

app.get("/user-data", (req, res) => {
  res.send(req.query)
})
// Muestra el form
app.get("/user-info", (req, res) => {
  res.render("user-info-form")
})
// recibe el form
app.get("/display-user-info", (req, res) => {
  const { name, age, superhero } = req.query

  res.send(`
    Your name is ${name}
    Your age is ${age}
    Your favorite superhero is ${superhero}
  `)
})

// muestra el form
app.get("/login", (req, res) => res.render("login"))
// recibe el form
app.post("/login", (req, res) => {
  const { username, password } = req.body

  if (username === "jossdz" && password === "123") {
    return res.render("profile", { username })
  } else {
    return res.render("not-allowed")
  }
})

app.listen(3000, () => {
  console.log("listening on: http://localhost:3000")
})
