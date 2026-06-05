function calculateAverage(data) {
    let sum = 0;
    for (const student of data) {
        sum += student.score;
    }
    return sum / data.length;
}