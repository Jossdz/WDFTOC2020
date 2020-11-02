// const sejueconotro = true

// const teAmareSiempre = new Promise((resolve, reject) => {
//   if (!sejueconotro) {
//     resolve("te sigo amando")
//   } else {
//     reject("...")
//   }
// })

// teAmareSiempre
//   .then(respuesta => {
//     console.log(respuesta)
//   })
//   .catch(err => console.log(err))

const dbdata = [{ a: "a" }, { b: "b" }]

const find = new Promise((resolve, reject) => {
  if (dbdata) {
    setTimeout(() => resolve(dbdata), 5000)
  } else {
    reject(new Error("DB no disponible"))
  }
})

// find.then(data => console.log(data)).catch(lol => console.log(lol))

const getImage = new Promise(resolve => {
  setTimeout(() => resolve("http://rqliweuhrwe.com/image1.jpg"), 3000)
})
const getImage2 = new Promise(resolve => {
  setTimeout(() => resolve("http://rqliweuhrwe.com/image2.jpg"), 2000)
})
// getImage.then(x => console.log(x))
// 1.obtener info de la db => 2. obtener imagen 1 => 3. obtener la imagen2

// find.then(dataFromDb => {
//   console.log(dataFromDb)
//   getImage.then(img1 => {
//     console.log(img1)
//     getImage2.then(img2 => {
//       console.log(img2)
//     })
//   })
// })

;(async () => {
  let dataFromDb = await find.catch(e => console.log(e))
  console.log(dataFromDb)
  await getImage
  await getImage2
})()
