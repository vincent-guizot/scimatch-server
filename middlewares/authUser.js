// middleware/authUser.js
module.exports = (req, res, next) => {
  // Frontend should send: headers: { 'x-user-id': user.id }
  const userId = req.headers["x-user-id"];

  if (!userId) {
    return res.status(401).json({ message: "User not logged in" });
  }

  req.user = { id: userId };
  next();
};
