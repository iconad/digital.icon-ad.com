export default (gsap, splitText, element) => {

  const targets = gsap.utils.toArray(element);

  targets.forEach((target) => {

    let SplitClient = new splitText(target, { type: "words,chars" });
    let chars = SplitClient.chars; //an array of all the divs that wrap each character

    gsap.from(chars, {
      duration: 0.8,
      opacity: 0,
      y: 15,
      x: -15,
      ease: "ease-in-out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: target,
        start: "top 90%",
        end: "bottom center",
        scrub: true
      }
    });

  });
}
