// Import express package
const express = require('express');

let indexRouter = require('./routes/index');

// Initialize express
const app = express();
// Set up a view engine
app.set('view engine', 'ejs');
// Set a static folder
app.use(express.static('public'));


app.get('/', (req,res)=>{
   res.render('index');
})
// Define the index router
app.use('/', indexRouter);


// Define the port number
const PORT = 5000;
app.listen(PORT, ()=>{
   console.log(`Server is listening on port ${PORT}`)
});