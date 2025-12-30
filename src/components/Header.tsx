import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Header = () => {
    const router = useRouter();
    
    const isActive = (path: string) => {
        if (path === '/') {
            return router.pathname === '/';
        }
        return router.pathname.startsWith(path);
    };

    const getLinkClassName = (path: string) => {
        const baseClass = "font-medium transition";
        const activeClass = isActive(path)
            ? "text-primary dark:text-primary"
            : "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary";
        return `${baseClass} ${activeClass}`;
    };

    return (
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center">
                        <Link href="/">
                            <img src="/logo.png" alt="LingEdu Dil" style={{height: 70}} />
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link href="/" className={getLinkClassName('/')}>
                            Ana Sayfa
                        </Link>
                        <Link href="/about" className={getLinkClassName('/about')}>
                            Hakkımızda
                        </Link>
                        <Link href="/speaking-club-aylik" className={getLinkClassName('/speaking-club-aylik')}>
                            Speaking Club
                        </Link>
                        <Link href="/ielts" className={getLinkClassName('/ielts')}>
                            IELTS
                        </Link>
                        <Link 
                            href="/contact" 
                            className={`bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-full font-semibold transition shadow-lg shadow-primary/30 ${isActive('/contact') ? 'ring-2 ring-primary ring-offset-2' : ''}`}
                        >
                            Bize Ulaşın
                        </Link>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="text-gray-600 dark:text-gray-300 hover:text-primary">
                            <span className="material-icons text-2xl">menu</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;

