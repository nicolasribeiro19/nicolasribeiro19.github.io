function mediaP(){
    
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var n3 = document.getElementById("n3").value;
    var n4 = document.getElementById("n4").value;
    var p1 = document.getElementById("p1").value;
    var p2 = document.getElementById("p2").value;
    var p3 = document.getElementById("p3").value;
    var p4 = document.getElementById("p4").value;

    var n = 10;

    var mediaP = (n1 * p1) + (n2 * p2) + (n3 * p3) + (n4 * p4) / n;

    alert("A sua Média é de: " + mediaP);
}

        