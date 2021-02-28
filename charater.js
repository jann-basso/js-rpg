document.getElementById("players-avataraction").style.visibility = "hidden" 
 
let logscreen = document.getElementById("logscreen-text")

 // ------------  CHARACTER OBJECT  ------------ 
    function Player (name, race, item) {
        this.name = name;
        this.race = race;
        this.item = item;
        this.currentHealth = 100;
        this.maxHealth = 100;
        
        this.min = 3;
        this.maxDamage = 20;
        this.maxHealing = 30; 
    

        this.heal = function(){
            let healPlayer = Math.floor(Math.random() * (this.maxHealing - this.min + 1) + this.min)
            this.currentHealth = this.currentHealth + healPlayer
            console.log(`random heal is ${healPlayer} / current health is now ${this.currentHealth}`)

            if (this.currentHealth > this.maxHealth) {
                this.currentHealth = this.maxHealth
            }
        };

        this.damage = function(){
            let hitPlayer = Math.floor(Math.random() * (this.maxDamage - this.min + 1) + this.min)
            return hitPlayer
        };
        console.log(`random damage: ${this.damage()}`)

        this.totalDamage = this.damage();


        this.displayChar = function(){
            return console.log(`My name is ${this.name} I am a ${this.race}, I wield a ${this.item}, my total health points are ${this.maxHealth}`);
        };
        
        // place max health to begin game
        document.getElementById("p1-health").style.width = this.maxHealth + "%"
        document.getElementById("p2-health").style.width = this.maxHealth + "%"
}


// ------------  BUTTON CREATE CHARACTER  ------------
    let player1
    let nameP1
    let raceP1
    let itemP1

    let player2
    let nameP2
    let raceP2
    let itemP2

    let createCharacters = document.getElementById("p1-p2-createchar")
    createCharacters.addEventListener("click", () => {

        // define player 1 
        nameP1 = document.getElementById("p1-input-name").value
        raceP1 = document.getElementById("p1-input-race").value
        itemP1 = document.getElementById("p1-input-item").value

        player1 = new Player (
            nameP1,
            raceP1,
            itemP1
        )
        /* player1.displayChar() */
        

        // define player 2
        nameP2 = document.getElementById("p2-input-name").value
        raceP2 = document.getElementById("p2-input-race").value
        itemP2 = document.getElementById("p2-input-item").value

        player2 = new Player (
            nameP2,
            raceP2,
            itemP2
        )
        /* player2.displayChar() */
        

        // show inputs on vs screen
        let nameP1vs = document.getElementById("p1-avatar-name")
        let raceP1vs = document.getElementById("p1-avatar-race")
        let itemP1vs = document.getElementById("p1-avatar-item")
        let nameP2vs = document.getElementById("p2-avatar-name")
        let raceP2vs = document.getElementById("p2-avatar-race")
        let itemP2vs = document.getElementById("p2-avatar-item")

        if (nameP1 == "" || raceP1 == "" || itemP1 == "" || nameP2 == "" || raceP2 == "" || itemP2 == "" ) {
            alert("Please fill in all the fields.")
        } else { 
            nameP1vs.innerHTML = nameP1.toUpperCase()
            raceP1vs.innerHTML = raceP1.toUpperCase()
            itemP1vs.innerHTML = itemP1.toUpperCase()
            nameP2vs.innerHTML = nameP2.toUpperCase()
            raceP2vs.innerHTML = raceP2.toUpperCase()
            itemP2vs.innerHTML = itemP2.toUpperCase()
        } 

        // when button is clicked, change input for vs screen
        document.getElementById("players-inputs").style.visibility = "hidden"
        document.getElementById("players-avataraction").style.visibility = "visible"

        
    // ------------  RACE CHANGES FUNCTION  ------------
        let myplayerRace 
        let myplayer
        let opponent

        let chance30 = Math.floor(Math.random() * 100) 
        console.log(`Chance: ${chance30}`)

        
        function raceChanges() { 
            if (myplayerRace == "human") {
                console.log(`random damage: ${myplayer.damage()}`)

                //myplayer.damage() = myplayer.damage() * 0.8  NAO FUNCIONA
                myplayer.damage() * 0.8
                console.log(`human damage: ${myplayer.damage() * 0.8}`)
                return
            }

            /* 
            switch (myplayerRace) {
                case "human":
                // 20% less damage taken
                    myplayer.damage = myplayer.damage * 0.8 
                    console.log(myplayer.damage())
                    return 

                   
                 case "orc":
                // 40% more max health
                    myplayer.maxHealth = ((myplayer.maxHealth / 100) * 40) + myplayer.maxHealth
                    console.log(`ORC - health is ${myplayer.maxHealth}`)
                    return

                case "elf":
                // 30% chance to deflect the attack back to the opponent. The attacker takes damage equal to 50% of the original hit. The elf takes no damage.
                    if (chance30 <= 30) {
                        opponent.damage() = myplayer.damage() * 50
                        myplayer.damage() = 0
                    } else {
                        myplayer.damage()
                    }
                    console.log(`ELF - his damage is ${myplayer.damage()} and opponent's damage is ${opponent.damage()}`)
                    return
                
                case "vampire":
                // 10% lifesteal from opponents current health at start of the vampire's turn.
                    myplayer.currenthealth += opponent.currenthealth / 10
                    opponent.currenthealth -= opponent.currenthealth / 10
                    console.log(`VAMPIRE - his health${myplayer.currenthealth} and opponent's health is ${opponent.currenthealth}`)
                    return; 
            }
            */
            
        }

        // race change - player 1
        myplayerRace = player1.race
        myplayer = player1
        opponent = player2
        raceChanges()
        
        
        // race change - player 2
       /*  myplayerRace = player2.race
        myplayer = player2
        opponent = player1
        raceChanges() */
    
 
})







