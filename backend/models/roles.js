'use strict';
const { Model } = require('sequelize');
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    static associate(models) {
      this.hasMany(models.User_Role)
    }

    toJSON() {
      return { ...this.get(), id: undefined }
    }
  }

  roles.init({
    uuid: {
      defaultValue: uuidv4(),
      type: DataTypes.UUID,
      validate: {
        isUUID: 4,
        notEmpty: { msg: 'Role uuid cannot be empty' }
      }
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: 'Role must have a title' },
        notEmpty: { msg: 'Role title cannot be empty' }
      },
      set(value) {
        this.setDataValue('title', value)
      }
    }
  }, {
    sequelize,
    modelName: 'Role',
    tableName: 'roles',
    timestamps: true
  });

  return roles;
};