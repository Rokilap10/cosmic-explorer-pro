 import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

export default function SearchModal({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef(null);
  const router = useRouter();

  const searchData = [
    // Планеты
    { name: 'Меркурий', type: 'planet', path: '/planets', category: 'Планеты' },
    { name: 'Венера', type: 'planet', path: '/planets', category: 'Планеты' },
    { name: 'Земля', type: 'planet', path: '/planets', category: 'Планеты' },
    { name: 'Марс', type: 'planet', path: '/planets', category: 'Планеты' },
    { name: 'Юпитер', type: 'planet', path: '/planets', category: 'Планеты' },
    { name: 'Сатурн', type: 'planet', path: '/planets', category: 'Планеты' },
    { name: 'Уран', type: 'planet', path: '/planets', category: 'Планеты' },
    { name: 'Нептун', type: 'planet', path: '/planets', category: 'Планеты' },
    
    // Звёзды
    { name: 'Солнце', type: 'star', path: '/stars', category: 'Звёзды' },
    { name: 'Сириус', type: 'star', path: '/stars', category: 'Звёзды' },
    { name: 'Бетельгейзе', type: 'star', path: '/stars', category: 'Звёзды' },
    { name: 'Полярная звезда', type: 'star', path: '/stars', category: 'Звёзды' },
    
    // Галактики
    { name: 'Млечный Путь', type: 'galaxy', path: '/galaxies', category: 'Галактики' },
    { name: 'Андромеда', type: 'galaxy', path: '/galaxies', category: 'Галактики' },
    { name: 'Треугольника', type: 'galaxy', path: '/galaxies', category: 'Галактики' },
    { name: 'Сомбреро', type: 'galaxy', path: '/galaxies', category: 'Галактики' },
    
    // Чёрные дыры
    { name: 'Стрелец A*', type: 'blackhole', path: '/blackholes', category: 'Чёрные дыры' },
    { name: 'M87*', type: 'blackhole', path: '/blackholes', category: 'Чёрные дыры' },
    { name: 'Cygnus X-1', type: 'blackhole', path: '/blackholes', category: 'Чёрные дыры' },
    { name: 'TON 618', type: 'blackhole', path: '/blackholes', category: 'Чёрные дыры' }
  ];

  const filteredResults = searchData.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleResultClick = (path) => {
    router.push(path);
    onClose();
    setSearchQuery('');
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.searchOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.searchModal}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.searchHeader}>
              <h3>Поиск по Cosmic Explorer</h3>
              <button className={styles.closeButton} onClick={onClose}>✕</button>
            </div>
            
            <div className={styles.searchInputContainer}>
              <input
                ref={inputRef}
                type="text"
                placeholder="Начните вводить название планеты, звезды, галактики..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              <span className={styles.searchHint}>⌘K для закрытия</span>
            </div>

            {searchQuery && (
              <div className={styles.searchResults}>
                {filteredResults.length > 0 ? (
                  filteredResults.map((item, index) => (
                    <motion.div
                      key={item.name}
                      className={styles.searchResultItem}
                      onClick={() => handleResultClick(item.path)}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ backgroundColor: 'var(--hover-bg)' }}
                    >
                      <div className={styles.resultIcon}>
                        {item.type === 'planet' && '🪐'}
                        {item.type === 'star' && '⭐'}
                        {item.type === 'galaxy' && '🌌'}
                        {item.type === 'blackhole' && '⚫'}
                      </div>
                      <div className={styles.resultContent}>
                        <div className={styles.resultName}>{item.name}</div>
                        <div className={styles.resultCategory}>{item.category}</div>
                      </div>
                      <div className={styles.resultArrow}>→</div>
                    </motion.div>
                  ))
                ) : (
                  <div className={styles.noResults}>
                    <div>🔍</div>
                    <p>Ничего не найдено</p>
                    <span>Попробуйте изменить запрос</span>
                  </div>
                )}
              </div>
            )}

            {!searchQuery && (
              <div className={styles.searchTips}>
                <h4>Популярные запросы:</h4>
                <div className={styles.tipsGrid}>
                  <span className={styles.searchTip} onClick={() => setSearchQuery('Марс')}>Марс</span>
                  <span className={styles.searchTip} onClick={() => setSearchQuery('Солнце')}>Солнце</span>
                  <span className={styles.searchTip} onClick={() => setSearchQuery('Андромеда')}>Андромеда</span>
                  <span className={styles.searchTip} onClick={() => setSearchQuery('Чёрная дыра')}>Чёрная дыра</span>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}