  // ------------  ITEMS CHANGES FUNCTION ------------ 
/*   let myplayerItem

  function raceChanges() {
        switch (myplayerItem) {
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
  } */





//------------------------------------------------------------------------------------------------------------

 
 // ------------  HIT BUTTON ------------ 
    // player 1
    document.getElementById("p1-btnhit").addEventListener("click", () => {  
        // hitting player 2, lower its health 
        player2.damage()
        player2.currentHealth = player2.currentHealth - player2.damage()
            console.log(`random hit is ${player2.damage()} / current health is now ${player2.currentHealth}`)
            
            if(player2.currentHealth <= 0) {
                player2.currentHealth = 0
                logscreen.innerHTML += `<br>Game over! ${player2.name} is dead.`
            } 
        
        document.getElementById("p2-health").style.width = player2.currentHealth + "%"
        
        // hit according to item 
        /* myplayerItem = player1.item
        myplayer = player1
        opponent = player2
        itemChanges() */
      
    })

    // player 2
    document.getElementById("p2-btnhit").addEventListener("click", () => {   
        // hitting player 2, lower its health 
        player1.damage()
        player1.currentHealth = player1.currentHealth - player1.damage()
            console.log(`random hit is ${player1.damage()} / current health is now ${player1.currentHealth}`)
            
            if(player1.currentHealth <= 0) {
                player1.currentHealth = 0
                logscreen.innerHTML += `<br>Game over! ${player1.name} is dead.`
            } 
        
        document.getElementById("p1-health").style.width = player1.currentHealth + "%"

        // hit according to item 
        /* myplayerItem = player2.item
        myplayer = player2
        opponent = player1
        itemChanges() */

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