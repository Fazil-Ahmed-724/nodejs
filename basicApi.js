const http = require('http')
const data = require('./empData')

http.createServer((req,res) => {
    res.writeHead(200,{'Conttent-Type':'application\josn'})
    // res.write(JSON.stringify({name : 'fazil', dep : 'SE' }))
    res.write(JSON.stringify(data))
    res.end()
}).listen(1000);