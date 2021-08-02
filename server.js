const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const matter = require('gray-matter');
const showdown  = require('showdown'),
    converter = new showdown.Converter()


// const mongoose = require('mongoose');
//
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/fruits_api';
// const db = mongoose.connection;
//
// mongoose.connect(MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });
// db.on('open', () => {
//     console.log('Mongo is Connected');
// });
/* Middleware */
app.use(express.json());
if (process.env.NODE_ENV !== 'development'){
  app.use(express.static('public'))
}

/* Controller Goes Here Remove the tes*/
app.get('/test', (req, res)=>{
	res.status(200).json({
		website: 'My Website',
		info: 'Not that much'
	})
})

app.get('/api/:post', (req, res) => {
  const file = matter.read(`${__dirname}/api/${req.params.post}.md`)
  file.content = converter.makeHtml(file.content)
  res.status(200).json(file)
})
/* Controller Ends here */
//LISTENER
app.listen(PORT, () => {
    console.log(`API Listening on port ${PORT}`);
});
