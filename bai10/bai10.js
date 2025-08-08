var courseManager = {
    schoolName: "MindX School",
    year: 2024,
    courses: [
        {
            courseId: "TS01",
            title: "TypeScript Cơ Bản",
            instructor: "Nguyễn Văn A",
            isActive: true,
            students: [
                { studentId: "SV001", name: "Lê Văn Luyện", email: "luyen@email.com", hasCompleted: true, finalScore: 8 },
                { studentId: "SV002", name: "Trần Thị Mai", email: "mai@email.com", hasCompleted: true, finalScore: 9 },
                { studentId: "SV003", name: "Phạm Hùng", email: "hung@email.com", hasCompleted: false },
            ]
        },
        {
            courseId: "FE01",
            title: "HTML & CSS",
            instructor: "Trần Thị B",
            isActive: false,
            students: [
                { studentId: "SV004", name: "Đỗ Quang Vinh", email: "vinh@email.com", hasCompleted: false },
                { studentId: "SV005", name: "Hoàng Anh", email: "anh@email.com", hasCompleted: false },
            ]
        }
    ]
};
function getCompletedStudents(course) {
    return course.students.filter(function (student) { return student.hasCompleted; });
}
function calculateAverageScore(course) {
    var studentsWithScores = course.students.filter(function (student) { return student.hasCompleted && typeof student.finalScore === 'number'; });
    if (studentsWithScores.length === 0) {
        return null;
    }
    var totalScore = studentsWithScores.reduce(function (sum, student) { return sum + student.finalScore; }, 0);
    return totalScore / studentsWithScores.length;
}
function printCourseReport(manager) {
    console.log("B\u00C1O C\u00C1O KH\u00D3A H\u1ECCC - ".concat(manager.schoolName, " - N\u0102M ").concat(manager.year));
    console.log("======================================================");
    manager.courses.forEach(function (course, index) {
        var completedStudents = getCompletedStudents(course);
        var averageScore = calculateAverageScore(course);
        console.log("\n".concat(index + 1, ".Kh\u00F3a: ").concat(course.title, " (GV: ").concat(course.instructor, ")"));
        console.log("-  T\u1ED5ng h\u1ECDc vi\u00EAn: ".concat(course.students.length));
        console.log("-  Ho\u00E0n th\u00E0nh: ".concat(completedStudents.length, " h\u1ECDc vi\u00EAn"));
        console.log("-  Trung b\u00ECnh \u0111i\u1EC3m: ".concat(averageScore !== null ? averageScore.toFixed(1) : 'N/A'));
        console.log("-  Tr\u1EA1ng th\u00E1i: ".concat(course.isActive ? 'ĐANG MỞ' : 'ĐÃ ĐÓNG'));
    });
}
printCourseReport(courseManager);
