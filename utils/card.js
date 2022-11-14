export default (container, element) => {

  container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    element.style.transform = `translateY(${yAxis}px) translateX(${xAxis}px)`;
  });

}
