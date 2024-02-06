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
    removeChildAbility()
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
const artificer = document.getElementById('artificer')

artificer.addEventListener('click', artificerGenerate)

const artificerProfile = () => profile('./assets/artificer/artificerProfile.webp', 'Artificer')
const artificerPassive = () => passive('./assets/artificer/artificerPassive.webp', 'ENV Suit')
const artificerPrimary = () => primary('./assets/artificer/artificerPrimary.webp', 'Flame Bolt')
const artificerPrimary2 = () => primary('./assets/artificer/artificerPrimary2.webp', 'Plasma Bolt')
const artificerSecondary = () => secondary('./assets/artificer/artificerSecondary.webp', 'Charged Nano-Bomb')
const artificerSecondary2 = () => secondary('./assets/artificer/artificerSecondary2.webp', 'Cast Nano-Spear')
const artificerUtility = () => utility('./assets/artificer/artificerUtility.webp', 'Snapfreeze')
const artificerSpecial = () => special('./assets/artificer/artificerSpecial.webp', 'Flamethrower')
const artificerSpecial2 = () => special('./assets/artificer/artificerSpecial2.webp', 'Ion Surge')

function artificerGenerate() {
    removeChildAbility()
    artificerProfile()
    artificerPassive()
    artificerUtility()
    let primary = Math.floor(Math.random() * 2)
    let secondary = Math.floor(Math.random() * 2)
    let special = Math.floor(Math.random() * 2)
    if (primary == 0) {
        artificerPrimary()
    } else {
        artificerPrimary2()
    }
    if (secondary == 0) {
        artificerSecondary()
    } else {
        artificerSecondary2()
    }
    if (special == 0) {
        artificerSpecial()
    } else {
        artificerSpecial2()
    }
}

// Bandit
const bandit = document.getElementById('bandit')

bandit.addEventListener('click', banditGenerate)

const banditProfile = () => profile('./assets/bandit/banditProfile.webp', 'Bandit')
const banditPassive = () => passive('./assets/bandit/banditPassive.webp', 'Backstab')
const banditPrimary = () => primary('./assets/bandit/banditPrimary.webp', 'Burst')
const banditPrimary2 = () => primary('./assets/bandit/banditPrimary2.webp', 'Blast')
const banditSecondary = () => secondary('./assets/bandit/banditSecondary.webp', 'Serated Dagger')
const banditSecondary2 = () => secondary('./assets/bandit/banditSecondary2.webp', 'Serated Shiv')
const banditUtility = () => utility('./assets/bandit/banditUtility.webp', 'Smoke Bomb')
const banditSpecial = () => special('./assets/bandit/banditSpecial.webp', 'Lights out')
const banditSpecial2 = () => special('./assets/bandit/banditSpecial2.webp', 'Desperado')

function banditGenerate() {
    removeChildAbility()
    banditProfile()
    banditPassive()
    banditUtility()
    let primary = Math.floor(Math.random() * 2)
    let secondary = Math.floor(Math.random() * 2)
    let special = Math.floor(Math.random() * 2)
    if (primary == 0) {
        banditPrimary()
    } else {
        banditPrimary2()
    }
    if (secondary == 0) {
        banditSecondary()
    } else {
        banditSecondary2()
    }
    if (special == 0) {
        banditSpecial()
    } else {
        banditSpecial2()
    }
}

// Captain
const captain = document.getElementById('captain')

captain.addEventListener('click', captainGenerate)

const captainProfile = () => profile('./assets/captain/captainProfile.webp', 'Captain')
const captainPassive = () => passive('./assets/captain/captainPassive.webp', 'Defensive Microbots')
const captainPrimary = () => primary('./assets/captain/captainPrimary.webp', 'Vulcan Shotgun')
const captainSecondary = () => secondary('./assets/captain/captainSecondary.webp', 'Power Tazer')
const captainUtility = () => utility('./assets/captain/captainUtility.webp', 'Orbital Probe')
const captainUtility2 = () => utility('./assets/captain/captainUtility2.webp', 'OGM-72 \'DIABLO\' Strike')
const captainSpecial = () => special('./assets/captain/captainSpecial.webp', 'Orbital Supply Beacon')

