/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  getAllUsers: async function (req, res) {
    return res.json([
      { id: 1, name: 'Max Mustermann' },
      { id: 2, name: 'Erika Musterfrau' },
      { id: 3, name: 'tes test' },
    ]);
  },
};
