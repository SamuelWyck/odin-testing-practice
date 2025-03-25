import {capitalize, reverseString, calculator} from "./index.js";
import caesarChipher from "./caesarCipher.js";

it("capitalize exists", function() {
    expect(capitalize);
});

it("capitalize", function() {
    expect(capitalize("test")).toBe("Test");
});

it("reverseString exists", function() {
    expect(reverseString);
});

it("reverseString works", function() {
    expect(reverseString("test")).toBe("tset");
});

it("calculator.add works", function() {
    expect(calculator.add(3, 2)).toBe(5);
});

it("calculator.subtract works (1)", function() {
    expect(calculator.subtract(3, 2)).toBe(1);
});

it("calculator.subtract works (2)", function() {
    expect(calculator.subtract(3, -2)).toBe(5);
});

it("calculator.multiply works (1)", function() {
    expect(calculator.multiply(3, 2)).toBe(6);
});

it("calculator.multiply works (2)", function() {
    expect(calculator.multiply(3, -3)).toBe(-9);
});

it("calculator.divide works (1)", function() {
    expect(calculator.divide(3, 3)).toBe(1);
});

it("calculator.divide works (2)", function() {
    expect(function() {calculator.divide(3, 0)}).toThrow("Divide by zero");
});

it("caesarCipher works (1)", function() {
    expect(caesarChipher("xyz", 3)).toBe("abc");
});

it("caesarCipher works (2)", function() {
    expect(caesarChipher("HeLLo", 3)).toBe("KhOOr");
});

it("caesarCipher works (3)", function() {
    expect(caesarChipher("HeLLo, world!", 3)).toBe("KhOOr, zruog!");
});