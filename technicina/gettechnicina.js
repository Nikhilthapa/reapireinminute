const tecnicianform = require("../model/technician");

const gettechnician = async (req, res, next) => {
  try {
    let skillId = req.params.id;
    let technicians = await tecnicianform
      .find({ skills: { $in: skillId } })
      .select("-password -adharimage -address");
    // console.log(technicians);
    res.status(200).json({
      status: true,
      message: "data fetched",
      data: technicians,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = gettechnician;
