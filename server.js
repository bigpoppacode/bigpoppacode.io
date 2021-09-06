require('dotenv').config()
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const json = `${__dirname}/json`
const PORT = process.env.PORT || 8000;
const matter = require('gray-matter');
const showdown  = require('showdown'),
    converter = new showdown.Converter()


const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGO_URI;
const db = mongoose.connection;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
db.on('open', () => {
    console.log('Mongo is Connected');
});
/* Middleware */
app.use(express.json());
if (process.env.NODE_ENV !== 'development'){
  app.use(express.static('public'))
}

/* Controller Goes Here Remove the tes*/
app.get('/api/posts', (req, res) => {
  let file
  fs.readFile(`${json}/all.json`, 'utf8', (err, file) => {
    if(err){
      console.error(err)
    }else{
      res.status(200).json(JSON.parse(file))
    }
  })
})
app.get('/api/:post', (req, res) => {
  let file
  fs.readFile(`${json}/${req.params.post}.json`, 'utf8', (err, file) => {
    if(err){
      console.error(err)
    }else{
      res.status(200).json(JSON.parse(file))
    }
  })
})
/* Controller Ends here */
app.get('*', (req, res)=> {
    res.sendFile(path.resolve(`${__dirname}/public/index.html`));
});
//LISTENER
app.listen(PORT, () => {
    console.log(`API Listening on port ${PORT}`);
});
