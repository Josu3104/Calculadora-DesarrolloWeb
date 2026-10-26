
function sumar(a, b) {
    return Number(a) + Number(b);
}

function resolverSuma(expr) {
    const patron = /^[+-]?(?:\d+\.?\d*|\.\d+)(?:[+-](?:\d+\.?\d*|\.\d+))*$/;
    if (!patron.test(expr)) return expr;

    return expr
        .match(/[+-]?(?:\d+\.?\d*|\.\d+)/g)
        .reduce((total, numero) => sumar(total, numero), 0)
        .toString();
}
