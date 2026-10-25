let expresion = "";

function ultimo() {
    return expresion.slice(-1);
}

function esNumero(c) {
    return /\d/.test(c);
}

function esOperador(c) {
    return c !== "" && "+-*/".includes(c);
}

function contar(c) {
    return expresion.split(c).length - 1;
}

function agregarNumero(n) {
    if (ultimo() === ")") expresion += "*";
    if (/(^|[^\d.])0$/.test(expresion)) expresion = expresion.slice(0, -1);
    expresion += n;
    return expresion;
}

function agregarOperador(op) {
    const u = ultimo();
    const antes = expresion.slice(0, -1);
    const esNegativo = antes === "" || antes.slice(-1) === "(";

    if (u === "" || u === "(") {
        if (op !== "-") return expresion;
    } else if (u === ".") {
        return expresion;
    } else if (esOperador(u)) {
        if (esNegativo) return expresion;
        expresion = antes;
    }

    expresion += op;
    return expresion;
}

function agregarDecimal() {
    const numero = expresion.match(/[\d.]+$/);
    if (numero && numero[0].includes(".")) return expresion;

    if (ultimo() === ")") expresion += "*";
    if (!esNumero(ultimo())) expresion += "0";
    expresion += ".";
    return expresion;
}

function abrirParentesis() {
    const u = ultimo();
    if (u === ".") return expresion;

    if (esNumero(u) || u === ")") expresion += "*";
    expresion += "(";
    return expresion;
}

function cerrarParentesis() {
    const u = ultimo();
    if (contar("(") > contar(")") && (esNumero(u) || u === ")")) {
        expresion += ")";
    }
    return expresion;
}

function borrarUltimo() {
    expresion = expresion.slice(0, -1);
    return expresion;
}

function limpiar() {
    expresion = "";
    return expresion;
}

function esExpresionValida() {
    return (
        expresion !== "" &&
        contar("(") === contar(")") &&
        (esNumero(ultimo()) || ultimo() === ")")
    );
}

function obtenerExpresion() {
    return expresion;
}