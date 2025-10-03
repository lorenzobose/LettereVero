function emptyField(){
    while(field.firstChild)
        field.removeChild(field.firstChild)
}

function loadArchive(){
    const home = document.createElement("img");
    home.src = "styles/home.png"
    home.classList.add("homeButton");
    home.addEventListener("click", ()=>{emptyField(), loadBody("first")})
    field.appendChild(home)

    let listaLettere = [];

    fetch("/.netlify/functions/archive", {
            method: "GET",
        })
            .then(res => res.json())
            .then(x => {
                listaLettere = x
                console.log(listaLettere);
            })
}

/**
 * @param {String} time
 */
function loadBody(time){
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

    const archiveButton = document.createElement("button");
    archiveButton.classList.add("archiveButton");
    archiveButton.addEventListener("click", ()=>{emptyField(); loadArchive()});
    archiveButton.innerText = "ARCHIVIO";
    field.appendChild(archiveButton);


    if(time === "first"){
        fetch("/.netlify/functions/latest", {
            method: "GET",
        })
            .then(res => res.json())
            .then(text => card.innerHTML = text.content);
    }
    else{
        card.innerHTML = time;
    }

    setTimeout(()=>{
        topFlap.style.transform = "rotateX(180deg)";
        topFlap.style.zIndex = "-4";
        setTimeout(() => {
            card.style.height = "400px";
            card.style.top = "35%";
        }, 1000);
    }, 3000)
}

loadBody("first");