import { AllEmployees, ICurrentEmployee, IPaymentDetails, IRecentlyHiredEmployee } from './employee-types';

export interface IDepartment {
  departmentName: string;
  employees: Array<IRecentlyHiredEmployee | ICurrentEmployee>;
  budget: IBudget;
  addBudget: (budget: IBudget) => void;
  calculateBalance: () => number;
  addEmployee: (employee: IRecentlyHiredEmployee | ICurrentEmployee) => void;
  removeEmployee: (employee: string) => void;
  convertHiredToCurrent: (recentlyHiredEmployee: string, paymentDetails: IPaymentDetails) => void;
}

export interface IAccoutingDepartment {
  balance: number;
  budget: IBudget;
  addToBalance: (amount: number) => void;
  removeFromBalance: (amount: number) => void | never;
  calculateSalary: (allEmployees: AllEmployees) => string;
}

export interface IBudget {
  debit: number;
  credit: number;
}
