let b = document.getElementById('bank-name')
let o = document.getElementById('owner-name')
let c = document.getElementById('card-no')
let m = document.getElementById('card-expire')
let v = document.getElementById('cvc-code')
b.addEventListener("keydown", function () {
    document.getElementById("bank-name-show").innerHTML = b.value;
});
o.addEventListener("keydown", function () {
    document.getElementById("owner-name-show").innerHTML = o.value;
});
c.addEventListener("keydown", function () {
    document.getElementById("card-no-show").innerHTML = c.value;
});
m.addEventListener("keydown", function () {
    document.getElementById("d").innerHTML = m.value;
});
v.addEventListener("keydown", function () {
    document.getElementById("cvc-code-show").innerHTML = v.value;
});