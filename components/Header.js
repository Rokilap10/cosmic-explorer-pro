import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import SearchModal from './SearchModal';
import styles from '../styles/Home.module.css';

export default function Header() {
  const router = useRouter();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Главная' },
    { path: '/planets', label: 'Планеты' },
    { path: '/stars', label: 'Звёзды' },
    { path: '/galaxies', label: 'Галактики' },
    { path: '/blackholes', label: 'Чёрные дыры' }
  ];

  return (
    <>
      <motion.header 
        className={styles.header}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.headerContent}>
          <motion.div 
            className={styles.logo}
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/">
              <span>🌌 CosmicExplorer</span>
            </Link>
          </motion.div>

          <nav className={styles.nav}>
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                className={styles.navItem}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={item.path} className={router.pathname === item.path ? styles.active : ''}>
                  {item.label}
                </Link>
                {router.pathname === item.path && (
                  <motion.div 
                    className={styles.activeIndicator}
                    layoutId="activeIndicator"
                  />
                )}
              </motion.div>
            ))}
          </nav>

          <motion.div 
            className={styles.controls}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button 
              className={styles.controlButton}
              onClick={() => setIsSearchOpen(true)}
              title="Поиск"
            >
              🔍
            </button>
            <button 
              className={styles.controlButton}
              onClick={toggleTheme}
              title={theme === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему'}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <Link href="/settings">
              <button className={styles.controlButton} title="Настройки">
                ⚙️
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.header>

      <SearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}