
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
        $(window).load(function() {
          // Animate loader off screen
          $(".se-pre-con").fadeOut("slow");;
        });
        /*function welcome(){
          alert("Hello There!!! Welcome to the page")
        }*/