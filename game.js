var health = 100;

function slap() {
    health--;
    //window.alert(health);
    var count = health + 1;
    document.getElementById("health").innerText = count;
}

slap();