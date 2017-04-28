//var health = 100;
//var name = document.getElementById("name").innerText = "Alien";
//var hits = 0;


//service ADDED
function Alien(name, roast, burn, tamper) {
    this.name = name;
    this.health = 100;
    this.hits = 0;
    this.attacks = {
        roast: roast,
        burn: burn,
        tamper: tamper
    };
    this.items = {};
    aliens.push(this);
};

//service ADDED
function Item(name, value, description) {
    this.name = name;
    this.value = value;
    this.description = description;

};

//service ADDED
function giveItem(targetPlayer, type){
    targetPlayer.items[type] = modifiers[type]
   // console.log(targetPlayer.items)
}

//service ADDED
var aliens = [];
var mark = new Alien("Mark", 1, 5, 10);
var amy = new Alien("Amy", 1, 2, 5);
var jake = new Alien("Jake", 5, 15, 25);
//aliens.push(new Alien("Jake", 5, 15, 25))


//service ADDED
var modifiers = {};
modifiers.boilingWater = new Item("Boiling Water", 2, "Cook the alien scum faster!");
modifiers.grind = new Item("Grind!", 4, "Turn the alien course!");
modifiers.sugar = new Item("Sugar", 10, "Aliens hate sugar!");

//controller ADDED
function attack(targetPlayer, attackType) { 
    //window.alert(health);
    var mod = calcItems(targetPlayer)
    targetPlayer.health = targetPlayer.health - (targetPlayer.attacks[attackType]+mod);
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

//controller ADDED
var strength = ["Strong", "Medium", "Weak"];
var randomStrength = strength[Math.floor(Math.random() * strength.length)];

//controller ADDED
function update(targetPlayer) {
    document.getElementById("health").innerText = targetPlayer.health;
    targetPlayer.health = targetPlayer.health;
    document.getElementById("hits").innerText = targetPlayer.hits;

    if (targetPlayer.health <= 0) {

        document.getElementById("health").innerText = targetPlayer.name + " coffee is ready! Coffee strength is " + randomStrength;
    }
}

//game service ADDED
function calcItems(targetPlayer) {
    var total = 0;
    for(var mod in targetPlayer.items) {
        total += targetPlayer.items[mod].value;
    } 
    console.log(total)
    return total;
} 

