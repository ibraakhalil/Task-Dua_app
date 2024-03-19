const router = require('express').Router()
const db = require('../config/db')


router.get('/', (req, res, next) => {
    res.status(200).send(`<h1>Dua App Server</h1>`)
})

router.get('/categories', (req, res, next) => {
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
})

router.get('/sub_categories', (req, res, next) => {
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
})

router.get('/duas', (req, res, next) => {
    try {
        const sql = 'SELECT * FROM dua'
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

})


router.use((err, req, res, next) => {
    console.error(err)
    res.status(500).send('Something was broken!')
})



module.exports = router