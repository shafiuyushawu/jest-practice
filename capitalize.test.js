import Capitalize from "./modules/Capitalize"

describe('string capitalize', () => {
    test('capitalize the first character', () => {
        expect(Capitalize('hello')).toMatch('Hello')
    })
})