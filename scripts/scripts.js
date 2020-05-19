function myMove() {
    var elem = document.getElementById("animate");   
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 150) {
        clearInterval(id);
        /*if (!document.getElementById)*/ document.write('<link rel="stylesheet" type="text/css" href="style/newstyle.css">');
        /*function setzeCSSLink() {
            var CSSlink = document.createElement('style/newstyle.css');
                CSSlink.rel = "stylesheet";
                CSSlink.href = "style/newstyle.css";
                CSSlink.type = "text/css";
                
                /*document.getElementsByTagName('head')[0].appendChild(CSSlink)
            }*/
        /*document.getElementById("heading").style.color = "blue";*/
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
  }