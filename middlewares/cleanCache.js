const { clearHash } = require("../services/cache");

module.exports = async (req, res, next) => {
  // waits for post call to finish befor clear cache
  await next();
  clearHash(req.user.id);
};
