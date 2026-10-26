// Función básica de multiplicación
function multiplicar(a, b) {
    return Number(a) * Number(b);
}

// Resuelve las multiplicaciones dentro de una expresión
function resolverMultiplicacion(expr) {
    while (expr.includes("*")) {
        expr = expr.replace(/(\d+\.?\d*)\*(\d+\.?\d*)/, (_, a, b) => {
            return multiplicar(a, b);
        });
    }
    return expr;
}
