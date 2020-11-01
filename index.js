function calcula() {
var SalarioL = document.querySelector('.SalarioI').value;
var DescontoInss = document.querySelector('.DescontoI').value;
var SalarioT = parseInt(SalarioL) - parseInt(DescontoInss)
document.querySelector('.Total').innerHTML = SalarioT;
    //SalarioT.value =SalarioL.value - DescontoInss.value;

}