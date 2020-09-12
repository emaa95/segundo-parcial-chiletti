/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  //Usuario
  'get /login': { view: 'pages/login' },
  'post /login': 'UsuarioController.login',
   '/logout':    'UsuarioController.logout' ,

  //Campos
  'get /newCampos': 'CampoController.campoForm',
  'post /newCampos': 'CampoController.nuevoCampo' ,
  '/Campos': 'CampoController.campos',

  //Stock

  'get /newStock' : 'StockController.stockForm' && 'StockController.viewCampos' ,
  'post /newStock': 'StockController.nuevoStock',
  '/stock': 'StockController.home',

  //Actividad
  'get /newActividad/:id': 'StockControler.actividadForm',
  'post /newActividad/:id': 'ActividadController.new',
  '/actividad': 'ActividadController.home',

   /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
