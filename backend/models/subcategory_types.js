'use strict';
const { Model } = require('sequelize');
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, DataTypes) => {
  class subcategory_types extends Model {
    static associate(models) {
      this.hasMany(models.Subcategory)
    }

    toJSON() {
      return { ...this.get(), id: undefined }
    }
  }

  subcategory_types.init({
    uuid: {
      defaultValue: uuidv4(),
      type: DataTypes.UUID,
      validate: {
        isUUID: 4,
        notEmpty: { msg: 'Subcategory Type uuid cannot be empty' }
      }
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: 'Subcategory Type must have a title' },
        notEmpty: { msg: 'Subcategory Type title cannot be empty' }
      },
      set(value) {
        this.setDataValue('title', value)
      }
    }
  }, {
    sequelize,
    modelName: 'Subcategory_Type',
    tableName: 'subcategory_types',
    timestamps: true
  });

  return subcategory_types;
};