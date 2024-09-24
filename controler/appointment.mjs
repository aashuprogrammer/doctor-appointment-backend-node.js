import Appointment from "../model/appointment.mjs";
import Doctor from "../model/doctor.mjs";

const createAppointment = async (req, res) => {
  try {
    const createAppoin = await Appointment.create({
      name: req.body.name,
      phone: req.body.phone,
      gender: req.body.gender,
      age: req.body.age,
      date: req.body.date,
      address: req.body.address,
      user_id: req.body.user_id,
      doctor_id: req.body.doctor_id,
    }).then((a) => {
      return res.json({
        createAppoin: a,
        message: "create Appointment ",
      });
    });
  } catch (err) {
    res.json(err);
  }
};

const getAllAppointment = async (req, res) => {
  try {
    const allAppoin = await Appointment.find(req.body).select("-password");
    res.json({ allAppoin: allAppoin, message: "Get All Appointment" });
  } catch (err) {
    res.json(err);
  }
};

const myAppointment = async (req, res) => {
  try {
    const myAppoin = await Appointment.findById(req.body.id);
    res.json({
      myAppoin: myAppoin,
      message: "My Appointment",
    });
  } catch (err) {
    res.json(err);
  }
};

const deleteAppointment = async (req, res) => {
  try {
    // await Appointment.deleteOne();
    const deleteAppoin = await Appointment.findByIdAndDelete(req.params.id);
    res.json({ deleteAppoin: deleteAppoin, message: "Delete Appointment" });
  } catch (err) {
    res.json(err);
  }
};

const seeUserAllAppointment = async (req, res) => {
  try {
    const seeUser = await Appointment.find({
      user_id: req.body.user_id,
    })
      .select("+doctor_id")
      .populate("doctor_id");
    // agreget //
    res.json({
      seeUser: seeUser,
      message: "All User Appointment",
    });
  } catch (err) {
    res.json(err);
  }
};

export {
  createAppointment,
  getAllAppointment,
  myAppointment,
  deleteAppointment,
  seeUserAllAppointment,
};
