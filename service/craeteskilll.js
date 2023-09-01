const skills = require("../model/skill");

const createskill = async (req, res, next) => {
  try {
    let { skill, skillImage } = req.body;
    let user = await skills.create({ skill, skillImage });
    res.status(200).json({
      status: true,
      message: "work inserted",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createskill;
