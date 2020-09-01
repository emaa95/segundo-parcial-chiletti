/**
 * CampoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  home: async function (req, res) {
    let campos = await Campo.find({});
    res.view('pages/campos', {campos: campos});

  },
  nuevoCampo: async function (req, res){
    let name = req.param('nombre');
    let cant = req.param('cantHas');
    let loc = req.param('localidad');
    let prov = req.param('provincia');

    let campos = await Campo.create({
      nombre: name,
      cantHas: cant,
      localidad: loc,
      provincia: prov,
      owner: req.session.user.id
    });

    res.redirect('/newCampos');
  }
};

