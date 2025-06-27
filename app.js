
const quantityDisplay = document.getElementById("quantity");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const packElements = document.querySelectorAll(".pack");
const addToCartBtn = document.querySelector(".add-to-cart");
const newPriceSpan = document.querySelector(".new-price");

let quantity = 1;

increaseBtn.addEventListener("click", () => {
  quantity++;
  quantityDisplay.textContent = quantity;
});

decreaseBtn.addEventListener("click", () => {
  if (quantity > 1) {
    quantity--;
    quantityDisplay.textContent = quantity;
  }
});

const priceMap = {
  1: 674,
  2: 1169,
  3: 1349,
};

packElements.forEach((pack) => {
  pack.addEventListener("click", () => {
    packElements.forEach((p) => p.classList.remove("active"));
    pack.classList.add("active");

    const selectedPack = pack.dataset.pack;
    const newPrice = priceMap[selectedPack];

    newPriceSpan.textContent = `₹${newPrice}`;
    addToCartBtn.textContent = `ADD TO CART | ₹${newPrice}`;
  });
});

const images = ["product1.png", "product2.png", "product3.png"];
let currentImg = 0;

const sliderImg = document.getElementById("slider-img");
const prevBtn = document.getElementById("prev-img");
const nextBtn = document.getElementById("next-img");

prevBtn.addEventListener("click", () => {
  currentImg = (currentImg - 1 + images.length) % images.length;
  sliderImg.src = images[currentImg];
});

nextBtn.addEventListener("click", () => {
  currentImg = (currentImg + 1) % images.length;
  sliderImg.src = images[currentImg];
});
