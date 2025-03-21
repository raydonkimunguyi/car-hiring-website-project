document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
  
    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
  
        // Toggle the icon between ☰ and ✖
        if (navLinks.classList.contains("active")) {
            hamburger.textContent = "✖"; // Close icon
        } else {
            hamburger.textContent = "☰"; // Hamburger icon
        }
    });
  });

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
    document.getElementById("cars").scrollIntoView({ behavior: "smooth" });
}

// Add event listener for Enter key press on the search input
document.getElementById("search").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission (if inside a form)
        searchCar();
    }
});

function scrollToServices() {
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
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


