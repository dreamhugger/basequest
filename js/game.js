var atk = 0;
var def = 0;
var atributes = 2;
var atkradio = ["atk1","atk2","atk3","atk4","atk5"];
var defradio = ["def1","def2","def3","def4","def5"];
var signals = ["signal1","signal2","signal3","signal4"];
var enemyatk = 2;
var enemydef = 2;
var fim = 0;
var patk = 0;
var pdef = 0;
var eatk = 0;
var edef = 0;

function reiniciar() {
    document.getElementById("miss").hidden = true;
    document.getElementById("hit").hidden = true;
    document.getElementById("fb").hidden = true;
    document.getElementById("again").hidden = true;
    document.getElementById("spc").value++;
    patk = 0;
    pdef = 0;
    eatk = 0;
    edef = 0;
}
function reviver() {
    if(document.getElementById("hpp").value == 0 && document.getElementById("spc").value == 5) {
        document.getElementById("hpp").value = 3;
        document.getElementById("spc").value = 0;
        document.getElementById("again").hidden = false;
        document.getAnimations.getElementById("btspc").disabled = true;
    }
    else if(document.getElementById("hpp").value == 0) {
        document.getElementById("loss").hidden = false;
        fim = 1
    }
    else if(document.getElementById("hpe").value == 0) {
        document.getElementById("win").hidden = false;
        fim = 1
    }
}
function dado(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
function menos_ataque() {
    if(atk>0) {
        document.getElementById(atkradio[atk]).checked = false;
        atk--;
        atributes--;
    }
    else{
        alert("Valor mínimo de 1.");
    }
}
function mais_ataque() {
    if(atributes<6) {
        atk++;
        atributes++;
        document.getElementById(atkradio[atk]).checked = true;
    }
    else{
        alert("Máximo de 6 atributos.");
    }
}
function menos_defesa() {
    if(def>0) {
        document.getElementById(defradio[def]).checked = false;
        def--;
        atributes--;
    }
    else{
        alert("Valor mínimo de 1.");
    }
}
function mais_defesa() {
    if(atributes<6) {
        def++;
        atributes++;
        document.getElementById(defradio[def]).checked = true;
    }
    else{
        alert("Máximo de 6 atributos.");
    }
}
function pontos() {
    if(atributes==6) {
        document.getElementById("points").hidden = true;
        document.getElementById("btatk").disabled = false;
        document.getElementById("btatk").hidden = false;
        document.getElementById("btspc").hidden = false;
        for(i=0;i<5;i++) {
            document.getElementById(signals[i]).hidden = true;
        }
    }
    else {
        alert("Distribua seus 4 pontos antes de atribuir.")
    }
}
function ataque() {
    reiniciar()
    for(i=-1;i<atk;i++) {
        var inc = dado(1,7);
        patk = patk + inc;
    }
    for(i=-1;i<def;i++) {
        var inc = dado(1,7);
        pdef = pdef + inc;
    }
    for(i=-1;i<enemyatk;i++) {
        var inc = dado(1,7);
        eatk = eatk + inc;
    }
    for(i=-1;i<enemydef;i++) {
        var inc = dado(1,7);
        edef = edef + inc;
    }
    var damp = eatk - pdef;
    var dame = patk - edef;
    if(damp>0) {
        document.getElementById("hpp").value = document.getElementById("hpp").value - damp;
    }
    if(dame>0) {
        document.getElementById("hpe").value = document.getElementById("hpe").value - dame;
        document.getElementById("hit").hidden = false;
    }
    else {
        document.getElementById("miss").hidden = false;
    }
    reviver()
    if(fim==1) {
        document.getElementById("btatk").disabled = true;
        document.getElementById("spc").value = 0;
        document.getElementById("btspc").disabled = true;

    }
    if(document.getElementById("spc").value == 5) {
        document.getElementById("btspc").disabled = false;
    }
}
function especial() {
    reiniciar()
    for(i=-1;i<def;i++) {
        var inc = dado(1,7);
        pdef = pdef + inc;
    }
    for(i=-1;i<enemyatk;i++) {
        var inc = dado(1,7);
        eatk = eatk + inc;
    }
    var damp = eatk - pdef;
    if(damp>-1) {
        document.getElementById("hpp").value = document.getElementById("hpp").value - damp;
    }
    document.getElementById("hpe").value = document.getElementById("hpe").value - 3;
    if(document.getElementById("hpp").value == 0) {
        document.getElementById("btatk").disabled = true;
        document.getElementById("loss").hidden = false;
        document.getElementById("bspc").disabled = true;
    }
    else if(document.getElementById("hpe").value == 0) {
        document.getElementById("btatk").disabled = true;
        document.getElementById("win").hidden = false;
        document.getElementById("bspc").disabled = true;
    }
}