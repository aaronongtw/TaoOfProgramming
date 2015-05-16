var BookNumber;
var loop;
var BookTitle;
var oTitle;
var oBID;
var cloop;
var coTitle;
var coBID;

  var removeDiv = function(div) {
    $('#'+div).remove();
  }

// check out physicsJS
// paperJS
// 



var information = function() {
  BID = "#" + $(this).attr('id')
  BookTitle = 'Book' + $(this).attr('id')
  $(BID).text(Book[BookTitle].Chapter)
  title = $(BID).text()
  $('#story').text(Book[BookTitle].OpeningQuote)
  TweenMax.to('#story', 1, {
  position: 'absolute',
  left:'150px',
  overflow: 'auto',
  background: 'rgb(48, 48, 48)',
  border: '1px solid #ccc',
  'max-height': '44.6%',
  width: '29%',
  'font-size': '14px',
  'font-family': 'monospace',
  padding: '10px 10px 20px',
  'box-shadow': '-4px 4px 2px 0 rgba(0,0,0,0.3)',
  'white-space': 'pre-wrap',
  outline: 0,
  color: 'white'
})
  tThis = '#' + $(this).attr('id')
  TweenMax.to(tThis, 0.4, {
    'font-size':'105%'
  })
  BookNumber = $(this).attr('id')
  chapterSelect();
  TweenMax.to('#chapterSelect',0.5,{
    opacity:1
  })
  underscoreOff()
  oBID = BID
  oTitle = title;
  underscore();
}

var hoverOut = function() {
  TweenMax.to('#story', 1, {
    yoyo: true,
    left:'160px',
    repeat: -1
  })
  tThis = '#' + $(this).attr('id')
  TweenMax.to(tThis, 0.4, {
    'font-size':'100%'
  })
}

var underscore = function() {
  var step = 0
  title = Book[BookTitle].Chapter
  loop = setInterval(function() {
    if (step === 0) {
    $(BID).text(title + "_")
    step = 1
  } else {
    step = 0
    $(BID).text(title)
  }
  },500)
}

var underscoreOff = function(){
    clearInterval(loop);
    $(oBID).text(oTitle)
}

var cunderscore = function() {
  var step = 2
  cloop = setInterval(function() {
    if (step === 0) {
    $(BID).text(title + "_")
    step = 3
  } else {
    step = 2
    $(BID).text(title)
  }
  },500)
}

var cunderscoreOff = function(){
    clearInterval(cloop);
    $(coBID).text(coTitle)
}

var chapterSelect = function() {
  $('#p1').text(BookNumber + '.1')
  $('#p2').text(BookNumber + '.2')
  $('#p3').text(BookNumber + '.3')
  $('#p4').text(BookNumber + '.4')
}

var chapterSelection = function() {
  BID = "#" + $(this).attr('id')
  title = $(BID).text()
  partID = "part" + $(this).attr('id')[1]
  $('#storyInChapter').text(Book[BookTitle][partID])
  cunderscoreOff();
  coBID = BID
  coTitle = title;
  cunderscore();
}
 
var chapterOut = function() {
  BID = "#" + $(this).attr('id')

}  
  
  $('.menuItem').hover(information, hoverOut)
  $('.chapter').hover(chapterSelection, chapterOut)
