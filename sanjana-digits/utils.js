// Generate random int between 1 and max (inclusive)
function randInt(min, max)
{
    return Math.floor(Math.random() * (max - min) + min)
}

function puzzleToGameState(puzzle)
{
    return new GameState(
        Array(6).fill(false),
        [...puzzle.initialNumbers],
        puzzle.targetNumber
    )
}

function hasStoredGameState()
{
    return !!localStorageProxyGet("game_state");
}

function getStoredGameState()
{
    var json_state = JSON.parse(localStorageProxyGet("game_state"));
    return new GameState(
        json_state.a,
        json_state.b,
        json_state.c
    );
}

function storeGameState(gameState)
{
    localStorageProxySet(
        "game_state",
        JSON.stringify({
            a: gameState.numbersHidden,
            b: gameState.numbers,
            c: gameState.targetNumber
        })
    );
}

function clearGameState() 
{
    localStorage.removeItem("game_state");
}

function localStorageProxySet(name, item)
{
    localStorage.setItem("tylercleveland." + name, item);
}

function localStorageProxyGet(name)
{
    return localStorage.getItem("tylercleveland." + name);
}