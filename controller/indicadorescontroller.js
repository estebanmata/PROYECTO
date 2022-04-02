const indicadoresEconomicosBCCR = require('../routes/indicadoresRouter');

indicadoresEconomicosBCCR().then((data) => {
    console.log("Compra y Venta del día de hoy:");
    console.log(data);
});

indicadoresEconomicosBCCR('20/04/2018', '20/04/2018').then((data) => {
    console.log("Compra y Venta por fecha:");
    console.log(data);
});
