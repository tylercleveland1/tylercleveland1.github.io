// None -> Puzzle
function generatePuzzle(seedString)
{
    /**
     * Generate a puzzle based on a target number
     * 
     * First, 6 base numbers are generated (must be < 50 == min puzzle end value)
     *      1 number is generated from the range 1-10 incl.
     *      3 numbers are generated from the range 1-25 incl.
     *      1 numbers are generated from the range 10-25 incl.
     *      1 numbers are generated from the range 10-45 incl.
     * Ensure no 2 base numbers are the same.
     * 
     * As a heuristic, each path must only have a max of 2 division operations or multiplication
     * operations, since those are difficult when thinking ahead (compared to addition,
     * or subtraction).
     */

    var prng = new MersenneTwister(seedString);

    // fill base numbers, no duplicates
    var baseNumbers = new Set();
    for (var i = 0; i < 6; i++)
    {
        var newBaseNumber;

        do
        {
            switch (i)
            {
                case 0:
                    newBaseNumber = prng.randomRanged(10, 45);
                    break;
                case 1:
                    newBaseNumber = prng.randomRanged(10, 25);
                    break;
                case 2:
                    newBaseNumber = prng.randomRanged(2, 25);
                    break;
                case 3:
                    newBaseNumber = prng.randomRanged(2, 25);
                    break;
                case 4:
                    newBaseNumber = prng.randomRanged(2, 25);
                    break;
                case 5:
                    newBaseNumber = prng.randomRanged(2, 10);
                    break;
            }
        }
        while (baseNumbers.has(newBaseNumber));

        baseNumbers.add(newBaseNumber);
    }

    var resultPool = {};

    for (var baseNumber of baseNumbers)
    {
        var remainingNumbers = new Set(baseNumbers);
        remainingNumbers.delete(baseNumber);
        generateOperationChainRecursive(
            baseNumber,
            new OperationChain(baseNumber),
            remainingNumbers,
            resultPool
        )
    }

    // Pick a random result in pool that has less than 25 available paths to solution
    var targetsWithFewPaths = Object.entries(resultPool)
        .map(function (item)
        {
            return [item[0], item[1].length]
        })
        .filter(function (item)
        {
            return item[1] > 25 && item[1] < 75;
        })
        .map(function (item) {
            return item[0];
        });

    var target = targetsWithFewPaths[Math.floor(prng.random() * targetsWithFewPaths.length)];

    // Return a random result
    console.log(
        "Sample solution:",
        resultPool[target][0].getInitialValue(),
        resultPool[target][0].getAppliedOperations());

    return new Puzzle(
        [...baseNumbers],
        target
    );
}

function generateOperationChainRecursive(
    currentValue,
    currentOperationChain,
    remainingOperands,
    resultPool)
{
    // End if we have used all available operands, or if we have a chain of > 3 operations
    if (remainingOperands.values().length == 0
        || currentOperationChain.totalOperationCount() > 3)
    {
        // Only save a result if the end result is greater than 50
        if (currentValue > 50
            && currentOperationChain.operationCount(mathOperations.multiply.name) <= 1
            && currentOperationChain.operationCount(mathOperations.divide.name) <= 1
            && currentOperationChain.operationCount(mathOperations.divideReverse.name) <= 1)
        {
            if (!resultPool[currentValue])
            {
                resultPool[currentValue] = [];
            }
            
            resultPool[currentValue].push(currentOperationChain);
        }

        return;
    }

    // Apply each operand, to each number in recursive calls
    for (var nextOperand of remainingOperands)
    {
        for (var mathOperation of Object.values(mathOperations))
        {
            if (mathOperation.isValid(currentValue, nextOperand))
            {
                var nextValue = mathOperation.apply(currentValue, nextOperand);

                if (nextValue < 400)
                {
                    var copyOperationChain = new OperationChain(
                        currentOperationChain.getInitialValue(),
                        [...currentOperationChain.getAppliedOperations()]
                    );

                    copyOperationChain.addOperation(new AppliedOperation(
                        mathOperation,
                        nextOperand
                    ));
                    
                    var remainingOperandsCopy = new Set(remainingOperands);
                    remainingOperandsCopy.delete(nextOperand);

                    generateOperationChainRecursive(
                        nextValue,
                        copyOperationChain,
                        remainingOperandsCopy,
                        resultPool
                    )
                }
            }
        }
    }
}