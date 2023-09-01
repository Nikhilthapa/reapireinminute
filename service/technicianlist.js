const skills = require("../model/skill");

const sublist = async (req, res, next) => {
  try {
    let skill = req.body;
    let user = await skills
      .find(skill)
      .populate("servicename", "servicename ")
      .select("-_id");
    res.status(200).json({ status: true, data: user });
  } catch (error) {
    next(error);
  }
};
module.exports = sublist;
