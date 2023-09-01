const rating = require("../model/rating");

const totalrating = async (req, res, next) => {
  try {
    let technician = req.params.id;
    let user = await rating
      .find({ technicianid: technician })
      .populate("userid");
    let totalfeedback = await rating.countDocuments({
      technicianid: technician,
    });
    let ratinguh = await rating.find({ technicianid: technician });
    let avgrating = await rating.aggregate([
      {
        $match: { technicianid: { $eq: technician } },
      },
      {
        $group: {
          _id: "$technicianid",
          averageRating: { $avg: "$rate" },
        },
      },
    ]);
    // console.log(technicianid);
    console.log("avgrating", avgrating);
    res.status(200).json({
      message: "data fetched",
      totaldata: totalfeedback,
      user: user,
      averagerating: avgrating,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = totalrating;
