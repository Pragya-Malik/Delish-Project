// Smooth scroll
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Load menu from backend
async function loadMenu() {
  try {
    const res = await fetch("http://98.80.151.86:5000/api/menu");
    if (!res.ok) throw new Error("API not available");

    const data = await res.json();
    const container = document.getElementById("menu-container");

    container.innerHTML = "";

    data.forEach(item => {
      const div = document.createElement("div");
      div.innerHTML = `${item.name} <span>₹${item.price}</span>`;
      container.appendChild(div);
    });

  } catch (err) {
    console.warn("Backend not connected yet");
  }
}

loadMenu();