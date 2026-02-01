const student = {
    name: "Abid",
    class: 6,
    roll: 34,
    book:['Bangla', "English","Math"],
    classTeacher:{
        name: "Nobin sir",
        subject: "English",
        designation: "Professor"
    }
}
const teacherDesignation = student.classTeacher.designation;

console.log(teacherDesignation);
