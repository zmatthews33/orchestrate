const router = require("express").Router();
const userController = require("../../controllers/userController");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport"); 

// Matches with "/api/user"
router.route("/")
    .get(userController.findAll)
    .post(userController.create);

// Matches with "/api/user/:id"
router
    .route("/:id")
    .get(userController.findById)
    .put(userController.update)
    .delete(userController.remove);

module.exports = router;
