const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const url='ADD YOUR URL'; //##9
const MongoDbStore=require('connect-mongodb-session')(session);

const User = require('./models/user');

const authRoutes=require('./routes/authroutes');

const app=express();
const store=new MongoDbStore({  //initialize the mongodbstore with constructor options that are required to be stored in database   
    uri:url,
    collection:'sessions'   //we can name this however we want
  })

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
//this middleware will set cookie automatically for us.
app.use(
  session({secret:'saitejachelluboina',
  resave:false,
  saveUninitialized:false,
  store:store   //configuring our store
    })
)  

app.use((req, res, next) => {
    if (!req.session.user) {
      return next();
    }
    User.findById('5ea7859e9fd75814f0661f10')
      .then(user => {
        req.user = user;
        next();
      })
      .catch(err => console.log(err));
  });

  app.use(authRoutes);


  mongoose
  .connect(url, { useNewUrlParser: true,useUnifiedTopology: true })
  .then(result => {
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: 'teja',
          email: 'teja@dummy.com'
        });
        user.save();
      }
    });
    console.log('successfully connected to DB')
    app.listen(5000);
  })
  .catch(err => {
    console.log(err);
  });
