interface IPerson {
  firstName: string;
  lastName: string;
}
// Name, surname, position, company, experience, courses, contacts
export interface ILecturer extends IPerson {
  position: string;
  company: string;
  experience: number;
  courses: string[];
  contacts: {
    phone: number;
    email: string;
    address?: string;
  };
}

export interface IStudent extends IPerson {
  birthYear: number;
  getPerformanceRating: () => number;
  // setGrade: (subject: string, grade: number) => void;
  // setVisit: (lesson: string, attendance: boolean) => void;
  // grades: Grades[];
  // visits: Visits[];
}

export interface IGroup {
  students: IStudent[];
  area: string;
  levelName: Levels;
  status: GroupStatuses;
  setGroupStatus: (status: GroupStatuses) => void;
  addStudent: (student: IStudent) => void;
  removeStudent: (student: IStudent) => void;
  showPerformance: () => IStudent[];
}

export enum Levels {
  Junior = "Junior",
  Middle = "Middle",
  Senior = "Senior",
}

export type Grades = {
  [subject: string]: number;
};

export type Visits = {
  [subject: string]: boolean;
};

export enum GroupStatuses {
  NoStatus = "No Status",
  Waiting = "Waiting",
  InProgress = "In Progress",
  Completed = "Completed",
}
