This JavaScript program calculates an individual's net salary based on their basic salary and benefits.
It calculates the gross salary, NSSF deduction, NHIF deduction, PAYE (tax), and net salary.

The deductions and tax calculations are based on typical rates and brackets, which may need to be updated
according to current regulations.

Functions:

1. calculateGrossSalary(basicSalary, benefits): Calculates the gross salary as the sum of the basic salary and benefits.
2. calculateNssfDeduction(grossSalary): Calculates the NSSF deduction as 6% of the gross salary.
3. calculateNhifDeduction(grossSalary): Calculates the NHIF deduction based on the gross salary brackets.
4. calculatePaye(grossSalary, nssfDeduction): Calculates the PAYE (tax) based on the taxable income (gross salary minus NSSF deduction).
5. calculateNetSalary(basicSalary, benefits): Calculates the net salary by calling the above functions and deducting NSSF, NHIF, and PAYE from the gross salary.
 