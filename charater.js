document.getElementById("players-avataraction").style.visibility = "hidden" 

/* document.getElementById("players-inputs").style.visibility = "hidden"
document.getElementById("players-avataraction").style.visibility = "visible"  */
 
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
        this.currentHealth = this.currentHealth - hitPlayer
        console.log(`random hit is ${hitPlayer} / current health is now ${this.currentHealth}`)
        
        if(this.currentHealth <= 0) {
            this.currentHealth = 0
            logscreen.innerHTML += `<br>Game over! ${this.name} is dead.`
        } 
    };

    this.totalDamage = this.damage();

/*     this.adaptItem = function() {
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
    } */

    this.displayChar = function(){
        return console.log(`My name is ${this.name} I am a ${this.race}, I wield a ${this.item}, my total health points are ${this.maxHealth}`);
    };
    
    // place max health to begin game
    document.getElementById("p1-health").style.width = this.maxHealth + "%"
    document.getElementById("p2-health").style.width = this.maxHealth + "%"
}


let player1
let nameP1
let raceP1
let itemP1

let player2
let nameP2
let raceP2
let itemP2

// ------------  BUTTON CREATE CHARACTER  ------------
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
        alert("please fill in all the fields")
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
})









