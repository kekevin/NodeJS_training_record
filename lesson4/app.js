var eventproxy = require('eventproxy')
var superagent = require('superagent')
var cheerio = require('cheerio')
var url = require('url')
var cnodeUrl = 'https://cnodejs.org/'
/*
* 学习使用 superagent 抓取网页
* 学习使用 cheerio 分析网页*/
superagent.get(cnodeUrl).end((err, res) => {
  //使用superagent抓取网页，获取到res，就是网页的html
  if (err) {
    return console.log(err)
  }
  var topicUrls = []
  var $ = cheerio.load(res.text)
  //$相当于把cheeri加载为html，
  $('#topic_list .topic_title').each((idx, element) => {
    //获取html标签中的元素
    var $element = $(element)
    var href = url.resolve(cnodeUrl, $element.attr('href'))
    //href=cnodeUrl+元素的href属性
    topicUrls.push(href)
  })
  console.log(topicUrls)
})