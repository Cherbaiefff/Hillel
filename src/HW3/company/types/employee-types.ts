import { EmployeeStatus } from './employee-status';

export interface IEmployee {
  name: string;
  lastName: string;
  employeeFullName: string;
  salary: number;
}

export interface IRecentlyHiredEmployee extends IEmployee {
  bankAccNumber: number;
  changeBankAccNumber: (bankAccNumber: number) => void;
}

export interface ICurrentEmployee extends IEmployee {
  paymentDetails: IPaymentDetails;
  employeeStatus: EmployeeStatus;
  changeEmployeeStatus: (employeeStatus: EmployeeStatus) => void;
  changePaymentDetails: (paymentDetails: IPaymentDetails) => void;
}

export interface IPaymentDetails {
  bankAccNumber: number;
  taxValue: number;
  bankInfo: {
    reciever: string;
    sender: string;
    paymentPurpose: string;
  };
}
