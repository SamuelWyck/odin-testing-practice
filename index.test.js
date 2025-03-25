import {capitalize} from "./index.js";

it("capitalize exists", function() {
    expect(capitalize);
});

it("capitalize", function() {
    expect(capitalize("test")).toBe("Test");
});