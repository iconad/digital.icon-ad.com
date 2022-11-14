export default (gsap, elements) => {

  elements.forEach((element) => {

    gsap.from(element,
    {
      autoAlpha: 0,
      y: 15,
      duration: 0.8,
      ease: "ease-in-out",
      stagger: 0.3,
      scrollTrigger: {
          trigger: element,
          start: "top 90%",
          end: "90% center",
          scrub: true,
      }
    });

  })

}
