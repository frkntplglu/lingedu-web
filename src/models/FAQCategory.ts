import { 
  DataTypes, 
  Model, 
  Sequelize, 
  InferAttributes, 
  InferCreationAttributes, 
  CreationOptional,
  NonAttribute,
  HasManyGetAssociationsMixin,
} from 'sequelize';

import type { FAQModel } from './FAQ';

export interface FAQCategoryModel extends Model<InferAttributes<FAQCategoryModel>, InferCreationAttributes<FAQCategoryModel>> {
  id: CreationOptional<number>;
  name: string;
  slug: CreationOptional<string | null>;
  sort_order: CreationOptional<number>;
  is_active: CreationOptional<boolean>;
  created_at: CreationOptional<Date>;
  updated_at: CreationOptional<Date>;

  // Associations
  faqs?: NonAttribute<FAQModel[]>;
  
  // Association methods
  getFaqs: HasManyGetAssociationsMixin<FAQModel>;
}

export default (sequelize: Sequelize) => {
  const FAQCategory = sequelize.define<FAQCategoryModel>(
    'FAQCategory',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          notEmpty: { msg: 'Category name is required' },
          len: { args: [2, 100], msg: 'Name must be between 2 and 100 characters' },
        },
      },
      slug: {
        type: DataTypes.STRING(100),
        allowNull: true,
        unique: true,
      },
      sort_order: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
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
      tableName: 'faq_categories',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      indexes: [
        { unique: true, fields: ['slug'] },
        { fields: ['sort_order'] },
        { fields: ['is_active'] },
      ],
      hooks: {
        beforeCreate: (category) => {
          if (!category.slug && category.name) {
            category.slug = category.name
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)/g, '');
          }
        },
      },
    }
  ) as unknown as ReturnType<typeof sequelize.define> & {
    associate: (models: Record<string, ReturnType<typeof sequelize.define>>) => void;
  };

  FAQCategory.associate = (models) => {
    FAQCategory.hasMany(models.FAQ, {
      foreignKey: 'category_id',
      as: 'faqs',
    });
  };

  return FAQCategory;
};
