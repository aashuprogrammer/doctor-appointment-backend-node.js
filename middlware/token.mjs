import jwt from "jsonwebtoken";
const createToken = (id, name, email) => {
  const payload = {
    id: id,
    name: name,
    email: email,
  };
  try {
    return jwt.sign(payload, process.env.JWT_SECRET);
  } catch (err) {
    console.log("unable to generate", err);
  }
};

export default createToken;
