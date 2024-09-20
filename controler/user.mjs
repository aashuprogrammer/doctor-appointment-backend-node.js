import User from "../model/user.mjs";
// import jwt from "jsonwebtoken";
import { hashedPassword, verifyPass } from "../password/password.mjs";
// import { errorCapture, CustomError } from "../router/error.mjs";
import createToken from "../middlware/token.mjs";

const userSignUp = async (req, res) => {
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: await hashedPassword(req.body.password),
    })
      .then((d) => {
        return res.json({
          user: d,
          message: "user create",
        });
      })
      .catch((err) => {
        return res.json({
          error: err,
        });
      });
  } catch (err) {
    return res.json(err);
  }
};

const userLogin = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    const t = await verifyPass(req.body.password, user.password);
    console.log(t);
    if (!t) {
      return res.json("password wrong");
    }
    const token = createToken(user._id, user.name, user.email);
    console.log(token);

    res.json(token);
  } catch (error) {
    return res.send(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    res.json({
      user: user,
      message: "get user id successful ",
    });
  } catch (err) {
    return res.json(err);
  }
};

// const GetAllUser = async(req,res) =>{
//   try{
//     const user = await User.fi
//   }
// }

const deleteUser = async (req, res) => {
  try {
    await User.deleteOne();
    const user = await User.findById(req.params.id);
    res.json({
      message: "User Delete",
    });
  } catch (err) {
    res.json(err);
  }
};

const updateUser = async (req, res) => {
  try {
    // await User.updateOne();
    // const user = await User.findById(req.params.id);
    const user = await User.updateOne(req.body.name, req.body.email);
    res.json({
      user: user,
      message: "User Update",
    });
  } catch (err) {
    res.json(err);
  }
};
export { userSignUp, userLogin, getUserById, deleteUser, updateUser };
