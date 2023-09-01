const adMin = require("../model/booking");

const bookingdetails = async (req, res, next) => {
  try {
    let userdetail = await adMin
      .find()
      .select("-technician -skillId")
      .populate("user skillId")
      .populate({
        path: "technician",
        populate: { path: "skills" },
      });
    res.status(200).json({
      status: true,
      message: "data fetched successfully",
      data: userdetail,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = bookingdetails;
