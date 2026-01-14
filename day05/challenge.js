//=========================
// CHALLENGE DAY 5: STUDENT GRADE MANAGER
//=========================

const students = [
  {id: 1, name: "Iqo", scores: [85, 90, 78, 92]},
  {id: 2, name: "Budi", scores: [75, 80, 70, 85]},
  {id: 3, name: "Siti", scores: [95, 88, 92, 90]},
  {id: 4, name: "Andi", scores: [60, 65, 70, 68]},
  {id: 5, name: "Dewi", scores: [50, 55, 60, 58]}
];

// HELPER FUNCTIONS
const calculateGrade = (average) => {
  if (average >= 90) return 'A';
  if (average >= 80) return 'B';
  if (average >= 70) return 'C';
  if (average >= 60) return 'D';
  return 'E';
};

// TASK 1: Calculate Average
const calculateAverage = (student) => {
  const total = student.scores.reduce((sum, score) => sum + score, 0);
  const average = total / student.scores.length;
  return {
    ...student,
    average: parseFloat(average.toFixed(2)) // Format 2 decimal
  };
};

// TASK 2: Get Top Students
const getTopStudents = (students, minAverage) => {
  return [...students]
    .filter(student => student.average >= minAverage)
    .sort((a, b) => b.average - a.average);
};

// TASK 3: Get Grade Distribution
const getGradeDistribution = (students) => {
  const distribution = { A: 0, B: 0, C: 0, D: 0, E: 0 };
  
  students.forEach(student => {
    const grade = calculateGrade(student.average);
    distribution[grade]++;
  });
  
  return distribution;
};

// TASK 4: Find Student
const findStudentById = (students, id) => {
  return students.find(student => student.id === id);
};

const findStudentByName = (students, name) => {
  return students.find(student => 
    student.name.toLowerCase() === name.toLowerCase()
  );
};

// TASK 5: Get Class Statistics
const getClassStatistics = (students) => {
  const averages = students.map(student => student.average);
  const totalAverage = averages.reduce((sum, avg) => sum + avg, 0);
  const passingCount = students.filter(student => student.average >= 70).length;
  
  return {
    totalStudents: students.length,
    highestAverage: Math.max(...averages),
    lowestAverage: Math.min(...averages),
    classAverage: parseFloat((totalAverage / students.length).toFixed(2)),
    passingRate: Math.round((passingCount / students.length) * 100)
  };
};

// TASK 6: Generate Report
const generateReport = (students) => {
  // Pastikan semua students punya average
  const studentsWithAvg = students.map(student => 
    student.average ? student : calculateAverage(student)
  );
  
  const stats = getClassStatistics(studentsWithAvg);
  const distribution = getGradeDistribution(studentsWithAvg);
  
  let report = "===== STUDENT GRADE REPORT =====\n\n";
  
  // Student List
  studentsWithAvg.forEach((student, index) => {
    const grade = calculateGrade(student.average);
    report += `${index + 1}. ${student.name} - Average: ${student.average.toFixed(2)} - Grade: ${grade}\n`;
  });
  
  report += "\n===== CLASS STATISTICS =====\n";
  report += `Total Students: ${stats.totalStudents}\n`;
  report += `Highest Average: ${stats.highestAverage.toFixed(2)}\n`;
  report += `Lowest Average: ${stats.lowestAverage.toFixed(2)}\n`;
  report += `Class Average: ${stats.classAverage.toFixed(2)}\n`;
  report += `Passing Rate: ${stats.passingRate}%\n`;
  
  report += "\n===== GRADE DISTRIBUTION =====\n";
  Object.entries(distribution).forEach(([grade, count]) => {
    const plural = count === 1 ? 'student' : 'students';
    report += `${grade}: ${count} ${plural}\n`;
  });
  
  return report;
};

// BONUS FUNCTIONS
const getImprovement = (student) => {
  if (student.scores.length < 2) return "Not enough data";
  
  const firstScore = student.scores[0];
  const lastScore = student.scores[student.scores.length - 1];
  const improvement = lastScore - firstScore;
  
  return {
    firstScore,
    lastScore,
    improvement,
    trend: improvement > 0 ? "Improved 📈" : 
           improvement < 0 ? "Declined 📉" : "Stable ↔️"
  };
};

const getFailingStudents = (students) => {
  return students
    .filter(student => student.average < 70)
    .sort((a, b) => a.average - b.average); // Lowest first
};

// TEST YOUR FUNCTIONS
console.log("=== TESTING FUNCTIONS ===\n");

// Test TASK 1: Calculate Average
console.log("1. Students with average:");
const studentsWithAvg = students.map(calculateAverage);
console.log(studentsWithAvg);

// Test TASK 2: Get Top Students
console.log("\n2. Top Students (average >= 80):");
console.log(getTopStudents(studentsWithAvg, 80));

// Test TASK 3: Get Grade Distribution
console.log("\n3. Grade Distribution:");
console.log(getGradeDistribution(studentsWithAvg));

// Test TASK 4: Find Student
console.log("\n4. Find Student by ID (id=3):");
console.log(findStudentById(studentsWithAvg, 3));
console.log("Find Student by Name (name='Siti'):");
console.log(findStudentByName(studentsWithAvg, "Siti"));

// Test TASK 5: Get Class Statistics
console.log("\n5. Class Statistics:");
console.log(getClassStatistics(studentsWithAvg));

// Test TASK 6: Generate Report
console.log("\n6. Full Report:");
console.log(generateReport(students));

// Test BONUS Functions
console.log("\n=== BONUS FUNCTIONS ===\n");

console.log("Improvement Analysis for Iqo:");
console.log(getImprovement(students[0]));

console.log("\nFailing Students (average < 70):");
const failingStudents = getFailingStudents(studentsWithAvg);
console.log(failingStudents.length > 0 ? failingStudents : "No failing students!");

// EXAMPLE OF METHOD CHAINING
console.log("\n=== METHOD CHAINING EXAMPLE ===");

// Example 1: Chain untuk mendapatkan top students dengan grade tertentu
const topBStudents = studentsWithAvg
  .filter(student => calculateGrade(student.average) === 'B')
  .sort((a, b) => b.average - a.average)
  .map(student => `${student.name}: ${student.average}`);
console.log("Top B Students:", topBStudents);

// Example 2: Chain untuk statistical summary
const summary = studentsWithAvg
  .map(student => ({
    name: student.name,
    avg: student.average,
    grade: calculateGrade(student.average)
  }))
  .filter(student => student.grade !== 'E')
  .sort((a, b) => b.avg - a.avg);
console.log("Passing Students Summary:", summary);