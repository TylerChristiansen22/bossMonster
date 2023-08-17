const heroes = [
    {
        name: 'Slate Slabrock',
        type: 'dwarf',
        damage: 5,
        health: 100,
        maxHealth: 100,
        level: 0
    },
    {
        name: 'Flint Ironstag',
        type: 'elf',
        damage: 10,
        health: 50,
        maxHealth: 50,
        level: 0
    }
]

const boss = {
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1
}
let gold = 0
let reward = 10

function attackBoss() {
    heroes.forEach(hero => {
        let combinedDmg = 0
        combinedDmg += hero.damage
        boss.health -= combinedDmg
        if (boss.health <= 0) boss.health = 0
        console.log(boss.health, 'this is the health')
    })
    bossSlain()
}

function attackHero() {
    heroes.forEach(hero => {
        hero.health -= boss.damage
        if (hero.health <= 0) hero.health = 0
        let heroElm = document.getElementById(`${hero.name}Health`)
        heroElm.innerText = `Health: ${hero.health}`
        console.log(hero.health, "this is the hero health")
    })
}
function bossSlain() {
    if (boss.health <= 0) {
        window.alert('The boss has leveled up!')
        boss.level++
        boss.maxHealth += 10
        boss.health = boss.maxHealth
        gold += reward
        reward += 10
        levelHero()
    }
    drawBossHealth()
}
function levelHero() {
    heroes.forEach(hero => {
        hero.level++
        let heroLevelElm = document.getElementById(`${hero.name}Level`)
        heroLevelElm.innerText = `Level: ${hero.level}`
    })
}
function drawBossHealth() {
    let bossElm = document.getElementById('bossHealth')
    bossElm.innerText = `${boss.health} / ${boss.maxHealth}`
    let bossElm2 = document.getElementById('bossLevel')
    bossElm2.innerText = `Level: ${boss.level}`
    let heroGold = document.getElementById('gold')
    heroGold.innerText = `Gold: ${gold}`
}

function heal(heroName) {
    if (gold >= 10) {
        let foundHero = heroes.find(hero => hero.name == heroName)
        foundHero.health = foundHero.maxHealth
        let heroElm = document.getElementById(`${foundHero.name}Health`)
        heroElm.innerText = `Health: ${foundHero.health}`
        gold -= 10
        drawGold()
    }
}
function drawHealth(heroName) {
    let foundHero = heroes.find(hero => hero.name == heroName)
    foundHero.health = foundHero.maxHealth
    let heroElm = document.getElementById(`${foundHero.name}Health`)
    heroElm.innerText = `Health: ${foundHero.health}`
}

function drawGold() {
    let heroGold = document.getElementById('gold')
    heroGold.innerText = `Gold: ${gold}`
}

levelHero()
drawHealth('Slate Slabrock')
drawHealth('Flint Ironstag')
drawBossHealth()
setInterval(attackHero, 5000)