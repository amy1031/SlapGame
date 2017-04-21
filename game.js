var health = 100;
var name = document.getElementById("name").innerText = "Alien";
var hits = 0;

function slap() {
    //window.alert(health);
    health = health - 1;
    hits++;
    update();
}

function punch() {
    health = health - 5;
    hits++;
    update();
}

function kick() {
    health = health - 10;
    hits++;
    update();
}

function update() {
    document.getElementById("health").innerText = health;
    health = health;
    document.getElementById("hits").innerText = hits;

    if (health <= 0) {
        document.getElementById("health").innerText = name + " is Dead!";
    }
}
