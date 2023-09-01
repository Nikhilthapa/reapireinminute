const forgetpassword = require("../Auth/foegetpassword");
const login = require("../Auth/login");
const profileimage = require("../Auth/profileimage");
const signUp = require("../Auth/signUp");

const tecnicianprofile = require("../technicina/technician");
const sublist = require("../service/technicianlist");
const createService = require("../service/createService");
const createskill = require("../service/craeteskilll");
const getservice = require("../service/getservice");
const gettechnician = require("../technicina/gettechnicina");
const admin = require("../adminpanel/bookingdetails");
const bookingdetails = require("../adminpanel/admin");
const techdetails = require("../adminpanel/techniciandetails");

// const rate = require("../technicina/rating");
const rate = require("../technicina/rating");
const totalrating = require("../technicina/getrating");

const router = require("express").Router();

router.post("/signup", signUp);
router.post("/login", login);
router.post("/forget", forgetpassword);
router.post("/profileimage", profileimage);

router.post("/service", createService);
router.get("/getservice", getservice);
router.post("/createskill", createskill);
router.get("/sublist", sublist);

router.post("/technician", tecnicianprofile);
router.get("/gettechnician/:id", gettechnician);
// router.get("/gettechnician", gettecnician);

router.post("/booking", admin);
router.get("/bookingdetails", bookingdetails);
router.get("/fortechnician", techdetails);

router.post("/rating", rate);
router.get("/totalrating/:id", totalrating);

module.exports = router;
