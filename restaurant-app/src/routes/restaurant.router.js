const express = require("express")
const router = express.Router()

const restaurantController = require("../controller/restaurant.controller")

router.get("/", restaurantController.getAll)
router.get("/:id", restaurantController.getById)

module.exports = router