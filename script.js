/* so i need to make a function that takes in options for each
or i can make it so that theres 4 function with options
then each */

const divProfile = document.getElementById('selected-profile')
const divOptions = document.getElementById('selected-options')

const btnAcrid = document.getElementById('acrid')
const btnArtificer = document.getElementById('artificer')
const btnBandit = document.getElementById('bandit')
const btnCaptain = document.getElementById('captain')
const btnCommando = document.getElementById('commando')
const btnEngineer = document.getElementById('engineer')
const btnHuntress = document.getElementById('huntress')
const btnLoader = document.getElementById('loader')
const btnMercenary = document.getElementById('mercenary')
const btnMult = document.getElementById('mult')
const btnRailgunner = document.getElementById('railgunner')
const btnRex = document.getElementById('rex')
const btnVoidfiend = document.getElementById('voidfiend')
const btnRandom = document.getElementById('random')

btnAcrid.addEventListener('click', generateAcrid)
btnArtificer.addEventListener('click', generateArtificer)
btnBandit.addEventListener('click', generateBandit)
btnCaptain.addEventListener('click', generateCaptain)
btnCommando.addEventListener('click', generateCommando)
btnEngineer.addEventListener('click', generateEngineer)
btnHuntress.addEventListener('click', generateHuntress)
btnLoader.addEventListener('click', generateLoader)
btnMercenary.addEventListener('click', generateMercenary)
btnMult.addEventListener('click', generateMult)
btnRailgunner.addEventListener('click', generateRailgunner)
btnRex.addEventListener('click', generateRex)
btnVoidfiend.addEventListener('click', generateVoidfiend)
btnRandom.addEventListener('click', generateRandom)

function generateRandom() {
    option = Math.floor(Math.random() * 13)
    console.log(option)

    switch (option) {
        case 0:
            generateAcrid()
        case 1:
            generateArtificer()
            break
        case 2:
            generateBandit()
            break
        case 3:
            generateCaptain()
            break
        case 4:
            generateCommando()
            break
        case 5:
            generateEngineer()
            break
        case 6:
            generateHuntress()
            break
        case 7:
            generateLoader()
            break
        case 8:
            generateMercenary()
            break
        case 9:
            generateMult()
            break
        case 10:
            generateRailgunner()
            break
        case 11:
            generateRex()
            break
        case 12:
            generateVoidfiend()
            break
        default:
            break
    }
}

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
    newProfile("./assets/artificer/artificerProfile.webp", "Artificer")
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

function generateBandit() {
    clear()
    newProfile("./assets/bandit/banditProfile.webp", "Bandit")
    option = Math.floor(Math.random() * 2)
    option2 = Math.floor(Math.random() * 2)
    option3 = Math.floor(Math.random() * 2)

    if (option == 0) {
        newOpt("./assets/bandit/banditOption.webp", "Burst")
    } else if (option == 1) {
        newOpt("./assets/bandit/banditOptionAlt.webp", "Blast")
    }
    if (option2 == 0) {
        newOpt("./assets/bandit/banditOption2.webp", "Serated Dagger")
    } else if (option2 == 1) {
        newOpt("./assets/bandit/banditOption2Alt.webp", "Serated Shiv")
    }
    if (option3 == 0) {
        newOpt("./assets/bandit/banditOption3.webp", "Lights Out")
    } else if (option3 == 1) {
        newOpt("./assets/bandit/banditOption3Alt.webp", "Desperado")
    }
}

function generateCaptain() {
    clear()
    newProfile("./assets/captain/captainProfile.webp", "Captain")
    option = Math.floor(Math.random() * 4)
    option2 = Math.floor(Math.random() * 4)
    option3 = Math.floor(Math.random() * 2)

    if (option == 0) {
        newOpt("./assets/captain/captainOption.webp", "Beacon: Healing")
    } else if (option == 1) {
        newOpt("./assets/captain/captainOptionAlt.webp", "Beacon: Shocking")
    } else if (option == 2) {
        newOpt("./assets/captain/captainOptionAlt2.webp", "Beacon: Ressuply")
    } else if (option == 3) {
        newOpt("./assets/captain/captainOptionAlt3.webp", "Beacon: Hacking")
    }
    if (option2 == 0) {
        newOpt("./assets/captain/captainOption.webp", "Beacon: Healing")
    } else if (option2 == 1) {
        newOpt("./assets/captain/captainOptionAlt.webp", "Beacon: Shocking")
    } else if (option2 == 2) {
        newOpt("./assets/captain/captainOptionAlt2.webp", "Beacon: Ressuply")
    } else if (option2 == 3) {
        newOpt("./assets/captain/captainOptionAlt3.webp", "Beacon: Hacking")
    }
    if (option3 == 0) {
        newOpt("./assets/captain/captainOption2.webp", "Orbital Probe")
    } else if (option3 == 1) {
        newOpt("./assets/captain/captainOption2Alt.webp", "OGM-72 \'DIABLO\' Strike")
    }
}

