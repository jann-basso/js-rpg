document.getElementById("players-avataraction").style.visibility = "hidden"

 
 // ======================  GLOBAL VARIABLES  ======================
let logscreen = document.getElementById("logscreen-text")

let iteminfoP1 = document.getElementById("p1-iteminfo")
let iteminfoP2 = document.getElementById("p2-iteminfo")
let itemactionP1 = document.getElementById("p1-itemaction")
let itemactionP2 = document.getElementById("p2-itemaction")

let raceinfoP1 = document.getElementById("p1-raceinfo")
let raceinfoP2 = document.getElementById("p2-raceinfo")
let raceactionP1 = document.getElementById("p1-raceaction")
let raceactionP2 = document.getElementById("p2-raceaction")

let msgP1 = document.getElementById("p1-avatar-msg")
let msgP2 = document.getElementById("p2-avatar-msg")

let imgP1 = document.getElementById("img-p1")
let imgP2 = document.getElementById("img-p2")

let chance30race 
let chance30item 
let chance30boots


 // ========== END GAME FUNCTION (currentHealth is 0 or when player clicks on yield button) ==============
 let newmessage // variable to store the different messages to place inside funtion
 function endgame(message) {
    // create game over pop up screen (additional needed style on css)
    let popup = document.createElement("div")
    popup.style.backgroundColor = "black"
    popup.style.width = "50%"
    popup.style.height = "50%"
    popup.style.position = "absolute"
    popup.style.top = "20%"
    popup.style.left = "25%"
    popup.style.color = "white"
    popup.style.textAlign = "center"
    popup.style.display = "flex"
    popup.style.flexDirection = "column"
    popup.style.alignItems = "center"
    popup.style.justifyContent = "center"
    popup.style.borderRadius = "10px"
    popup.style.border = "10px solid rgb(74, 132, 197, 0.8)"

    let popupText1 = document.createElement("p")
    popupText1.setAttribute("class", "popupText")
    popupText1.style.fontSize = "5em"
    popupText1.style.fontWeight = "bold"
    popupText1.innerHTML = "GAME OVER!"
    popup.appendChild(popupText1)

    let popupText2 = document.createElement("p")
    popupText2.setAttribute("class", "popupText")
    popupText2.style.fontFamily = "Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;"
    popupText2.style.fontSize = "2em"
    popupText2.innerHTML += message //personalized message depending on event
    popup.appendChild(popupText2)

    let popupBtn = document.createElement("button")
    popupBtn.setAttribute("class", "popupText")
    popupBtn.innerHTML = "PLAY AGAIN"
    popupBtn.style.padding = "5px"
    popupBtn.style.marginTop = "10px"
    popup.appendChild(popupBtn)
        popupBtn.addEventListener("click", () => {
            location.reload()
        })
    
    let body = document.getElementById("container")
    body.appendChild(popup)
}


 // ======================  CHARACTER OBJECT  ======================
    class Player {
        constructor (name, race, item) {
            this.name = name;
            this.race = race;
            this.item = item;
            this.currentHealth = 100;
            this.maxHealth = 100;

            this.min = 3;
            this.maxDamage = 20;
            this.maxHealing = 30; 
            this.attack
            this.healing

            // -- orc race changes --
            if (this.race == "orc") {
                // 40% more max health
                this.maxHealth = ((this.maxHealth / 100) * 40) + this.maxHealth
                this.currentHealth = this.maxHealth 

                console.log(`Orc's health is ${this.currentHealth}`)
                logscreen.innerHTML += `<br>Orc's health is ${this.currentHealth}`
            }
        }
       
        heal(){
            // -- RANDOM HEALING NUMBER --
            this.healing = Math.round(Math.floor(Math.random() * (this.maxHealing - this.min + 1) + this.min) * 10) / 10

                // ITEM CHANGE
                if (this.item == "staff") {
                    // 20% increase in healing
                    console.log(`Original healing: ${this.healing}`)
                    logscreen.innerHTML += `<br>Original healing: ${this.healing}`

                    this.healing += Math.round(((this.healing / 100) * 20)*10)/10

                    console.log(`My player with staff healing: ${this.healing}`)
                    logscreen.innerHTML += `<br>My player with staff healing: ${this.healing}`
                }

               
            // -- HEALING FUNCTION --
            this.currentHealth = Math.round((this.currentHealth + this.healing) * 10) / 10

           // -- don't let current health be larger than max health --
            if (this.currentHealth > this.maxHealth) {
                this.currentHealth = this.maxHealth
            } 

            console.log(`Random healing is ${this.healing} / Current health is now ${this.currentHealth}`)
            logscreen.innerHTML += `<br>Random healing is ${this.healing} / Current health is now ${this.currentHealth}`
            
        };


        damage(opponent){
            // -- ATTACK OPPONENT FUNCTION --
            opponent.currentHealth = Math.round((opponent.currentHealth - this.attack) *10) / 10

            // -- don't let current health be larger than max health --
            if (opponent.currentHealth > opponent.maxHealth) {
                opponent.currentHealth = opponent.maxHealth
            }
 
            if (this.currentHealth > this.maxHealth) {
                this.currentHealth = this.maxHealth
            } 

            console.log(`Random attack is ${this.attack} / Current health from opponent is now ${opponent.currentHealth}`)
            logscreen.innerHTML += `<br>Random attack is ${this.attack} / Current health from opponent is now ${opponent.currentHealth}`

            // -- IF CURRENT HEALTH REACHES 0, GAME OVER --
            if(opponent.currentHealth <= 0) {
                opponent.currentHealth = 0
                logscreen.innerHTML += `<br><br>GAME OVER! ${opponent.name.toUpperCase()} IS DEAD.`
                logscreen.innerHTML += `<br>Congratulations ${myplayer.name.toUpperCase()}!!`
                endgame(`<br>Congratulations ${myplayer.name.toUpperCase()}, you won !!`)
            }
            if(this.currentHealth <= 0) {
                this.currentHealth = 0
                logscreen.innerHTML += `<br><br>GAME OVER! ${this.name.toUpperCase()} IS DEAD.`
                logscreen.innerHTML += `<br>Congratulations ${opponent.name.toUpperCase()}!!`
                endgame(`<br>Congratulations ${opponent.name.toUpperCase()}, you won !!`)
            }
 
        };        

        
        displayChar(){
            return console.log(`My name is ${this.name} I am a ${this.race}, I wield a ${this.item}, my total health points are ${this.maxHealth}`);
        };    

    
        
        // ------------  RACE CHANGES FUNCTION  ------------  
            // ORC race change is inside constructor()

        raceChanges(opponent) {
            // ******** random attack ********
            this.attack = Math.round(Math.floor(Math.random() * (this.maxDamage - this.min + 1) + this.min) * 10) / 10
            
             // ******** changes for each race ********
                if (opponentRace == "human") {
                    // HUMAN - 20% less damage taken
                    console.log(`---- °human as opponent° ----`)
                    logscreen.innerHTML += `<br><strong>°human as opponent°<strong>`
                    console.log(`original attack towards human: ${myplayer.attack}`) 
                    logscreen.innerHTML += `<br>original attack towards human: ${myplayer.attack}`

                    myplayer.attack = Math.round((myplayer.attack * 0.8) * 10) / 10

                    console.log(`new 20% less attack towards human: ${myplayer.attack}`) 
                    logscreen.innerHTML += `<br>new 20% less attack towards human: ${myplayer.attack}`


                }  else if (opponentRace == "vampire") {
                   // VAMPIRE - 10% lifesteal from opponents current health at start of the vampire's turn.
                   console.log(`---- °vampire as opponent° ----`)
                   logscreen.innerHTML += `<br><strong>°vampire as opponent°<strong>`

                    myplayer.currentHealth -= Math.round((opponent.currentHealth / 10) * 10) / 10
                    opponent.currentHealth += Math.round((opponent.currentHealth / 10) * 10) / 10

                        if (opponent.currentHealth > 100) {
                            opponent.currentHealth = 100
                        }

                    console.log(`vampire steals 10% of your health. His health is ${opponent.currentHealth} and your health is ${myplayer.currentHealth}`)
                    logscreen.innerHTML += `<br>vampire steals 10% of your health. His health is ${opponent.currentHealth} and your health is ${myplayer.currentHealth}`

                } else if (opponentRace == "elf") {
                    // ELF - 30% chance to deflect the attack back to the opponent. The attacker takes damage equal to 50% of the original hit. The elf takes no damage.
                    chance30race = Math.floor(Math.random() * 100)
                        console.log(`---- °elf as opponent° ----`)
                        logscreen.innerHTML += `<br><strong>°elf as opponent°<strong>`
                        console.log(`START WITH: MY attack ${myplayer.attack}`) 
                        logscreen.innerHTML += `<br>START WITH: MY attack ${myplayer.attack}`

                        if (chance30race <= 30) {
                            console.log(`Luck is with your opponent Elf.`)
                            logscreen.innerHTML += `<br>Luck is with your opponent Elf.`

                            opponent.attack = myplayer.attack * 0.5  
                            myplayer.currentHealth -= opponent.attack

                            myplayer.attack = 0
                            opponent.currentHealth -= myplayer.attack
                            
                            console.log(`END WITH: ELF attack ${opponent.attack} and health ${opponent.currentHealth} | my attack ${myplayer.attack} and health ${myplayer.currentHealth}`)
                            logscreen.innerHTML += `<br>END WITH: ELF attack ${opponent.attack} and health ${opponent.currentHealth} | my attack ${myplayer.attack} and health ${myplayer.currentHealth}` 

                        } else {
                            console.log(`Elf had no luck, yay!`)
                            logscreen.innerHTML += `<br>Elf had no luck, yay!`

                            myplayer.attack

                            console.log(`END WITH: my attack ${myplayer.attack}`)
                            logscreen.innerHTML += `<br>END WITH: my attack ${myplayer.attack}`
                        }
                } 
    
            
        }  
        

        // ------------  ITEMS CHANGES FUNCTION  ------------
            // STAFF item change is inside heal()

        itemChanges(opponent) {
             function boots() {
                if (opponentItem == "boots" ) {
                    // 30% chance to dodge an attack
                    chance30boots = Math.floor(Math.random() * 100)
                    console.log(`---- °opponent with boots° ----`)
                    logscreen.innerHTML += `<br><strong>°opponent with boots°</strong>`

                    console.log(`Original attack: ${myplayer.attack}`)
                    logscreen.innerHTML += `<br>Original attack: ${Math.round(myplayer.attack * 10) / 10}`

                    if (chance30boots <= 30) {
                        console.log(`Luck is with your opponent's boots`)
                        logscreen.innerHTML += `<br>Luck is with your opponent's boots`

                        myplayer.attack = 0

                        console.log(`My attack to boots player: ${myplayer.attack}`)
                        logscreen.innerHTML += `<br>My attack to boots player: ${myplayer.attack}`

                    } else {
                        console.log(`Your opponent had no luck with boots, yay!`)
                        logscreen.innerHTML += `<br>Your opponent had no luck with boots, yay!`

                        opponent.attack

                        console.log(`My attack to boots player: ${myplayer.attack}`)
                        logscreen.innerHTML += `<br>My attack to boots player: ${myplayer.attack}`
                    } 
                }
             }    
            
                if (myplayerItem == "sword") {
                    // 30% more damage
                    console.log(`---- °attack with sword° ----`)
                    logscreen.innerHTML += `<br><strong>°attack with sword°</strong>`
                    console.log(`Original attack: ${myplayer.attack}`)
                    logscreen.innerHTML += `<br>Original attack: ${myplayer.attack}`

                    myplayer.attack += ((myplayer.attack / 100) * 30)

                    console.log(`New attack with sword: ${myplayer.attack}`)
                    logscreen.innerHTML += `<br>New attack with sword: ${myplayer.attack}`
                    boots()

                } else if (myplayerItem == "bow") {
                    //30% chance to attack twice
                    chance30item = Math.floor(Math.random() * 100)

                    console.log(`---- °attack with bow° ----`)
                    logscreen.innerHTML += `<br><strong>°attack with bow</strong>`
                    console.log(`Original attack: ${myplayer.attack}`)
                    logscreen.innerHTML += `<br>Original attack: ${myplayer.attack}`

                        if (chance30item <= 30) {
                            console.log(`Lucky Bow! Double attack.`)
                            logscreen.innerHTML += `<br>Lucky Bow! Double attack.`

                            myplayer.attack = myplayer.attack + myplayer.attack 

                            console.log(`My attack with bow: ${myplayer.attack}`)
                            logscreen.innerHTML += `<br>My attack with bow: ${myplayer.attack}`

                        } else {
                            console.log(`No luck this time.`)
                            logscreen.innerHTML += `<br>No luck this time.`

                            myplayer.attack

                            console.log(`My attack with bow: ${myplayer.attack}`)
                            logscreen.innerHTML += `<br>My attack with bow: ${myplayer.attack}`
                        }
                    boots()

                } else if (myplayerItem == "staff" || myplayerItem == "boots") {
                    boots()
                }
        } 

    }      





