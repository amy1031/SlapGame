var health = 100;
var count;

function slap() {
    //window.alert(health);
    count = health--;
    update();
}

function update() {
    document.getElementById("health").innerText = count;
}

slap();