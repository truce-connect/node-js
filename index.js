const http = require('http')

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type' : 'text/plain'})
    response.end('hello Node!!!!\n')
  }).listen(3000);
  
  console.log("server running on port").
HELLO-WORLD.JS
// /synchronous operation
const data = fs.readFileSync('read-txt.txt')

console.log ("synchronous read:" + data.toString())



//asynchronous operation
fs.readFile("read-txt.txt", (err, data) => {
    if (err) return console.error(err);

    console.log("asynchronous read:" + data.toString())
})

console.log("Program Ended")
TEXT.JS