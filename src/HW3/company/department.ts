import { CurrentEmployee, RecentlyHiredEmployee } from './employees';
import { IAccoutingDepartment, IBudget, IDepartment } from './types/department-types';
import { EmployeeStatus } from './types/employee-status';
import { AllEmployees, ICurrentEmployee, IPaymentDetails, IRecentlyHiredEmployee } from './types/employee-types';

export class Department implements IDepartment {
  public employees: Array<IRecentlyHiredEmployee | ICurrentEmployee>;

  get departmentName(): string {
    return this.name;
  }

  constructor(
    protected name: string,
    public budget: IBudget
  ) {
    this.employees = [];
  }

  addBudget(budget: IBudget): void {
    this.budget = budget;
  }

  calculateBalance(): number {
    return this.budget.credit - this.budget.debit;
  }

  addEmployee(employee: IRecentlyHiredEmployee | ICurrentEmployee): void {
    this.employees.push(employee);
  }

  removeEmployee(searchedEmployee: string): void {
    this.employees = this.employees.filter(employee => employee.employeeFullName !== searchedEmployee);
  }

  protected isCurrentEmployee(employee: ICurrentEmployee | IRecentlyHiredEmployee): employee is CurrentEmployee {
    return employee instanceof CurrentEmployee;
  }

  protected isRecentlyHired(employee: IRecentlyHiredEmployee | ICurrentEmployee): employee is IRecentlyHiredEmployee {
    return employee instanceof RecentlyHiredEmployee;
  }

  protected isActiveEmployee(employeeStatus: EmployeeStatus): employeeStatus is EmployeeStatus.Active {
    return employeeStatus === EmployeeStatus.Active;
  }

  convertHiredToCurrent(recentlyHiredEmployee: string, paymentDetails: IPaymentDetails): void {
    const recentlyHired: IRecentlyHiredEmployee | ICurrentEmployee | undefined = this.employees.find(
      employee => employee.employeeFullName === recentlyHiredEmployee
    );

    if (recentlyHired && this.isRecentlyHired(recentlyHired)) {
      this.removeEmployee(recentlyHired.employeeFullName);
      const currentEmployee = new CurrentEmployee(
        recentlyHired.name,
        recentlyHired.lastName,
        recentlyHired.salary,
        EmployeeStatus.Active,
        paymentDetails
      );
      this.addEmployee(currentEmployee);
    }
  }
}

export class AccountingDepartment extends Department implements IAccoutingDepartment {
  private totalSalaryPayment: number = 0;

  get balance(): number {
    return this.defaulBalance;
  }

  constructor(
    protected defaulBalance: number,
    public budget: IBudget
  ) {
    super('Accounting', budget);
    this.defaulBalance = 0;
  }

  addToBalance(amount: number): void {
    this.defaulBalance += amount;
  }

  removeFromBalance(amount: number): void {
    if (this.balance >= amount) {
      this.defaulBalance -= amount;
    } else {
      throw new Error('Not enough money on balance');
    }
  }

  private externalPayment(salary: number, bankAccNumber: number): void {
    console.log(`The salary of ${salary} was sent into your bank account (${bankAccNumber})`);
  }

  private internalPayment(salary: number, paymentDetails: IPaymentDetails): void {
    console.log(
      `     
      The salary of ${salary} - ${paymentDetails.taxValue}% (${
        salary - (salary * paymentDetails.taxValue) / 100
      }), was sent to your bank account (${paymentDetails.bankAccNumber}) 
      Sender: ${paymentDetails.bankInfo.sender}
      Reciever: ${paymentDetails.bankInfo.reciever}
      PaymentPurpose: ${paymentDetails.bankInfo.paymentPurpose}
      `
    );
  }

  calculateSalary(allEmployees: AllEmployees): string {
    if (allEmployees.length) {
      allEmployees.forEach(employee => {
        if (this.isCurrentEmployee(employee) && this.isActiveEmployee(employee.employeeStatus)) {
          this.internalPayment(employee.salary, employee.paymentDetails);
          this.totalSalaryPayment += employee.salary;
        } else if (this.isRecentlyHired(employee)) {
          this.externalPayment(employee.salary, employee.bankAccNumber);
          this.totalSalaryPayment += employee.salary;
        }
      });
      return `Total salary payment is ${this.totalSalaryPayment}. Money was sent`;
    }

    return `Money was not sent`;
  }
}
