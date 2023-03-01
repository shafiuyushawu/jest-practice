import { stringLength, stringReverse } from './modules/stringLength';


describe('string length', () => {
    test('return string length', () => {
        expect(stringLength('Shafiu')).toBe(6)
    })
    test('return str < 0 || str > 0', () => {
        expect(stringLength('Yushawu')).toBe(7)
    })
    test('return reverse of a screen', () => {
        expect(stringReverse('hello')).toMatch('olleh')
        expect(stringReverse('1234')).toBe('4321')
        expect(stringReverse('5678')).toBe('8765')
    })
})

