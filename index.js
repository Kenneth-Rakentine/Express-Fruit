
const express = require('express');

const app = express();

const PORT = 3001




//_______MIDDLEWARE
app.set("view engine", "jsx");

app.engine("jsx", require('express-react-views').createEngine());
const fruits = require('./models/fruits')


app.get('/fruits',(req,res)=>{
    res.render("Index",{fruits:fruits});
});
//_____index - all fruits






app.get('/fruits/:indexOfFruitsArray', (req, res)=>{
    res.render('Show', {
        fruit: fruits[req.params.indexOfFruitsArray]
    });
})
//_______Show each Fruit

app.listen(PORT,(req,res)=>{
    console.log('listening 3001')
})
//___always on the bottom {server}