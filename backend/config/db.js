const sqlite = require('sqlite3').verbose()
const path = require('path')

const db = new sqlite.Database(path.resolve(__dirname, '..', 'public/dua_main.sqlite'), (err) => {
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

module.exports = db