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