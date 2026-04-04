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






