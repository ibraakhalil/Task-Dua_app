const db = require('../config/db')

const getAllDuaName = (req, res, next) => {
    try {
        const sql = 'SELECT dua_id, subcat_id, dua_name_en from dua'
        db.all(sql, [], (err, rows) => {
            if (err) console.log(err)
            res.json(rows)
        })
    } catch (e) {
        console.log(e)
    }
}

const getSingleDua = (req, res, next) => {
    try {
        const { dua_id } = req.params
        const numberTest = /^(0|[1-9]\d*)$/

        if (!numberTest.test(dua_id)) {
            return res.status(404).json({ message: 'Invalid query' })
        }

        const sql = `SELECT * FROM dua where dua_id=${dua_id}`
        db.all(sql, [], (err, row) => {
            if (err) console.log(err)
            res.status(200).json(row)
        })
    } catch (e) {
        console.log(e)
    }
}

const getCategoryBasisDua = (req, res, next) => {
    try {

    } catch (e) {
        console.log(e)
    }
}

const getAllCategories = (req, res, next) => {
    try {
        const sql = 'SELECT * FROM category'
        db.all(sql, [], (err, rows) => {
            if (err) {
                console.log(err.message)
            } else {
                res.status(200).json(rows)
            }
        })
    } catch (e) {
        next(e)
    }
}

const getAllSubCategories = (req, res, next) => {
    try {
        const sql = 'SELECT * FROM sub_category'
        db.all(sql, [], (err, rows) => {
            if (err) {
                console.log(err.message)
            } else {
                res.status(200).json(rows)
            }
        })
    } catch (e) {
        next(e)
    }
}

const getAllDuas = (req, res, next) => {
    const { cat_id } = req.query

    try {
        const numberTest = /^(0|[1-9]\d*)$/
        if (!numberTest.test(cat_id)) {
            return res.status(404).json({ message: 'Invalid query' })
        }

        let sql
        if (cat_id) sql = `SELECT * FROM dua where cat_id=${cat_id}`
        if (!cat_id) sql = `SELECT * FROM dua`

        db.all(sql, [], (err, rows) => {
            if (err) {
                console.log(err.message)
            } else {
                res.status(200).json(rows)
            }
        })
    } catch (e) {
        next(e)
    }
}

module.exports = { getAllDuaName, getAllCategories, getAllSubCategories, getAllDuas, getCategoryBasisDua, getSingleDua }