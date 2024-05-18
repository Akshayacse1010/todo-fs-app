const { User } = require('../db/db');

async function userMiddleware(req, res, next) {
  const name = req.body.name;

  // const error = await User.findOne({
  //   name,
  // });
  // if (error) {
  //   res.json({
  //     msg: 'user already exists',
  //   });
  // } else {
  //   next();
  // }
  next();
}

module.exports = userMiddleware;
