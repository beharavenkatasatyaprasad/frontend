
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
          alert("Backend Under Construction");
        }
        function myFunction() {
          var x = document.getElementById("myTopnav");
          if (x.className === "topnav") {
            x.className += " responsive";
          } else {
            x.className = "topnav";
          }
        }