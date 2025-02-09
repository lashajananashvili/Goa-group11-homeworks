class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }

  static compareGrades(student1, student2) {
    if (student1.grade > student2.grade) return `${student1.name} has a higher grade.`;
    else if (student1.grade < student2.grade) return `${student2.name} has a higher grade.`;
    else return "Both have the same grade.";
  }
}

const student1 = new Student("John", 85);
const student2 = new Student("Jane", 90);
console.log(Student.compareGrades(student1, student2));