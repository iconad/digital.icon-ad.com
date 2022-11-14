export default (frames, topScrollMargin, scrollAnimationSpeed) => {


    const html = document.documentElement;
    const canvas = document.getElementById("hero-lightpass");

    const context = canvas.getContext("2d");

    const frameCount = frames;
    const currentFrame = index => (
      `https://icon-ad.com/client/map/map${index.toString().padStart(4, '0')}.png`
    )

    const preloadImages = () => {
      for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    };

    const img = new Image()
    img.src = currentFrame(1);
    canvas.width=1158;
    canvas.height=600;
    img.onload=function(){
      context.drawImage(img, 0, 0, canvas.width, 620);
    }

    const updateImage = index => {
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0, canvas.width, 620);
    }

    window.addEventListener('scroll', () => {

      const scrollTop = html.scrollTop + topScrollMargin;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop * scrollAnimationSpeed;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      );

      requestAnimationFrame(() => updateImage(frameIndex + 1))
    });

    preloadImages()

}

