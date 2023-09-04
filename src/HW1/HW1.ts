import { IGroup, IStudent, Levels, Grades } from "./types";

export class School {
  subjects: string[] = []; // Subjects are possibly strings

  addSubject(direction: string): void {
    this.subjects.push(direction);
  }
}

export class Subject {
  private _name: string;
  private levels: string[] = [];

  get name(): string {
    return this._name;
  }

  constructor(name: string) {
    this._name = name;
  }

  addLevel(level: string): void {
    this.levels.push(level);
  }
}

export class Level {
  private groups: IGroup[] = [];
  private _levelName: string;
  private _courseMaterial: string;

  constructor(levelName: string, courseMaterial: string) {
    this._levelName = levelName;
    this._courseMaterial = courseMaterial;
  }

  get levelName(): string {
    return this._levelName;
  }

  get courseMaterial(): string {
    return this._courseMaterial;
  }

  addGroup(group: IGroup): void {
    this.groups.push(group);
  }
}

export class Group {
  private _students: IStudent[] = [];

  get students(): IStudent[] {
    return this._students;
  }

  constructor(public subjectName: string, public levelName: Levels) {
    this.subjectName = subjectName;
    this.levelName = levelName;
  }

  addStudent(student: IStudent): void {
    this._students.push(student);
  }

  showPerformance(): IStudent[] {
    const sortedStudents: IStudent[] = this.students
      .slice()
      .sort((a, b) => b.getPerformanceRating() - a.getPerformanceRating());

    return sortedStudents;
  }
}

export class Student {
  private grades: Grades = {};
  private attendance: boolean[] = [];

  constructor(
    public firstName: string,
    public lastName: string,
    public birthYear: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  get fullName(): string {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value: string) {
    [this.lastName, this.firstName] = value.split(" ");
  }

  get age(): number {
    return new Date().getFullYear() - this.birthYear;
  }

  setGrade(subject: string, grade: number): void {
    this.grades[subject] = grade;
  }

  markAttendance(present: boolean): void {
    this.attendance.push(present);
  }

  getPerformanceRating(): number {
    const gradeValues: number[] = Object.values(this.grades);

    if (gradeValues.length === 0) return 0;

    const averageGrade: number =
      gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;

    const attendancePercentage: number =
      (this.attendance.filter((present) => present).length /
        this.attendance.length) *
      100;

    return (averageGrade + attendancePercentage) / 2;
  }
}
