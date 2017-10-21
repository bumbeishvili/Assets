
// ==UserScript==
// @name           Go to actual link
// @namespace      stackoverflow
// @description    Remove upwork's link check, by replacing upwork generated link, with actual link
// @version        0.1
// @require        https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js
// @match          *://upwork.com/*
// @author         Davit Bumbeishvili
// ==/UserScript==


// query string keys, which should be checked for actual link
var refs = ["ref"];

// check in every sec
setInterval(w => {

  var $as = $('a');
  var arr = $as.toArray();
  if (arr) {

    //loop over links
    arr.forEach(a => {

      //extract site generated url
      var url = $(a).attr('href');
      if (url) {
        refs.forEach(ref => {
          var strName = ref;

          // check if actual link exists with current query string key
          var refIndex = url.indexOf(strName + "=");
          if (refIndex > 1) {

            //catch actual link using regex grouping 
            var result = url.match(`(.*)(${strName}=)(.*)(&|$)`, 'i');

            // get catched link
            var actualLink = unescape(result[3]);

            //replace site generated link with actual
            $(a).attr('href', actualLink);
          }
        });
      }
    });
  }
}, 1000);
