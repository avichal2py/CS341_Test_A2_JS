const calculateSalary = require('./salary')

test('Test Case 1', () => {
    expect(calculateSalary(-1)).toBe(-1)
})
test('Test Case 2', () => {
    expect(calculateSalary(0)).toBe(30000)
})
test('Test Case 3', () => {
    expect(calculateSalary(1)).toBe(30000)
})
test('Test Case 4', () => {
    expect(calculateSalary(2)).toBe(30000)
})
test('Test Case 5', () => {
    expect(calculateSalary(3)).toBe(50000)
})
test('Test Case 6', () => {
    expect(calculateSalary(4)).toBe(50000)
})
test('Test Case 7', () => {
    expect(calculateSalary(5)).toBe(50000)
})
test('Test Case 8', () => {
    expect(calculateSalary(6)).toBe(70000)
})
test('Test Case 9', () => {
    expect(calculateSalary(9)).toBe(70000)
})
test('Test Case 10', () => {
    expect(calculateSalary(10)).toBe(100000)
})
test('Test Case 11', () => {
    expect(calculateSalary(11)).toBe(100000)
})