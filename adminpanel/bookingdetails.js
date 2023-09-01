const ApiError = require("../errorhandling");
const adMin = require("../model/booking");

const admin = async (req, res, next) => {
  try {
    let { user, technician, skillId } = req.body;
    if (!skillId) throw new ApiError("skill required", 400);
    let booking = await adMin.create({
      user,
      technician,
      skillId,
    });
    res.status(200).json({
      status: true,
      message: "data submit successfully",
      data: booking,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = admin;
