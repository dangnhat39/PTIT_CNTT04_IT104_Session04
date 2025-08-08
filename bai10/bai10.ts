type Student = {
    readonly studentId: string;
    name: string;
    email: string;
    hasCompleted: boolean;
    finalScore?: number;
};

type Course = {
    courseId: string;
    title: string;
    instructor: string;
    students: Student[];
    isActive: boolean;
};

type CourseManager = {
    schoolName: string;
    year: number;
    courses: Course[];
};

const courseManager: CourseManager = {
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

function getCompletedStudents(course: Course): Student[] {
    return course.students.filter(student => student.hasCompleted);
}

function calculateAverageScore(course: Course): number | null {
    const studentsWithScores = course.students.filter(
        student => student.hasCompleted && typeof student.finalScore === 'number'
    );

    if (studentsWithScores.length === 0) {
        return null;
    }

    const totalScore = studentsWithScores.reduce((sum, student) => sum + student.finalScore!, 0);
    return totalScore / studentsWithScores.length;
}

function printCourseReport(manager: CourseManager): void {
    console.log(`BÁO CÁO KHÓA HỌC - ${manager.schoolName} - NĂM ${manager.year}`);
    console.log("======================================================");

    manager.courses.forEach((course, index) => {
        const completedStudents = getCompletedStudents(course);
        const averageScore = calculateAverageScore(course);

        console.log(`\n${index + 1}.Khóa: ${course.title} (GV: ${course.instructor})`);
        console.log(`-  Tổng học viên: ${course.students.length}`);
        console.log(`-  Hoàn thành: ${completedStudents.length} học viên`);
        console.log(`-  Trung bình điểm: ${averageScore !== null ? averageScore.toFixed(1) : 'N/A'}`);
        console.log(`-  Trạng thái: ${course.isActive ? 'ĐANG MỞ' : 'ĐÃ ĐÓNG'}`);
    });
}

printCourseReport(courseManager);