
// part 1
window.onload = function(){
    var message = ["Buy 3 Products at Rs. 1599","Use Code: Beauty15 - 15% off on our Bestsellers! 😍💸","Exclusive Treat on orders above Rs. 699! 🛒❤️"];

let slideshow = document.getElementById("slideshow1");

let counter = 0;

function UpadateMessage(){
    slideshow.textContent = message[counter];
    counter = (counter + 1) % message.length;
}

setInterval(UpadateMessage, 3000);
};


// Part 2: Search Input
document.addEventListener("DOMContentLoaded", function() {
    var searchInput = document.getElementById("searchInput");
    var optionsFrame = document.getElementById("optionsFrame");

    searchInput.addEventListener("mouseenter", function() {
        optionsFrame.style.display = "block";
    });

    searchInput.addEventListener("mouseleave", function() {
        optionsFrame.style.display = "none";
    });

    optionsFrame.addEventListener("mouseleave", function() {
        optionsFrame.style.display = "none";
    });
});

// part 3 -lip
document.addEventListener("DOMContentLoaded", function(){
    var lip = document.getElementById("lip");
    var lipsFrame = document.getElementById("lipsframe");

    lip.addEventListener("mouseenter", function() {
        lipsFrame.style.display = "block";
    });

    lip.addEventListener("mouseleave", function() {
        lipsFrame.style.display = "none";
    });

    lipsFrame.addEventListener("mouseleave", function() {
        lipsFrame.style.display = "none";
    });
});

// part3 -eye 
document.addEventListener("DOMContentLoaded", function(){
    var eye = document.getElementById("eye");
    var eyeFrame = document.getElementById("eyesframe");

    eye.addEventListener("mouseenter", function() {
        eyeFrame.style.display = "block";
    });

    eye.addEventListener("mouseleave", function() {
        eyeFrame.style.display = "none";
    });

    eyeFrame.addEventListener("mouseleave", function() {
        eyeFrame.style.display = "none";
    });
});

// face
document.addEventListener("DOMContentLoaded", function(){
    var eye = document.getElementById("face");
    var eyeFrame = document.getElementById("faceframe");

    eye.addEventListener("mouseenter", function() {
        eyeFrame.style.display = "block";
    });

    eye.addEventListener("mouseleave", function() {
        eyeFrame.style.display = "none";
    });

    
    eyeFrame.addEventListener("mouseleave", function() {
        eyeFrame.style.display = "none";
    });
});
// skincare
document.addEventListener("DOMContentLoaded", function(){
    var eye = document.getElementById("skincare");
    var eyeFrame = document.getElementById("skincareframe");

    eye.addEventListener("mouseenter", function() {
        eyeFrame.style.display = "block";
    });

    eye.addEventListener("mouseleave", function() {
        eyeFrame.style.display = "none";
    });

    
    eyeFrame.addEventListener("mouseleave", function() {
        eyeFrame.style.display = "none";
    });
});

// accessorie
document.addEventListener("DOMContentLoaded", function(){
    var eye = document.getElementById("accessorie");
    var eyeFrame = document.getElementById("accessorieframe");

    eye.addEventListener("mouseenter", function() {
        eyeFrame.style.display = "block";
    });

    eye.addEventListener("mouseleave", function() {
        eyeFrame.style.display = "none";
    });

    eyeFrame.addEventListener("mouseleave", function() {
        eyeFrame.style.display = "none";
    });
});


