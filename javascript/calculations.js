const commaFormat = (num) => {
    return num.toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

let taxBrackets = {
    resident: {
        2021: [
            {
                "min-income": 0,
                "max-income": 18200,
                "base-tax": 0,
                "tax-rate": 0.0
            },
            {
                "min-income": 18201,
                "max-income": 45000,
                "base-tax": 0,
                "tax-rate": 0.19
            },
            {
                "min-income": 45001,
                "max-income": 120000,
                "base-tax": 5092,
                "tax-rate": 0.325
            },
            {
                "min-income": 120001,
                "max-income": 180000,
                "base-tax": 29467,
                "tax-rate": 0.37
            },
            {
                "min-income": 180001,
                "max-income": null,
                "base-tax": 51667,
                "tax-rate": 0.45
            }
        ],
        2022: [
            {
                "min-income": 0,
                "max-income": 18200,
                "base-tax": 0,
                "tax-rate": 0.0
            },
            {
                "min-income": 18201,
                "max-income": 45000,
                "base-tax": 0,
                "tax-rate": 0.19
            },
            {
                "min-income": 45001,
                "max-income": 120000,
                "base-tax": 5092,
                "tax-rate": 0.325
            },
            {
                "min-income": 120001,
                "max-income": 180000,
                "base-tax": 29467,
                "tax-rate": 0.37
            },
            {
                "min-income": 180001,
                "max-income": null,
                "base-tax": 51667,
                "tax-rate": 0.45
            }
        ]
    },
    nonresident: {
        2021: [
            {
                "min-income": 0,
                "max-income": 120000,
                "base-tax": 0,
                "tax-rate": 0.325
            },
            {
                "min-income": 120001,
                "max-income": 180000,
                "base-tax": 39000,
                "tax-rate": 0.37
            },
            {
                "min-income": 180001,
                "max-income": null,
                "base-tax": 61200,
                "tax-rate": 0.45
            }
        ],
        2022: [
            {
                "min-income": 0,
                "max-income": 120000,
                "base-tax": 0,
                "tax-rate": 0.325
            },
            {
                "min-income": 120001,
                "max-income": 180000,
                "base-tax": 39000,
                "tax-rate": 0.37
            },
            {
                "min-income": 180001,
                "max-income": null,
                "base-tax": 61200,
                "tax-rate": 0.45
            }
        ]
    }
}

let resident = document.getElementById("resident-button");
let nonresident = document.getElementById("non-resident-button");
let taxYear = document.getElementById("year-input");
let grossSalary = document.getElementById("gross-salary-input");

const calculateTax = () => {
    if (grossSalary.value !== "") {

        let applicableGrossSalary = grossSalary.value;
        let applicableTaxYear = taxYear.value;

        let applicableResidentStatus;
        resident.checked === true ? applicableResidentStatus = "resident" : applicableResidentStatus = "nonresident";

        let applicableTaxBracket = taxBrackets[applicableResidentStatus.toString()][applicableTaxYear.toString()].find(element => element["min-income"] <= applicableGrossSalary && (element["max-income"] >= applicableGrossSalary || element["max-income"] === null));

        console.log(applicableTaxBracket);

        let fixedTax = applicableTaxBracket["base-tax"];
        let variableTax = (applicableGrossSalary - applicableTaxBracket["min-income"]) * applicableTaxBracket["tax-rate"];
        let totalTax = fixedTax + variableTax;
        let totalGrossSalary = applicableGrossSalary;
        let totalNetSalary = totalGrossSalary - totalTax;
        let totalNetMonthlySalary = totalNetSalary / 12;
        let totalNetFortnightlySalary = totalNetSalary / 26;
        let totalNetWeeklySalary = totalNetSalary / 52;

        console.log(totalGrossSalary);

        renderCalculations(fixedTax, variableTax, totalTax, totalGrossSalary, totalNetSalary, totalNetMonthlySalary, totalNetWeeklySalary, totalNetFortnightlySalary);
    };
};

const renderCalculations = (fixedTax, variableTax, totalTax, totalGrossSalary, totalNetSalary, totalNetMonthlySalary, totalNetWeeklySalary, totalNetFortnightlySalary) => {
    document.getElementById("fixed-tax").innerHTML = commaFormat(fixedTax.toFixed(2));
    document.getElementById("variable-tax").innerHTML = commaFormat(variableTax.toFixed(2));
    document.getElementById("total-tax").innerHTML = commaFormat(totalTax.toFixed(2));
    document.getElementById("total-gross-salary").innerHTML = commaFormat(Number(totalGrossSalary).toFixed(2));
    document.getElementById("total-net-salary").innerHTML = commaFormat(totalNetSalary.toFixed(2));
    document.getElementById("total-net-monthly-salary").innerHTML = commaFormat(totalNetMonthlySalary.toFixed(2));
    document.getElementById("total-net-weekly-salary").innerHTML = commaFormat(totalNetWeeklySalary.toFixed(2));
    document.getElementById("total-net-fortnightly-salary").innerHTML = commaFormat(totalNetFortnightlySalary.toFixed(2));
};

document.getElementById("calculate-tax-button").addEventListener("click", calculateTax);

window.onload = (event) => { (renderCalculations(0, 0, 0, 0, 0, 0, 0)); };