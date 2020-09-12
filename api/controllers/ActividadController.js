/**
 * ActividadController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  home: async function (req, res) {
    let actividades = await  Actividad.find({stock: req.params.id});
    res.view('pages/actividad', {actividades: actividades});
  },

  new: async function (req, res) {
    let kilos = req.param('cantKilos');
    let opcion = req.param('tipo');
    let subtotal = req.param('subtotal');
    let com = req.param('coment');
    let stock = req.params.id;
    let actividades = await Actividad.create({
      kilosUpdate: kilos,
      comentario: com,
      subtotal: subtotal,
      tipo: opcion,
      stock: stock,
    });
    res.redirect('/actividad');
  },
  actividadForm: function (req, res) {
    res.view('pages/newActividad');
  },
};

