export default () => {

  var h = document.getElementById("serviesStickyNavbar");
  var readout = document.getElementById("readout");
  var stuck = false;
  var stickPoint = getDistance();

  function getDistance() {
    var topDist = h.offsetTop;
    return topDist;
  }

  window.onscroll = function(e) {
    var distance = getDistance() - window.pageYOffset;
    var offset = window.pageYOffset;
    if ( (distance <= 0) && !stuck) {
      h.style.position = 'fixed';
      h.style.width = '100%';
      h.style.zIndex = '100';
      h.style.top = '0px';
      h.classList.add('shadow');
      stuck = true;
    } else if (stuck && (offset <= stickPoint)){
      h.style.position = 'static';
      h.classList.remove('shadow');
      stuck = false;
    }
  }

}
