// A function to calculate PAYE (tax) based on the provided tax rates
function calcPaye(incomeTax) {
    if (incomeTax <= 24000) {
      return incomeTax * 0.1;
    } else if (incomeTax <= 40180) {
      return (incomeTax - 24000) * 0.15 + 2400;
    } else if (incomeTax <= 57760) {
      return (incomeTax - 40180) * 0.2 + 5930;
    } else if (incomeTax <= 73360) {
      return (incomeTax - 57760) * 0.25 + 10610;
    } else {
      return (incomeTax - 73360) * 0.3 + 17160;
    }
  };
  
  // A function to calculate NHIF deductions based on the provided rates
  function calculateNhifDeduction(grossSalary) {
    if (grossSalary <= 5999) {
      return 150;
    } else if (grossSalary <= 7999) {
      return 300;
    } else if (grossSalary <= 11999) {
      return 400;
    } else if (grossSalary <= 14999) {
      return 500;
    } // ... and so on for the other ranges
    return 2200; // default for the highest range
  };
  
  // A function to calculate NSSF deductions based on the provided rate
  function calcNssfDeduction(grossSalary) {
    return grossSalary * 0.06;
  };
  
  // Assuming the individual's salary and benefits
  const basicSalary = 10000; //You can replace the basicSalary variable with any value you want to test the program with.
  const benefits = 1000; //You can replace the benefits variable with any value you want to test the program with.
  
  // To calculate gross salary
  const grossSalary = basicSalary + benefits;
  
  // To calculate tax (PAYE)
  const annualSalary = grossSalary * 12; // assuming the salary is monthly, calculate for a year
  const paye = calcPaye(annualSalary / 12); // divide by 12 to get monthly PAYE
  
  // To calculate NHIF deductions
  const nhifDeduction = calculateNhifDeduction(grossSalary);
  
  // To calculate NSSF deductions
  const nssfDeduction = calcNssfDeduction(grossSalary);
  
  // To calculate net salary
  const netSalary = grossSalary - paye - nhifDeduction - nssfDeduction;
  
  // Output the results
  console.log(`Gross Salary: ${grossSalary} KSH`);
  console.log(`PAYE (Tax): ${paye} KSH`);
  console.log(`NHIF Deductions: ${nhifDeduction} KSH`);
  console.log(`NSSF Deductions: ${nssfDeduction} KSH`);
  console.log(`Net Salary: ${netSalary} KSH`);
  
