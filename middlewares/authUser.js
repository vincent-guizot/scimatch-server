module.exports = (req, res, next) => {
  const userId = req.headers["x-user"];
  //   const userId = JSON.parse(user).id;
  if (!userId) return res.status(401).json({ message: "User not logged in" });
  req.userId = userId;
  next();
};
