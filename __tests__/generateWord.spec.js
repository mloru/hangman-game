describe("Word generation", () => {
    test("it should generate a word to guess", () => {
        const outputType = "string"

        expect(generateWordToGuess()).toBeInstanceOf(outputType);
        expect(generateWordToGuess()).length.toBeGreaterThan(0);
    });
});
