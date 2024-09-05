let hamburger = document.querySelector('#bars');
let cancelX = document.querySelector('#cancel');
let menuList = document.querySelector('#menuList');
let navLinks = document.querySelectorAll('.li')

console.log('Elements:', hamburger, cancelX, menuList);


hamburger.addEventListener("click", () => {
    menuList.classList.toggle("active");
    hamburger.classList.toggle("hidden"); // Add a class to hide the hamburger
    cancelX.classList.toggle("show"); // Add a class to show the X icon
  });
  
  cancelX.addEventListener("click", () => {
    menuList.classList.remove("active");
    hamburger.classList.remove("hidden"); // Remove the class to show the hamburger
    cancelX.classList.remove("show"); // Remove the class to hide the X icon
  });
  

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuList.classList.remove("active");
      hamburger.classList.remove("hidden");
      cancelX.classList.remove("show");
    });
  });




  //  js code for form 
  const form = document.querySelector('form');

  function sendEmail() {
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "contactjbyte@gmail.come",
      Password : "EDB095E1066B7905FA7710236214892D80AE",
      To : 'contactjbyte@gmail.come',
      From : "contactjbyte@gmail.come",
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
    message => alert(message)
  );
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  sendEmail();
});