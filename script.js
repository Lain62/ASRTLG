// Acrid
const acrid = document.getElementById('acrid')

acrid.addEventListener('click', acridGenerate)

const acridProfile = () => profile('./assets/acrid/acridProfile.webp', 'Acrid')
const acridPassive = () => passive('./assets/acrid/acridPassive.webp', 'Poison')
const acridPassive2 = () => passive('./assets/acrid/acridPassive2.webp', 'Blight')
const acridPrimary = () => primary('./assets/acrid/acridPrimary.webp', 'Vicious Wounds')
const acridSecondary = () => secondary('./assets/acrid/acridSecondary.webp', 'Neurotoxin')
const acridSecondary2 = () => secondary('./assets/acrid/acridSecondary2.webp', 'Ravenous Bite')
const acridUtility = () => utility('./assets/acrid/acridUtility.webp', 'Caustic Leap')
const acridUtility2 = () => utility('./assets/acrid/acridUtility2.webp', 'Frenzied Leap')
const acridSpecial = () => special('./assets/acrid/acridSpecial.webp', 'Epidemic')

function acridGenerate() {
    acridProfile()
    acridPrimary()
    acridSpecial()
    let passive = Math.floor(Math.random() * 2)
    let secondary = Math.floor(Math.random() * 2)
    let utility = Math.floor(Math.random() * 2)
    if (passive == 0) {
        acridPassive()
    } else {
        acridPassive2()
    }
    if (secondary == 0) {
        acridSecondary()
    } else {
        acridSecondary2()
    }
    if (utility == 0) {
        acridUtility()
    } else {
        acridUtility2()
    }
}

// Artificer

// variables for easy element creation
const profile = (img, label) => {
    const image = document.getElementById('char-select-img')
    const text = document.getElementById('label-char-select')

    image.src = img;
    text.innerText = label
}

const passive = (img, label) => {
    const image = document.getElementById('img-passive')
    const text = document.getElementById('label-passive')

    image.src = img
    text.innerText = label
}

const primary = (img, label) => {
    const image = document.getElementById('img-primary')
    const text = document.getElementById('label-primary')

    image.src = img
    text.innerText = label
}

const secondary = (img, label) => {
    const image = document.getElementById('img-secondary')
    const text = document.getElementById('label-secondary')

    image.src = img
    text.innerText = label
}

const utility = (img, label) => {
    const image = document.getElementById('img-utility')
    const text = document.getElementById('label-utility')

    image.src = img
    text.innerText = label
}

const special = (img, label) => {
    const image = document.getElementById('img-special')
    const text = document.getElementById('label-special')

    image.src = img
    text.innerText = label
}