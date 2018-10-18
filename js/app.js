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
    judulInfoSpot.setAttribute('align', 'center');
    judulInfoSpot.setAttribute('position', '0 2 1');
    textInfoSpot.setAttribute('value', dt.deskripsi);
    textInfoSpot.setAttribute('width', '3');
    textInfoSpot.setAttribute('height', '6');
    textInfoSpot.setAttribute('position', '-1.5 1 1');
    lokasiInfoSpot.setAttribute('value', dt.lokasi);
    lokasiInfoSpot.setAttribute('width', '3');
    lokasiInfoSpot.setAttribute('height', '1');
    lokasiInfoSpot.setAttribute('position', '-1.5 3 1');
    gambarInfoSpot.setAttribute('src', dt.media);
    gambarInfoSpot.setAttribute('align', 'center');
    gambarInfoSpot.setAttribute('position', '0 -1 1');
    gambarInfoSpot.setAttribute('width', '3.60');
    gambarInfoSpot.setAttribute('height', '2.40');
    labelInfoSpot.setAttribute('width', '6');
    labelInfoSpot.setAttribute('height', '6');
    labelInfoSpot.setAttribute('rotation', '-90 0 0');
    labelInfoSpot.setAttribute('color', 'black');
    labelInfoSpot.setAttribute('material', 'opacity: 0.5');
    labelInfoSpot.appendChild(judulInfoSpot);
    labelInfoSpot.appendChild(textInfoSpot);
    labelInfoSpot.appendChild(lokasiInfoSpot);
    labelInfoSpot.appendChild(gambarInfoSpot);
    marker.appendChild(labelInfoSpot);
    scene.appendChild(marker);
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
    })
    .catch(function(error) {
        console.log(JSON.stringify(error));
    });