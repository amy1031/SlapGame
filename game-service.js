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
        this.items = [];
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
    function getItem(itemType) {
    for (var i = 0; i < items.length; i++) {
      var item = items[i]
      if(item.name == itemType){
        return item
            }
        }
    }


    // PUBLIC
    this.getAlien = function(targetName) {
        return getAlien(targetName)
    }


    // Calculate the extra item value and pass it to the controller
    this.calcItems = function calcItems(targetName) {
        var total = 0;
        for (var i = 0; i < targetName.items.length; i++) {
            //debugger
            var mod = targetName.items[i];
            total += mod.value;
            } 
        return total;
    }


    // Get Items for the controller
    this.getItem = function(targetName) {
        return getItem(targetName)
    }



    // this.giveItem = function giveItem(targetPlayer, type) {
    //     targetPlayer.items[type] = modifiers[type]
    //     // console.log(targetPlayer.items)
    // }
}