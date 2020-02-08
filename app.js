const express = require('express');
// const path = require('path');
const routes = require('./routes/index');
const bodyParser = require('body-parser');


const app = express();
// const router = express.Router();

// router.get('/',function(req,res){
//   res.sendFile('Karteikarten.html');
//   //__dirname : It will resolve to your project folder.
// });
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');


// const Card = require('./models/card');

app.get('/karten/:vl',(req,res)=>{
    Card.find({vorlesung:req.params.vl},(err,cards)=>{//suche in der Datenbank nach allen Karten die der Vorlesung vl zugeordnet sind
      if(err){
        console.log(err);
      }else{
        res.send(cards);//sende diese an den client
      }
    });
});

app.post('addCard',(req,res)=>{
    var card = new Card(); //erstelle neue Karte
    card.vorlesung = req.body.vorlesung;
    card.thema = req.body.thema;
    card.content = req.body.content;

    console.log(req)
    console.log(res)

    card.save((err,c)=>{ //speichere sie in der Datenbank
        if(err){
            console.log(err);
        }else{
            res.send(c);
        }
    });
});
//app.use('/', routes);

// app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

module.exports = app;