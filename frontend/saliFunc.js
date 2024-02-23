let id = parseInt(prompt("ID OD FILM 0-10"));

let banner = document.getElementById("banner");
let sali = document.getElementById("sali");
let chairsElem = document.getElementById("place")

let datumSelected = 0;

let costBr = 0;

doStuff();

async function fetchData(pth) {
    try {
        let response = await fetch(pth);
        return response.json();
    } catch (e) {
        console.log(e);
    }
}

function chairs(x) {
    costBr = 0;
    chairsElem.innerText = ""
    let matrix = x.matrix[datumSelected];   // 0 E KOJA SALA CE BIDIT
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if(matrix[i][j] === 1) {
                let div = `<div id="${"" + i + j}" class="zafatenaChair"></div>`
                chairsElem.innerHTML += div;
                costBr++;   //TODO REMOVE THIS AFTER FINISH CODING
            } else {
                let div = `<div onclick="zafati(this)" id="${"" + i + j}" class="nezafatenaChair"></div>`
                chairsElem.innerHTML += div;
            }
        }
        chairsElem.innerHTML += `<div></div>`;
    }
    presmetajCost();
}

function presmetajCost() {
    let pari = document.getElementById('pari')
    let howmany = document.getElementById('howMany')
    // let cena = document.getElementById('cena')
    // cena.innerText = 500; // TODO KO CE IMA CENA VO JSON TOGAS
    let vkupno = document.getElementById('vkupno')

    howmany.innerText = costBr;
    vkupno.innerText = costBr * 300; // TODO 300 E HARDCODE
}

async function zafati(chair) {
    costBr++;
    let chairId = chair.id;
    let x = parseInt(chairId.toString().charAt(0));
    let y = parseInt(chairId.toString().charAt(1));

    // TODO NA BACKEND DA SE DADAT X,Y ZA DATUM[datumSelected] OD FILD ID = id

    chair.setAttribute("onclick", "");
    chair.setAttribute("class", "zafatenaChair")

    presmetajCost();

    // const saliData = await fetchData("../backend/static/sali.json");
    // saliData.forEach(s => {
    //     if (s.id === id) {
    //         console.log(x, y ,s)
    //         let matrix = s.matrix[datumSelected];
    //         matrix[x][y] = 1;
    //         chairs(s)
    //         console.log(s)
    //     }
    // })
}


function openSala(x) {
    // const n = x.saliNumber;
    sali.innerHTML = `<div class="borderSala"></div>`;
    const dates = x.dates;
    const times = x.times;
    for (let i = 1; i <= dates.length; i++) {
        sali.innerHTML += `<div onclick="changeDate(this)" id="${"datum" + (i - 1)}" class="sala">
        ${dates[i - 1]}
        <p class="vreme" id="${"vreme" + i}">${times[i - 1]}</p>
    </div>
    <div class="borderSala"></div>`
    }
}

function changeDate(ova) {
    let date = ova.id;
    datumSelected = parseInt(date.charAt(5));
    doStuff();
}

function thumbnail(x) {
    let bgUrl = x.thumbnail;
    banner.style.backgroundImage = `url(${bgUrl})`;
}

async function doStuff() {
    // id = data.id;

    const saliData = await fetchData("../backend/static/sali.json");
    saliData.forEach(x => {
        // console.log(x)
        if(x.id === id) {
            // console.log(x)
            openSala(x);
            thumbnail(x);
            chairs(x)
        }
    })
}

function plati(btn) {
    //SEND TO BACKEND TO PAY
    alert("NOT DONE YET HEHE :)" + "\t" +
        "(ako sakas drug film pojdi vo saliFunc.js i na prvata linija smeni id vo nekoe dr)")
}