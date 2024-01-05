
function calcularTotal() {

    precos = [4, 4.5, 5, 2, 1.5];
    valorTotal = 0;

    const optPrecos = document.querySelectorAll(".inputMenu");
    console.log(optPrecos);
    console.log(optPrecos.length);

    for (count = 0; count < optPrecos.length; count++){
        if (optPrecos[count].value == NaN) {
            optPrecos[count].value = 0;
        }
        valorTotal += parseFloat(optPrecos[count].value) * precos[count];
    }

    document.getElementById("finalValor").innerText = "Valor Total: R$ " + valorTotal.toFixed(2).toString().replace(".", ",");

}