//var health = 100;
//var name = document.getElementById("name").innerText = "Alien";
//var hits = 0;

function Alien(name, slap, punch, kick){
    this.name = name;
    this.img = "https://robohash.org/" +name+"?set=set2";
    this.health = 100;
    this.hits = 0;
    this.attacks = {
        slap: slap,
        punch: punch,
        kick: kick
    }
}

var mark = new Alien("Mark", 1, 5, 10)
var amy = new Alien("Amy", 1, 2, 5)


function attack(targetPlayer, attackType) { 
    //window.alert(health);
    targetPlayer.health = targetPlayer.health - targetPlayer.attacks[attackType];
    targetPlayer.hits++;
    update(targetPlayer);
}

// function punch(targetPlayer) {
//     targetPlayer.health = targetPlayer.health - 5;
//     targetPlayer.hits++;
//     update();
// }

// function kick(targetPlayer) {
//     targetPlayer.health = targetPlayer.health - 10;
//     targetPlayer.hits++;
//     update();
// }

function update(targetPlayer) {
    document.getElementById("health").innerText = targetPlayer.health;
    targetPlayer.health = targetPlayer.health;
    document.getElementById("hits").innerText = targetPlayer.hits;

    if (targetPlayer.health <= 0) {
        document.getElementById("health").innerText = targetPlayer.name + " is Dead!";
    }
}

