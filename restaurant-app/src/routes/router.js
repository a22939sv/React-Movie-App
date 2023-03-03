const express = require("express")
const router = express.Router()

const restaurantController = require("../controller/controller")

router.get("/restaurant", restaurantController.getAllRestaurant)
router.get("/restaurant/star", restaurantController.getAllRestaurantStar)
router.get("/restaurant/id/:id", restaurantController.getByIdRestaurant)
router.get("/restaurant/name/:name", restaurantController.getByNameRestaurant)

module.exports = router