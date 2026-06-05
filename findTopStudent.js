function findTopStudent(data) {
    let top = data[0];
    for (const student of data) {
        if (student.score > top.score) {
            top = student;
        }
    }
    return top.name;
}