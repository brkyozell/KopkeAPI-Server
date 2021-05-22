const http = require('http');
const fs = require('fs');
const Eris = require('eris');
const bot = new Eris(process.env.bodtoken);
var port = 8080;

bot.on("ready", () => {
  console.log("sa?");
  bot.editStatus("online")
});

http.createServer(function(req, res) {
  var url = req.url;
  switch(url){
    case "/css":
    fs.readFile('style.css', function (err, data){
    res.writeHead(200, {'Content-Type': 'text/css'});
    res.write(data)
    res.end();
  });
    break;
    case "/test":
    res.writeHead(200, {'Content-Type': 'text/html'});
    const fetch = require('node-fetch')
    fetch('https://kopkeapi.glitch.me/simple')
    .then(res => res.json())
    .then(json => {
    if(json.status === 200) {
      res.write(json.url)
      res.end();
    } else {
      res.write("hata")
      res.end();
    }
    });
    break;
    case "/simple":
    const SimpleData = require('./db/simple.json')
    var simpleSonuc = SimpleData[(Math.random() * SimpleData.length) | 0];
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.write(`{"url":"${simpleSonuc}","status":200}`)
    res.end();
    break;
    case "/shitpost":
    const shitpostData = require('./db/shitpost.json')
    var shitpostSonuc = shitpostData[(Math.random() * shitpostData.length) | 0];
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.write(`{"url":"${shitpostSonuc}","status":200}`)
    res.end();
    break;
    case "/dark":
    const darkData = require('./db/dark.json')
    var darkSonuc = darkData[(Math.random() * darkData.length) | 0];
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.write(`{"url":"${darkSonuc}","status":200}`)
    res.end();
    break;
    case "/siyasi":
    const siyasiData = require('./db/siyasi.json')
    var siyasiSonuc = siyasiData[(Math.random() * siyasiData.length) | 0];
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.write(`{"url":"${siyasiSonuc}","status":200}`)
    res.end();
    break;
    default:
    fs.readFile('index.html', function (err, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data)
    res.end();
  });
  }
}).listen(port)

var simpleID = "845024440177917953"
var siyasiID = "845024322031583243"
var shitpostID = "845024301631537213"
var darkID = "845024309072101386"

bot.on("messageCreate", (msg) => {
  if(msg.content) {
    
    // simple ztn anlıyorsundur
    if(msg.channel.id === simpleID) {
      const json = msg.content
  
// parseliyürüz
var data = fs.readFileSync("db/simple.json");
var myObject = JSON.parse(data);
var yup = msg.content;
  
// ekliyürüz
myObject.push(msg.content);
  
// yazdırıyorüz
var newData2 = JSON.stringify(myObject);
fs.writeFile("db/simple.json", newData2, (err) => {
  // Error checking
  if (err) throw err;
  console.log(msg.content);
});
    }
    
    // siyasi
    if(msg.channel.id === siyasiID) {
      const json = msg.content
  
// parseliyürüz
var data = fs.readFileSync("db/siyasi.json");
var myObject = JSON.parse(data);
var yup = msg.content;
  
// ekliyürüz
myObject.push(msg.content);
  
// yazdırıyorüz
var newData2 = JSON.stringify(myObject);
fs.writeFile("db/siyasi.json", newData2, (err) => {
  // Error checking
  if (err) throw err;
  console.log(msg.content);
});
    }
    
    // shitpost
    if(msg.channel.id === shitpostID) {
      const json = msg.content
  
// parseliyürüz
var data = fs.readFileSync("db/shitpost.json");
var myObject = JSON.parse(data);
var yup = msg.content;
  
// ekliyürüz
myObject.push(msg.content);
  
// yazdırıyorüz
var newData2 = JSON.stringify(myObject);
fs.writeFile("db/shitpost.json", newData2, (err) => {
  // Error checking
  if (err) throw err;
  console.log(msg.content);
});
    }
    
    // dark
        if(msg.channel.id === darkID) {
      const json = msg.content
  
// parseliyürüz
var data = fs.readFileSync("db/dark.json");
var myObject = JSON.parse(data);
var yup = msg.content;
  
// ekliyürüz
myObject.push(msg.content);
  
// yazdırıyorüz
var newData2 = JSON.stringify(myObject);
fs.writeFile("db/dark.json", newData2, (err) => {
  // Error checking
  if (err) throw err;
  console.log(msg.content);
});
    }
  }
});
bot.connect();
