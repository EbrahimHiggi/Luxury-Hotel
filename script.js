// Modal Handling
// -------------------------
const openBtn = document.querySelector(".open-model");
const modal = document.getElementById("Model");
const closeBtn = document.getElementById("close-login");

if (openBtn && modal && closeBtn) {
  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
}

// -------------------------
// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav");
  const hero = document.querySelector(".hero");

  let triggerHeight = 50;

  if (hero) {
    triggerHeight = hero.offsetHeight - 100;
  }

  if (window.scrollY > triggerHeight) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let currentPage = window.location.pathname.split("/").pop(); // اسم الملف الحالي
  if (currentPage === "") currentPage = "home.html"; // لو الصفحة الرئيسية بدون اسم ملف

  let navLinks = document.querySelectorAll("header nav a");

  navLinks.forEach((link) => {
    let linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
