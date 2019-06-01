var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;

  if (q.name) {
    if (q.name == "Rasmus")
    var txt = "Hej" + q.name +
  }

  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);