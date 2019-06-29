var express = require("express")

var app = express()

app.get("/test", function(req, res) {
  res.send({
    data: "hello world"
  })
})

var server = app.listen(3000, function() {
  console.log("启动")
})

module.exports = app