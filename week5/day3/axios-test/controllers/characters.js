const axios = require("axios")

exports.characterList = (req, res) => {
  const { page } = req.params
  const url =
    page === 1
      ? `http://swapi.dev/api/people/`
      : `http://swapi.dev/api/people/?page=${page}`

  axios.get(url).then(({ data: { results, previous, next } }) => {
    const n = next ? next.slice(next.length - 1) : null
    const p = previous ? previous.slice(previous.length - 1) : null
    res.render("characters", { results, p, n })
  })
}
