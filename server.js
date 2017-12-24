
//supervisor -e html,js  server.js
//Packages
var express =require('express');
var bodyparser=require('body-parser');
var path=require('path');
var title ="Detyra";




//Initialize app
var app= express();

app.use(express.static(__dirname +'/public'));
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

const MongoClient= require('mongodb').MongoClient;
const mongoURL='mongodb://localhost:27017/techstitution';
const ObjectId = require('mongodb').ObjectId;

MongoClient.connect(mongoURL, function(err, database){
   console.log('MongoDB Connected!');
   if(err){
       console.log(err);
   }
   else {
       console.log('MongoDB Connected');
   }

   qkmk=database.collection('qkmk');
});




app.get('/', function(req,res){
    var title="Forma e regjistrimit te pikave kufitare";
    res.render('index',{title:title});

});

app.post('/add', function(req,res){

    var data=req.body;
    qkmk.insert(data, function(err, result){

        if(err){
            console.log(err);
        }
        res.redirect('/')
    });
});


app.get('/show', function(req,res){
 var title="Lista me te dhena";
 qkmk.find({}).toArray(function(err,docs){
 if(err){
   console.log(err);
 }
 res.render('show',
   {title: title, docs:docs});

});
});

app.get('/edit/:id', function(req,res){
    var title = "Edito te dhenat";
    var id = ObjectId(req.params.id);
    qkmk.findOne({_id:id} ,function(err,result){
      if(err){
        console.log(err);
      }
      res.render('edit', {title:title , doc:result})
    });
});

app.post('/update/:id', function(req,res){
 var data=req.body;
 var id = ObjectId(req.params.id);
  qkmk.updateOne({_id:id}, 
    {$set : data},
    function(err,result){
      if(err){
        console.log(err);
      }
      res.redirect('/show');
    });
});


app.get('/delete/:id', function(req,res){
  var data=req.body;
  var id = ObjectId(req.params.id);
  qkmk.deleteOne({_id:id}, 
    function(err,result){
      if(err){
        console.log(err);
      }
      res.redirect('/show');
    });
});


//krijimi route


app.get('*', function(req, res){
    res.send("Not found! Sorry ");
});

app.listen(3000, function(){
    console.log('Navigate to http://localhost:3000')
});