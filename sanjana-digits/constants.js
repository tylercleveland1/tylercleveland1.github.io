const mathOperations =
{
    add: new Operation(
        "add",
        (x,y) => x + y,
        (x,y) => true,
        (x,y) => `${x} + ${y}`
    ),
    subtract: new Operation(
        "subtract",
        (x,y) => x - y,
        (x,y) => x - y > 0,
        (x,y) => `${x} - ${y}`
    ),
    multiply: new Operation(
        "multiply",
        (x,y) => x * y,
        (x,y) => x != 1 && y != 1,
        (x,y) => `${x} * ${y}`
    ),
    divide: new Operation(
        "divide",
        (x,y) => x / y,
        (x,y) => x % y == 0 && x != 1 && y != 1,
        (x,y) => `${x} / ${y}`
    ),
    // Too complicated
    // subtractReverse: new Operation(
    //     "subtractReverse",
    //     (x,y) => y - x,
    //     (x,y) => y - x > 0,
    //     (x,y) => `${y} - ${x}`
    // )
    // divideReverse: new Operation(
    //     "divideReverse",
    //     (x,y) => y / x,
    //     (x,y) => y % x == 0,
    //     (x,y) => `${y} / ${x}`
    // )
}