function calculateSalary(experience) {
    let salary;
    if(experience < 0){
        return -1;
    } else if (experience >= 0 && experience <= 2) {
        salary = 30000;  // Salary for 0 to 2 years of experience
    } else if (experience >2 && experience <= 5) {
        salary = 50000;  // Salary for 2 to 5 years of experience
    } else if (experience > 5 && experience < 10) {
        salary = 70000;  // Salary for 6 to 9 years of experience
    } else {
        salary = 100000; // Salary for 10+ years of experience
    }

    return salary;
}

module.exports = calculateSalary;
