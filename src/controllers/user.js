const { where } = require('sequelize');
const Sequelize = require('sequelize');
const User = require('../models/user');

module.exports = {
  async find(req, res) {
    try {
      const found = await User.findOne({
        where: {
          user_id: req.params.id,
        },
      });

      return res.status(200).send(found);
    } catch (error) {
      console.log(error);
      return res.status(404).send(error);
    }
  },

  async list(_, res) {
    try {
      const users = await User.findAll({});

      return res.status(200).send(users);
    } catch (error) {
      console.log(error);
      return res.status(404).send(error);
    }
  },

  async create(req, res) {
    try {
      const createdUser = await User.create({
        ...req.body,
      });

      return res.status(200).send(createdUser);
    } catch (error) {
      console.log(error);
      return res.status(400).send(error);
    }
  },

  async update(req, res) {
    const { body } = req;

    try {
      const updatedUser = await User.findOne({
        where: { user_id: body.user_id },
      });

      await updatedUser.update({ ...body });

      return res.status(200).send(updatedUser);
    } catch (error) {
      console.log(error);
      return res.status(400).send(error);
    }
  },

  async delete(req, res) {
    try {
      const deletedUser = await User.destroy({
        where: {
          user_id: req.params.id,
        },
      });

      if (deletedUser) {
        return res.status(204).send('OK');
      } else {
        return res.status(404).send('user_not_found');
      }
    } catch (error) {
      console.log(error);
      return res.status(400).send(error);
    }
  },
};
