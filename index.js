
let homeScoreText = document.getElementById("homeScoreText")
let guestScoreText = document.getElementById("guestScoreText")

let homeCount = 0 
let guestCount = 0; 


function homeAddOne(){
    homeCount +=1
    homeScoreText.textContent = homeCount
}

function homeAddTwo(){
     homeCount +=2
    homeScoreText.textContent = homeCount
}

function homeAddThree(){
    homeCount += 3
    homeScoreText.textContent = homeCount
}






function guestAddOne(){
    guestCount +=1
    guestScoreText.textContent = guestCount
}

function guestAddTwo(){
    guestCount +=2
    guestScoreText.textContent = guestCount
}

function guestAddThree(){
    guestCount += 3
    guestScoreText.textContent = guestCount
}
