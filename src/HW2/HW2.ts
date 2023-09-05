import { IStudent } from "./types";
import { CustomArray } from "./helpers";
import {
  Levels,
  ILecturer,
  Grades,
  Visits,
  GroupStatuses,
  IGroup,
} from "./types";

export class School {
  // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods

  private _areas: string[] = [];
  private _lecturers: ILecturer[] = []; // Name, surname, position, company, experience, courses, contacts

  get areas(): string[] {
    return this._areas;
  }

  get lecturers(): ILecturer[] {
    return this._lecturers;
  }

  addArea(area: string): void {
    this._areas.push(area);
  }

  removeArea(area: string): string | void {
    if (!this._areas.includes(area))
      console.log(`Searched area: "${area}" is not in the list`);
    else this._areas = this._areas.filter((areaValue) => areaValue !== area);
  }

  addLecturer(lecturer: ILecturer) {
    this._lecturers.push(lecturer);
  }
}

export class Area {
  // implement getters for fields and 'add/remove level' methods
  private _levels: Levels[] = [];
  private _areaName: string;

  constructor(areaName: string) {
    this._areaName = areaName;
  }

  get levels(): string[] {
    return this._levels;
  }

  get areaName(): string {
    return this._areaName;
  }

  addLevel(level: Levels, ...rest: Levels[]): void {
    this._levels.push(level, ...rest);
  }

  removeLevel(level: Levels): void {
    this._levels = this._levels.filter((levelValue) => levelValue !== level);
  }
}

export class Level {
  // implement getters for fields and 'add/remove group' methods

  private _groups: IGroup[] = [];
  private _levelName: string;
  private _description: string;

  constructor(levelName: string, description: string) {
    this._levelName = levelName;
    this._description = description;
  }

  get levelName(): string {
    return this._levelName;
  }

  get description(): string {
    return this._description;
  }

  addGroup(group: IGroup): void {
    this._groups.push(group);
  }

  removeGroup(group: IGroup): void {
    this._groups = this._groups.filter((groupValue) => groupValue !== group);
  }
}

export class Group {
  // implement getters for fields and 'add/remove student' and 'set status' methods

  _status: GroupStatuses = GroupStatuses.NoStatus;
  _students: IStudent[] = []; // Modify the array so that it has a valid toSorted method*

  get students(): IStudent[] {
    return this._students;
  }

  constructor(public area: string, public levelName: Levels) {
    this.area = area;
    this.levelName = levelName;
  }

  get status(): GroupStatuses {
    return this._status;
  }

  setGroupStatus(status: GroupStatuses): void {
    this._status = status;
  }

  addStudent(student: IStudent): void {
    this._students.push(student);
  }

  removeStudent(student: IStudent): void {
    this._students = this._students.filter(
      (studentValue) => studentValue !== student
    );
  }

  showPerformance(): IStudent[] {
    const studentList: IStudent[] = new CustomArray<IStudent>(
      ...this._students
    );

    const sortedStudents: IStudent[] = studentList.toSorted(
      (a, b) => b.getPerformanceRating() - a.getPerformanceRating()
    );
    return sortedStudents;
  }
}

export class Student {
  // implement 'set grade' and 'set visit' methods

  firstName: string;
  lastName: string;
  birthYear: number;
  private _grades: Grades[] = []; // workName: mark
  private _visits: Visits[] = []; // lesson: present

  constructor(firstName: string, lastName: string, birthYear: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) {
    [this.lastName, this.firstName] = value.split(" ");
  }

  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  setGrade(subject: string, grade: number): void {
    if (this._grades.find((gradeData) => gradeData[subject]))
      console.log("Subject is already added");
    else this._grades.push({ [subject]: grade });
  }

  setVisit(lesson: string, attendance: boolean): void {
    this._visits.push({ [lesson]: attendance });
  }

  getPerformanceRating(): number {
    const gradeValues: number[] = this._grades.reduce((acc: number[], val) => {
      const [mark] = Object.values(val);
      acc.push(mark);
      return acc;
    }, []);

    if (!gradeValues.length) return 0;

    const averageGrade: number =
      gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
    const attendancePercentage =
      (this._visits.filter((present) => present).length / this._visits.length) *
      100;

    return (averageGrade + attendancePercentage) / 2;
  }
}

declare global {
  interface Array<T> {
    toSorted(compareFn?: (a: T, b: T) => number): Array<T>;
  }
}
