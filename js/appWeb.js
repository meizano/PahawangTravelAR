//fungsi membuat html dan menyematkan ke marker
function htmlSpot(infoSpot, scenel) {
    console.log("htmlSpot");
infoSpot.map(function (dt) {
    let labelInfoSpot = document.createElement('div');

    divHtml = document.createElement('div');
    divHtml.setAttribute('id','htmlTarget' + dt.marker);
    // divHtml.classList.add('hide');
    divTarget = document.createElement('div');
    divTarget.setAttribute('id','target' + dt.marker);
    namaSpot = document.createElement('h1');
    namaSpot.innerHTML = dt.nama;
    lokasiSpot = document.createElement('p');
    lokasiSpot.innerHTML = dt.lokasi;
    deskripsiSpot = document.createElement('p');
    deskripsiSpot.innerHTML = dt.deskripsi;
    mediaSpot = document.createElement('img');
    mediaSpot.setAttribute('src',dt.media);
    
    divTarget.appendChild(namaSpot);
    divTarget.appendChild(deskripsiSpot);
    divTarget.appendChild(mediaSpot);
    divTarget.appendChild(lokasiSpot);

    divHtml.appendChild(divTarget);

    labelInfoSpot.appendChild(divHtml);
    
    console.log(labelInfoSpot);

    scenel.appendChild(labelInfoSpot);
    });
}

// mengakses DOM scene
// scene = document.querySelector("a-scene");
divList = document.querySelector("div#list");

// Mengambil data JSON dari server
var url = './dispatcher/data.json'; // URL dari data JSON
fetch(url)
    .then((resp) => resp.json())
    .then(function(infoSpotJSON) {
    console.log(infoSpotJSON);
        // listSpot(infoSpotJSON, scene); // membuat obyek
        htmlSpot(infoSpotJSON, divList); // membuat obyek
    })
    .catch(function(error) {
        console.log(JSON.stringify(error));
    });