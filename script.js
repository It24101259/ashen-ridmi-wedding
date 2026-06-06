function enterInvitation(){

document.getElementById("welcome").style.display="none";

document.getElementById("main").style.display="block";

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

const params = new URLSearchParams(window.location.search);

const guest = params.get("guest");

if(guest){

document.getElementById("guestName").innerHTML =
"Welcome, <b>" + guest + "</b> ❤️";

}