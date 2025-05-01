document.getElementById("toggleButton").addEventListener("click", function () {
    let element = document.getElementById("hiddenElement");
    let buttonText = document.getElementById("toggleText");
    let buttonIcon = document.getElementById("toggleIcon");
    

    if (element.style.display === "none") {
        element.style.display = "block";
        buttonText.textContent = "Скрыть";
        buttonIcon.src = "image/dropup.png";
    } else {
        element.style.display = "none";
        buttonText.textContent = "Показать все";
        buttonIcon.src = "image/icon.svg";
        buttonIcon.alt = "Показать";
    }
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 220,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});