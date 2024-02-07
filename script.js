/* so i need to make a function that takes in options for each
or i can make it so that theres 4 function with options
then each */

const divProfile = document.getElementById('selected-profile')
const divOptions = document.getElementById('selected-options')

const btnAcrid = document.getElementById('acrid')
const btnArtificer = document.getElementById('artificer')

btnAcrid.addEventListener('click', generateAcrid)
btnArtificer.addEventListener('click', generateArtificer)

function generateAcrid() {
    clear()
    newProfile("./assets/acrid/acridProfile.webp", "Acrid")
    option = Math.floor(Math.random() * 2)
    option2 = Math.floor(Math.random() * 2)
    option3 = Math.floor(Math.random() * 2)

    if (option == 0) {
        newOpt("./assets/acrid/acridOption.webp", "Poison")
    } else if (option == 1) {
        newOpt("./assets/acrid/acridOptionAlt.webp", "Blight")
    }
    if (option2 == 0) {
        newOpt("./assets/acrid/acridOption2.webp", "Neurotoxin")
    } else if (option2 == 1) {
        newOpt("./assets/acrid/acridOption2Alt.webp", "Ravenous Bite")
    }
    if (option3 == 0) {
        newOpt("./assets/acrid/acridOption3.webp", "Caustic Leap")
    } else if (option3 == 1) {
        newOpt("./assets/acrid/acridOption3Alt.webp", "Frenzied Leap")
    }
}

function generateArtificer() {
    clear()
    newProfile("./assets/artificer/artificerProfile.webp", "artificer")
    option = Math.floor(Math.random() * 2)
    option2 = Math.floor(Math.random() * 2)
    option3 = Math.floor(Math.random() * 2)

    if (option == 0) {
        newOpt("./assets/artificer/artificerOption.webp", "Flame Bolt")
    } else if (option == 1) {
        newOpt("./assets/artificer/artificerOptionAlt.webp", "Plasma Bolt")
    }
    if (option2 == 0) {
        newOpt("./assets/artificer/artificerOption2.webp", "Charged Nano-Bomb")
    } else if (option2 == 1) {
        newOpt("./assets/artificer/artificerOption2Alt.webp", "Cast Nano-Spear")
    }
    if (option3 == 0) {
        newOpt("./assets/artificer/artificerOption3.webp", "Flamethrower")
    } else if (option3 == 1) {
        newOpt("./assets/artificer/artificerOption3Alt.webp", "Ion Surge")
    }
}

function newProfile(img, label) {
    const image = document.createElement('img')
    const text = document.createElement('h1')

    image.className = 'selected-profile-img'
    text.className = 'selected-profile-label'

    image.src = img
    text.innerText = label

    divProfile.appendChild(image)
    divProfile.appendChild(text)
}

function newOpt(img, label) {
    const option = document.createElement('div')
    const image = document.createElement('img')
    const text = document.createElement('p')

    option.className = 'selected-option'
    image.className = 'selected-option-img'
    text.className = 'selected-option-label'

    image.src = img
    text.innerText = label

    option.appendChild(image)
    option.appendChild(text)

    divOptions.appendChild(option)
}

function clear() {
    clearProfile()
    clearOptions()
}

function clearProfile() {
    while (divProfile.lastChild) {
        divProfile.removeChild(divProfile.lastChild)
    }
}

function clearOptions() {
    while (divOptions.lastChild) {
        divOptions.removeChild(divOptions.lastChild)
    }
}