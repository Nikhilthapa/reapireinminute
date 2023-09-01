const service = require("../model/service");

const createService = async (req, res, next) => {
  // console.log(req);
  try {
    let { servicename, serviceimage, skills } = req.body;
    let list = await service.create({ servicename, serviceimage, skills });
    res.status(200).json({
      status: true,
      data: list,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = createService;
