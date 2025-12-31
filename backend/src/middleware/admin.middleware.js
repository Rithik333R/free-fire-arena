const adminMiddleware = (req, res, next) => {
  // Check if req.user (set by authMiddleware) exists and has the ADMIN role
  if (req.user && req.user.role === "ADMIN") {
    next();
  } else {
    res.status(403).json({ message: "Access Denied: Admin privileges required." });
  }
};

export default adminMiddleware;