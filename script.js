document.addEventListener("DOMContentLoaded", function () {

    // Chaar photos ke naam
    var photos = [
        "CSC.png",
        "light.jpg",
        "adar.png",
        "sitt.jpg"
    ];

    var current = 0;
    var slider = document.getElementById("mySlider");

    // Image element nahi mila to code rok do
    if (!slider) {console.log("mySlider ID nahi mila"); return;
    }

    // Photo change karne ka function
    function showPic(index) {

        // Last ke baad pehli photo
        // Pehli se pehle last photo
        current = (index + photos.length) % photos.length;
        slider.src = photos[current];
    }

    // Next button
    window.nextPic = function () {showPic(current + 1);};

    // Previous button
    window.prevPic = function () {showPic(current - 1);};

    // Pehli photo turant dikhao
    showPic(0);

    // Har 3 second mein photo badlo
    setInterval(function () {nextPic();}, 3000);

    // Image load nahi hui to error dikhao
    slider.onerror = function () {
        console.error("Photo load nahi hui:", slider.src);
    };
});

// image aur text me animation
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(function (element) {
        observer.observe(element);
    });
});
