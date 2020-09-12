/**
 * CampoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  campos: async function (req, res) {
    let campos = await Campo.find({});
    res.view('pages/campos', {campos: campos});

  },
  nuevoCampo: async function (req, res){
    let name = req.param('name');
    let cant = req.param('cantHas');
    let loc = req.param('localidad');
    let prov = req.param('prov');

    let campos = await Campo.create({
      nombre: name,
      cantHas: cant,
      localidad: loc,
      provincia: prov,
      owner: req.session.user.id
    });

    res.redirect('/Campos');
  },
  campoForm: function (req, res) {
    res.view('pages/newCampos');
  },
};

