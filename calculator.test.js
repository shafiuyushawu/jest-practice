import Calculator from './modules/Calculator.js'

module.exports = Calculator;
describe('calculator', () => {
    const calculator = new Calculator();


    describe('Add', () => {
        test('add two positive integers', () => {
            expect(calculator.add(3, 2)).toBe(5)
        })
        test('add two negative integers', () => {
            expect(calculator.add(-3, -2)).toBe(-5)
        })
    })

    describe('Subtract', () => {
        test('subtract two positive integer', () => {
            expect(calculator.subtract(4, 7)).toBe(-3)
        })
        test('subtract two negative integer', () => {
            expect(calculator.subtract(-4, -7)).toBe(3)
        })
    })

    describe('Division', () => {
        test('divide two positive integer', () => {
            expect(calculator.divide(4, 2)).toBe(2)
        })
        test('divide two negative integer', () => {
            expect(calculator.divide(-12, -2)).toBe(6)
        })
    })

    describe('Multiplication', () => {
        test('multiply two positive integer', () => {
            expect(calculator.multiply(10, 2)).toBe(20)
        })
        test('multiply two negative integer', () => {
            expect(calculator.multiply(-5, -4)).toBe(20)
        })
    })
})