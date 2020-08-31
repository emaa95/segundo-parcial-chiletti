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

  sails.argon2 = require("argon2");
  if (await Usuario.count() > 0) {
    return;
  }
  //
  await Usuario.createEach([
    { username:"admin", password:sails.argon2.hash("admin"), email:"chilettiemanuel@gmail.com" },

  ]);
};

