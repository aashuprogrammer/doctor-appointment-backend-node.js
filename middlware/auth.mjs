import jwt from "jsonwebtoken";
import { CustomError, errorCapture } from "../router/error.mjs";

const authentication = errorCapture(async (req, res, next) => {
  try {
    const token = req.header("authorization")?.split(" ")[1];
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.user = data;
    return next();
  } catch (err) {
    throw new CustomError(err, 401, "login failed! login again");
  }
});

export { authentication };
