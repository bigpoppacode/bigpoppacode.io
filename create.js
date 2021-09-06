const fs = require('fs');
const path = require('path');
const api = `${__dirname}/api`
const matter = require('gray-matter');
const showdown  = require('showdown'),
    converter = new showdown.Converter()

const posts = []
fs.readdir(api, (err, files) => {
  files.forEach(file => {
    console.log(file, typeof file)
    const processedFile = matter.read(`${__dirname}/api/${file}`)
    processedFile.content = converter.makeHtml(processedFile.content)
    processedFile._id = file.split('.')[0]
    const jsonedFile = JSON.stringify(processedFile)
    fs.writeFile( `${__dirname}/json/${file.split('.')[0]}.json`, jsonedFile, {}, (err, success) => {
        if(err){
          console.log(err)
        }else{
          console.log(success)
        }
    })
    posts.push(processedFile)
  });
  const jsonPosts = JSON.stringify(posts)
  fs.writeFile( `${__dirname}/json/all.json`, jsonPosts, {}, (err, success) => {
      if(err){
        console.log(err)
      }else{
        console.log(success)
      }
  })
})
