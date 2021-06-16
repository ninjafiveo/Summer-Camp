//characters
var carterN = [
    {
        'name': 'Carter Nealy',
        'ability': '5', //Pyrokinesis
        'familier': '3', //Mini Dragon
        'health': 100,
    }
]

var faeT = [
    {
        'name': 'Fae Turner',
        'ability': '2', //Congure Dead
        'familier': '6', //Wolf
        'health': 100,
    }
]
//Character Selcetion

function CN(){
    document.getElementById('Beginning').style.display = "none"; 
    document.getElementById('firstChallenge').style.display ="block";
    document.getElementById('continue')
    document.getElementById('fightText').style.display = "none"
}

function FT(){

    document.getElementById('Beginning').style.display = "none"; 
    document.getElementById('firstChallenge').style.display = "block";
    document.getElementById('fightText').style.display = "none"
}

var nymphMultiplier;
var heroMultiplier;
var nymphHealth = 50;
var heroHealth = 100;

function fight() {
    
nymphMultiplier = Math.floor(Math.random()*10)
heroHealth = heroHealth - nymphMultiplier;
document.getElementById('fightText').style.display = "block"
document.getElementById('fightTextOne').innerHTML = `Your Hero has ${heroHealth} health left`;
    if (heroHealth <= 0 ){
        document.getElementById('fightTextOne').innerHTML = 'Your Hero Has Perished'
    }

    heroMultiplier = Math.floor(Math.random()*10)
    nymphHealth = nymphHealth - heroMultiplier;
    document.getElementById('fightTextTwo').innerHTML = `The Nymph has ${nymphHealth} health left`;
        if (nymphHealth <= 0 ){
            document.getElementById('fightTextTwo').innerHTML = 'The Nymph Has Perished, continue on your way'
            document.getElementById('fightTextOne').style.display = "none";
            document.getElementById('firstChallenge').style.display = "none";
            document.getElementById('threeDoors').style.display = "block";
            document.getElementById('fightText').style.display = "none"
        }
document.getElementById('Ask').style.display = "none"

}     

//fighting alternative

function ask(){
    document.getElementById('firstChallenge').style.display = "none";
     document.getElementById('asking').style.display = "block";
     document.getElementById('threeDoors').style.display = "block";
     document.getElementById('fightText').style.display = "none"
}


//archways 

 function archOne() {
     document.getElementById('one').style.display = "block";
     document.getElementById('asking').style.display = "none";
    document.getElementById('threeDoors').style.display = "none";
    document.getElementById('fightTextOne').style.display = "none";
    document.getElementById('fightTextTwo').style.display = "none";
 }
 function archTwo() {
    document.getElementById('two').style.display = "block";
    document.getElementById('asking').style.display = "none";
   document.getElementById('threeDoors').style.display = "none";
   document.getElementById('fightTextOne').style.display = "none";
   document.getElementById('fightTextTwo').style.display = "none";
}
function archThree() {
    document.getElementById('three').style.display = "block";
    document.getElementById('asking').style.display = "none";
   document.getElementById('threeDoors').style.display = "none";
   document.getElementById('fightTextOne').style.display = "none";
   document.getElementById('fightTextTwo').style.display = "none";
}
      

//end fight

var heroOneHealth = 100;
var villainHealth = 100;
var heroOneMultiplier;
var villainMulitplier;



function endFightBF(){
    document.getElementById('finalBattleAgain').style.display="block"
    document.getElementById('finalBattle').style.display="block"
    document.getElementById('endButtonOne').style.display="none"
    document.getElementById('three').style.display="none"
}



 function endFight(){
    villainMultiplier = Math.floor(Math.random()*10)
    heroOneHealth = heroOneHealth - villainMultiplier;
    document.getElementById('heroOne').innerHTML = `Your Hero has ${heroOneHealth} health left`;
        if (heroOneHealth <= 0 ){
            document.getElementById('heroOne').innerHTML = 'Your Hero Has Perished'
            document.getElementById('villain').style.display="none"
            document.getElementById('endFight').style.display="none"
            document.getElementById('endBattleText').style.display="none"
        }
    
        heroOneMultiplier = Math.floor(Math.random()*10)
        villainHealth = villainHealth - heroOneMultiplier;
        document.getElementById('villain').innerHTML = `Your Villain has ${villainHealth} health left`;

            if (villainHealth <= 0 ){
                document.getElementById('villain').innerHTML = 'Your Villain Has Perished'
                document.getElementById('heroOne').style.display="none"
                document.getElementById('endFight').style.display="none"
                document.getElementById('endBattleText').style.display="none"
            }


document.getElementById('threeDoors').style.display = "none";

 }
