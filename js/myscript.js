const fixedfare = 0.21;

function traincalc() {
    var distance = document.getElementById("distance").value;
    var age = document.getElementById("age").value;
    var price;
    var total;
    price = distance * fixedfare;
    if(age < 18) {
        total = price - (price * 0.2);
    }
    else if (age > 65) {
        total = price - (price * 0.4);
    }
    else{
        total = price;
    }
    total = total.toFixed(2);
    document.getElementById("result").innerHTML = total;
}