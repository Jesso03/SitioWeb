const images = document.querySelectorAll("#carousel-images img");
const carouselImages = document.getElementById("carousel-images");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;

function showImage(index) {
    const imageWidth = images[0].clientWidth;
    carouselImages.style.transform = `translateX(-${index * imageWidth}px)`;
}

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}, 3000);
