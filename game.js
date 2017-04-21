var health = 100;
var count;

function slap() {
    //window.alert(health);
    count = health - 1;
    update();
}

function punch() {
    count = health - 5;
    update();
}

function kick() {
    count = health - 10;
    update();
}

function update() {
    document.getElementById("health").innerText = count;
    health = count;
}
