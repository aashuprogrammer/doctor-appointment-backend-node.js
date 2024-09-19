import Doctor from "../model/doctor.mjs";
import jwt from "jsonwebtoken";
import hashedPassword from "../password/password.mjs";

const doctorSignUp = async (req, res) => {
  try {
    const doctor = Doctor.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: await hashedPassword(req.body.password),
      gender: req.body.gender,
      dob: req.body.dob,
      img: req.body.img,
      shedule: req.body.shedule,
      degree: req.body.degree,
      address: req.body.address,
    }).then((doctor) => {
      res.json({
        user: user,
        message: "doctor create",
      });
    });
  } catch (err) {
    return res.json(err);
  }

  let token = jwt.sign(
    {
      id: Doctor.id,
      email: Doctor.email,
      name: Doctor.name,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  res.json(token);
};

export { doctorSignUp };
