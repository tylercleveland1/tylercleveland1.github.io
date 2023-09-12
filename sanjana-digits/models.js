class Puzzle
{
    initialNumbers;
    targetNumber;
    
    constructor(initialNumbers, targetNumber)
    {
        this.initialNumbers = initialNumbers;
        this.targetNumber = targetNumber;
    }
}

class Operation
{
    name;
    #applyFunc;
    #qualifierFunc;
    #printFunc;

    constructor(
        name,
        applyFunc,
        qualifierFunc,
        printFunc
    )
    {
        this.name = name;
        this.#applyFunc = applyFunc;
        this.#qualifierFunc = qualifierFunc;
        this.#printFunc = printFunc;
    }

    apply(x,y)
    {
        return this.#applyFunc(x,y)
    }

    isValid(x,y)
    {
        return this.#qualifierFunc(x,y)
    }

    print(x,y)
    {
        return this.#printFunc(x,y)
    }
}

class OperationChain
{
    #initialValue;
    #appliedOperations = []

    constructor(initialValue, initialAppliedOperations)
    {
        this.#initialValue = initialValue;

        if (initialAppliedOperations)
        {
            this.#appliedOperations = initialAppliedOperations;
        }
    }

    addOperation(appliedOperation)
    {
        this.#appliedOperations.push(appliedOperation);
    }

    evaluate()
    {
        var result;
        for (var appliedOperation of this.#appliedOperations)
        {
            result = appliedOperation.operation.apply(result || this.#initialValue, appliedOperation.operand)
        }

        return result;
    }

    totalOperationCount()
    {
        return this.#appliedOperations.length;
    }

    operationCount(operationName)
    {
        return this.#appliedOperations.filter(op => op.name == operationName).length;
    }

    getInitialValue()
    {
        return this.#initialValue;
    }

    getAppliedOperations()
    {
        return this.#appliedOperations;
    }
}

class AppliedOperation
{
    operation
    operand

    constructor(operation, operand)
    {
        this.operation = operation;
        this.operand = operand;
    }
}

class HistoryItem
{
    $lastTarget
    lastTargetValue
    $lastTarget2
    lastTarget2Value

    constructor(lastTarget, lastTargetValue, lastTarget2, lastTarget2Value)
    {
        this.$lastTarget = lastTarget;
        this.lastTargetValue = lastTargetValue;
        this.$lastTarget2 = lastTarget2;
        this.lastTarget2Value = lastTarget2Value;
    }
}

class GameState
{
    numbersHidden
    numbers
    targetNumber

    constructor(numbersHidden, numbers, targetNumber)
    {
        this.numbersHidden = numbersHidden;
        this.numbers = numbers;
        this.targetNumber = targetNumber;
    }
}

const Difficulty = {
	Easy: "Easy",
    Normal: "Normal",
    Heroic: "Heroic",
    Legendary: "Legendary",
}