// =========================
// SCIENTIFIC CALCULATOR
// =========================

const display = document.getElementById("display");

function appendValue(value) {
    if (display) {
        display.value += value;
    }
}

function clearDisplay() {
    if (display) {
        display.value = "";
    }
}

function calculate() {

    if (!display) return;

    try {

        let expression = display.value;

        expression = expression
            .replace(/sin\(/g, "Math.sin(")
            .replace(/cos\(/g, "Math.cos(")
            .replace(/tan\(/g, "Math.tan(")
            .replace(/sqrt\(/g, "Math.sqrt(");

        display.value = eval(expression);

    } catch (error) {

        display.value = "ERROR";

    }
}


// =========================
// TEMPERATURE CONVERTER
// =========================

function convertTemp() {

    const celcius = document.getElementById("celcius");

    if (!celcius) return;

    const c = parseFloat(celcius.value);

    if (isNaN(c)) {

        alert("Masukkan angka yang valid!");
        return;

    }

    document.getElementById("fahrenheit").innerHTML =
        `Fahrenheit : ${(c * 9 / 5 + 32).toFixed(2)} °F`;

    document.getElementById("kelvin").innerHTML =
        `Kelvin : ${(c + 273.15).toFixed(2)} K`;

    document.getElementById("reamur").innerHTML =
        `Reamur : ${(c * 0.8).toFixed(2)} °R`;

}


// =========================
// PYTHAGORAS CALCULATOR
// =========================

function hitungMiring() {

    const a = parseFloat(
        document.getElementById("a").value
    );

    const b = parseFloat(
        document.getElementById("b").value
    );

    const hasil = document.getElementById("hasilMiring");

    if (isNaN(a) || isNaN(b)) {

        hasil.innerHTML =
            "Masukkan kedua sisi terlebih dahulu!";

        return;

    }

    const c = Math.sqrt(a * a + b * b);

    hasil.innerHTML =
        `Sisi miring (C) = ${c.toFixed(2)}`;

}