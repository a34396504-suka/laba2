const grades = [
    { name: "Макар",     score: 85 },
    { name: "Денис",     score: 92 },
    { name: "Анна",      score: 78 },
    { name: "Даша",      score: 88 },
    { name: "Студент_X", score: 45 }
];

function calculateAverage(data) {
    let sum = 0;
    for (const student of data) sum += student.score;
    return sum / data.length;
}

function findTopStudent(data) {
    let top = data[0];
    for (const student of data) {
        if (student.score > top.score) top = student;
    }
    return top.name;
}

function filterFailed(data, passScore) {
    const failed = [];
    for (const student of data) {
        if (student.score < passScore) failed.push(student.name);
    }
    return failed;
}

function addLetterGrade(data) {
    for (const student of data) {
        if (student.score >= 90)      student.letter = "A";
        else if (student.score >= 75) student.letter = "B";
        else                          student.letter = "C";
    }
    return data;
}

console.log("Средний балл:",          calculateAverage(grades));
console.log("Лучший студент:",         findTopStudent(grades));
console.log("Должники:",               filterFailed(grades, 60));
console.log("С буквенными оценками:", addLetterGrade(grades));