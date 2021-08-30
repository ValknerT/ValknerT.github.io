console.log("123");

let klokkeslett = document.getElementById("klokkeslett");
console.log(klokkeslett);
klokkeslett.style.color = "green";

let tid = new Date();
let tidspunkt = tid.getHours() + ":" + tid.getMinutes() + ":" + tid.getSeconds() + ":" + tid.getMilliseconds();
klokkeslett.innerHTML = tidspunkt;