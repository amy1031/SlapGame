function AlienController() {
    //PRIVATE
    var alienService = new AlienService();
    
    var strength = ["Strong", "Medium", "Weak"];
    var randomStrength = strength[Math.floor(Math.random() * strength.length)];


    //PUBLIC
    this.update = function update(targetPlayer) {
        document.getElementById("health").innerText = targetPlayer.health;
        targetPlayer.health = targetPlayer.health;
        document.getElementById("hits").innerText = targetPlayer.hits;

        if (targetPlayer.health <= 0) {
         document.getElementById("health").innerText = targetPlayer.name + " coffee is ready! Coffee strength is " + randomStrength;
        }
    }
}