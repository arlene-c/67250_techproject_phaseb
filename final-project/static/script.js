
/*Greeting message based on time of day */
const now = new Date();
const hours = now.getHours();
function greeting(x) {
    var page = window.location.pathname;
    const greetingElement = document.getElementById("greeting");
    if (page.endsWith("index.html") || page === "/") {
        if (greetingElement) {
            if (x < 5 || x >= 20) {
                greetingElement.innerHTML = "Good night";
            } else if (x < 12) {
                greetingElement.innerHTML = "Good morning";
            } else if (x < 18) {
                greetingElement.innerHTML = "Good afternoon";
            } else {
                greetingElement.innerHTML = "Good evening";
            }
        }
    }
}
greeting(hours);

/*Getting year to display in copyright message*/
function addYear() {
    var currentYear = new Date().getFullYear();
    var year = document.getElementById("copyYear");
    if (year) {
        year.innerHTML = currentYear;
    }
}


/* Highlighting active navigation link */
function ActiveNav() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        if (window.location.href === link.href) {
            link.classList.add("active");
        }
    });
}

ActiveNav();

/* JQuery used to toggle read more/read less buttons */
 $("#readLess").click(function(){ 
    $("#longIntro").hide(); 
    $("#readLess").hide();  
    $("#readMore").show();  

  });

  $("#readMore").click(function(){
    $("#longIntro").show();  
    $("#readLess").show();   
    $("#readMore").hide();   
  });

/*Function to reveal checkout form */
function revealForm() {
    var formSection = document.getElementById("checkoutSection");
    if (formSection) {
        formSection.style.display = "block";
    }
}

function submitPurchase() {
    alert("Redirecting to payment system.");
}



function toggleMenu() {
    const navBar = document.querySelector('.nav_bar');
    navBar.classList.toggle('responsive');
}

/*Leafleft map initialization and creation */
if (document.getElementById('map')) {
    /*Pittsburgh address coordinates*/
    var map = L.map('map').setView([40.4406, -79.9959], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var marker = L.marker([40.4406, -79.9959]).addTo(map);
    marker.bindPopup("<b>MonoMuse</b><br>Pittsburgh, PA.").openPopup();

}

/*Calculate total price as user changes ticket quantity */
function calculatePrice() {
    const quantity = document.getElementById('tickets').value;
    const pricePerTicket = 18; 
    const total = quantity * pricePerTicket;
    
    document.getElementById('totalPrice').innerText = total;
}

/* Submit purchase function, displaying errors and warnings when inputs are invalid*/
function submitPurchase() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const tickets = document.getElementById('tickets').value;
    const zip = document.getElementById('zip').value;
    const errorDisplay = document.getElementById('error-message');

    errorDisplay.style.display = "none";

    if (!name || !email || !date || !tickets) {
        showError("Please fill out all required fields.");
        return;
    }
    if (!email.includes("@") || !email.includes(".")) {
        showError("Please enter a valid email address.");
        return;
    }

    if (zip !== "" && !/^\d{5}$/.test(zip)) {
        showError("Zip code must be exactly 5 digits.");
        return;
    }

    const finalTotal = document.getElementById('totalPrice').innerText;
    alert(`Order Confirmed!\nTotal Cost: $${finalTotal}\nThank you for visiting MonoMuse!`);
}

function showError(message) {
    const errorDisplay = document.getElementById('error-message');
    errorDisplay.innerText = message;
    errorDisplay.style.display = "block";
}
window.onload = function() {
    if(document.getElementById('tickets')) {
        calculatePrice();
    }
};

/*Gallery slideshow function */
let slideIndex = 0;

function changeSlide(n) {
    const slides = document.getElementsByClassName("my-slide");
    
    slides[slideIndex].classList.remove("active");

    slideIndex += n;

    if (slideIndex >= slides.length) { 
        slideIndex = 0; 
    }
    if (slideIndex < 0) { 
        slideIndex = slides.length - 1; 
    }

    slides[slideIndex].classList.add("active");
}
