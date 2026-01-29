import { Sequelize } from 'sequelize';

// Database configuration
const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME || 'lingedu',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '',
  logging: process.env.NODE_ENV === 'development' ? console.log : false,
  dialectOptions: {
    // Return timestamps as strings instead of Date objects
    // This prevents serialization errors in Next.js
    ssl: process.env.DB_SSL === 'true' ? {
      require: true,
      rejectUnauthorized: false,
    } : undefined,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  define: {
    timestamps: true,
    underscored: true,
    // Return timestamps as strings instead of Date objects
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

// Import models
import Course from './Course';
import CourseVariant from './CourseVariant';
import Testimonial from './Testimonial';
import FAQCategory from './FAQCategory';
import FAQ from './FAQ';
import ContactForm from './ContactForm';

// Initialize models
const models = {
  Course: Course(sequelize),
  CourseVariant: CourseVariant(sequelize),
  Testimonial: Testimonial(sequelize),
  FAQCategory: FAQCategory(sequelize),
  FAQ: FAQ(sequelize),
  ContactForm: ContactForm(sequelize),
};

// Set up associations
Object.values(models).forEach((model) => {
  if ('associate' in model && typeof model.associate === 'function') {
    model.associate(models);
  }
});

// Database connection helper
export const connectDB = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connection established successfully.');
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
    throw error;
  }
};

// Sync database (for development)
export const syncDB = async (force = false): Promise<void> => {
  try {
    await sequelize.sync({ force });
    console.log('✅ Database synced successfully.');
  } catch (error) {
    console.error('❌ Error syncing database:', error);
    throw error;
  }
};

export { sequelize };
export default models;
