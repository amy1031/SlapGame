function AlienController() {
    //PRIVATE
    var alienService = new AlienService();

    var strength = ["Strong", "Medium", "Weak"];
    var randomStrength = strength[Math.floor(Math.random() * strength.length)];


    //PUBLIC

    // Update the screen
    this.update = function update(targetPlayer) {
        //var targetAlien = alienService.getAlien(targetPlayer);
        document.getElementById("health").innerText = `Health: ${targetPlayer.health}`;
        targetPlayer.health = targetPlayer.health;
        document.getElementById("hits").innerText = targetPlayer.hits;

        if (targetPlayer.health <= 0) {
         document.getElementById("health").innerText = targetPlayer.name + " coffee is ready! Coffee strength is " + randomStrength;
        }
    }


    // Attack buttons
    this.attack = function attack(targetPlayer, attackType) { 
        //window.alert(health);
        var targetAlien = alienService.getAlien(targetPlayer);

        var mod = alienService.calcItems(targetAlien);
        //debugger
        targetAlien.health = targetAlien.health - (targetAlien.attacks[attackType] + mod);
        targetAlien.hits++;
        this.update(targetAlien);
    }


    // Items buttons
    this.giveItem = function giveItem(targetPlayer, type) {
        var targetAlien = alienService.getAlien(targetPlayer);
        targetAlien.items[type] = alienService.getItems[type]
    }

}