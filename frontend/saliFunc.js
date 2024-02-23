let id = 1;

let banner = document.getElementById("banner");
let sali = document.getElementById("sali");
let chairsElem = document.getElementById("place")

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
    let matrix = x.matrix[0];   // 0 E KOJA SALA CE BIDIT
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if(matrix[i][j] === 1) {
                let div = `<div id="${"" + i + j}" class="zafatenaChair"></div>`
                chairsElem.innerHTML += div;
            } else {
                let div = `<div id="${"" + i + j}" class="nezafatenaChair"></div>`
                chairsElem.innerHTML += div;
            }
        }
        chairsElem.innerHTML += `<div></div>`;
    }
}


function openSala(x) {
    // const n = x.saliNumber;
    const dates = x.dates;
    const times = x.times;
    for (let i = 1; i <= dates.length; i++) {
        sali.innerHTML += `<div class="sala">
        ${dates[i - 1]}
        <p class="vreme" id="${"vreme" + i}">${times[i - 1]}</p>
    </div>
    <div class="borderSala"></div>`
    }
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
            console.log(x)
            openSala(x);
            thumbnail(x);
            chairs(x)
        }
    })
}