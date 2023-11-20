document.getElementById('calculate-payroll').addEventListener('click', () => {
    const employeeName = document.getElementById('employee-name').value;
    const payRate = parseFloat(document.getElementById('pay-rate').value);
    const hoursWorked = parseFloat(document.getElementById('hours-worked').value);
    const healthInsurance = parseFloat(document.getElementById('health-insurance').value) || 0;
    const dentalInsurance = parseFloat(document.getElementById('dental-insurance').value) || 0;

    const grossPay = payRate * hoursWorked;
    const preTaxDeductions = healthInsurance + dentalInsurance;
    const taxableIncome = grossPay - preTaxDeductions;

    const federalIncomeTaxRate = 0.22;
    const stateIncomeTaxRate = 0.05;
    const socialSecurityTaxRate = 0.062;
    const medicareTaxRate = 0.0145;

    const federalIncomeTax = taxableIncome * federalIncomeTaxRate;
    const stateIncomeTax = taxableIncome * stateIncomeTaxRate;
    const socialSecurityTax = taxableIncome * socialSecurityTaxRate;
    const medicareTax = taxableIncome * medicareTaxRate;

    const totalTaxes = federalIncomeTax + stateIncomeTax + socialSecurityTax + medicareTax;
    const netPay = grossPay - preTaxDeductions - totalTaxes;

    // Save data in sessionStorage to retrieve it on the next page
    sessionStorage.setItem('payrollSummary', JSON.stringify({
      employeeName,
      grossPay: grossPay.toFixed(2),
      preTaxDeductions: preTaxDeductions.toFixed(2),
      federalIncomeTax: federalIncomeTax.toFixed(2),
      stateIncomeTax: stateIncomeTax.toFixed(2),
      socialSecurityTax: socialSecurityTax.toFixed(2),
      medicareTax: medicareTax.toFixed(2),
      netPay: netPay.toFixed(2),
    }));

    // Redirect to the new page
    window.location.href = 'payroll-summary.html';
  });