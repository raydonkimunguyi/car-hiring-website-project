function searchCar() {
    let query = document.getElementById("search").value.toLowerCase();
    let cars = document.querySelectorAll(".car-card");
    cars.forEach(car => {
        let name = car.querySelector("h3").textContent.toLowerCase();
        if (name.includes(query)) {
            car.style.display = "block";
        } else {
            car.style.display = "none";
        }
    });
}

// Simulated Car Data (In a real project, this would come from a database)
const cars = {
    "toyota-corolla": {
        name: "Toyota Corolla",
        price: "$50 per day",
        description: "A comfortable and fuel-efficient sedan.",
        images: ["corolla-front.jpg", "corolla-back.jpg", "corolla-side.jpg", "corolla-interior.jpg"]
    },
    "nissan-xtrail": {
        name: "Nissan X-Trail",
        price: "$70 per day",
        description: "A spacious SUV perfect for long trips.",
        images: ["xtrail-front.jpg", "xtrail-back.jpg", "xtrail-side.jpg", "xtrail-interior.jpg"]
    }
};

// Function to Load Car Details
function loadCarDetails() {
    const params = new URLSearchParams(window.location.search);
    const carId = params.get("car");

    if (carId && cars[carId]) {
        document.getElementById("car-title").textContent = cars[carId].name;
        document.getElementById("car-price").textContent = cars[carId].price;
        document.getElementById("car-description").textContent = cars[carId].description;

        // Load Images
        document.getElementById("car-img-1").src = "images/" + cars[carId].images[0];
        document.getElementById("car-img-2").src = "images/" + cars[carId].images[1];
        document.getElementById("car-img-3").src = "images/" + cars[carId].images[2];
        document.getElementById("car-img-4").src = "images/" + cars[carId].images[3];
    }
}

// Slideshow Functionality
let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Manual Slideshow Controls
function plusSlides(n) {
    slideIndex += n;
    if (slideIndex > document.getElementsByClassName("slide").length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = document.getElementsByClassName("slide").length; }
    showSlides();
}

// Run Functions
window.onload = function () {
    loadCarDetails();
    showSlides();
};
