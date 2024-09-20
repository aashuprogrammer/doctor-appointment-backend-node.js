import bcrypt from "bcrypt";
const hashedPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

const verifyPass = async (pass, hashpass) => {
  return await bcrypt.compare(pass, hashpass);
};

export { verifyPass, hashedPassword };
