const { rollFiveDice, isBrelan, isCarre, isFull, isYams, isSuite, playYams } = require('../tp-clean/script');

test('rollFiveDice should return an array of 5 numbers between 1 and 6', () => {
    const diceResults = rollFiveDice();
    expect(diceResults).toHaveLength(5);
    for (const result of diceResults) {
        expect(result).toBeGreaterThanOrEqual(1);
        expect(result).toBeLessThanOrEqual(6);
    }
});

test('isBrelan should return true for a brelan', () => {
    const result = isBrelan([1, 1, 1, 2, 3]);
    expect(result).toBe(true);
});

test('isCarre should return true for a carre', () => {
    const result = isCarre([1, 1, 1, 1, 2]);
    expect(result).toBe(true);
});

test('isFull should return true for a full', () => {
    const result = isFull([1, 1, 2, 2, 2]);
    expect(result).toBe(true);
});

test('isYams should return true for a yams', () => {
    const result = isYams([2, 2, 2, 2, 2]);
    expect(result).toBe(true);
});

test('isSuite should return true for a suite', () => {
    const result = isSuite([2, 3, 4, 5, 6]);
    expect(result).toBe(true);
});

test('playYams should log the correct message for a given set of dice results', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    playYams([1, 2, 3, 4, 5]);
    expect(logSpy).toHaveBeenCalledWith('Bien joué, vous avez une suite! Score: 40');

    playYams([1, 1, 1, 2, 3]);
    expect(logSpy).toHaveBeenCalledWith('Bien joué, vous avez un brelan! Score: 28');


    logSpy.mockRestore();
});