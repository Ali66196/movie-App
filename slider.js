// Team Members:
// - Ali Shahmoradi
// - MohammadJavad Takallo
// - Mohammad Nasiralvares
// All rights reserved. 

const canvas = document.getElementById('sliderCanvas');
const ctx = canvas.getContext('2d');

const images = [
    './images/Juror-slider.jpg',
    './images/Joker-slider.jpg',
    './images/Venom-slider.jpg'
];

let currentImageIndex = 0;

const dots = document.querySelectorAll('.dot');

function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = (err) => reject(err);
        img.src = src;
    });
}

async function loadAndDisplayImage() {
    try {
        const img = await loadImage(images[currentImageIndex]);
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height); 


        updateDots();

        canvas.style.animation = 'fadeIn 1s ease';
    } catch (error) {
        console.error('Error loading image:', error);
    }
}

function updateDots() {
    dots.forEach((dot, index) => {
        if (index === currentImageIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    loadAndDisplayImage();
}


setInterval(changeImage, 3000);


loadAndDisplayImage();
