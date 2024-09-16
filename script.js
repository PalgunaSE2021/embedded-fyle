let lastScrollTop = 0;
const navbar = document.getElementById("navbar");
const imageContainer = document.querySelector(".image-container");
const image2 = document.querySelector(".image-2");
const divider = document.querySelector(".divider");

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.classList.add("hidden");
  } else {
    // Scrolling up
    navbar.classList.remove("hidden");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative scroll values
});

imageContainer.addEventListener("mousemove", (e) => {
  const containerRect = imageContainer.getBoundingClientRect();
  const xPos = e.clientX - containerRect.left;

  // Set the divider position
  divider.style.left = `${xPos}px`;

  // Adjust the clip-path for image2
  image2.style.clipPath = `inset(0 ${containerRect.width - xPos}px 0 0)`;
});
