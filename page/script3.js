var images = [
    "image/Screenshot 2026-06-04 023358.png",
    "image/Screenshot 2026-06-17 201658.png",
    "image/WhatsApp Image 2026-08-26 at 12.07.28 PM.jpeg"
];

var i = images.length - 1; 
var btn = document.getElementById('changeImg');
var imgElement = btn.previousElementSibling; 

btn.addEventListener('click', () => {
    i--; 
    if (i < 0) {
        i = images.length - 1;
    }
    
    imgElement.src = images[i];
    console.log(imgElement.src); 
});