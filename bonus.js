const figures = ['Brelan', 'Carre', 'Full', 'Yams', 'Suite', 'Chance'];

function isFigureAvailable(selectedFigures, figure) {
    return !selectedFigures.includes(figure);
}

function playYamsWithRestrictions(diceResults) {
    const selectedFigures = [];
    const points = {};

    for (let i = 0; i < diceResults.length; i++) {
        const currentDice = diceResults[i];

        for (const figure of figures) {
            if (!isFigureAvailable(selectedFigures, figure)) {
                continue;
            }

            if (figure === 'Brelan') {
                // Vérifiez si vous avez un brelan
            } else if (figure === 'Carre') {
                // Vérifiez si vous avez un carré
            } else if (figure === 'Full') {
                // Vérifiez si vous avez un full
            } else if (figure === 'Yams') {
                // Vérifiez si vous avez un yams
            } else if (figure === 'Suite') {
                // Vérifiez si vous avez une suite
            } else if (figure === 'Chance') {
                const chancePoints = diceResults.reduce((acc, val) => acc + val, 0);
                points[figure] = chancePoints;
            }

            if (points[figure]) {
                selectedFigures.push(figure);
                console.log(`Lancé ${i + 1}: ${diceResults.join(' ')} ${figure}`);
                console.log(`Points pour ${figure}: ${points[figure]}`);
                break;
            }
        }
    }
}

const diceResults = [1, 1, 1, 2, 2, 3];
playYamsWithRestrictions(diceResults);


module.exports = {
    figures,
    playYamsWithRestrictions
};