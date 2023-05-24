// VIDEO LOADING

const introVideo = document.querySelector('.intro video')

introVideo.addEventListener('loadeddata', function() {
      var videos = [].slice.call(document.querySelectorAll("video.lazy"));

        var videoObserver = new IntersectionObserver(function(entries, observer) {
          entries.forEach(function(video) {
              // video.poster = video.dataset.poster;
              for (var source in video.target.children) {
                var videoSource = video.target.children[source];
                if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                  videoSource.src = videoSource.dataset.src;
                }
              }
    
              video.target.load();
              video.target.classList.remove("lazy");
              videoObserver.unobserve(video.target);
          });
        });
    
        videos.forEach(function(video) {
          videoObserver.observe(video);
        });
})






// TOGGLE NAV

const menuBt = document.querySelector('.hambt')
const nav = document.querySelector('header nav')
const navBts = document.querySelectorAll('header nav a')
const navOverflow = document.querySelector('.nav_overflow')

let showingMenu = false;


function toggleNav() {
    if(showingMenu == false) {

        nav.classList.add('show')
        menuBt.classList.add('close')

        navOverflow.style.pointerEvents = 'unset'

        showingMenu = true;
    } else {

        nav.classList.remove('show')
        menuBt.classList.remove('close')

        navOverflow.style.pointerEvents = 'none'

        showingMenu = false;
    }
}

menuBt.addEventListener('click', toggleNav)


let touchstartX = 0
let touchendX = 0

let touchstartY = 0
let touchendY = 0
    
function checkDirection() {

    if(window.matchMedia('(max-width: 800px)').matches) {
        if((touchendX + (window.innerWidth / 1.9)) < touchstartX && touchendY < (touchstartY + 100) && touchendY > (touchstartY - 100)) {
    
            if(showingMenu == false) {
                toggleNav()
            }
        }
    
        if(touchendX > (touchstartX + 30)) {
    
            // console.log(touchstartX + ", " + touchendX)

            if(showingMenu == true) {
                toggleNav()
            }
        }
    }
}

document.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
  touchstartY = e.changedTouches[0].screenY
})

document.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  touchendY = e.changedTouches[0].screenY
  checkDirection()
})

window.addEventListener('scroll', function() {
    if(showingMenu == true) {
        toggleNav()
    }
})














// TINY SLIDER 2


var slider = tns({
    container: '.testimonials .slider',
    center: true,
    items: 1,
    slideBy: 'page',
    speed: 1000,
    mouseDrag: true,
    autoWidth:true,
    controls:false,
    navPosition:'bottom',
    navAsThumbnails:true
  });

// fixedWidth: window.innerWidth * 0.8,