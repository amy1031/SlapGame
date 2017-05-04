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

    var items = {
        boilingWater: new Item("Boiling Water", 2, "Cook the alien scum faster!"),
        grind: new Item("Grind", 4, "Turn the alien coarse!"),
        sugar: new Item("Sugar", 10, "Aliens hate sugar!")
    };

    // Loop through items
    function getItem(targetName, itemTypes) {
        for (var i = 0; i < aliens.length; i++) {
            var alien = aliens[i];
            if(alien.name == targetName) {
                alien.items = items[itemTypes];
                console.log(alien)
                return
            }
        }
    }


    // PUBLIC
    this.getAlien = function(targetName) {
        return getAlien(targetName)
    }


    // Calculate the extra item value and pass it to the controller
    this.calcItems = function calcItems(targetAlien) {
       //debugger
        var total = 1;
            if(targetAlien.items == items.boilingWater) {
                total += items.boilingWater.value;
            }
            if(targetAlien.items == items.grind) {
                total += items.grind.value;
            }
            if(targetAlien.items == items.sugar) {
                total += items.sugar.value;
            }
        return total;
    }


    // Get Items for the controller
    this.getItem = function(targetName, itemType) {
        return getItem(targetName, itemType)
    }

    this.clearMods = function(targetName) {
        //debugger
        var target = getAlien(targetName.name)
        target.items = {};
    }

    // this.giveItem = function giveItem(targetPlayer, type) {
    //     targetPlayer.items[type] = modifiers[type]
    //     // console.log(targetPlayer.items)
    // }
}