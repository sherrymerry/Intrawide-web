// function colour(){
//     document.getElementById().style.color="blue";
// }




// function subscribeForm() {
//   var name = document.getElementById("name").value;
//   var email = document.getElementById("email").value;


//   // Check for empty fields
//   if (name.trim() === "") {
//     document.getElementById("nameError").innerHTML = "Please fill out all required fields.";
//     document.getElementById("nameError").style.color = "red";
//     return false;
//   }
//   else {
//   document.getElementById("nameError").innerHTML = "";
// }


//   // Check email format
//   if ( email.trim() ===  "" || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
//     document.getElementById("emailError").innerHTML = "Please fill out all required fields.";
//     document.getElementById("emailError").innerHTML = "Please enter a valid email address.";
//     document.getElementById("emailError").style.color = "red";
//     return false;
//   }
//   else {
//   document.getElementById("emailError").innerHTML = "";
// }


//   // Clear any existing error messages
//   document.getElementById("nameError").innerHTML = "";
//   document.getElementById("emailError").innerHTML = "";


//   // Form is valid, allow submission
//   return true;
// }





// //Get the button
// var mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }




//jquery-click-scroll
//by syamsul'isul' Arifin

// var sectionArray = [1, 2, 3, 4, 5];

// $.each(sectionArray, function(index, value){
          
//      $(document).scroll(function(){
//          var offsetSection = $('#' + 'section_' + value).offset().top - 88;
//          var docScroll = $(document).scrollTop();
//          var docScroll1 = docScroll + 1;
         
        
//          if ( docScroll1 >= offsetSection ){
//              $('.navbar-nav .nav-item .nav-link').removeClass('active');
//              $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');  
//              $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');
//              $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive');
//          }
         
//      });
    
//     $('.click-scroll').eq(index).click(function(e){
//         var offsetClick = $('#' + 'section_' + value).offset().top - 88;
//         e.preventDefault();
//         $('html, body').animate({
//             'scrollTop':offsetClick
//         }, 300)
//     });
    
// });


const blaskconfetti = ()=>{

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }
      
      confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: { y: 0.6 },
      });
    }



    document.addEventListener('DOMContentLoaded', function() {

      countdown('.succ-head1', 0, 1790);
      countdown('.comp-head1', 1, 491);
      countdown('.rcrt-head1', 1, 245);
      countdown('.publish-head1', 1, 1090);

  });
  
  function countdown(className, start, end) {
      let currentValue = start;
      let increment = (end - start) / 40; // Adjust speed by changing the divisor (40 here)
      let interval = setInterval(function() {
          currentValue += increment;
          document.querySelector(className).innerText = Math.round(currentValue).toLocaleString();
          if (currentValue >= end) {
              clearInterval(interval);
          }
      }, 60); // Adjust speed by changing the interval (50ms here)
  }
