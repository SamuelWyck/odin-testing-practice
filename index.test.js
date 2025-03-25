import {capitalize, reverseString, calculator} from "./index.js";

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