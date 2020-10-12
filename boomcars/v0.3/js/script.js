
        var mybutton = document.getElementById("myBtn");
        
        window.onscroll = function() {scrollFunction()};
        
        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
          } 
          else {
            mybutton.style.display = "none";
          }
        }
        function aler(){
          alert("BackEnd is Under Construction");
        }

        function topFunction() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }

        function carfun(){
          alert("You should have to work hard to dream for a car like this.");
        }
        /*function welcome(){
          alert("Hello There!!! Welcome to the page")
        }*/