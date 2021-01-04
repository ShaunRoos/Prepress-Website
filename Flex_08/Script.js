function bindingChange(e) {
    document.getElementById("num1").value = e.target.value;
}

function caliperChange(e) {
    document.getElementById("num2").value = e.target.value;
}

function myFunction() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;

    if (num1 == 0) {
        var answer = Number(num1) + (num3 / 4) * Number(num2);
        document.getElementById("answer").innerHTML = "The Shingeling is : " + answer + " mm";
    }
    else {
        var answer = Number(num1) + (num3 / 2) * Number(num2);
        document.getElementById("answer").innerHTML = "The Spine is : " + answer + " mm";
    }

}