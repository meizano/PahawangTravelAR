// Fungsi membuat obyek tulisan pada a-frame
function listSpot(infoSpot, scenel) {
    console.log("listSpot");
infoSpot.map(function (dt) {
    let marker = document.createElement("a-marker");
    marker.setAttribute("type", "barcode");
    marker.setAttribute("value", dt.marker);
    let labelInfoSpot = document.createElement('a-plane');
    let judulInfoSpot = document.createElement('a-text');
    let lokasiInfoSpot = document.createElement('a-text');
    let textInfoSpot = document.createElement('a-text');
    let gambarInfoSpot = document.createElement('a-image');
    judulInfoSpot.setAttribute('value', dt.nama);
    judulInfoSpot.setAttribute('width', '6');
    judulInfoSpot.setAttribute('color', 'blue');
    judulInfoSpot.setAttribute('align', 'center');
    judulInfoSpot.setAttribute('position', '0 2.2 1');
    lokasiInfoSpot.setAttribute('value', 'Lokasi: ' + dt.lokasi);
    lokasiInfoSpot.setAttribute('width', '3');
    lokasiInfoSpot.setAttribute('color', 'green');
    lokasiInfoSpot.setAttribute('align', 'center');
    lokasiInfoSpot.setAttribute('position', '0 2 1');
    textInfoSpot.setAttribute('value', dt.deskripsi);
    textInfoSpot.setAttribute('color', 'black');
    textInfoSpot.setAttribute('width', '3');
    textInfoSpot.setAttribute('height', '6');
    textInfoSpot.setAttribute('position', '-1.5 1 1');
    gambarInfoSpot.setAttribute('src', dt.media);
    gambarInfoSpot.setAttribute('align', 'center');
    gambarInfoSpot.setAttribute('position', '0 -1.15 1');
    gambarInfoSpot.setAttribute('width', '3.60');
    gambarInfoSpot.setAttribute('height', '2.40');
    labelInfoSpot.setAttribute('width', '6');
    labelInfoSpot.setAttribute('height', '6');
    labelInfoSpot.setAttribute('rotation', '-90 0 0');
    labelInfoSpot.setAttribute('color', 'white');
    labelInfoSpot.setAttribute('material', 'opacity: 0.5');
    labelInfoSpot.appendChild(judulInfoSpot);
    labelInfoSpot.appendChild(textInfoSpot);
    labelInfoSpot.appendChild(lokasiInfoSpot);
    labelInfoSpot.appendChild(gambarInfoSpot);
    marker.appendChild(labelInfoSpot);
    scenel.appendChild(marker);
    });
}

//fungsi membuat html dan menyematkan ke marker
function htmlSpot(infoSpot, scenel) {
    console.log("htmlSpot");
infoSpot.map(function (dt) {
    let marker = document.createElement("a-marker");
    marker.setAttribute("type", "barcode");
    marker.setAttribute("value", dt.marker);

    let labelInfoSpot = document.createElement('a-entity');
    labelInfoSpot.setAttribute('primitive', 'plane');
    labelInfoSpot.setAttribute('width', '6');
    labelInfoSpot.setAttribute('height', '6');
    labelInfoSpot.setAttribute('rotation', '-90 0 0');
    labelInfoSpot.setAttribute('color', 'black');
    labelInfoSpot.setAttribute('material', 'shader: html; target: #target' + dt.marker + '; transparent: true; ratio: width; fps: 1.5');
    
    divHtml = document.createElement('div');
    divHtml.setAttribute('id','htmlTarget' + dt.marker);
    divHtml.classList.add('hide');
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
    
    marker.appendChild(labelInfoSpot);
    scenel.appendChild(marker);
    });
}

// mengakses DOM scene
scene = document.querySelector("a-scene");

// Mengambil data JSON dari server
var url = './dispatcher/data.json'; // URL dari data JSON
fetch(url)
    .then((resp) => resp.json())
    .then(function(infoSpotJSON) {
    console.log("JSON");
        listSpot(infoSpotJSON, scene); // membuat obyek
        //htmlSpot(infoSpotJSON, scene); // membuat obyek
    })
    .catch(function(error) {
        console.log(JSON.stringify(error));
    });