var heading = document.getElementById("item1");

function myMove() {
  var elem = document.getElementById("animate");   
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 150) {
      clearInterval(id);
      alert("Have fun with the new style"); 
      document.getElementById('item1').style.fontFamily = 'Agency FB';
      document.getElementById('item1').style.fontSize = '50px';
      document.getElementById('item1').style.backgroundColor = 'lightgrey';

      document.getElementById('item2').style.backgroundColor = 'lightgrey';

      document.getElementById('item3').style.backgroundColor = 'lightgrey';
      document.getElementById('item3').style.fontFamily = 'Agency FB'; 
      document.getElementById('item3').style.fontSize = '20px';

      document.getElementById('item4').style.fontFamily = 'Agency FB'; 
      document.getElementById('item4').style.backgroundColor = 'lightgrey';
      document.getElementById('item4').style.fontSize = '20px';

      document.getElementById('gridcontainer').style.backgroundColor = 'lightblue';

      

    } 
    else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
    
  }
  
}








/*function myMove() {
    var elem = document.getElementById("animate");   
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 150) {
        clearInterval(Id);
        alert("Hello");*/
        /*var headingEl = document.getElementById("item1");
        headingEl.className = "heading";*/

        /*function addCSS(newstyle){
          var content = document.getElementsByTagName('content')[0];
         
          var style = document.createElement('link');
          style.href = newstyle.css;
          style.type = 'text/css';
          style.rel = 'stylesheet';
          content.append(style);
         }*/
        /*clearInterval(id);
        var css = $("<link>", {
          "rel" : "stylesheet",
          "type" :  "text/css",
          "href" : "style.css"
        })[0];
        
        css.onload = function(){
          console.log("CSS IN IFRAME LOADED");
        };*/
        /*var element = document.createElement("link");
          element.setAttribute("rel", "stylesheet");
          element.setAttribute("type", "text/css");
          element.setAttribute("href", "style/newstyle.css");
          document.getElementsByTagName("head")[0].appendChild(element);*/
        /*if (!document.getElementById) document.write('<link rel="stylesheet" type="text/css" href="/style/newstyle.css">');*/ /*-> kinda worked */
        /*function setzeCSSLink() {
            var CSSlink = document.createElement('style/newstyle.css');
                CSSlink.rel = "stylesheet";
                CSSlink.href = "style/newstyle.css";
                CSSlink.type = "text/css";
                
                /*document.getElementsByTagName('head')[0].appendChild(CSSlink)
            }*/
        /*document.getElementById("heading").style.color = "blue";*/
      /*} else {
        pos++; 
        elem.style.top = pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
  }*/