const router = require("express").Router();
const venueRoutes = require("./venueRoute");
const artistRoutes = require("./artistRoute");
const eventRoutes = require("./eventRoute");
const peopleRoutes = require("./peopleRoute");




// Venue routes
router.use("/venue", venueRoutes);

// Artist routes
router.use("/artist", artistRoutes);

// Event routes
router.use("/event", eventRoutes);

// People routes
router.use("/people", peopleRoutes);




module.exports = router;
