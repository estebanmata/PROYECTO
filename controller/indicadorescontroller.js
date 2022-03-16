const indicadoresEconomicosBCCR = require('../routes/indicadoresRouter');

indicadoresEconomicosBCCR().then((data) => {
    console.log("Compra y Venta del día de hoy:");
    console.log(data);
});

indicadoresEconomicosBCCR('15/03/2022', '31/12/2022').then((data) => {
    console.log("Compra y Venta por fecha:");
    console.log(data);
});
