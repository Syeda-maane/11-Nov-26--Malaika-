const bagCount = document.querySelector(".bag-count");
const toast = document.querySelector(".toast");
let count = 0;

document.querySelectorAll(".add-btn").forEach((button) => {
  button.addEventListener("click", () => {
    count += 1;
    bagCount.textContent = count;
    toast.textContent = `${button.dataset.product} added to your bag`;
    toast.classList.add("show");
    window.clearTimeout(window.toastTimer);
    window.toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2200);
  });
});

const productGrid = document.querySelector(".product-grid");
document.querySelector(".next")?.addEventListener("click", () => {
  productGrid.scrollBy({ left: 360, behavior: "smooth" });
});
document.querySelector(".prev")?.addEventListener("click", () => {
  productGrid.scrollBy({ left: -360, behavior: "smooth" });
});

document.querySelector(".menu-btn")?.addEventListener("click", () => {
  document.querySelector(".nav").classList.toggle("open");
});

document.querySelector(".newsletter-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = event.currentTarget.querySelector("input");
  if (!input.value.trim()) return;
  toast.textContent = "Welcome to the Lumé journal";
  toast.classList.add("show");
  input.value = "";
  window.clearTimeout(window.toastTimer);
  window.toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2200);
});
