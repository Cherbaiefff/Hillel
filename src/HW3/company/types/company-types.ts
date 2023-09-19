import { IDepartment } from './department-types';
import { AllEmployees } from './employee-types';

export interface ICompany {
  departments: IDepartment[];
  allCompanyEmployess: AllEmployees;
  addDepartment: (department: IDepartment) => void;
}
