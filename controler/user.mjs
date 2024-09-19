import User from "../model/user.mjs";
import jwt from "jsonwebtoken";
import hashedPassword from "../password/password.mjs";
import { errorCapture, CustomError } from "../router/error.mjs";

const userSignUp = async (req, res) => {
  try {
    const user = User.create({
      name: req.body.name,
      email: req.body.email,
      password: await hashedPassword(req.body.password),
    }).then((user) => {
      res.json({
        user: user,
        message: "user create",
      });
    });
  } catch (err) {
    return res.json(err);
  }
  let token = jwt.sign(
    { id: User.id, email: User.email, name: User.name },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
};

////////// Create Token ////////////////////

const userLogin = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      hashedPassword: req.body.hashedPassword,
    });
    if (!user) {
      return res.json("user not found");
    }
    const newUser = new User({ User, password: hashedPassword });
    if (newUser.hashedPassword !== req.body.hashedPassword) {
      return res.json("password wrong");
    }
    return res.json("login successful");
  } catch (error) {
    return res.json(error);
  }
  var token = jwt.sign(
    { id: User.id, email: User.email, name: User.name },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
};

export { userSignUp, userLogin };
