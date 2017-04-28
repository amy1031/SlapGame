function AlienService() {
    // PRIVATE
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

    var aliens = [];
    aliens.push(new Alien("Mark", 1, 5, 10));
    aliens.push(new Alien("Amy", 1, 2, 5));
    aliens.push(new Alien("Jake", 5, 15, 25));

    function getAlien(targetName) {
    for (var i = 0; i < aliens.length; i++) {
      var alien = aliens[i]
      if(alien.name == targetName){
        return alien
            }
        }
    }

    function Item(name, value, description) {
        this.name = name;
        this.value = value;
        this.description = description;
    };

    var modifiers = {};
    modifiers.boilingWater = new Item("Boiling Water", 2, "Cook the alien scum faster!");
    modifiers.grind = new Item("Grind", 4, "Turn the alien course!");
    modifiers.sugar = new Item("Sugar", 10, "Aliens hate sugar!");

    function giveItem(targetPlayer, type) {
        targetPlayer.items[type] = modifiers[type]
        // console.log(targetPlayer.items)
    }


    // PUBLIC
    this.attack = function attack(targetPlayer, attackType) { 
        //window.alert(health);
        var mod = calcItems(targetPlayer)
        targetPlayer.health = targetPlayer.health - (targetPlayer.attacks[attackType]+mod);
        targetPlayer.hits++;
        update(targetPlayer);
    }

    this.getAlien = function(targetName) {
        return getAlien(targetName)
    }

    this.calcItems = function calcItems(targetPlayer) {
    var total = 0;
    for(var mod in targetPlayer.items) {
        total += targetPlayer.items[mod].value;
    } 
    console.log(total)
    return total;
}
}