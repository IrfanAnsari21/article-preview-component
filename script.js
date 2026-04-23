const btn = document.querySelector(".share-btn");
const toast = document.querySelector(".share-toast");
const triangle = document.querySelector(".triangle");

btn.addEventListener("click", () => {
    toast.classList.toggle("active");
    triangle.classList.toggle("active");
});