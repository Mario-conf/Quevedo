const menuButton = document.querySelector(".menu"); 
const links = [
  { name: "Biography", href: "#biography" },
  { name: "Albums", href: "#albums" },
  { name: "On Tour", href: "#tours" },
  { name: "Contact", href: "#contact" },
];

const overlay = document.createElement("div");
overlay.className = "menu-overlay";

const drawer = document.createElement("div");
drawer.className = "menu-drawer";

const header = document.createElement("div");
header.className = "menu-header";
const logo = document.createElement("span");
logo.className = "menu-logo";
logo.textContent = "Quevedo";
header.appendChild(logo);
drawer.appendChild(header);


links.forEach(link => {
  const a = document.createElement("a");
  a.className = "menu-link";
  a.href = link.href;
  a.textContent = link.name;
  drawer.appendChild(a);
});

overlay.appendChild(drawer);
document.body.appendChild(overlay);


function openMenu() {
  overlay.style.display = "block";
  setTimeout(() => drawer.style.left = "0", 10);
}

function closeMenu() {
  drawer.style.left = "-40%";
  setTimeout(() => overlay.style.display = "none", 300);
}

menuButton.addEventListener("click", openMenu);
logo.addEventListener("click", closeMenu);


drawer.querySelectorAll(".menu-link").forEach(link => {
  link.addEventListener("click", closeMenu);
});


overlay.addEventListener("click", e => {
    if (!drawer.contains(e.target)) {
      closeMenu();
    }
  });
  