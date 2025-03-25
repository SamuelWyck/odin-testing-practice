import {capitalize, reverseString} from "./index.js";

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