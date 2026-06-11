function addLetterGrade(data) {
    for (const student of data) {
        if (student.score >= 90) {
            student.letter = "A";
        } else if (student.score >= 75) {
            student.letter = "B";
        } else {
            student.letter = "C";
        }
    }
    return data;
}