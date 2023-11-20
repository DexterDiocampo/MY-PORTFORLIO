const payrollData = JSON.parse(sessionStorage.getItem('payrollSummary'));

    // Display payroll summary
    const payrollSummaryDiv = document.getElementById('payroll-summary');
    if (payrollData) {
      const payrollSummaryContent = `
        <h2>Payroll Summary for ${payrollData.employeeName} at Call Center Company</h2>
        <p>Gross Pay: ₱${payrollData.grossPay}</p>
        <p>Pre-tax Deductions: ₱${payrollData.preTaxDeductions}</p>
        <p>Federal Income Tax: ₱${payrollData.federalIncomeTax}</p>
        <p>State Income Tax: ₱${payrollData.stateIncomeTax}</p>
        <p>Social Security Tax: ₱${payrollData.socialSecurityTax}</p>
        <p>Medicare Tax: ₱${payrollData.medicareTax}</p>
        <hr>
        <p>Net Pay: ₱${payrollData.netPay}</p>
      `;
      payrollSummaryDiv.innerHTML = payrollSummaryContent;
    } else {
      payrollSummaryDiv.innerHTML = '<p>No payroll data available.</p>';
    }