 // =============================== FUNCTIONS TO AUTOMATE BUTTONS ===============================

// ------------  INACTIVE PLAYER ------------ 
// btns to use when calling function
let btnsP1 = document.getElementById("p1-btns")
let btnsP2 = document.getElementById("p2-btns")
let btnHitP1 = document.getElementById("p1-btnhit")
let btnHitP2 = document.getElementById("p2-btnhit")
let btnhealP1 = document.getElementById("p1-btnheal")
let btnhealP2 = document.getElementById("p2-btnheal")
let btnyieldP1 = document.getElementById("p1-btnyield")
let btnyieldP2 = document.getElementById("p2-btnyield")

// function
function inactivePlayer(groupbtnA, hitbtnA, healbtnA, yieldbtnA, groupbtnB, hitbtnB, healbtnB, yieldbtnB ) { 
    // inactive (has just played)
    groupbtnA.style.opacity = "50%"
    hitbtnA.disabled = true
    healbtnA.disabled = true
    yieldbtnA.disabled = true

    // active (opponent's turn to play)
    groupbtnB.style.opacity = "100%"
    hitbtnB.disabled = false
    healbtnB.disabled = false
    yieldbtnB.disabled = false   
}


// ------------  CLEAR VS SCREEN ------------ 
function clearVSscreen() {
    msgP1.innerHTML = " "
    raceactionP1.innerHTML = " "
    itemactionP1.innerHTML = " "
    msgP2.innerHTML = " "
    raceactionP2.innerHTML = " "
    itemactionP2.innerHTML = " "
}

// ------------  HEALTH BAR ------------ 
function healthBar() {
    hbP1.style.width = player1.currentHealth + "%"
    hbP1.innerHTML = Math.round((player1.currentHealth)*10)/10 + "%"
    hbP2.style.width = player2.currentHealth + "%"
    hbP2.innerHTML = Math.round((player2.currentHealth)*10)/10 + "%"
}

// ------------  TEXT HIGHLIGHTING ------------ 
function highlightFor(element){
    let color1 = 'rgb(' + 255 + ',' + 255 + ',' + 255 + ', ' + 0.2 + ')';
    let color2 = 'rgb(' + 147 + ',' + 13 + ',' + 173 + ')';

    let t = setTimeout(function(){
       element.style.backgroundColor = color1
    },(100));
    let t2 = setTimeout(function(){
        element.style.backgroundColor = color2
     },(200));
     let t3 = setTimeout(function(){
        element.style.backgroundColor =  color1
     },(300));
     let t4 = setTimeout(function(){
        element.style.backgroundColor = color2
     },(400));
     let t5 = setTimeout(function(){
        element.style.backgroundColor =  color1
     },(500));
}


// ------------  LUCKY TEXT (chances) ON VS SCREEN ------------ 
let luckyRace
let luckyRaceB
let luckyItemA
let luckyItemB
let attack

function luckText() {
    // chance race
    if (opponent.race == "elf") { // when button clicked, check if opponent had luck
        if (chance30race <= 30) {
            luckyRace.innerHTML = "got lucky"
            attackopponent.innerHTML = `Attack: ${opponent.attack}` 
            highlightFor(attackopponent)
        } else {
            luckyRace.innerHTML = "no luck"
        } 
    }
    
    
    // chance item
    if (myplayer.item == "bow") {
         if (chance30item <= 30) {
            luckyItemA.innerHTML = "lucky!"
        } else {
            luckyItemA.innerHTML = "no luck"
        }
    }
    
    // chance if opponent item == boots
        if (opponent.item == "boots") {
            if (chance30boots <= 30) {
                luckyItemB.innerHTML = "got lucky" 
            } else {
                luckyItemB.innerHTML = "no luck" 
            }    
        } 
}

