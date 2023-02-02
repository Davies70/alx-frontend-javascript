interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: "Ajayi",
    lastName: "Davies",
    age: 29,
    location: "Kiel"
};

const student2: Student = {
    firstName: "Bobby",
    lastName: "Loco",
    age: 22,
    location: "Kansas"
};

const studentsList: Student[] = [student1, student2];
