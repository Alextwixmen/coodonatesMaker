const container = document.querySelector(".container");
const mouseInfo = document.querySelector(".mouseInfo");

container.addEventListener("mousemove", (event) => {
  // console.log(
  //   `от клика мышки до левой стороны: ${event.offsetX}, от клика мышки до верха: ${event.offsetY}`
  // );
  mouseInfo.classList.remove("hidden");
  mouseInfo.classList.add("visible");
  let coordsLeft = event.offsetX - mouseInfo.offsetWidth;
  let coordsTop = event.offsetY - mouseInfo.offsetHeight;

  mouseInfo.style.left = coordsLeft + "px";
  mouseInfo.style.top = coordsTop + "px";
  if (event.offsetX < 100 && event.offsetY < 100) {
    mouseInfo.style.left = event.offsetX + 20 + "px";
    mouseInfo.style.top = event.offsetY + 20 + "px";
  }
  if (event.offsetX > 450 && event.offsetY < 50) {
    mouseInfo.style.left = event.offsetX - 100 + "px";
    mouseInfo.style.top = event.offsetY + 30 + "px";
  }
  if (event.offsetX < 100 && event.offsetY > 450) {
    mouseInfo.style.left = event.offsetX + 30 + "px";
    mouseInfo.style.top = event.offsetY - 60 + "px";
  }
  if (event.offsetX < 76) {
    mouseInfo.style.left = mouseInfo.offsetWidth / 4 + "px";
  }
  if (event.offsetY < 32) {
    mouseInfo.style.top = mouseInfo.offsetHeight / 4 + "px";
  }
  mouseInfo.innerHTML = `x: ${event.offsetX}, y: ${event.offsetY}`;
});
container.addEventListener("mouseleave", (event) => {
  mouseInfo.classList.add("hidden");
});
