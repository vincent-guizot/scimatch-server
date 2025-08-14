'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate(models) {
      Like.belongsTo(models.User, { foreignKey: 'UserId', as: 'user' });
      Like.belongsTo(models.User, { foreignKey: 'LikedUserId', as: 'likedUser' });
    }
  }

  Like.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    UserId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    LikedUserId: {
      type: DataTypes.UUID,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Like',
  });

  return Like;
};
