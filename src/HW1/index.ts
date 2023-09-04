import { Group, Level, School, Student, Subject } from "./HW1";
import { Levels } from "./types";

export const runHW1 = (): void => {
  // Subject
  const subjectTs = new Subject("TypeScript");
  const subjectJs = new Subject("JavaScript");
  subjectTs.addLevel(Levels.Intermediate);
  subjectJs.addLevel(Levels.Advanced);
  const subjectTsName = subjectTs.name;
  const subjectJsName = subjectJs.name;

  console.log("Subjects: ", subjectJs, subjectTs);

  // School
  const hillelSchool = new School();
  hillelSchool.addSubject(subjectTsName);
  hillelSchool.addSubject(subjectJsName);

  console.log("School: ", hillelSchool);

  // Student
  const studentA = new Student("Oleg", "Cherbaiev", 1990);
  const studentB = new Student("Sergey", "Koternyak", 1990);
  studentA.setGrade(subjectTsName, 30);
  studentB.setGrade(subjectTsName, 80);

  studentA.markAttendance(false);
  studentA.markAttendance(true);

  studentB.markAttendance(true);
  studentB.markAttendance(true);

  console.log("Students: ", studentA, studentB);

  // Group
  const group = new Group(subjectTsName, Levels.Intermediate);
  group.addStudent(studentA);
  group.addStudent(studentB);
  group.showPerformance();

  console.log("Group: ", group);

  // Level
  const level = new Level(subjectTsName, "TypeScript Book");
  level.addGroup(group);

  console.log("Level: ", level);
};
