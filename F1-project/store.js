var quantidade = document.getElementById("quantidades");
var total = document.getElementById("total");

var precoproduto1 = parseFloat(document.getElementById("precoproduto1").value);
var precoproduto2 = parseFloat(document.getElementById("precoproduto2").value);
var precoproduto3 = parseFloat(document.getElementById("precoproduto3").value);
var precoproduto4 = parseFloat(document.getElementById("precoproduto4").value);
var precoproduto5 = parseFloat(document.getElementById("precoproduto5").value);
var precoproduto6 = parseFloat(document.getElementById("precoproduto6").value);
var precoproduto7 = parseFloat(document.getElementById("precoproduto7").value);
var precoproduto8 = parseFloat(document.getElementById("precoproduto8").value);

var produto1 = parseFloat(document.getElementById("produto1").value);
var produto2 = parseFloat(document.getElementById("produto2").value);
var produto3 = parseFloat(document.getElementById("produto3").value);
var produto4 = parseFloat(document.getElementById("produto4").value);
var produto5 = parseFloat(document.getElementById("produto5").value);
var produto6 = parseFloat(document.getElementById("produto6").value);
var produto7 = parseFloat(document.getElementById("produto7").value);
var produto8 = parseFloat(document.getElementById("produto8").value);

var somaProdutos = produto1 + produto2 + produto3 + produto4 + produto5 + produto6 + produto7 + produto8
var precoTotalInicial = produto1 * precoproduto1 + produto2 * precoproduto2 + produto3 * precoproduto3 + produto4 * precoproduto4 + produto5* precoproduto5 + produto6 * precoproduto6 + produto7 * precoproduto7 + produto8 * precoproduto8

function calcular() {


    var precoproduto1 = parseFloat(document.getElementById("precoproduto1").value);
    var precoproduto2 = parseFloat(document.getElementById("precoproduto2").value);
    var precoproduto3 = parseFloat(document.getElementById("precoproduto3").value);
    var precoproduto4 = parseFloat(document.getElementById("precoproduto4").value);
    var precoproduto5 = parseFloat(document.getElementById("precoproduto5").value);
    var precoproduto6 = parseFloat(document.getElementById("precoproduto6").value);
    var precoproduto7 = parseFloat(document.getElementById("precoproduto7").value);
    var precoproduto8 = parseFloat(document.getElementById("precoproduto8").value);

    var produto1 = parseFloat(document.getElementById("produto1").value);
    var produto2 = parseFloat(document.getElementById("produto2").value);
    var produto3 = parseFloat(document.getElementById("produto3").value);
    var produto4 = parseFloat(document.getElementById("produto4").value);
    var produto5 = parseFloat(document.getElementById("produto5").value);
    var produto6 = parseFloat(document.getElementById("produto6").value);
    var produto7 = parseFloat(document.getElementById("produto7").value);
    var produto8 = parseFloat(document.getElementById("produto8").value);

    var somaProdutos = produto1 + produto2 + produto3 + produto4 + produto5 + produto6 + produto7 + produto8
    var precoTotal = produto1 * precoproduto1 + produto2 * precoproduto2 + produto3 * precoproduto3 + produto4 * precoproduto4 + produto5 * precoproduto5 + produto6 * precoproduto6 + produto7 * precoproduto7 + produto8 * precoproduto8

   
    quantidade.innerText = somaProdutos
    total.innerText = precoTotal

}
function comprar(number) {
    var produto = document.getElementById("produto" + number);
    var x = parseFloat(produto.value) + 1;
    produto.value = x.toString();

    calcular()

}




function validar() {
    var retVal = true
    var somaProdutos = produto1 + produto2 + produto3 + produto4 + produto5 + produto6 + produto7 + produto8

    if (somaProdutos == 0) {
        alert("Tem de comprar no minimo um produto");
        retval = false
    }
}
function limpar() {
    for (var i = 1; i <= 4; i++) {
        var x = document.getElementById("produto" + i);
        x.value = "0";

    }


    quantidade.innerText = 0;
    total.innerText = "0.00";


}




var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

