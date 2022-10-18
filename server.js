const express = require(`express`)
const drinks = require("./models/drinks")
const food = require("./models/food")
const app = express()


app.get("/" , (req, res) => {
    res.send('Welcome to the gitpub App')
})

app.get('/drinks/', (req,res) => {
    res.render( 'index.ejs', {allDrinks: drinks, allFood: food})
})

app.get('/drinks/:id', (req, res) => {
    res.render('drinks_show.ejs', {drinks: drinks[req.params.id]})  
}) 


app.get('/food/:id', (req, res) => {
    res.render("food_show.ejs", {food: food[req.params.id]})  
})

app.listen(3007, () => {
   console.log("listen")
 })
 








