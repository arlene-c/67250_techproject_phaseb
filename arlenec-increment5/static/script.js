
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


function addYear() {
    var currentYear = new Date().getFullYear();
    var year = document.getElementById("copyYear");
    if (year) {
        year.innerHTML = currentYear;
    }
}



function ActiveNav() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');

    // Iterate over each link
    navLinks.forEach(link => {
    // Check if the link's href matches the current window location
        if (window.location.href === link.href) {
            // Add the 'active' class to highlight the current page
            link.classList.add("active");
        }
    });
}

ActiveNav();


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

if (document.getElementById('map')) {
    var map = L.map('map').setView([40.4406, -79.9959], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var marker = L.marker([40.4406, -79.9959]).addTo(map);
    marker.bindPopup("<b>MonoMuse</b><br>Pittsburgh, PA.").openPopup();

}