export default () => {


        // You can change this class to specify which elements are going to behave as counters.
        var elements = document.querySelectorAll(".scroll-counter")

      
        elements.forEach(function(item) {
          // Add new attributes to the elements with the '.scroll-counter' HTML class

            
        let numberCounter = null
        let innerNumber = item.innerHTML
        const lastChar = item.innerHTML.slice(-1)

        if(/^\d+$/.test(lastChar)) {
            numberCounter = innerNumber            
        }else{
            numberCounter = innerNumber.substr(0, innerNumber.length - 1)
        }

        
        // ========= Seprating Text and Number End =======

        item.counterAlreadyFired = false
        item.counterSpeed = item.getAttribute("data-counter-time") / 45
        item.counterTarget = + numberCounter.replace(/,/g, '');
        item.counterCount = 0
        item.counterStep = item.counterTarget / item.counterSpeed

        item.updateCounter = function() {
            item.counterCount = item.counterCount + item.counterStep

            if(/^\d+$/.test(lastChar)) {
            item.innerHTML = Math.ceil(item.counterCount).toLocaleString()
            }else{
              item.innerHTML = Math.ceil(item.counterCount).toLocaleString() + lastChar
            }
            item.classList.add('animate')
            
            if (item.counterCount < item.counterTarget) {
                setTimeout(item.updateCounter, item.counterSpeed)
                } else {
                    if (isNaN(lastChar)) {
                        item.innerHTML = numberCounter + lastChar
                    }else{
                        item.innerHTML = numberCounter
                    }
                }
            }
            
        })
      
        // Function to determine if an element is visible in the web page
        var isElementVisible = function isElementVisible(el) {
          var scroll = window.scrollY || window.pageYOffset
          var boundsTop = el.getBoundingClientRect().top + scroll
          var viewport = {
            top: scroll,
            bottom: scroll + window.innerHeight,
          }
          var bounds = {
            top: boundsTop,
            bottom: boundsTop + el.clientHeight,
          }
          return (
            (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
            (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
          )
        }
      
        // Funciton that will get fired uppon scrolling
        var handleScroll = function handleScroll() {
          elements.forEach(function(item, id) {
            if (true === item.counterAlreadyFired) return
            if (!isElementVisible(item)) return
            item.updateCounter()
            item.counterAlreadyFired = true
          })
        }
      
        // Fire the function on scroll
        window.addEventListener("scroll", handleScroll)



        

  
  }
  