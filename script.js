function clearScreen() {
    document.getElementById("display").value = "";
}
function fun(){
    var a = document.getElementById("display").value;
    var r = 1 / a;
    document.getElementById("display").value = r;
}
function display(value) {
    document.getElementById("display").value += value;
}
function calculate() {
    var a = document.getElementById("display").value;
    var b = eval(a);
    document.getElementById("display").value = b;
}
function del() {
    var input = document.getElementById("display");
    input.value = input.value.substring(0, input.value.length-1);
}