exports.catchErr = ctrl => (req, res, next) => ctrl(req, res).catch(next)


// exports.oldieCatchErr = function (ctrl) {
//   return function (req, res, next) {
//     ctrl(req, res).catch(next)
//   }
// }