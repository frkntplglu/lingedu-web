import { 
  DataTypes, 
  Model, 
  Sequelize, 
  InferAttributes, 
  InferCreationAttributes, 
  CreationOptional,
} from 'sequelize';

export type ContactFormStatus = 'pending' | 'read' | 'replied' | 'archived';

export interface ContactFormModel extends Model<InferAttributes<ContactFormModel>, InferCreationAttributes<ContactFormModel>> {
  id: CreationOptional<number>;
  fullname: string;
  email: string;
  phone: CreationOptional<string | null>;
  subject: CreationOptional<string | null>;
  message: string;
  terms_accepted: CreationOptional<boolean>;
  status: CreationOptional<ContactFormStatus>;
  ip_address: CreationOptional<string | null>;
  user_agent: CreationOptional<string | null>;
  created_at: CreationOptional<Date>;
  updated_at: CreationOptional<Date>;
}

export default (sequelize: Sequelize) => {
  const ContactForm = sequelize.define<ContactFormModel>(
    'ContactForm',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      fullname: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: { msg: 'Full name is required' },
          len: { args: [2, 255], msg: 'Name must be between 2 and 255 characters' },
        },
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: { msg: 'Email is required' },
          isEmail: { msg: 'Please provide a valid email address' },
        },
      },
      phone: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      subject: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: 'Genel',
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: { msg: 'Message is required' },
          len: { args: [10, 5000], msg: 'Message must be between 10 and 5000 characters' },
        },
      },
      terms_accepted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      status: {
        type: DataTypes.ENUM('pending', 'read', 'replied', 'archived'),
        defaultValue: 'pending',
      },
      ip_address: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      user_agent: {
        type: DataTypes.STRING(500),
        allowNull: true,
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
      tableName: 'contact_forms',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      indexes: [
        { fields: ['email'] },
        { fields: ['status'] },
        { fields: ['created_at'] },
      ],
    }
  );

  return ContactForm;
};
