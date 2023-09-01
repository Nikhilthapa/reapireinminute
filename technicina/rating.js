const rating = require("../model/rating");

const rate = async (req, res, next) => {
  try {
    let { technicianid, rate, userid } = req.body;
    let technicianarting = await rating.create({
      technicianid,
      rate,
      userid,
    });
    res.status(200).json({
      message: "data inserted sucessfully",
      data: technicianarting,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = rate;
