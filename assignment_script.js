var a = 4;

function myFunction() {
    var text = document.getElementById("result_1").innerHTML;
    alert("The first result is " + text);
    
    document.getElementById("result_2").innerHTML = a*a
}