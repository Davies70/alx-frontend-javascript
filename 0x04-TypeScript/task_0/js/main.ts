interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
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

const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach(student => {
    const row = document.createElement("tr");
    row.style.padding = "1px";
    const td1 = document.createElement("td");
    const text1 = document.createTextNode(student.firstName);
    td1.appendChild(text1);
    const td2 = document.createElement("td");
    const text2 = document.createTextNode(student.location);
    td2.appendChild(text2);
    row.append(td1, td2);
    tbody.appendChild(row);
});
table.appendChild(tbody);
table.setAttribute('border', '2');
document.body.append(table);

