const pool = require("../database/index")
const restaurantController = {

    getAllRestaurant: async (req, res) => {
        try {
            const sql = "select * from restaurant order by name asc"
            const [rows, fields] = await pool.query(sql)
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: error
            })
        }
    },
    getByIdRestaurant: async (req, res) => {
        try {
            const { id } = req.params
            const sql = "select * from restaurant where id = ?"
            const [rows, fields] = await pool.query(sql, [id])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: error
            })
        }
    },
    getAllRestaurantStar: async (req, res) => {
        try {
            const sql = "select * from restaurant where star > 3 order by star desc, name"
            const [rows, fields] = await pool.query(sql)
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: error
            })
        }
    },
    getByNameRestaurant: async (req, res) => {
        try {
            const { name } = req.params
            const n = "%" + name + "%";
            const sql = "select * from restaurant where name LIKE ?"
            const [rows, fields] = await pool.query(sql, [n])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: error
            })
        }
    }
}

module.exports = restaurantController