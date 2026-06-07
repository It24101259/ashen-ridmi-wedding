document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       🎞️ PHOTO SLIDER FIX
    ========================= */
    let index = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlides() {
        if (slides.length === 0) return;

        slides.forEach(s => s.style.display = "none");

        index++;
        if (index > slides.length) index = 1;

        slides[index - 1].style.display = "block";
    }

    showSlides();
    setInterval(showSlides, 3000);


    /* =========================
       ⏳ COUNTDOWN TIMER
    ========================= */
    const eventDate = new Date("July 26, 2028 09:30:00").getTime();
    const countdownEl = document.getElementById("countdown");

    function updateCountdown() {
        let now = new Date().getTime();
        let distance = eventDate - now;

        if (distance < 0) {
            countdownEl.innerHTML = "💍 Happening Now!";
            return;
        }

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownEl.innerHTML =
            days + " Days " +
            hours + " Hours " +
            minutes + " Min " +
            seconds + " Sec";
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);


    /* =========================
       💌 GUEST NAME SYSTEM
    ========================= */
    const params = new URLSearchParams(window.location.search);
    const guest = params.get("guest");

    const guestEl = document.getElementById("guest");
    if (guest && guestEl) {
        guestEl.innerText = "Welcome " + guest + " 👑";
        showPopup("Welcome " + guest + " 💌");
    }


    /* =========================
       🔔 POPUP MESSAGE
    ========================= */
    function showPopup(text) {
        let popup = document.getElementById("popup");
        if (!popup) return;

        popup.innerText = text;
        popup.style.display = "block";

        setTimeout(() => {
            popup.style.display = "none";
        }, 3000);
    }


    /* =========================
       🎵 MUSIC AUTO PLAY FIX
    ========================= */
    const music = document.getElementById("music");

    function playMusic() {
        if (music) {
            music.play().catch(() => {
                console.log("Autoplay blocked - user interaction needed");
            });
        }
    }

    // first click anywhere enables music (mobile safe)
    document.body.addEventListener("click", playMusic, { once: true });


    /* =========================
       🎆 CONFETTI EFFECT
    ========================= */
    for (let i = 0; i < 60; i++) {
        let c = document.createElement("div");
        c.classList.add("confetti");

        c.style.left = Math.random() * 100 + "vw";
        c.style.animationDuration = (2 + Math.random() * 3) + "s";
        c.style.background = Math.random() > 0.5 ? "gold" : "white";
        c.style.opacity = Math.random();

        document.body.appendChild(c);
    }


    /* =========================
       🔗 AUTO SHARE LINK (optional)
    ========================= */
    console.log("Wedding site loaded successfully 👑");

});
function enterSite(){

const welcome =
document.getElementById("welcomeScreen");

welcome.style.transition="all 1.5s ease";
welcome.style.transform="scale(1.3)";
welcome.style.opacity="0";

setTimeout(()=>{

welcome.style.display="none";

document.getElementById("main").style.display="block";

document.getElementById("main").animate([

{
opacity:0,
transform:"translateY(100px)"
},

{
opacity:1,
transform:"translateY(0)"
}

],{

duration:1500,
fill:"forwards"

});

},1200);

}