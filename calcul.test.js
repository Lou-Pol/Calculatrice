import { addition, soustraction,multiplication,division} from "./calculsafaire.js";

test('addition', () => {
    expect(addition(2,5)).toBe(7);
})
test('soustraction', () => {
    expect(soustraction(2,5)).toBe(-3);
})
test('mult', () => {
    expect(multiplication(2,5)).toBe(10);
})
test('division', () => {
    expect(division(12,4)).toBe(3);
})