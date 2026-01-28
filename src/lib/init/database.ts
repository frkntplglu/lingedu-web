/**
 * Database Initialization Module
 */

import logger from '../logger';
import models, { sequelize, connectDB } from '@/models';

const log = logger.child('Database');

export interface DatabaseInitOptions {
    sync?: boolean;
    force?: boolean;  // WARNING: This will drop all tables!
    alter?: boolean;  // Alter tables to match models
    seed?: boolean;   // Run seeders after sync
}

const defaultOptions: DatabaseInitOptions = {
    sync: process.env.NODE_ENV === 'development',
    force: false,
    alter: false,
    seed: false,
};

let isConnected = false;

/**
 * Initialize database connection and optionally sync models
 */
export async function initDatabase(options: DatabaseInitOptions = defaultOptions): Promise<void> {
    if (isConnected) {
        log.warn('Database already connected');
        return;
    }

    log.info('Initializing database...');

    try {
        // Connect to database
        await connectDB();
        isConnected = true;

        // Sync models if requested
        if (options.sync) {
            if (options.force) {
                log.warn('Force sync enabled - this will drop all tables!');
            }

            await sequelize.sync({
                force: options.force,
                alter: options.alter,
            });

            log.info('Database models synced');

            // Run seeders if requested
            if (options.seed) {
                await runSeeders();
            }
        }

        log.info('Database initialized successfully');
    } catch (error) {
        log.error('Database initialization failed', error);
        isConnected = false;
        throw error;
    }
}

/**
 * Close database connection
 */
export async function closeDatabase(): Promise<void> {
    if (!isConnected) {
        return;
    }

    try {
        await sequelize.close();
        isConnected = false;
        log.info('Database connection closed');
    } catch (error) {
        log.error('Error closing database connection', error);
        throw error;
    }
}

/**
 * Check if database is connected
 */
export function isDatabaseConnected(): boolean {
    return isConnected;
}

/**
 * Get database models
 */
export function getModels() {
    return models;
}

/**
 * Get sequelize instance
 */
export function getSequelize() {
    return sequelize;
}

/**
 * Run database seeders
 */
async function runSeeders(): Promise<void> {
    log.info('Running database seeders...');

    try {
        // Seed FAQ Categories
        const { FAQCategory, FAQ, Course, CourseVariant, Testimonial } = models;

        // Check if data already exists
        const existingCategories = await FAQCategory.count();
        if (existingCategories > 0) {
            log.warn('Data already exists, skipping seeders');
            return;
        }

        // Seed FAQ Categories
        const categories = await FAQCategory.bulkCreate([
            { name: 'Genel', slug: 'genel', sort_order: 1 },
            { name: 'IELTS', slug: 'ielts', sort_order: 2 },
            { name: 'Speaking Club', slug: 'speaking-club', sort_order: 3 },
            { name: 'Ödeme', slug: 'odeme', sort_order: 4 },
        ]);

        // Seed FAQs
        await FAQ.bulkCreate([
            { category_id: categories[0].id, question: 'Dersler nasıl yapılıyor?', answer: 'Derslerimiz online olarak Zoom üzerinden gerçekleştirilmektedir.', sort_order: 1 },
            { category_id: categories[0].id, question: 'Ders saatlerini kendim belirleyebilir miyim?', answer: 'Özel ders paketlerinde ders saatlerinizi tamamen sizin programınıza göre ayarlıyoruz.', sort_order: 2 },
            { category_id: categories[1].id, question: 'IELTS kursu ne kadar sürüyor?', answer: 'IELTS hazırlık kursumuz standart olarak 8 hafta sürmektedir.', sort_order: 1 },
            { category_id: categories[2].id, question: 'Speaking Club oturumları kaç kişilik?', answer: 'Her oturumda maksimum 6 kişi bulunmaktadır.', sort_order: 1 },
            { category_id: categories[3].id, question: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?', answer: 'Kredi kartı, banka kartı ve havale/EFT ile ödeme yapabilirsiniz.', sort_order: 1 },
        ]);

        // Seed Courses
        const courses = await Course.bulkCreate([
            { title: 'IELTS Hazırlık Programı', slug: 'ielts', mini_desc: 'Akademik ve Genel IELTS sınavlarına yönelik kapsamlı hazırlık programı.' },
            { title: 'Speaking Club', slug: 'speaking-club-aylik', mini_desc: 'Farklı seviyeler için özel gruplar ile konuşma pratiği yapın.' },
            { title: 'Birebir Özel Ders', slug: 'ozel-ders', mini_desc: 'Kişisel hedeflerinize ve eksiklerinize odaklanan yoğun program.' },
        ]);

        // Seed Course Variants
        await CourseVariant.bulkCreate([
            { course_id: courses[0].id, title: 'Grup Dersi', price: 4500, capacity: 6, is_featured: false },
            { course_id: courses[0].id, title: 'Özel Ders Paketi', price: 8500, capacity: 1, is_featured: true },
            { course_id: courses[1].id, title: 'Aylık Üyelik', price: 750, is_featured: true },
            { course_id: courses[1].id, title: '3 Aylık Paket', price: 1800, is_featured: false },
            { course_id: courses[2].id, title: '10 Ders Paketi', price: 3500, is_featured: false },
            { course_id: courses[2].id, title: '20 Ders Paketi', price: 6000, is_featured: true },
        ]);

        // Seed Testimonials
        await Testimonial.bulkCreate([
            { client_fullname: 'Elif Yılmaz', client_job: 'Yazılım Mühendisi', comment: 'IELTS hazırlık kursu sayesinde hedeflediğim 7.5 band skoruna ulaştım.', rating: 5 },
            { client_fullname: 'Ahmet Kaya', client_job: 'Üniversite Öğrencisi', comment: 'Speaking Club\'a katıldığımdan beri İngilizce konuşma özgüvenim çok arttı.', rating: 5 },
            { client_fullname: 'Zeynep Demir', client_job: 'Pazarlama Müdürü', comment: 'İş İngilizcesi kursunu tamamladıktan sonra uluslararası toplantılarda çok daha etkili iletişim kurmaya başladım.', rating: 5 },
        ]);

        log.info('Database seeding completed');
    } catch (error) {
        log.error('Error seeding database', error);
        throw error;
    }
}

export default {
    init: initDatabase,
    close: closeDatabase,
    isConnected: isDatabaseConnected,
    getModels,
    getSequelize,
};
