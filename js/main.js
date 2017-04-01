var urls = [
  'https://google.com',
  'https://twitter.com',
  'https://www.youtube.com/watch?v=pNrKAzHsp0g',
  'https://www.youtube.com/watch?v=oWgTqLCLE8k',
  'https://en-marche.fr/',
  'http://www.dreuz.info/wp-content/uploads/2016/11/GettyImages-607525444-1-1160x772.jpg'
]

var trollLinks = function () {
  var urlsLenght = urls.length
  var win = null

  for (var i = 0 ; urlsLenght > i ; i++) {
    win = window.open('about:blank', '_blank', 'height=500,width=550')
    showWindow(win, urls[i])
  }
}

var showWindow = function (win, url) {
  win.open(url, '_blank', 'height=500,width=550')
}
