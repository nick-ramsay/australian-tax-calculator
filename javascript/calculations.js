const calculateTax = (salary, year, residentialStatus) => {

    renderCalculations(10,20,30,40,53,68,79);
};

const renderCalculations = (fixedTax, variableTax, totalTax, totalGrossSalary, totalNetSalary, totalMonthlySalary, totalWeeklySalary) => {
    document.getElementById("fixed-tax").innerHTML = fixedTax.toFixed(2);
    document.getElementById("variable-tax").innerHTML = variableTax.toFixed(2);
    document.getElementById("total-tax").innerHTML = totalTax.toFixed(2);
    document.getElementById("total-gross-salary").innerHTML = totalGrossSalary.toFixed(2);
    document.getElementById("total-net-salary").innerHTML = totalNetSalary.toFixed(2);
    document.getElementById("total-monthly-salary").innerHTML = totalMonthlySalary.toFixed(2);
    document.getElementById("total-weekly-salary").innerHTML = totalWeeklySalary.toFixed(2);
};

document.getElementById("calculate-tax-button").addEventListener("click", calculateTax);

window.onload = (event) => {(renderCalculations(0,0,0,0,0,0,0));};