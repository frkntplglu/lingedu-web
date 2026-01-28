import { 
  DataTypes, 
  Model, 
  Sequelize, 
  InferAttributes, 
  InferCreationAttributes, 
  CreationOptional,
} from 'sequelize';

export interface TestimonialModel extends Model<InferAttributes<TestimonialModel>, InferCreationAttributes<TestimonialModel>> {
  id: CreationOptional<number>;
  client_fullname: string;
  client_job: CreationOptional<string | null>;
  comment: string;
  rating: CreationOptional<number | null>;
  is_active: CreationOptional<boolean>;
  created_at: CreationOptional<Date>;
  updated_at: CreationOptional<Date>;
}

export default (sequelize: Sequelize) => {
  const Testimonial = sequelize.define<TestimonialModel>(
    'Testimonial',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      client_fullname: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: { msg: 'Client name is required' },
          len: { args: [2, 255], msg: 'Name must be between 2 and 255 characters' },
        },
      },
      client_job: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: { msg: 'Comment is required' },
          len: { args: [10, 2000], msg: 'Comment must be between 10 and 2000 characters' },
        },
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          min: { args: [1], msg: 'Rating must be at least 1' },
          max: { args: [5], msg: 'Rating cannot exceed 5' },
        },
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
      tableName: 'testimonials',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      indexes: [
        { fields: ['is_active'] },
        { fields: ['created_at'] },
      ],
    }
  );

  return Testimonial;
};
