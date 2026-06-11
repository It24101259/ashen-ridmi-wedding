/* =========================
   PHOTO SLIDER
========================= */
const images = [
"photo1.jpg",
"photo2.jpg",
"photo3.jpg",
"photo4.jpg",
"photo5.jpg"
];

let current = 0;

setInterval(()=>{

const slide =
document.getElementById("slide");

if(!slide) return;

slide.style.opacity="0";

setTimeout(()=>{

current++;

if(current >= images.length){
current = 0;
}

slide.src = images[current];

slide.style.opacity="1";

},500);

},3500);


/* =========================
   COUNTDOWN
========================= */
const eventDate =
new Date("July 26, 2028 09:30:00").getTime();

setInterval(()=>{

const now =
new Date().getTime();

const distance =
eventDate - now;

const days =
Math.floor(distance/(1000*60*60*24));

const hours =
Math.floor((distance%(1000*60*60*24))/
(1000*60*60));

const minutes =
Math.floor((distance%(1000*60*60))/
(1000*60));

const seconds =
Math.floor((distance%(1000*60))/1000);

const countdown =
document.getElementById("countdown");

if(countdown){

countdown.innerHTML =

days+" Days "+
hours+" Hours "+
minutes+" Min "+
seconds+" Sec";

}

},1000);


/* =========================
   GUEST NAME
========================= */
const guest =
new URLSearchParams(
window.location.search
).get("guest");

if(guest){

const guestBox =
document.getElementById("guest");

if(guestBox){

guestBox.innerHTML =
"👑 Welcome, "+guest+" ❤️";

}

}


/* =========================
   FIREWORKS
========================= */
function showFireworks(){

for(let i=0;i<25;i++){

setTimeout(()=>{

const fw =
document.createElement("div");

fw.innerHTML="✨";

fw.style.position="fixed";
fw.style.left=
Math.random()*100+"vw";

fw.style.top=
Math.random()*60+"vh";

fw.style.fontSize="35px";

fw.style.zIndex="9999";

document.body.appendChild(fw);

setTimeout(()=>{
fw.remove();
},2000);

},i*120);

}

}


/* =========================
   GUEST POPUP
========================= */
function showGuestPopup(){

const popup =
document.getElementById(
"guestPopup"
);

if(!popup) return;

popup.innerHTML =
guest
? "👑 Welcome "+guest+" ❤️"
: "👑 Welcome To Our Wedding ❤️";

popup.style.display="block";

setTimeout(()=>{

popup.style.display="none";

},3000);

}


/* =========================
   ENTER SITE
========================= */
function enterSite(){

const welcome =
document.getElementById(
"welcomeScreen"
);

welcome.classList.add(
"openEnvelope"
);

setTimeout(()=>{

welcome.style.display="none";

document
.getElementById("main")
.style.display="block";

const music =
document.getElementById(
"music"
);

if(music){

music.play().catch(()=>{});

}

showFireworks();

showGuestPopup();

},1500);

}


/* =========================
   ROSE PETALS
========================= */
setInterval(()=>{

const petal =
document.createElement("div");

petal.innerHTML="🌹";

petal.style.position="fixed";
petal.style.left=
Math.random()*100+"vw";

petal.style.top="-50px";

petal.style.fontSize="24px";

petal.style.zIndex="10";

petal.style.pointerEvents="none";

document.body.appendChild(
petal
);

let pos = -50;

const fall =
setInterval(()=>{

pos += 2;

petal.style.top =
pos+"px";

if(pos >
window.innerHeight){

clearInterval(fall);

petal.remove();

}

},20);

},1200);


/* =========================
   SPARKLES
========================= */
setInterval(()=>{

const star =
document.createElement("div");

star.innerHTML="✨";

star.style.position="fixed";

star.style.left=
Math.random()*100+"vw";

star.style.top="-20px";

star.style.fontSize="18px";

star.style.pointerEvents=
"none";

star.style.zIndex="1";

document.body.appendChild(
star
);

let pos=-20;

const fall=
setInterval(()=>{

pos+=2;

star.style.top=
pos+"px";

if(pos>
window.innerHeight){

clearInterval(fall);

star.remove();

}

},20);

},800);


/* =========================
   IMAGE POPUP
========================= */
document.addEventListener(
"DOMContentLoaded",
function(){

const slide =
document.getElementById(
"slide"
);

if(slide){

slide.onclick=function(){

document
.getElementById(
"imgPopup"
).style.display="flex";

document
.getElementById(
"popupImg"
).src=this.src;

};

}

});


/* =========================
   CARD ANIMATION
========================= */
const cards =
document.querySelectorAll(
".card,.royal-card"
);

window.addEventListener(
"scroll",
()=>{

cards.forEach(card=>{

const top =
card.getBoundingClientRect()
.top;

if(top <
window.innerHeight-100){

card.classList.add(
"show"
);

}

});

});
