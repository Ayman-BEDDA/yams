const { playYamsWithRestrictions } = require('../tp-clean/bonus');

describe('playYamsWithRestrictions', () => {
    test('Should correctly select figures and accumulate points', () => {
        const diceResults = [
            [1, 1, 1, 2, 2, 3], // Lancé 1: Full, Lancé 2: Brelan, Lancé 3: Chance
            [1, 1, 1, 2, 2, 3], // Lancé 1: Full, Lancé 2: Brelan, Lancé 3: Chance
            [1, 1, 1, 2, 2, 3], // Lancé 1: Full, Lancé 2: Brelan, Lancé 3: Chance
        ];

        const expectedResults = [
            ['Full', 'Brelan', 'Chance'],
            ['Full', 'Brelan', 'Chance'],
            ['Full', 'Brelan', 'Chance'],
        ];

        for (let i = 0; i < diceResults.length; i++) {
            const selectedFigures = [];
            const capturedLog = [];
            const originalLog = console.log;

            console.log = (message) => {
                capturedLog.push(message);
            };

            playYamsWithRestrictions(diceResults[i]);

            console.log = originalLog;

            expect(capturedLog).toEqual(expect.arrayContaining(expectedResults[i]));
        }
    });
});
