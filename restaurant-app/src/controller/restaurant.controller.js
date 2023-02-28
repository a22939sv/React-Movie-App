const pool = require("../database/index")
const restaurantController = {

    getAll: async (req, res) => {
        try {
            const sql = "select * from restaurant"
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
    getById: async (req, res) => {
        try {
            const [id] = req.params
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
    }

}

module.exports = restaurantController