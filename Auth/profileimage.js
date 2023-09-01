const User = require("../model/user");

const profileimage = async (req, res, next) => {
  try {
    let { _id, image } = req.body;
    let user = await User.findOneAndUpdate(
      { _id },
      { profileimage: image },
      { new: true }
    );
    res.status(200).json({
      status: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = profileimage;
