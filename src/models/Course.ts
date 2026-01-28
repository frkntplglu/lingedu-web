import { 
  DataTypes, 
  Model, 
  Sequelize, 
  InferAttributes, 
  InferCreationAttributes, 
  CreationOptional,
  NonAttribute,
  HasManyGetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyCreateAssociationMixin,
} from 'sequelize';

// Import type for association
import type { CourseVariantModel } from './CourseVariant';

export interface CourseModel extends Model<InferAttributes<CourseModel>, InferCreationAttributes<CourseModel>> {
  id: CreationOptional<string>;
  title: string;
  slug: string;
  mini_desc: CreationOptional<string | null>;
  description: CreationOptional<string | null>;
  is_active: CreationOptional<boolean>;
  created_at: CreationOptional<Date>;
  updated_at: CreationOptional<Date>;

  // Associations
  course_variants?: NonAttribute<CourseVariantModel[]>;
  
  // Association methods
  getVariants: HasManyGetAssociationsMixin<CourseVariantModel>;
  addVariant: HasManyAddAssociationMixin<CourseVariantModel, string>;
  createVariant: HasManyCreateAssociationMixin<CourseVariantModel>;
}

export default (sequelize: Sequelize) => {
  const Course = sequelize.define<CourseModel>(
    'Course',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: { msg: 'Title is required' },
          len: { args: [2, 255], msg: 'Title must be between 2 and 255 characters' },
        },
      },
      slug: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: { msg: 'Slug is required' },
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
      tableName: 'courses',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      indexes: [
        { unique: true, fields: ['slug'] },
        { fields: ['is_active'] },
      ],
    }
  ) as ReturnType<typeof sequelize.define> & {
    associate: (models: Record<string, ReturnType<typeof sequelize.define>>) => void;
  };

  Course.associate = (models) => {
    Course.hasMany(models.CourseVariant, {
      foreignKey: 'course_id',
      as: 'course_variants',
      onDelete: 'CASCADE',
    });
  };

  return Course;
};
