// exports.catchErrors = function (controller) {
//   return function (req, res, next) {
//     return controller(req, res).catch(err => next(err))
//   }
// }
exports.catchErrors = controller => (req, res, next) =>
  controller(req, res).catch(next)