function generateCommando() {
    clear()
    newProfile("./assets/commando/commandoProfile.webp", "Commando")
    option = Math.floor(Math.random() * 2)
    option2 = Math.floor(Math.random() * 2)
    option3 = Math.floor(Math.random() * 2)

    if (option == 0) {
        newOpt("./assets/commando/commandoOption.webp", "Phase Round")
    } else if (option == 1) {
        newOpt("./assets/commando/commandoOptionAlt.webp", "Phase Blast")
    }
    if (option2 == 0) {
        newOpt("./assets/commando/commandoOption2.webp", "Tactical Dive")
    } else if (option2 == 1) {
        newOpt("./assets/commando/commandoOption2Alt.webp", "Tactical Slide")
    }
    if (option3 == 0) {
        newOpt("./assets/commando/commandoOption3.webp", "Supressive Fire")
    } else if (option3 == 1) {
        newOpt("./assets/commando/commandoOption3Alt.webp", "Frag Grenade")
    }
}

function generateEngineer() {
    clear()
    newProfile("./assets/engineer/engineerProfile.webp", "Engineer")
    option = Math.floor(Math.random() * 2)
    option2 = Math.floor(Math.random() * 2)
    option3 = Math.floor(Math.random() * 2)

    if (option == 0) {
        newOpt("./assets/engineer/engineerOption.webp", "Pressure Mines")
    } else if (option == 1) {
        newOpt("./assets/engineer/engineerOptionAlt.webp", "Spider Mines")
    }
    if (option2 == 0) {
        newOpt("./assets/engineer/engineerOption2.webp", "Bubble Shield")
    } else if (option2 == 1) {
        newOpt("./assets/engineer/engineerOption2Alt.webp", "Thermal Harpoons")
    }
    if (option3 == 0) {
        newOpt("./assets/engineer/engineerOption3.webp", "TR12 Gauss Auto-Turret")
    } else if (option3 == 1) {
        newOpt("./assets/engineer/engineerOption3Alt.webp", "TR58 Carbonizer Turret")
    }
}

function generateHuntress() {
    clear()
    newProfile("./assets/huntress/huntressProfile.webp", "Huntress")
    option = Math.floor(Math.random() * 2)
    option2 = Math.floor(Math.random() * 2)
    option3 = Math.floor(Math.random() * 2)

    if (option == 0) {
        newOpt("./assets/huntress/huntressOption.webp", "Strafe")
    } else if (option == 1) {
        newOpt("./assets/huntress/huntressOptionAlt.webp", "Flurry")
    }
    if (option2 == 0) {
        newOpt("./assets/huntress/huntressOption2.webp", "Blink")
    } else if (option2 == 1) {
        newOpt("./assets/huntress/huntressOption2Alt.webp", "Phase Blink")
    }
    if (option3 == 0) {
        newOpt("./assets/huntress/huntressOption3.webp", "Arrow Rain")
    } else if (option3 == 1) {
        newOpt("./assets/huntress/huntressOption3Alt.webp", "Ballista")
    }
}

function generateLoader() {
    clear()
    newProfile("./assets/loader/loaderProfile.webp", "Loader")
    option = Math.floor(Math.random() * 2)
    option2 = Math.floor(Math.random() * 2)
    option3 = Math.floor(Math.random() * 2)

    if (option == 0) {
        newOpt("./assets/loader/loaderOption.webp", "Grapple Fist")
    } else if (option == 1) {
        newOpt("./assets/loader/loaderOptionAlt.webp", "Spiked Fist")
    }
    if (option2 == 0) {
        newOpt("./assets/loader/loaderOption2.webp", "Charged Gauntlet")
    } else if (option2 == 1) {
        newOpt("./assets/loader/loaderOption2Alt.webp", "Thunder Gauntlet")
    }
    if (option3 == 0) {
        newOpt("./assets/loader/loaderOption3.webp", "M551 Pylon")
    } else if (option3 == 1) {
        newOpt("./assets/loader/loaderOption3Alt.webp", "Thunderslam")
    }
}

