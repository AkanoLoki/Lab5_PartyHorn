// main.js

//const link
//horn img
const airHornImg = "./assets/media/images/air-horn.svg";
const carHornImg = "./assets/media/images/car.svg";
const partyHornImg = "./assets/media/images/party-horn.svg";

//Audio
const airHornMp3 = "./assets/media/audio/air-horn.mp3";
const carHornMp3 = "./assets/media/audio/car-horn.mp3";
const partyHornMp3 = "./assets/media/audio/party-horn.mp3";

//volume icon
const vol0Icon = "./assets/media/icons/volume-level-0.svg";
const vol1Icon = "./assets/media/icons/volume-level-1.svg";
const vol2Icon = "./assets/media/icons/volume-level-2.svg";
const vol3Icon = "./assets/media/icons/volume-level-3.svg";

//const element id
const hornImgElem = document.getElementById("sound-image");
const volumeIconElem = document.getElementById("volume-image");
const volumeDisplayElem = document.getElementById("volume-number");
const volumeSliderElem = document.getElementById("volume-slider");
const audioElem = document.getElementById("horn-sound");
const honkBtn = document.getElementById("honk-btn");

const airHornRadioElem = document.getElementById("radio-air-horn");
const carHornRadioElem = document.getElementById("radio-car-horn");
const partyHornRadioElem = document.getElementById("radio-party-horn");

//No global variables declared

/* Event listener for number volume change */
volumeDisplayElem.oninput = function () {
    let volume = volumeDisplayElem.value;
    volumeChangeConsolidated(volume);
}

/* Event listener for slider volume change */
volumeSliderElem.onclick = function () {
    let volume = volumeSliderElem.value;
    volumeChangeConsolidated(volume);
}

/* consolidated volume Change function for both slider and number control */
function volumeChangeConsolidated(vol) {
    //update volume icon
    if (vol >= 67) {
        volumeIconElem.setAttribute("src", vol3Icon);
    } else if (vol >= 34) {
        volumeIconElem.setAttribute("src", vol2Icon);
    } else if (vol >= 1) {
        volumeIconElem.setAttribute("src", vol1Icon);
    } else {
        volumeIconElem.setAttribute("src", vol0Icon);
    }
    //disable honk button when volume is 0
    if (vol == 0) {
        honkBtn.disabled = true;
    } else {
        honkBtn.disabled = false;
    }
    //update volume over elements
    audioElem.volume = vol / 100;
    volumeDisplayElem.value = vol;
    volumeSliderElem.value = vol;
}

/* Event listeners for audio type selection */
airHornRadioElem.onclick = function () {
    audioElem.src = airHornMp3;
    hornImgElem.setAttribute("src", airHornImg);
    audioElem.load();
}

carHornRadioElem.onclick = function () {
    audioElem.src = carHornMp3;
    hornImgElem.setAttribute("src", carHornImg);
    audioElem.load();
}

partyHornRadioElem.onclick = function () {
    audioElem.src = partyHornMp3;
    hornImgElem.setAttribute("src", partyHornImg);
    audioElem.load();
}


/* Event listener for btn press*/
honkBtn.onclick = function () {
    event.preventDefault();
    audioElem.play();
}
