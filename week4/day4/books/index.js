const express = require("express")
const mongoose = require("mongoose")
const Book = require("./models/Book")

const app = express()

app.set("views", `${__dirname}/views`)
app.set("view engine", "hbs")

mongoose
  .connect("mongodb://localhost/books-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("db connected 💾"))

app.get("/", async (req, res) => {
  const books = await Book.find()
  console.log(books instanceof Array)
  res.render("index", { books })
})

app.get("/book/:id", async (req, res) => {
  const { id } = req.params
  const book = await Book.findById(id)
  console.log(book instanceof Object)
  res.render("bookDetail", book)
})

app.listen(3000, () => {
  console.log("listening on port 3000")
})
