function filterFailed(data, passScore) {
    const failed = [];
    for (const student of data) {
        if (student.score < passScore) {
            failed.push(student.name);
        }
    }
    return failed;
}