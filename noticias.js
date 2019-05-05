var http = require('http') // permite requisitar/ incluir um arquivo ao arquivo atual.Nesse caso estamos incluindo a biblioteca http. 

var server = http.createServer( function(req, res){
var categoria = req.url; // recupera a informação passada na url

    if(categoria == '/tecnologia'){
        res.end("<html><body>Portal de tecnologia</body></html>")
    }else if(categoria == '/moda'){
        res.end("<html><body>Portal de moda</body></html>")
    }else if(categoria == '/beleza'){
         res.end("<html><body>Portal de beleza</body></html>")
    }else{
        res.end("<html><body>Portal de noticias</body></html>")
    }
    
});

server.listen(8080)
