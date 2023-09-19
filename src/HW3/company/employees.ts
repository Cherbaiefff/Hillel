import { EmployeeStatus } from './types/employee-status';
import { IEmployee, IPaymentDetails, IRecentlyHiredEmployee, ICurrentEmployee } from './types/employee-types';

class Employee implements IEmployee {
  get employeeFullName(): string {
    return `${this.employeeName} ${this.employeeLastName}`;
  }

  get name(): string {
    return this.employeeName;
  }

  get lastName(): string {
    return this.employeeLastName;
  }

  get salary(): number {
    return this.salaryAmount;
  }

  constructor(
    protected employeeName: string,
    protected employeeLastName: string,
    protected salaryAmount: number
  ) {}
}

export class RecentlyHiredEmployee extends Employee implements IRecentlyHiredEmployee {
  get bankAccNumber(): number {
    return this.accNumber;
  }

  constructor(
    protected employeeName: string,
    protected employeeLastName: string,
    protected salaryAmount: number,
    public accNumber: number
  ) {
    super(employeeName, employeeLastName, salaryAmount);
  }

  changeBankAccNumber(accNumber: number): void {
    this.accNumber = accNumber;
  }
}

export class CurrentEmployee extends Employee implements ICurrentEmployee {
  get paymentDetails(): IPaymentDetails {
    return this.paymentInfo;
  }

  constructor(
    protected employeeName: string,
    protected employeeLastName: string,
    protected salaryAmount: number,
    public employeeStatus: EmployeeStatus,
    protected paymentInfo: IPaymentDetails
  ) {
    super(employeeLastName, employeeLastName, salaryAmount);
  }

  changeEmployeeStatus(status: EmployeeStatus): void {
    this.employeeStatus = status;
  }

  changePaymentDetails(paymentDetails: IPaymentDetails): void {
    this.paymentInfo = paymentDetails;
  }
}

export class PaymentDetails implements IPaymentDetails {
  constructor(
    public bankAccNumber: number,
    public taxValue: number,
    public bankInfo: { reciever: string; sender: string; paymentPurpose: string }
  ) {}
}
