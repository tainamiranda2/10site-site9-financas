var SalarioL = document.getElementById('Salario');
var DescontoInss = document.getElementById('Desconto');
var SalarioT = document.getElementById('Total');

function calcula() {
    SalarioT.value =SalarioL.value - DescontoInss.value;
}