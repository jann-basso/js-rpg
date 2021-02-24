document.getElementById("players-avataraction").style.display = "none"

let createCharacters = document.getElementById("p1-p2-createchar")
createCharacters.addEventListener("click", () => {

    

// ------------  CREATE CHARACTERS  ------------ 
    function Player (name, race, item) {
        this.name = name;
        this.race = race;
        this.item = item;
        this.currenthealth = 100;
        this.maxHealth = 100;
        
        this.min = 3;
        this.maxDamage = 20;
        this.maxHealing = 30;

        this.heal = function(){};

        this.damage = function(){};

        this.totalDamage = this.damage();

        this.displayChar = function(){
            return console.log(`My name is ${this.name} I am a ${this.race}, I wield a ${this.item}, my total health points are ${this.maxHealth}`);
        };
    }
    
    // define player 1
    let nameP1 = document.getElementById("p1-input-name").value
    let raceP1 = document.getElementById("p1-input-race").value
    let itemP1 = document.getElementById("p1-input-item").value

    let player1 = new Player (
        nameP1,
        raceP1,
        itemP1
    )
    player1.displayChar()
    
    // define player 2
    let nameP2 = document.getElementById("p2-input-name").value
    let raceP2 = document.getElementById("p2-input-race").value
    let itemP2 = document.getElementById("p2-input-item").value
    
    let player2 = new Player (
        nameP2,
        raceP2,
        itemP2
    )
    player2.displayChar()
    
    
    
// ------------  SHOW INPUTS ON VS SCREEN  ------------ 
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
    
    document.getElementById("players-inputs").style.display = "none"
    document.getElementById("players-avataraction").style.display = "block"


})


