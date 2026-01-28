import { 
  DataTypes, 
  Model, 
  Sequelize, 
  InferAttributes, 
  InferCreationAttributes, 
  CreationOptional,
  ForeignKey,
  NonAttribute,
  BelongsToGetAssociationMixin,
} from 'sequelize';

import type { CourseModel } from './Course';

export interface CourseVariantModel extends Model<InferAttributes<CourseVariantModel>, InferCreationAttributes<CourseVariantModel>> {
  id: CreationOptional<string>;
  course_id: ForeignKey<string>;
  title: string;
  mini_desc: CreationOptional<string | null>;
  description: CreationOptional<string | null>;
  price: CreationOptional<number | null>;
  capacity: CreationOptional<number | null>;
  start_date: CreationOptional<Date | null>;
  is_featured: CreationOptional<boolean>;
  is_active: CreationOptional<boolean>;
  created_at: CreationOptional<Date>;
  updated_at: CreationOptional<Date>;

  // Associations
  course?: NonAttribute<CourseModel>;
  
  // Association methods
  getCourse: BelongsToGetAssociationMixin<CourseModel>;
}

export default (sequelize: Sequelize) => {
  const CourseVariant = sequelize.define<CourseVariantModel>(
    'CourseVariant',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      course_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'courses',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: { msg: 'Title is required' },
        },
      },
      mini_desc: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
        validate: {
          min: { args: [0], msg: 'Price must be a positive number' },
        },
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          min: { args: [1], msg: 'Capacity must be at least 1' },
        },
      },
      start_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      is_featured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: 'course_variants',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      indexes: [
        { fields: ['course_id'] },
        { fields: ['is_featured'] },
        { fields: ['is_active'] },
      ],
    }
  ) as ReturnType<typeof sequelize.define> & {
    associate: (models: Record<string, ReturnType<typeof sequelize.define>>) => void;
  };

  CourseVariant.associate = (models) => {
    CourseVariant.belongsTo(models.Course, {
      foreignKey: 'course_id',
      as: 'course',
    });
  };

  return CourseVariant;
};