// GETTING CURRENT TIME FOR LOGSCREEN
function currentTime() {
    let d = new Date()
    let hour = d.getHours()
    let minutes = d.getMinutes()
    let sec = d.getSeconds()
    return actualTime = `${hour}:${minutes}:${sec}`
}


 // ======================================= BUTTONS =====================================

 // ======================  HIT BUTTON ======================
    // ------------  PLAYER 1  ------------  
    btnHitP1.addEventListener("click", () => {   
        clearVSscreen()
        inactivePlayer(btnsP1, btnHitP1, btnhealP1, btnyieldP1, btnsP2, btnHitP2, btnhealP2, btnyieldP2)

        console.log(`************** ${player1.name} hits ${player2.name} **************`)
        logscreen.innerHTML += `<br><br> ************** ${player1.name.toUpperCase()} hits ${player2.name.toUpperCase()} ************** <span>${currentTime()}</span>`

        myplayer = player1
        opponent = player2
        
        // race change adaptations
        myplayerRace = player1.race
        opponentRace = player2.race
        myplayer.raceChanges(opponent)

        // items change adaptations
        myplayerItem = player1.item
        opponentItem = player2.item
        myplayer.itemChanges(opponent) 

        // lucky texts
        luckyRace = raceactionP2
        luckyItemA = itemactionP1
        luckyItemB = itemactionP2
        attackopponent = msgP2
        luckText()

        // attack 
        player1.damage(player2) 
        msgP1.innerHTML = `Attack: ${myplayer.attack}`
        highlightFor(msgP1)

            
        // health bar
        healthBar()
    })
    

    // ------------  PLAYER 2  ------------  
    btnHitP2.addEventListener("click", () => {
        clearVSscreen()
        inactivePlayer(btnsP2, btnHitP2, btnhealP2, btnyieldP2, btnsP1, btnHitP1, btnhealP1, btnyieldP1)
       
        console.log(`************** ${player2.name} hits ${player1.name} **************`)
        logscreen.innerHTML += `<br><br> ************** ${player2.name.toUpperCase()} hits ${player1.name.toUpperCase()} ************** <span>${currentTime()}</span>`

        myplayer = player2
        opponent = player1

        // race change adaptations
        myplayerRace = player2.race
        opponentRace = player1.race
        myplayer.raceChanges(opponent)
            
        // items change adaptations
        myplayerItem = player2.item
        opponentItem = player1.item
        myplayer.itemChanges(opponent)

        // lucky texts
        luckyRace = raceactionP1
        luckyItemA = itemactionP2
        luckyItemB = itemactionP1
        attackopponent = msgP1
        luckText()           

        // attack 
        player2.damage(player1)
        msgP2.innerHTML = `Attack: ${myplayer.attack}`
        highlightFor(msgP2)
       
        // health bar
        healthBar()
    })
   

    
// ======================  HEAL BUTTON ======================

     // ------------  PLAYER 1  ------------  
    counter1 = 3
    btnhealP1.addEventListener("click", () => { 
        
        if(player1.currentHealth == player1.maxHealth) {
            alert("Your health is already full, try hitting your opponent!")
            
        } else {
            let countP1 = document.getElementById("count-p1")
            function disableHeal1() { // disable heal button after 3 uses
                counter1--
                countP1.innerHTML = `${counter1}`
                if (counter1 < 0) {
                    alert("you don't have more healing powers")
                    btnhealP1.disabled = true
                    btnhealP1.style.opacity = "50%"
                    countP1.innerHTML = 0
    
                } else {
                    clearVSscreen()
                    inactivePlayer(btnsP1, btnHitP1, btnhealP1, btnyieldP1, btnsP2, btnHitP2, btnhealP2, btnyieldP2)
    
                    console.log(`************** ${player1.name} healing **************`)
                    logscreen.innerHTML += `<br><br> ************** ${player1.name.toUpperCase()} healing ************** <span>${currentTime()}</span>`
            
                    // heal
                    player1.heal()
                    msgP1.innerHTML = `Healing: ${player1.healing}`
                    highlightFor(msgP1)
                    
                    // health bar
                    healthBar()
                }
            }
            disableHeal1() 
        }
     
        
    })
   
    
    // ------------  PLAYER 2  ------------  
    counter2 = 3
    btnhealP2.addEventListener("click", () => {   
        
        if(player2.currentHealth == player2.maxHealth) {
            alert("Your health is already full, try hitting your opponent!")

        } else {
            let countP2 = document.getElementById("count-p2")
            function disableHeal2() { // disable heal button after 3 uses
                counter2--
                countP2.innerHTML = `${counter2}`
                if (counter2 < 0) {
                    alert("you don't have more healing powers")
                    btnhealP2.disabled = true
                    btnhealP2.style.opacity = "50%"
                    countP2.innerHTML = 0

                } else {
                    clearVSscreen()
                    inactivePlayer(btnsP2, btnHitP2, btnhealP2, btnyieldP2, btnsP1, btnHitP1, btnhealP1, btnyieldP1)
            
                    console.log(`************** ${player2.name} healing **************`)
                    logscreen.innerHTML += `<br><br> ************** ${player2.name.toUpperCase()} healing ************** <span>${currentTime()}</span>`
            
                    // heal
                    player2.heal()
                    msgP2.innerHTML = `Healing: ${player2.healing}`
                    highlightFor(msgP2)
            
                    // health bar
                    healthBar()
                }
            } 
            disableHeal2()
        }

    }) 


// ======================  HEAL BUTTON ====================== 

    // ------------  PLAYER 1  ------------  
    btnyieldP1.addEventListener("click", () => { 
        logscreen.innerHTML += `<br>GAME OVER ! ${player1.name.toUpperCase()} gave up. <br>Congrats ${player2.name.toUpperCase()}, you won!`
        endgame(`<br>${player1.name.toUpperCase()} gave up. <br>Congrats ${player2.name.toUpperCase()}, you won!`)
    })

    // ------------  PLAYER 1  ------------  
    btnyieldP2.addEventListener("click", () => {
        logscreen.innerHTML += `<br>GAME OVER ! ${player2.name.toUpperCase()} gave up. <br>Congrats ${player1.name.toUpperCase()}, you won!`
        endgame(`<br>${player2.name.toUpperCase()} gave up. <br>Congrats ${player1.name.toUpperCase()}, you won!`)
    })