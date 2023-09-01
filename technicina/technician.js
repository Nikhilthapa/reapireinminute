const multer = require("multer");
const ApiError = require("../errorhandling");
const bcrypt = require("bcrypt");
const { baseUrl } = require("../utils");
const tecnicianform = require("../model/technician");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage,
}).fields([
  { name: "profileimage", maxCount: 1 },
  { name: "doccumentimage", maxCount: 1 },
]);

const tecnicianprofile = async (req, res, next) => {
  //   console.log("tecnicianprofile");
  upload(req, res, async (error) => {
    try {
      console.log(req.body.skills);
      if (error) throw new ApiError("multer error", 400);
      let { name, phone, service, skills, address, password } = req.body;
      if (!name) throw new ApiError("name not present", 400);
      if (!phone) throw new ApiError("phone not present", 400);
      if (!service) throw new ApiError("service not present", 400);
      if (!skills) throw new ApiError("skills not present", 400);
      if (!address) throw new ApiError("address not present", 400);
      if (!password) throw new ApiError("password not present", 400);
      let profileImage =
        baseUrl() + "/" + req.files["profileimage"][0].filename;
      // console.log(req.files);
      let adhar = baseUrl() + "/" + req.files["doccumentimage"][0].filename;
      // let skillarray = [];
      // let arr = skillarray.push({ skills });

      skills = JSON.parse(skills);

      let salt = await bcrypt.genSalt(10);
      let hashpass = await bcrypt.hash(password, salt);
      let user = await tecnicianform.create({
        name,
        phone,
        service,
        skills,
        address,
        Pimage: profileImage,
        adharimage: adhar,
        password: hashpass,
      });
      res.status(200).json({
        status: true,
        message: "technician inserted",
        data: user,
      });
    } catch (error) {
      next(error);
    }
  });
};
module.exports = tecnicianprofile;
