const mongoose = require("mongoose")
const Cat = require("./model/Cat")
mongoose
  .connect("mongodb://localhost:27017/catss", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("connected to mongo 🔥")
  })
  .catch(e => console.log(e))

// //nombre👇 en el mundo de JS
// const Cat = mongoose.model("Cat", { name: String })
//    nombre de la coleccion 👆       👆 Estructura (schema)

// const filemon = new Cat({ name: "filemon" })
// filemon.save().then(res => {
//   console.log(res)
//   console.log("cat saved")
// })

// Cat.create({ name: "Garfield" }, { name: "Ross" }).then(r => {
//   console.log("Gatos creados")
// })
//====== then / catch
// Cat.fnd()
//   .then(cats => {
//     console.log(cats)
//   })
//   .catch(err => console.log(err))

// ======== Async Await
// async function listAllCats() {
//   const cats = await Cat.find()
//   console.log(cats)
// }

// listAllCats()

// app.get('/', async (req, res) => {
//   // 🔥
// })

// Cat.create({
//   name: "c",
//   color: "black"
// }).then(() => {
//   console.log("cat creted")
// })

// Cat.find(
//   { color: "black" }, // Query
//   { name: 1, _id: 0 }, // Projection
//   { sort: { name: 1 }, skip: 2, limit: 2 } // Options { sort, limit, skip}
// ).then(allCats => console.log(allCats))

// Cat.updateOne({ name: "simon" }, { name: "filemon", age: 3 }).then(res => {
//   console.log(res)
//   console.log("updated")
// })

// Cat.findByIdAndUpdate(
//   "5fa3299b6200186208bb4507",
//   { name: "Filemon", age: 2 },
//   { new: true }
// ).then(res => {
//   console.log(res)
//   console.log("updated")
// })

// Cat.deleteOne({ name: "sim" }).then(res => {
//   console.log(res)
//   console.log("deleted")
// })

// Cat.findByIdAndDelete("5fa32a62cf82a462f2b9f630").then(res => {
//   console.log(res)
//   console.log("deleted")
// })
