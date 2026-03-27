import jwt from "jsonwebtoken";
import { User } from "../../week-6/models/User.js";

export const protect = async (req, res, next) => {
  try {
    //Check token exists in header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ success: false, error: "Not authorized, no token" });
    }

    //Extract token
    const token = authHeader.split(" ")[1];

    //Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //Attach user to request
    req.user = await User.findById(decoded.id).select("-password");

    next();
  } catch (err) {
    return res
      .status(401)
      .json({ success: false, error: "Token invalid or expired" });
  }
};
