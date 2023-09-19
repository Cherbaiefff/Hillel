import { ICompany } from './types/company-types';
import { IDepartment } from './types/department-types';
import { AllEmployees } from './types/employee-types';

export class Company implements ICompany {
  private departmentList: IDepartment[] = [];

  get allCompanyEmployess(): AllEmployees {
    const allEmployees: AllEmployees = this.departmentList.flatMap(department => department.employees.flat());
    return allEmployees;
  }

  get departments(): IDepartment[] {
    return this.departmentList;
  }

  addDepartment(department: IDepartment): void {
    this.departmentList.push(department);
  }
}
