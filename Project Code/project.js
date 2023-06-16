document.addEventListener("DOMContentLoaded", function() {
  var loginButton = document.getElementById("login-button");
  var loginFormContainer = document.querySelector(".login-form-container");
  var closeLoginFormButton = document.getElementById("close-login-form");
  var emailInput = document.querySelector(".box[type='email']");
  var passwordInput = document.querySelector(".box[type='password']");

  loginButton.addEventListener("click", function() {
    loginFormContainer.classList.add("show");
  });

  closeLoginFormButton.addEventListener("click", function() {
    loginFormContainer.classList.remove("show");
  });

  var loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var email = emailInput.value;
    var password = passwordInput.value;

    if (email && password) {
      alert("Login Successful!");

      emailInput.value = "";
      passwordInput.value = "";

      loginFormContainer.classList.remove("show");
    } else {
      alert("Please enter your email and password.");
    }
  });
});
document.addEventListener("DOMContentLoaded", function() {
  var createAccountLink = document.getElementById("create-account-link");
  var loginFormContainer = document.querySelector(".login-form-container");
  var closeLoginFormButton = document.getElementById("close-login-form");
  var registerFormContainer = document.querySelector(".register-form-container");
  var closeRegisterFormButton = document.getElementById("close-register-form");

  createAccountLink.addEventListener("click", function() {
    loginFormContainer.style.display = "none";
    registerFormContainer.style.display = "block";
  });

  closeLoginFormButton.addEventListener("click", function() {
    loginFormContainer.style.display = "none";
  });

  closeRegisterFormButton.addEventListener("click", function() {
    registerFormContainer.style.display = "none";
  });
});

var swiper = new Swiper(".services-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

const exploreBtn = document.getElementById('explore-btn');
    exploreBtn.addEventListener('click', function() {
        window.location.href = 'services.html'; 
    });

const serviceBtn = document.getElementById('services-btn');
    serviceBtn.addEventListener('click', function() {
      window.location.href = 'services.html'; 
    });
const contactBtn = document.getElementById('contact-btn');
    contactBtn.addEventListener('click', function() {
      window.location.href = 'contact.html'; 
    });

