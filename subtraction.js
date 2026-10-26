function restar(a, b) {
    return Number(a) - Number(b);
}

function resolverResta(expr) {
    const numero = "(?:\\d+\\.?\\d*|\\.\\d+)";
    const patron = new RegExp("(^|\\+)(-?" + numero + ")-(-?" + numero + ")");

    while (patron.test(expr)) {
        expr = expr.replace(patron, (_, prefijo, a, b) => {
            return prefijo + restar(a, b);
        });
    }

    return expr;
}
