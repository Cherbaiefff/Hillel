import { Company } from './company/company';
import { AccountingDepartment, Department } from './company/department';
import { CurrentEmployee, RecentlyHiredEmployee } from './company/employees';
import { EmployeeStatus } from './company/types/employee-status';

export const runHW3 = (): void => {
  const it = new Department('IT department', { debit: 2000, credit: 20000 });
  const newEmployee = new RecentlyHiredEmployee('Jonh', 'Doe', 3000, 123456789);
  const currentEmployee = new CurrentEmployee('Peter', 'Griffin', 5000, EmployeeStatus.Active, {
    bankAccNumber: 8888,
    taxValue: 7,
    bankInfo: {
      sender: 'ololo company',
      reciever: 'Peter Griffin',
      paymentPurpose: 'For Family Guy',
    },
  });
  // console.log(newEmployee.employeeFullName, newEmployee.bankAccNumber, newEmployee.salary);
  it.addEmployee(newEmployee);
  // it.convertHiredToCurrent(newEmployee.employeeFullName, {
  //   bankAccNumber: 9876543123,
  //   taxValue: 5,
  //   bankInfo: {
  //     sender: 'ololo company',
  //     reciever: newEmployee.employeeFullName,
  //     paymentPurpose: 'For beautiful eyes',
  //   },
  // });
  const accountingDepartment = new AccountingDepartment(10000, { debit: 15000, credit: 45000 });
  it.addEmployee(currentEmployee);

  const company = new Company();
  company.addDepartment(it);
  company.addDepartment(accountingDepartment);
  console.log(accountingDepartment.calculateSalary(company.allCompanyEmployess));
};
