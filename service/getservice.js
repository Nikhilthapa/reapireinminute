const service = require("../model/service");

const getservice = async (req, res, next) => {
  try {
    let servicerequest = req.body.id;
    let serviceget = await service.find({ servicerequest }).populate("skills");
    res.status(200).json({
      status: true,
      message: "fetched sucessfully",
      data: serviceget,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = getservice;
