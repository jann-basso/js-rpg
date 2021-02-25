
    // ------------  RACES ------------ 
    // attacker: player1  -  opponent: player2

 function racesParticularities() {
    switch (raceP1) {
        case "Human": // 20% less damage taken
            player1.damage() * 0.8 
            break;

        case "Orc": // 40% more max health
            player1.maxHealth = ((player1.maxHealth / 100) * 40) + player1.maxHealth
            break;

        case "Elf": // 30% chance to deflect the attack back to the opponent. The attacker takes damage equal to 50% of the original hit. The elf takes no damage.
            let chance30def = Math.floor(Math.random) * 100
            if (chance30def <= 30) {
                player1.damage() = 0
                player2.damage() = player1.damage() * 50
            } else {
                player1.damage()
            }
            break;

        case "Vampire": // 10% lifesteal from opponents current health at start of the vampire's turn.
            player1.currenthealth += player2.currenthealth / 10
            player2.currenthealth -= player2.currenthealth / 10
            break;
    }
    return racesChange
} console.log(racesParticularities())


// ------------  ITEMS ------------ 

// attacker: player1  -  opponent: player2
let itemsChange
function itemsParticularities() {
    switch (itemP1) {
        case "Boots": // 30% chance to dodge an attack
            let chance30dodge = Math.floor(Math.random) * 100
            if (chance30dodge <= 30) {
                player1.damage() = 0
            } else {
                player1.damage()
            }
            break;

        case "Staff": // 20% increase in healing
            player1.heal() += ((player1.heal() / 100) * 20) + player1.heal() 
            break;

        case "Sword": // 30% more damage
            player2.damage() += ((player2.damage() / 100) * 30) + player2.damage() 
            break;

        case "Bow": // 30% chance to attack twice
            let chance30attack = Math.floor(Math.random) * 100
            if (chance30attack <= 30) {
                player1.damage()
                player1.damage()
            } else {
                player1.damage()
            }
            break;
    }

    return itemsChange
} 
console.log(itemsParticularities())



//-----------------------------------------------------------------------------------



    switch (this.race) {
        case "Human": // 20% less damage taken
            this.damage() * 0.8 
            console.log(this.damage() * 0.8)
            break;

        case "Orc": // 40% more max health
            console.log("orc")
            break;

        case "Elf": // 30% chance to deflect the attack back to the opponent. The attacker takes damage equal to 50% of the original hit. The elf takes no damage.
            console.log("elf")
            break;

        case "Vampire": // 10% lifesteal from opponents current health at start of the vampire's turn.
            console.log("vampire")
            break;
    }

    switch (this.item) {
        case "Boots": // 30% chance to dodge an attack
            console.log("boots")
            break;

        case "Staff": // 20% increase in healing
            console.log("staff")
            break;

        case "Sword": // 30% more damage
            console.log("sword") 
            break;

        case "Bow": // 30% chance to attack twice
             console.log("bow")
            break;
    }