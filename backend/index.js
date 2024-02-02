require('dotenv').config()
const path = require('path')
const express = require('express')
const app = express()
const sqlite = require('sqlite3').verbose()
const PORT = process.env.PORT || '5000'
const cors = require('cors')


app.use(express.json())
app.use(cors())


const db = new sqlite.Database(path.resolve(__dirname, 'public/dua_main.sqlite'), (err) => {
    if (err) {
        console.log(err.message)
    } else {
        console.log('Database is connected')
        db.run('CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description TEXT)', (err) => {
            if (err) {
                console.log(err.message)
            }
        })
    }
})

app.get('/', (req, res, next) => {
    res.status(200).send(`<h1>Dua App Server</h1>`)
})

app.get('/categories', (req, res, next) => {
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

app.get('/sub_categories', (req, res, next) => {
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

app.get('/duas', (req, res, next) => {
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

app.use((err, req, res, next) => {
    console.error(err)
    res.status(500).send('Something broke!')
})


app.listen(PORT, () => {
    console.log('Server is running at http://localhost:' + PORT)
})