// ======================  BUTTON CREATE CHARACTER  ======================

    let player1
    let nameP1
    let raceP1
    let itemP1

    let player2
    let nameP2
    let raceP2
    let itemP2

    //health bars
    let hbP1 = document.getElementById("p1-health")
    let hbP2 = document.getElementById("p2-health")

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
        hbP1.style.width = player1.maxHealth + "%"
        hbP1.innerHTML = player1.maxHealth + "%"

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
        hbP2.style.width = player2.maxHealth + "%"
        hbP2.innerHTML = player2.maxHealth + "%"

        // ------------  INPUTS ON VS SCREEN  ------------
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


             // ------------  when button is clicked, change input for vs screen  ------------
            document.getElementById("players-inputs").style.visibility = "hidden"
            document.getElementById("players-avataraction").style.visibility = "visible"
        }

        
        // ------------  RACES AND ITEMS INFO ON VS SCREEN  ------------
            // races player 1
            switch (raceP1) {
                case "human":
                    raceinfoP1.innerHTML = "20% less damage"
                    imgP1.src = "img/human.png"
                    break;
                case "orc":
                    raceinfoP1.innerHTML = "40% more max health"
                    imgP1.src = "img/orc.png"
                    break;
                case "elf":
                    raceinfoP1.innerHTML = "<strong>30% chance</strong> to deflect back attack"
                    imgP1.src = "img/elf.png"
                    break;
                case "vampire":
                    raceinfoP1.innerHTML = "10% lifesteal"
                    imgP1.src = "img/vampire.png"
                    break;
            }

            // races player 2
            switch (raceP2) {
                case "human":
                    raceinfoP2.innerHTML = "20% less damage"
                    imgP2.src = "img/human.png"
                    break;
                case "orc":
                    raceinfoP2.innerHTML = "40% more max health"
                    imgP2.src = "img/orc.png"
                    imgP2.style.transform = "rotateY(180deg)"
                    break;
                case "elf":
                    raceinfoP2.innerHTML = "<strong>30% chance</strong> to deflect back attack"
                    imgP2.src = "img/elf.png"
                    imgP2.style.transform = "rotateY(180deg)"
                    break;
                case "vampire":
                    raceinfoP2.innerHTML = "10% lifesteal"
                    imgP2.src = "img/vampire.png"
                    break;
            }
        
            // items player 1
            switch (itemP1) {
                case "staff":
                    iteminfoP1.innerHTML = "20% increase in healing"
                    break;
                case "boots":
                    iteminfoP1.innerHTML = "<strong>30% chance</strong> to dodge an attack"
                    break;
                case "sword":
                    iteminfoP1.innerHTML = "30% more damage"
                    break;
                case "bow":
                    iteminfoP1.innerHTML = "<strong>30% chance</strong> to attack twice"
                    break;
            }

            // items player 2
            switch (itemP2) {
                case "staff":
                    iteminfoP2.innerHTML = "20% increase in healing"
                    break;
                case "boots":
                    iteminfoP2.innerHTML = "<strong>30% chance</strong> to dodge an attack"
                    break;
                case "sword":
                    iteminfoP2.innerHTML = "30% more damage"
                    break;
                case "bow":
                    iteminfoP2.innerHTML = "<strong>30% chance</strong> to attack twice"
                    break;
            }

       
         
        document.getElementById("forSmallScreen").style.visibility = "hidden"
    })






