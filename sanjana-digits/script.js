// history stack
// array of HistoryItem
var historyArray = [];

$(document).ready(function() {
    var $mainContent = $("#main-content");
    $("#gameOverModal").modal('hide');

    registerEvents($mainContent);

    if (localStorageProxyGet("last_automatic_reset_date") != new Date().getDate())
    {
        clearGameState();
    }

    loadGameState($mainContent);
    checkGameEnd($mainContent);
});

function registerEvents(
    $mainContent
)
{
    var $numbers = $mainContent.find(".number");
    var $operations = $mainContent.find(".operation");

    $mainContent.on("click touchend", ".number", function(e)
    {
        var $this = $(this);
        
        // If we click on a number and no operator is selected, select that number
        // Otherwise, merge those two into one
        if ($operations.filter(".touched").length == 0)
        {
            $this.addClass("touched");
            $numbers.not($this).removeClass("touched");
        }
        else
        {
            applyOperation(
                $mainContent,
                $numbers.filter(".touched").first(),
                $this,
                $operations.filter(".touched").first());

            $operations.removeClass("touched");
        }
    });

    $mainContent.on("click touchend", ".operation", function(e)
    {
        var $this = $(this);

        if ($this.hasClass("touched"))
        {
            $this.removeClass("touched");
        }
        else if ($numbers.filter(".touched").length == 1)
        {
            $this.addClass("touched");
            $operations.not($this).removeClass("touched");
        }
        
    });

    $mainContent.on("click touchend", "#undo", function(e)
    {
        if (historyArray.length != 0)
        {
            var historyItem = historyArray.pop();
            historyItem.$lastTarget
                .removeClass("hidden")
                .text(historyItem.lastTargetValue);
            historyItem.$lastTarget2
                .removeClass("hidden")
                .text(historyItem.lastTarget2Value);
        }
    });

    $("#gameOverModal").on("click", "#btnReset", function (e)
    {
        resetAndLoadNewPuzzle($mainContent);
    });
}

function applyOperation(
    $mainContent,
    $number1,
    $number2,
    $operation
)
{
    $number2.addClass("touched");

    var operand1 = new Number($number1.text());
    var operand2 = new Number($number2.text());
    var operation = mathOperations[$operation.attr("operationName")];

    setTimeout(function () {
        $number1.removeClass("touched");
        $number2.removeClass("touched");

        if (!operation.isValid(operand1, operand2))
        {
            return;
        }
    
        historyArray.push(new HistoryItem($number1, operand1, $number2, operand2));
    
        var result = operation.apply(operand1, operand2);
    
        $number1.addClass("hidden");
        $number2.text(result);
    
        checkGameEnd($mainContent);
    }, 125);
}

function resetAndLoadNewPuzzle($mainContent)
{
    clearGameState();
    loadGameState($mainContent);
}

function loadGameState(
    $mainContent
)
{
    $mainContent.addClass("hidden");

    var gameState;
    if (hasStoredGameState())
    {
        gameState = getStoredGameState();
    }
    else
    {
        var puzzle = generatePuzzle();
        localStorageProxySet("last_automatic_reset_date", new Date().getDate());
        gameState = puzzleToGameState(puzzle);
        storeGameState(gameState);
    }

    // reset all active numbers and buttons
    $mainContent.find(".number").removeClass("touched").removeClass("hidden");
    $mainContent.find(".operation").removeClass("touched");

    // load numbers and target
    $mainContent.find("#target").text(gameState.targetNumber);

    for (var i = 0; i < 6; i++)
    {
        $mainContent.find(`#number-pos-${i}`)
            .text(gameState.numbers[i])
            .toggleClass("hidden", gameState.numbersHidden[i]);
    }

    $mainContent.removeClass("hidden");
}

function checkGameEnd($mainContent)
{
    var $target = $mainContent.find("#target");
    var $numbers = $mainContent.find(".number");

    $numbers.each(function (i)
    {
        if ($(this).text() === $target.text())
        {
            storeGameState(getGameState($mainContent));
            showGameOver();
            return false;
        }
    });
}

function showGameOver()
{
    $("#gameOverModal").modal('show');
}

function getGameState($mainContent)
{
    var $numbers = $mainContent.find(".number");
    var numbersHidden = [];
    var numbers = [];

    $numbers.each(function (i)
    {
        var $this = $(this);
        numbersHidden.push($this.hasClass("hidden"));
        numbers.push($this.text());
    });

    return new GameState(
        numbersHidden,
        numbers,
        $mainContent.find("#target").text()
    );
}