const carousel = document.getElementById("carousel");
let count = 1;
function changeCarousel() {
  carousel.classList.remove("carousel-" + (count == 1 ? 4 : count - 1));
  carousel.classList.add("carousel-" + count);
  count += 1;
  count = count > 4 ? 1 : count;
}
setInterval(changeCarousel, 2000);
