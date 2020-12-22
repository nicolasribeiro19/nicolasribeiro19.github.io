function mediaH(){
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var n3 = document.getElementById("n3").value;

    var mediaH = 3 / (1 / n1) + (1 / n2) + (1 / n3)
    
    alert("A sua Média é de: " + mediaH);
}