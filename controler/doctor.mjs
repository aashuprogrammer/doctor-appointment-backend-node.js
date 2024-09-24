import Doctor from "../model/doctor.mjs";
import { hashedPassword, verifyPass } from "../password/password.mjs";
import createToken from "../middlware/token.mjs";

const doctorSignUp = async (req, res) => {
  try {
    await Doctor.create({
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
    })
      .then((d) => {
        return res.json({
          doctor: d,
          message: "doctor create",
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

const doctorAppointment = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.body.id);
    res.json({
      doctor: doctor,
      message: "Get Doctor Appointment",
    });
  } catch (err) {
    res.json(err);
  }
};

const doctorLogin = async (req, res) => {
  try {
    const login = await Doctor.findOne({
      email: req.body.email,
    });
    const pass = await verifyPass(req.body.password, login.password);

    if (!pass) {
      return res.json("password is wrong");
    }
    const token = createToken(login._id, login.email, login.name);

    res.json(token);
  } catch (err) {
    return res.json(err);
  }
};

export { doctorSignUp, doctorAppointment, doctorLogin };
