const router = require('express').Router()
const db = require('../config/db')
const { getAllDuaName, getAllCategories, getAllSubCategories, getAllDuas, getSingleDua } = require('../controllers/ruqyaController')


router.get('/', (req, res, next) => {
    res.status(200).send(`<h1>Dua App Server</h1>`)
})

router.get('/categories', getAllCategories)
router.get('/sub_categories', getAllSubCategories)

router.get('/dua-names', getAllDuaName)
router.get('/duas', getAllDuas)
router.get('/dua/:dua_id', getSingleDua)



router.use((err, req, res, next) => {
    console.error(err)
    res.status(500).send('Something was broken!')
})


module.exports = router