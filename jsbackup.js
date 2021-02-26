
    // ------------  RACES ------------ 
    // attacker: player1  -  opponent: player2
    let chance30 = Math.floor(Math.random) * 100
 
    switch (this.race) {
        case "human":
        // 20% less damage taken
            return player1.damage() * 0.8 

        case "orc":
        // 40% more max health
            return player1.maxHealth = ((player1.maxHealth / 100) * 40) + player1.maxHealth

        case "elf":
        // 30% chance to deflect the attack back to the opponent. The attacker takes damage equal to 50% of the original hit. The elf takes no damage.
            if (chance30 <= 30) {
                player1.damage() = 0
                player2.damage() = player1.damage() * 50
            } else {
                player1.damage()
            }
            return
           

        case "vampire":
        // 10% lifesteal from opponents current health at start of the vampire's turn.
            player1.currenthealth += player2.currenthealth / 10
            player2.currenthealth -= player2.currenthealth / 10
            return;
    }



// ------------  ITEMS ------------ 

// attacker: player1  -  opponent: player2

    switch (this.item) {
        case "boots":
        // 30% chance to dodge an attack
            if (chance30 <= 30) {
                player1.damage() = 0
            } else {
                player1.damage()
            }
            return

        case "staff":
        // 20% increase in healing
            return player1.heal() += ((player1.heal() / 100) * 20) + player1.heal() 
            

        case "sword":
        // 30% more damage
            return player2.damage() += ((player2.damage() / 100) * 30) + player2.damage() 
            

        case "bow":
        // 30% chance to attack twice
            if (chance30 <= 30) {
                player1.damage()
                player1.damage()
            } else {
                player1.damage()
            }
            return
    }




//------------------------------------------------------

switch (this.race) {
    case "human": // 20% less damage taken
       console.log("humannn")
       break;

    case "orc": // 40% more max health
       console.log("orcc")
       break;

    case "elf": // 30% chance to deflect the attack back to the opponent. The attacker takes damage equal to 50% of the original hit. The elf takes no damage.
        console.log("elfff")
        break;

    case "vampire": // 10% lifesteal from opponents current health at start of the vampire's turn.
        console.log("vampire")
        break;
}


switch (this.item) {
    case "boots": // 30% chance to dodge an attack
        console.log("booots")
        break;

    case "staff": // 20% increase in healing
        console.log("staffff")
        break;

    case "sword": // 30% more damage
        console.log("swordd")
        break;

    case "bow": // 30% chance to attack twice
        console.log("bowww")
        break;
}