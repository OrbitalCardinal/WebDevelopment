const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const exphbs = require('express-handlebars');
const members = require('./Members');
const mysql = require('mysql');
const app = express();

// Init middleware
// app.use(logger);

// Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
});

// Connect
db.connect((err) => {
    if(err) {
        throw err;
    } 
    console.log('MySQL connected');
});

// Create DB
app.get('/createdb', (req,res) => {
   let sql = 'CREATE DATABASE nodemysql' ;
   db.query(sql, (err,result) => {
      if(err) throw err;
      res.send('Database created');
      console.log(result);
   });
});

// create table
app.get('/createpoststable',(req,res) => {
   let sql= 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
   db.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send('Posts table created...');
   });
});

//Insert post 1
app.get('/addpost1', (req,res) => {
    let post = {title: 'Post1', body:'This is post number one'};
    let sql = 'INSERT INTO posts SET ? ';
    let query = db.query(sql,post,(err,result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post one added');
    });
});

// Handlebars middleware
app.engine('handlebars',exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Home page route
app.get('/',(req,res) => res.render('index', {
    title: 'Member app',
    members
}));

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));


// members api routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));