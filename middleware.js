const allowedCors = [
  'https://vk.com',
  'localhost:3000'
];
module.exports.allowOrigin = (req, res, next) => {
  console.log(allowedCors)
  const { origin } = req.headers;
  if (allowedCors.includes(origin)) {
      res.header('Access-Control-Allow-Origin', origin);
  }
  next();
}