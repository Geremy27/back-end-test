const Sequelize = require('sequelize');
const Gender = require('../models/gender');

module.exports = {
  async list(_, res) {
    try {
      const genders = await Gender.findAll({});

      return res.status(200).send(genders);
    } catch (error) {
      console.log(error);
      return res.status(404).send(error);
    }
  },
};
