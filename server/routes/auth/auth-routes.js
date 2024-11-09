const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  authMiddleWare,
} = require("../../controllers/auth/auth-controller");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/check-auth", authMiddleWare, (req, res) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    message: "Authenticated User",
    user,
  });
});
module.exports = router;
