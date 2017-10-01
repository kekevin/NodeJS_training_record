/*
* 学习使用 superagent 抓取网页
* 学习使用 cheerio 分析网页*/
var express = require('express')
var cheerio = require('cheerio')
var superagent = require('superagent')
var app = express()

app.get('/', (req, res, next) => {
  superagent.get('https://www.w3cschool.cn/').end((err, sres) => {
    if (err) {
      return next(err)
    }
    var $ = cheerio.load(sres.text)
    var items = []
    $('.feed-intro a').each((idx, element) => {
      var $element = $(element)
      items.push({
        idx: idx,
        title: $element.attr('title'),
        href: $element.attr('href')
      })
    })
    res.send(items)
  })
})
app.listen(3000, function () {
  console.log('app is listening at port 3000');
});