function captainGenerate() {
    removeChildAbility()
    captainProfile()
    captainPassive()
    captainPrimary()
    captainSecondary()
    captainSpecial()
    let utility = Math.floor(Math.random() * 2)
    let specialChild = Math.floor(Math.random() * 4)
    let specialChild2 = Math.floor(Math.random() * 4)
    if (utility == 0) {
        captainUtility()
    } else {
        captainUtility2()
    }
    const divAbilites = document.getElementById('cont-char-abilites')

    const divAbilityChild = document.createElement('div')
    const divAbilityChild2 = document.createElement('div')
    const imageSpecialChild = document.createElement('img')
    const textSpecialChild = document.createElement('p')

    imageSpecialChild.className = 'img-ability-child'
    textSpecialChild.className = 'label-ability-child'

    if (specialChild == 0) {
        imageSpecialChild.src = './assets/captain/captainSpecialChild.webp'
        textSpecialChild.innerText = 'Beacon: Healing'
    } else if (specialChild == 1) {
        imageSpecialChild.src = './assets/captain/captainSpecialChild2.webp'
        textSpecialChild.innerText = 'Beacon: Shocking'
    } else if (specialChild == 2) {
        imageSpecialChild.src = './assets/captain/captainSpecialChild3.webp'
        textSpecialChild.innerText = 'Beacon: Resupply'
    } else if (specialChild == 3) {
        imageSpecialChild.src = './assets/captain/captainSpecialChild4.webp'
        textSpecialChild.innerText = 'Beacon: Hacking'
    }

    const imageSpecialChild2 = document.createElement('img')
    const textSpecialChild2 = document.createElement('p')

    imageSpecialChild2.className = 'img-ability-child'
    textSpecialChild2.className = 'label-ability-child'

    if (specialChild2 == 0) {
        imageSpecialChild2.src = './assets/captain/captainSpecialChild.webp'
        textSpecialChild2.innerText = 'Beacon: Healing'
    } else if (specialChild2 == 1) {
        imageSpecialChild2.src = './assets/captain/captainSpecialChild2.webp'
        textSpecialChild2.innerText = 'Beacon: Shocking'
    } else if (specialChild2 == 2) {
        imageSpecialChild2.src = './assets/captain/captainSpecialChild3.webp'
        textSpecialChild2.innerText = 'Beacon: Resupply'
    } else if (specialChild2 == 3) {
        imageSpecialChild2.src = './assets/captain/captainSpecialChild4.webp'
        textSpecialChild2.innerText = 'Beacon: Hacking'
    }

    divAbilityChild.className = 'ability-child'
    divAbilityChild2.className = 'ability-child'

    divAbilityChild.appendChild(imageSpecialChild)
    divAbilityChild.appendChild(textSpecialChild)
    divAbilityChild2.appendChild(imageSpecialChild2)
    divAbilityChild2.appendChild(textSpecialChild2)

    divAbilites.appendChild(divAbilityChild)
    divAbilites.appendChild(divAbilityChild2)
}

// commando
const commando = document.getElementById('commando')

commando.addEventListener('click', commandoGenerate)

const commandoProfile = () => profile('./assets/commando/commandoProfile.webp', 'Commando')
const commandoPassive = () => passive('./assets/placeholder.png', 'None')
const commandoPrimary = () => primary('./assets/commando/commandoPrimary.webp', 'Double Tap')
const commandoSecondary = () => secondary('./assets/commando/commandoSecondary.webp', 'Phase Round')
const commandoSecondary2 = () => secondary('./assets/commando/commandoSecondary2.webp', 'Phase Blast')
const commandoUtility = () => utility('./assets/commando/commandoUtility.webp', 'Tactical Dive')
const commandoUtility2 = () => utility('./assets/commando/commandoUtility2.webp', 'Tactical Slide')
const commandoSpecial = () => special('./assets/commando/commandoSpecial.webp', 'Supressive Fire')
const commandoSpecial2 = () => special('./assets/commando/commandoSpecial2.webp', 'Frag Grenade')

function commandoGenerate() {
    removeChildAbility()
    commandoProfile()
    commandoPassive()
    commandoPrimary()
    let secondary = Math.floor(Math.random() * 2)
    let utility = Math.floor(Math.random() * 2)
    let special = Math.floor(Math.random() * 2)
    if (secondary == 0) {
        commandoSecondary()
    } else {
        commandoSecondary2()
    }
    if (utility == 0) {
        commandoUtility()
    } else {
        commandoUtility2()
    }
    if (special == 0) {
        commandoSpecial()
    } else {
        commandoSpecial2()
    }
}

// engineer
const engineer = document.getElementById('engineer')

engineer.addEventListener('click', engineerGenerate)

