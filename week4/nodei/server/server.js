const http = require("http")

const server = http.createServer((request, response) => {
  console.log(request.url)
  switch (request.url) {
    case "/":
      response.write("Home")
      response.end()
      break

    case "/cat":
      response.write("Cat page")
      response.end()
      break

    default:
      response.statusCode = 404
      response.write("404 page")
      response.end()
      break
  }
})

server.listen(3000)

// 127.0.0.1:3000 \ localhost:3000
