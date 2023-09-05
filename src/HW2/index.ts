import { IStudent } from "../HW1/types";
import { Area, Group, Level, School, Student } from "./HW2";
import { GroupStatuses, IGroup, Levels } from "./types";

export const runHW2 = (): void => {
  // Area
  const area = new Area("FrontEnd");
  area.addLevel(Levels.Junior);
  area.addLevel(Levels.Middle, Levels.Senior);
  area.removeLevel(Levels.Junior);
  console.log("Area Name: ", area.areaName);
  console.log("Area Levels: ", area.levels);

  // School
  const springfieldSchool = new School();
  springfieldSchool.addArea(area.areaName);
  springfieldSchool.removeArea("ololo");
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

  console.log(springfieldSchool);

  // Student
  const studentA = new Student("Oleg", "Cherbaiev", 1993);
  studentA.fullName = "Cherbaieff Oleg";
  studentA.setGrade("TypeScript", 50);
  studentA.setGrade("JavaScript", 80);
  studentA.setGrade("JavaScript", 50); // Duplicate to see if fallback is added
  studentA.setVisit("Typescript", true);
  studentA.setVisit("JavaScript", false);

  const studentB = new Student("Sergey", "Koternyak", 1990);
  studentB.setGrade("TypeScript", 100);
  studentB.setGrade("JavaScript", 100);
  studentB.setVisit("Typescript", true);
  studentB.setVisit("JavaScript", true);
  console.log("Students: ", studentA, studentB);

  // Group
  const suicideSquad = new Group(area.areaName, Levels.Middle);
  suicideSquad.addStudent(studentA);
  suicideSquad.removeStudent(studentA);
  suicideSquad.addStudent(studentA);
  suicideSquad.addStudent(studentB);
  console.log("Get group performance: ", suicideSquad.showPerformance());
  console.log(suicideSquad);
  suicideSquad.setGroupStatus(GroupStatuses.Waiting);
  console.log(suicideSquad);

  // Level
  const level = new Level("Something", "some description");
  level.addGroup(suicideSquad);

  console.log("Level: ", level);
  level.removeGroup(suicideSquad);
};
