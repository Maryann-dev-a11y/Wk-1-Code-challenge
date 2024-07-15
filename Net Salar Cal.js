function calculateNetSalar() {
    let basicsalar = parseFloat(prompt("Enter basicsalar:"));
    let benefits = parseFloat(prompt("Enter benefits:"));
    let grosssalar = basicsalar + benefits;

    //NHIF Deductions Calculation
    let nhif = 0;
    if(grosssalar <= 5999) nhif = 150;
    else if (grosssalar <= 7999) nhif = 300;
    else if (grosssalar <= 11999) nhif = 400;
    else if (grosssalar <= 14999) nhif = 500;
    else if (grosssalar <= 19999) nhif = 600;
    else if (grosssalar <= 24999) nhif = 750;
    else if (grosssalar <= 29999) nhif = 850;
    else if (grosssalar <= 34999) nhif = 900;
    else if (grosssalar <= 39999) nhif = 950;
    else if (grosssalar <= 44999) nhif = 1000;
    else if (grosssalar <= 49999) nhif = 1100;
    else if (grosssalar <= 59999) nhif = 1200;
    else if (grosssalar <= 69999) nhif = 1300;
    else if (grosssalar <= 79999) nhif = 1400;
    else if (grosssalar <= 89999) nhif = 1500;
    else if (grosssalar <= 99999) nhif = 1600;
    else nhif = 1700;

    //NSSF Deductions Calculation
    let NSSF = grosssalar * 0.06;

    //PAE Calculation
    let PAE = 0;
    if (grosssalar <= 24000) {
        PAE = grosssalar * 0.1;
    } else if (grosssalar <= 32333) {
        PAE = 2400 + (grosssalar - 24000) * 0.25;
    } else if (grosssalar <= 500000) {
        PAE = 2400 + 2083.25 + (grosssalar - 32333) * 0.3;
    } else if (grosssalar <= 800000) {
        PAE = 2400 + 2083.25 + 140300.1 + (grosssalar - 500000) * 0.325;
    } else  0.35

    let totalDeductions = PAE + nhif + NSSF;
    let NetSalar = grosssalar - totalDeductions;

    console.log("Gross salar;" + grosssalar);
    console.log("PAE (Tax);" + PAE);
    console.log("NHIF Deductions;" + nhif);
    console.log("NSSF Deductions;" + NSSF);
    console.log("Net Salar;" + NetSalar); 
} 

calculateNetSalar();