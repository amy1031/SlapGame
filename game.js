var health = 100;
var name = document.getElementById("name").innerText = "Alien";
var hits = 0;
var count;

function slap() {
    //window.alert(health);
    count = health - 1;
    hits++;
    update();
}

function punch() {
    count = health - 5;
    hits++;
    update();
}

function kick() {
    count = health - 10;
    hits++;
    update();
}

function update() {
    document.getElementById("health").innerText = count;
    health = count;
    document.getElementById("hits").innerText = hits;
}
