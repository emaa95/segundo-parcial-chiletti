/**
 * StockController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  home: async function (req, res) {
    let stocks = await  Stock.find({});
    res.view('pages/stock', {stocks: stocks});
    },

  nuevoStock: async function (req, res){
    let cantidadKilos = req.param('cantKilos');
    let tipoStock = req.param('tipo');
    let gps = req.param('gps');
    let campoID = req.param('campoID');

    let stocks = await Stock.create({
      cantKilos: cantidadKilos,
      tipoStock: tipoStock,
      ubicacionGPS: gps,
      campo: campoID,
    });

    res.redirect('/stock' );
  },
  viewCampos: async function (req, res) {
    let campos = await Campo.find({});
    res.view('pages/newStock', {campos: campos});
  },

};

