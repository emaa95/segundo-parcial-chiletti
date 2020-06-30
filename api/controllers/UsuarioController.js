/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    login: async function (req, res) {
        let user = req.param('user');
        let pass = req.param('pass');
        let found = await Usuario.findOne({
            username: user,
            password: pass
        })

        if (found) {
            req.session.user = found;
            res.view('pages/login');
        } else {
            req.session.user = null;
            res.view('pages/login');
        }
    }

};

