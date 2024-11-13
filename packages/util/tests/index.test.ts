import add from "@/index.js";

describe("Package", () => {
	it("should sum", () => {
		expect(add(4, 3)).toBe(7);
	});
});
