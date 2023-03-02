const express = require("express")
const router = express.Router()

const restaurantController = require("../controller/controller")

router.get("/restaurant", restaurantController.getAllRestaurant)
router.get("/restaurant/score", restaurantController.getAllRestaurantScore)
router.get("/restaurant/:id", restaurantController.getByIdRestaurant)


module.exports = router