const engineerProfile = () => profile('./assets/engineer/engineerProfile.webp', 'Engineer')
const engineerPassive = () => passive('./assets/placeholder.png', 'None')
const engineerPrimary = () => primary('./assets/engineer/engineerPrimary.webp', 'Buncing Grenades')
const engineerSecondary = () => secondary('./assets/engineer/engineerSecondary.webp', 'Pressure Mines')
const engineerSecondary2 = () => secondary('./assets/engineer/engineerSecondary2.webp', 'Spider Mines')
const engineerUtility = () => utility('./assets/engineer/engineerUtility.webp', 'Bubble Shield')
const engineerUtility2 = () => utility('./assets/engineer/engineerUtility2.webp', 'Thermal Harpoons')
const engineerSpecial = () => special('./assets/engineer/engineerSpecial.webp', 'TR12 Gauss Auto-Turret')
const engineerSpecial2 = () => special('./assets/engineer/engineerSpecial2.webp', 'TR58 Carbonizer Turret')

function engineerGenerate() {
    removeChildAbility()
    engineerProfile()
    engineerPassive()
    engineerPrimary()
    let secondary = Math.floor(Math.random() * 2)
    let utility = Math.floor(Math.random() * 2)
    let special = Math.floor(Math.random() * 2)
    if (secondary == 0) {
        engineerSecondary()
    } else {
        engineerSecondary2()
    }
    if (utility == 0) {
        engineerUtility()
    } else {
        engineerUtility2()
    }
    if (special == 0) {
        engineerSpecial()
    } else {
        engineerSpecial2()
    }
}

// huntress
const huntress = document.getElementById('huntress')

huntress.addEventListener('click', huntressGenerate)

const huntressProfile = () => profile('./assets/huntress/huntressProfile.webp', 'Huntress')
const huntressPassive = () => passive('./assets/placeholder.png', 'None')
const huntressPrimary = () => primary('./assets/huntress/huntressPrimary.webp', 'Strafe')
const huntressPrimary2 = () => primary('./assets/huntress/huntressPrimary2.webp', 'Flurry')
const huntressSecondary = () => secondary('./assets/huntress/huntressSecondary.webp', 'Laser Glaive')
const huntressUtility = () => utility('./assets/huntress/huntressUtility.webp', 'Blink')
const huntressUtility2 = () => utility('./assets/huntress/huntressUtility2.webp', 'Phase Blink')
const huntressSpecial = () => special('./assets/huntress/huntressSpecial.webp', 'Arrow Rain')
const huntressSpecial2 = () => special('./assets/huntress/huntressSpecial2.webp', 'Ballista')

function huntressGenerate() {
    removeChildAbility()
    huntressProfile()
    huntressPassive()
    huntressSecondary()
    let primary = Math.floor(Math.random() * 2)
    let utility = Math.floor(Math.random() * 2)
    let special = Math.floor(Math.random() * 2)
    if (primary == 0) {
        huntressPrimary()
    } else {
        huntressPrimary()
    }
    if (utility == 0) {
        huntressUtility()
    } else {
        huntressUtility2()
    }
    if (special == 0) {
        huntressSpecial()
    } else {
        huntressSpecial2()
    }
}

// loader
const loader = document.getElementById('loader')

loader.addEventListener('click', loaderGenerate)

const loaderProfile = () => profile('./assets/loader/loaderProfile.webp', 'loader')
const loaderPassive = () => passive('./assets/loader/loaderPassive.webp', 'Scrap Barrier')
const loaderPrimary = () => primary('./assets/loader/loaderPrimary.webp', 'Knuckleboom')
const loaderSecondary = () => secondary('./assets/loader/loaderSecondary.webp', 'Grapple Fist')
const loaderSecondary2 = () => secondary('./assets/loader/loaderSecondary2.webp', 'Spiked Fist')
const loaderUtility = () => utility('./assets/loader/loaderUtility.webp', 'Charged Gauntlet')
const loaderUtility2 = () => utility('./assets/loader/loaderUtility2.webp', 'Thunder Gauntlet')
const loaderSpecial = () => special('./assets/loader/loaderSpecial.webp', 'M551 Pylon')
const loaderSpecial2 = () => special('./assets/loader/loaderSpecial2.webp', 'Thunderslam')

function loaderGenerate() {
    removeChildAbility()
    loaderProfile()
    loaderPassive()
    loaderPrimary()
    let secondary = Math.floor(Math.random() * 2)
    let utility = Math.floor(Math.random() * 2)
    let special = Math.floor(Math.random() * 2)
    if (secondary == 0) {
        loaderSecondary()
    } else {
        loaderSecondary2()
    }
    if (utility == 0) {
        loaderUtility()
    } else {
        loaderUtility2()
    }
    if (special == 0) {
        loaderSpecial()
    } else {
        loaderSpecial2()
    }
}


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

const removeChildAbility = () => {
    const elements = document.getElementsByClassName('ability-child');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}