// document.addEventListener("DOMContentLoaded", function () {
//     const block = document.querySelector(".main__hover");
//     const text = block.querySelector(".text");

//     block.addEventListener("mouseenter", function () {
//         text.textContent = "Скрыть";
//     });

//     block.addEventListener("mouseleave", function () {
//         text.textContent = "Наведи на меня";
//     });
// });

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

document.getElementById("toggleButton").addEventListener("click", function() {
    let element = document.getElementById("hiddenElement");
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
        this.textContent = "Скрыть";
    } else {
        element.style.display = "none";
        this.textContent = "Показать все";
    }
});