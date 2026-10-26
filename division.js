// Función básica de división
function dividir(a, b) {
    const divisor = Number(b);
    if (divisor === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return Number(a) / divisor;
}

// Resuelve las divisiones dentro de una expresión
function resolverDivision(expr) {
    while (expr.includes("/")) {
        expr = expr.replace(/(^-?\d+\.?\d*|\d+\.?\d*)\/(-?\d+\.?\d*)/, (_, a, b) => {
            return dividir(a, b);
        });
    }
    return expr;
}
