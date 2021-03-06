import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;
const DataTypes = Sequelize.DataTypes;

export default class tbl_food extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        d_id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        d_date: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
        d_food: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        d_qty: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        d_cal: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "tbl_food",
        timestamps: false,
      }
    );
  }
}
