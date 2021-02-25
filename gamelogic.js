 // ------------  HIT BUTTON ------------ 
    // player 1
    document.getElementById("p1-btnhit").addEventListener("click", () => {  
        // hitting player 2, lower its health 
        player2.damage()
        document.getElementById("p2-health").style.width = player2.currentHealth + "%"

       /*  player1.adaptItem() // adapt damages and healing according to item */
       
        if (player1.item === "Boots") {
            // 30% chance to dodge an attack
            console.log("booooots")
        } else if (player1.item === "Staff") {
            // 20% increase in healing
            console.log("staaaaff")
        } else if (player1.item === "Sword") {
            // 30% more damage
            console.log("swooooord")
        } else if (player1.item === "Bow") {
            // 30% chance to attack twice
            console.log("bowwww")
        }
    
    })

    // player 2
    document.getElementById("p2-btnhit").addEventListener("click", () => {   
        player1.damage()
        document.getElementById("p1-health").style.width = player1.currentHealth + "%"
    })

 

 // ------------  HEAL BUTTON ------------ 
     // player 1
    document.getElementById("p1-btnheal").addEventListener("click", () => {   
        player1.heal()
        document.getElementById("p1-health").style.width = player1.currentHealth + "%"
    })

    // player 2
    document.getElementById("p2-btnheal").addEventListener("click", () => {   
        player2.heal()
        document.getElementById("p2-health").style.width = player2.currentHealth + "%"
    })