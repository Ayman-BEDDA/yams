function rollFiveDice() {
    var diceResults = [];
    for (var i = 0; i < 5; i++) {
        diceResults.push(Math.floor(Math.random() * 6) + 1);
    }
    return diceResults;
}

function isBrelan(diceResults){
    for (var i = 0; i < diceResults.length; i++) {
        var count = 0;
        for (var j = 0; j < diceResults.length; j++) {
            if (diceResults[i] === diceResults[j]) {
                count++;
            }
        }
        if (count === 3) {
            return true;
        }
    }
}

function isCarre(diceResults){
    for (var i = 0; i < diceResults.length; i++) {
        var count = 0;
        for (var j = 0; j < diceResults.length; j++) {
            if (diceResults[i] === diceResults[j]) {
                count++;
            }
        }
        if (count === 4) {
            return true;
        }
    }
    return false;
}

function isFull(diceResults){
    var count = 0;
    for (var i = 0; i < diceResults.length; i++) {
        for (var j = 0; j < diceResults.length; j++) {
            if (diceResults[i] === diceResults[j]) {
                count++;
            }
        }
    }
    return count === 5;
}

function isYams(diceResults){
    var count = 0;
    for (var i = 0; i < diceResults.length; i++) {
        for (var j = 0; j < diceResults.length; j++) {
            if (diceResults[i] === diceResults[j]) {
                count++;
            }
        }
    }
    return count === 5;
}



function isSuite(diceResults){
    var sortedDiceResults = diceResults.sort();
    for (var i = 0; i < sortedDiceResults.length - 1; i++) {
        if (sortedDiceResults[i + 1] - sortedDiceResults[i] !== 1) {
            return false;
        }
    }
    return true;
}



function playYams(diceResults) {
    console.log(diceResults);

    const message =
        isSuite(diceResults) ? "Bien joué, vous avez une suite! Score: 40" :
            isBrelan(diceResults) ? "Bien joué, vous avez un brelan! Score: 28" :
                isCarre(diceResults) ? "Bien joué, vous avez un carré! Score: 35" :
                    isFull(diceResults) ? "Bien joué, vous avez un full! Score: 30" :
                        isYams(diceResults) ? "Bien joué, vous avez un yams! Score: 50" :
                            "Aucune figure reconnue, c'est une chance! Score: " + diceResults.reduce((acc, val) => acc + val, 0);

    console.log(message);
}


const diceResults = rollFiveDice();

playYams(diceResults);