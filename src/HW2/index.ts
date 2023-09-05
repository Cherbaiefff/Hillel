import { IStudent } from "../HW1/types";
import { Area, Group, Level, School, Student } from "./HW2";
import { GroupStatuses, IGroup, Levels } from "./types";

export const runHW2 = (): void => {
  // Area
  const area = new Area("FrontEnd");
  area.addLevel(Levels.Junior);
  area.addLevel(Levels.Middle, Levels.Senior);
  area.removeLevel(Levels.Junior);

  // School
  const springfieldSchool = new School();
  springfieldSchool.addArea(area.areaName);
  springfieldSchool.removeArea(area.areaName);

  springfieldSchool.addLecturer({
    firstName: "Sergey",
    lastName: "Koternyak",
    position: "Top Lecturer",
    company: "Capgemini Engineering",
    experience: 8,
    courses: ["FrontEnd Basic", "Frontend Pro", "JS Advanced"],
    contacts: {
      phone: 12345689,
      email: "seregaTop@gmail.com",
    },
  });

  // Student
  const studentA = new Student("Oleg", "Cherbaiev", 1993);
  studentA.fullName = "Cherbaieff Oleg";
  studentA.setGrade("TypeScript", 50);
  studentA.setGrade("JavaScript", 80);
  studentA.setVisit("Typescript", true);
  studentA.setVisit("JavaScript", false);

  const studentB = new Student("Sergey", "Koternyak", 1990);
  studentB.setGrade("TypeScript", 100);
  studentB.setGrade("JavaScript", 100);
  studentB.setVisit("Typescript", true);
  studentB.setVisit("JavaScript", true);

  // Group
  const suicideSquad = new Group(area.areaName, Levels.Middle);
  suicideSquad.addStudent(studentA);
  suicideSquad.removeStudent(studentA);
  suicideSquad.addStudent(studentA);
  suicideSquad.addStudent(studentB);
  suicideSquad.showPerformance();
  console.log(suicideSquad.students);

  suicideSquad.setGroupStatus(GroupStatuses.Waiting);

  // Level
  const level = new Level("Something", "some description");
  level.addGroup(suicideSquad);
  level.removeGroup(suicideSquad);
};
