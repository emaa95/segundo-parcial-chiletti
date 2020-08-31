/**
 * CampoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  home: async function (req, res) {
  let campos = await Campo.find({});
      res.view('pages/campos', {campos : campos });

  }


};

