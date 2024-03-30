const logger = (req, res, next) => {
  const log = {
    URL: req.url,
    method: req.method,
  };
  console.log(log);
  next();
};

module.exports = logger;
