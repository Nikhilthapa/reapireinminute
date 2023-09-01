const ApiError = require("../errorhandling");
const tecnicianform = require("../model/technician");
const User = require("../model/user");
const techdetails = async (req, res, next) => {
  try {
    let { userid, technicanid } = req.body;
    let user = await User.find({ _id: userid });
    if (!technicanid) throw new ApiError("techician not found", 400);
    let technicianId = await tecnicianform.find({ _id: technicanid });
    // console.log(user);
    res.status(200).json({
      status: true,
      message: "data fetch sucessfully",
      userdata: user,
      // message1: "above data is for user",
      techniciandata: technicianId,
      // : "above data is for technician",
    });
  } catch (error) {
    next(error);
  }
};
module.exports = techdetails;

/*
{
  "userid":"64dda6800ed3b1a0fdfbfbbd",
  "technicanid":"64e5b56581d5ad43d47999da"
}
*/
