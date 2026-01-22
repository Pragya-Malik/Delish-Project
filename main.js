// Smooth navbar scroll
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Highlight active menu
window.addEventListener("scroll", () => {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("nav a");

  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => link.classList.remove("active"));
      document.querySelector(`nav a[href="#${id}"]`)?.classList.add("active");
    }
  });
});

// Image popup modal
document.querySelectorAll(".card img").forEach(img => {
  img.addEventListener("click", () => {
    let modal = document.createElement("div");
    modal.style.cssText = `
      position:fixed;
      top:0;left:0;
      width:100%;height:100%;
      background:rgba(0,0,0,0.8);
      display:flex;
      justify-content:center;
      align-items:center;
      z-index:999;
    `;
    let bigImg = document.createElement("img");
    bigImg.src = img.src;
    bigImg.style.maxWidth = "80%";
    bigImg.style.borderRadius = "10px";
    modal.appendChild(bigImg);
    document.body.appendChild(modal);

    modal.onclick = () => modal.remove();
  });
});

// Auto review slider
let reviews = document.querySelectorAll(".reviews p");
let index = 0;

setInterval(() => {
  reviews.forEach(r => r.style.display = "none");
  reviews[index].style.display = "block";
  index = (index + 1) % reviews.length;
}, 3000);
