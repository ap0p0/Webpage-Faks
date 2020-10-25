function DenesnaData() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd
    < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    today = mm + '-' + dd + '-' + yyyy;
    alert(today);
}

function calculateArea() {
    var sideA = parseFloat(document.getElementById("sideA").value);
    var sideB = parseFloat(document.getElementById("sideB").value);
    var sideC = parseFloat(document.getElementById("sideC").value);
    var perimeter = (sideA + sideB + sideC) / 2;
    var area = Math.sqrt(perimeter * ((perimeter - sideA) * (perimeter - sideB) * (perimeter - sideC)));
    document.getElementById("AreaCalculated").innerHTML = "the area of the triangle is " + area +  " cm";
}

function Magic(id) {
    var element = document.getElementById(id);            
    var textNode = document.getElementById("MagicResult");            
    textNode.innerHTML = element.value;
    var text = textNode.innerHTML;

    setInterval(function () {
        text = text[text.length - 1] + text.substring(0, text.length - 1);            
        document.getElementById("MagicResult").innerHTML = text;
    }, 200);
}
function guessNumber() {
    var generated = Math.ceil(Math.random() * 10);
    var enterNum = prompt('Guess the number between 1 and 10');
    if (enterNum == generated)
        alert('Matched');
    else
        alert('Not matched, the number was ' + generated);
}