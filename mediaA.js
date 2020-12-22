function mediaA(){

    var nota1 = parseFloat(document.getElementById("n1").value);
    var nota2 = parseFloat(document.getElementById("n2").value);
    var nota3 = parseFloat(document.getElementById("n3").value);
    var nota4 = parseFloat(document.getElementById("n4").value);

    var mediaA = (nota1 + nota2 + nota3 + nota4) / 4;

    alert("A sua Média é de: " + mediaA);
}