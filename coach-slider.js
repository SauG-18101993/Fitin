const track = document.getElementById("coachTrack");
const viewport = document.getElementById("coachViewport");
const dots = document.querySelectorAll("#coachDots span");
const slides = document.querySelectorAll(".coach-slide");

let index = 0;
const visible = 3;
const maxIndex = slides.length - visible;

function slide(){
    const slideWidth = slides[0].offsetWidth;
    track.style.transform = `translateX(-${index * slideWidth}px)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

dots.forEach((dot,i)=>{
    dot.addEventListener("click",()=>{
        index = i;
        slide();
    });
});

setInterval(()=>{
    index++;
    if(index > maxIndex) index = 0;
    slide();
}, 4000);

window.addEventListener("resize", slide);
new Swiper(".training-swiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 0,
    speed: 6000,
    allowTouchMove: false,
    autoplay: {
        delay: 0,
        disableOnInteraction: false
    }
});
