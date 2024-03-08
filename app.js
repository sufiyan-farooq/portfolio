// For toggling and finding number of children and other stuff is done here!

const navigation = document.getElementById("nav");
const menu = document.getElementById("menu");

menu.addEventListener("click", () => {
  // The navigation.children.length means the following :-
  // The children inside a parent are basically an array of elements; So, here I'm finding the length of the array aka how many children are inside the nav bar.
  //   Yup That's all.
  navigation.style.setProperty("--childenNumber", navigation.children.length);

  //    Casually Toggling Classes to make them animate on click
  //   Regular stuff ;)
  navigation.classList.toggle("active");
  menu.classList.toggle("active");
});



const typed = new Typed('.type',{
    strings:["Front-End Developer.","Front-End Developer."],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true,

});



// Show Back to Top Button When Scrolling Down
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
}

// Scroll to Top When Button Clicked
document.getElementById("back-to-top").onclick = function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}






window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var backToTopButton = document.getElementById('back-to-top');

  if (scrollPosition > 200) { // Adjust the value according to when you want the button to appear
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});










