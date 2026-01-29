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

import type { FAQCategoryModel } from './FAQCategory';

export interface FAQModel extends Model<InferAttributes<FAQModel>, InferCreationAttributes<FAQModel>> {
  id: CreationOptional<number>;
  category_id: ForeignKey<number | null>;
  question: string;
  answer: string;
  sort_order: CreationOptional<number>;
  is_active: CreationOptional<boolean>;
  created_at: CreationOptional<Date>;
  updated_at: CreationOptional<Date>;

  // Associations
  faq_categories?: NonAttribute<FAQCategoryModel>;
  
  // Association methods
  getCategory: BelongsToGetAssociationMixin<FAQCategoryModel>;
}

export default (sequelize: Sequelize) => {
  const FAQ = sequelize.define<FAQModel>(
    'FAQ',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'faq_categories',
          key: 'id',
        },
        onDelete: 'SET NULL',
      },
      question: {
        type: DataTypes.STRING(500),
        allowNull: false,
        validate: {
          notEmpty: { msg: 'Question is required' },
          len: { args: [10, 500], msg: 'Question must be between 10 and 500 characters' },
        },
      },
      answer: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: { msg: 'Answer is required' },
        },
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
      tableName: 'faqs',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      indexes: [
        { fields: ['category_id'] },
        { fields: ['sort_order'] },
        { fields: ['is_active'] },
      ],
    }
  ) as unknown as ReturnType<typeof sequelize.define> & {
    associate: (models: Record<string, ReturnType<typeof sequelize.define>>) => void;
  };

  FAQ.associate = (models) => {
    FAQ.belongsTo(models.FAQCategory, {
      foreignKey: 'category_id',
      as: 'faq_categories',
    });
  };

  return FAQ;
};
