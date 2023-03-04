const express = require("express")
const router = express.Router()

const restaurantController = require("../controller/controller")

router.get("/restaurant", restaurantController.getAllRestaurant)
router.get("/restaurant/star", restaurantController.getAllRestaurantStar)
router.get("/restaurant/category", restaurantController.getAllRestaurantCategory)
router.get("/restaurant/id/:id", restaurantController.getByIdRestaurant)
router.get("/restaurant/name/:name", restaurantController.getByNameRestaurant)
router.get("/restaurant/category/:category", restaurantController.getByCategoryRestaurant)
router.get("/restaurant/star/:star", restaurantController.getByStarRestaurant)

module.exports = router