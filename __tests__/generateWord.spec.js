describe("Word generation", () => {
    test("it should generate a word to guess", () => {
        const outputType = "string";

        expect(generateWordToBeGuessed()).toBeInstanceOf(outputType);
        expect(generateWordToBeGuessed()).length.toBeGreaterThan(0);
    });
});
