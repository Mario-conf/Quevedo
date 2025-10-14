function checkWindowWidth() {
  const width = window.innerWidth;
  const MINIMUM_WIDTH = 1200; 
  
  if (width < MINIMUM_WIDTH) {
      window.location.href = "assets/img/view/error.html";
  }
}

window.onload = checkWindowWidth;

window.addEventListener("resize", checkWindowWidth);