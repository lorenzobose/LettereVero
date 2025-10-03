const body = document.createElement("div"); 
body.classList.add("body");

const leftFlap = document.createElement("div");
leftFlap.classList.add("left-flap")

const rightFlap = document.createElement("div");
rightFlap.classList.add("right-flap")

const topFlap = document.createElement("div");
topFlap.classList.add("top-flap")

field.appendChild(body);
field.appendChild(leftFlap);
field.appendChild(rightFlap);
field.appendChild(topFlap);

const card = document.createElement("div");
card.classList.add("card");
field.appendChild(card)

fetch("/.netlify/functions/latest", {
    method: "GET",
})
    .then(res => res.json)
    .then(text => console.log(text));


setTimeout(()=>{
    topFlap.style.transform = "rotateX(180deg)";
    topFlap.style.zIndex = "-4";
    setTimeout(() => {
        card.style.height = "400px";
        card.style.top = "35%";
    }, 1000);
}, 3000)