function generateMercenary() {
    clear()
    newProfile("./assets/mercenary/mercenaryProfile.webp", "Mercenary")
    option = Math.floor(Math.random() * 2)
    option2 = Math.floor(Math.random() * 2)
    option3 = Math.floor(Math.random() * 2)

    if (option == 0) {
        newOpt("./assets/mercenary/mercenaryOption.webp", "Whirlwind")
    } else if (option == 1) {
        newOpt("./assets/mercenary/mercenaryOptionAlt.webp", "Rising Thunder")
    }
    if (option2 == 0) {
        newOpt("./assets/mercenary/mercenaryOption2.webp", "Blinding Assault")
    } else if (option2 == 1) {
        newOpt("./assets/mercenary/mercenaryOption2Alt.webp", "Focused Assault")
    }
    if (option3 == 0) {
        newOpt("./assets/mercenary/mercenaryOption3.webp", "Eviscerate")
    } else if (option3 == 1) {
        newOpt("./assets/mercenary/mercenaryOption3Alt.webp", "Slicing Winds")
    }
}

function generateMult() {
    clear()
    newProfile("./assets/mult/multProfile.webp", "Mul-T")
    option = Math.floor(Math.random() * 4)
    option2 = Math.floor(Math.random() * 4)
    option3 = Math.floor(Math.random() * 2)

    if (option == 0) {
        newOpt("./assets/mult/multOption.webp", "Auto-Nailgun")
    } else if (option == 1) {
        newOpt("./assets/mult/multOptionAlt.webp", "Rebar Puncher")
    } else if (option == 2) {
        newOpt("./assets/mult/multOptionAlt2.webp", "Scrap Launcher")
    } else if (option == 3) {
        newOpt("./assets/mult/multOptionAlt3.webp", "Power-Saw")
    }
    if (option2 == 0) {
        newOpt("./assets/mult/multOption.webp", "Auto-Nailgun")
    } else if (option2 == 1) {
        newOpt("./assets/mult/multOptionAlt.webp", "Rebar Puncher")
    } else if (option2 == 2) {
        newOpt("./assets/mult/multOptionAlt2.webp", "Scrap Launcher")
    } else if (option2 == 3) {
        newOpt("./assets/mult/multOptionAlt3.webp", "Power-Saw")
    }
    if (option3 == 0) {
        newOpt("./assets/mult/multOption2.webp", "Retool")
    } else if (option3 == 1) {
        newOpt("./assets/mult/multOption2Alt.webp", "Power Mode")
    }
}

function generateRailgunner() {
    clear()
    newProfile("./assets/railgunner/railgunnerProfile.webp", "Railgunner")
    option = Math.floor(Math.random() * 2)
    option2 = Math.floor(Math.random() * 2)
    option3 = Math.floor(Math.random() * 2)

    if (option == 0) {
        newOpt("./assets/railgunner/railgunnerOption.webp", "M99 Sniper")
    } else if (option == 1) {
        newOpt("./assets/railgunner/railgunnerOptionAlt.webp", "HH44 Marksman")
    }
    if (option2 == 0) {
        newOpt("./assets/railgunner/railgunnerOption2.webp", "Concussion Device")
    } else if (option2 == 1) {
        newOpt("./assets/railgunner/railgunnerOption2Alt.webp", "Polar Field Device")
    }
    if (option3 == 0) {
        newOpt("./assets/railgunner/railgunnerOption3.webp", "Supercharge")
    } else if (option3 == 1) {
        newOpt("./assets/railgunner/railgunnerOption3Alt.webp", "Cryocharge")
    }
}

function generateRex() {
    clear()
    newProfile("./assets/rex/rexProfile.webp", "REX")
    option = Math.floor(Math.random() * 2)
    option2 = Math.floor(Math.random() * 2)
    option3 = Math.floor(Math.random() * 2)

    if (option == 0) {
        newOpt("./assets/rex/rexOption.webp", "DIRECTIVE : Drill")
    } else if (option == 1) {
        newOpt("./assets/rex/rexOptionAlt.webp", "Seed Barrage")
    }
    if (option2 == 0) {
        newOpt("./assets/rex/rexOption2.webp", "DIRECTIVE: Disperse")
    } else if (option2 == 1) {
        newOpt("./assets/rex/rexOption2Alt.webp", "Bramble Volley")
    }
    if (option3 == 0) {
        newOpt("./assets/rex/rexOption3.webp", "DIRECTIVE: Harvest")
    } else if (option3 == 1) {
        newOpt("./assets/rex/rexOption3Alt.webp", "Tangling Growth")
    }
}

function generateVoidfiend() {
    clear()
    newProfile("./assets/voidfiend/voidfiendProfile.webp", "Void Fiend")
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