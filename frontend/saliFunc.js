let id = 1;

let banner = document.getElementById("banner");
let sali = document.getElementById("sali")

doStuff();

async function fetchData(pth) {
    try {
        let response = await fetch(pth);
        return response.json();
    } catch (e) {
        console.log(e);
    }
}

function openSala(ova) {

}

function thumbnail(x) {
    let bgUrl =
    banner.style.backgroundImage = `url(${bgUrl})`;
}

async function doStuff() {
    // id = data.id;

    const saliData = await fetchData("../backend/static/sali.json");
    saliData.forEach(x => {
        if(x == id) {
            openSala(x);
            thumbnail(x);
        }
    })

    // sali.innerHTML += ``
}