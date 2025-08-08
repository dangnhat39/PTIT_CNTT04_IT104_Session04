interface Student {
    name: string;
    age: number;
    email: string;
}

function introduce(student: Student): void {
    console.log(`Tên tôi là ${student.name}, tôi ${student.age} tuổi và email của tôi là ${student.email}.`);
}

let studentInfo: Student = {
    name: "Nguyễn Văn A",
    age: 20,
    email: "vana@example.com"
};

introduce(studentInfo);
