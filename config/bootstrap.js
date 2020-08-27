/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  sails.argon2 = require("argon2");
   if (await Usuario.count() > 0) {
     return;
   }
  //
   await Usuario.createEach([
     { username:"admin", password:sails.argon2.hash("admin"), email:"chilettiemanuel@gmail.com" },
  //   // etc.
   ]);
  // ```

};
