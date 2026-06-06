function enterSite(){

const welcome =
document.getElementById("welcome");

const main =
document.getElementById("main");

welcome.style.opacity="0";

setTimeout(()=>{

welcome.style.display="none";

main.style.display="block";

main.style.animation=
"royalOpen 1.5s ease";

},800);

}
const targetDate =
new Date("July 26, 2028 09:30:00").getTime();

setInterval(()=>{

const now=new Date().getTime();

const distance=targetDate-now;

const days=Math.floor(distance/(1000*60*60*24));

const hours=Math.floor(
(distance%(1000*60*60*24))
/
(1000*60*60)
);

const minutes=Math.floor(
(distance%(1000*60*60))
/
(1000*60)
);

const seconds=Math.floor(
(distance%(1000*60))
/
1000
);

document.getElementById("timer").innerHTML=
`${days} Days ${hours}h ${minutes}m ${seconds}s`;

},1000);
function toggleMusic(){
const music=document.getElementById("bgMusic");

if(music.paused){
music.play();
}else{
music.pause();
}
}

function createHeart(){

const heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="✨";

heart.style.left=Math.random()*100+"%";

heart.style.animationDuration=
(Math.random()*5+5)+"s";

document.querySelector(".hearts")
.appendChild(heart);

setTimeout(()=>{
heart.remove();
},10000);

}

setInterval(createHeart,500);

const params = new URLSearchParams(window.location.search);

const guest = params.get("guest");

if(guest){

document.getElementById("guestName").innerHTML =
"Welcome, <b>" + guest + "</b> ❤️";

}
const photos = [
"photo1.jpg",
"photo2.jpg",
"photo3.jpg",
"photo4.jpg",
"photo5.jpg"
];

let currentPhoto = 0;

setInterval(() => {

currentPhoto++;

if(currentPhoto >= photos.length){
currentPhoto = 0;
}

document.getElementById("slider").src =
photos[currentPhoto];

}, 3000);