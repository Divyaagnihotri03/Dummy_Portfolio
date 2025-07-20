document.querySelector(".footer-rights").innerHTML =
    "© " + new Date().getFullYear() + " Divya's Portfolio | All rights reserved";

     src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js">

 <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>

 
 var typed = new Typed('#element', {
      strings: ['Java Developer','Python Developer', 'MERN Stack Developer', 'Full Stack Developer', 'Web Designer.'],
      typeSpeed: 50,
    });
  
   
  const topBtn = document.getElementById("topBtn");

  window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  };

  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }





