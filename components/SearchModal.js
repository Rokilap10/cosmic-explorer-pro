import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function SearchModal({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState('');

  // Закрытие по ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.keyCode === 27) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className={styles.searchModalOverlay}
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
            <h2>🔍 Поиск по космосу</h2>
            <button 
              className={styles.closeButton}
              onClick={onClose}
            >
              ✕
            </button>
          </div>
          
          <div className={styles.searchInputContainer}>
            <input
              type="text"
              placeholder="Найти планеты, звёзды, галактики..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
              autoFocus
            />
          </div>
          
          <div className={styles.searchResults}>
            {searchQuery ? (
              <p>Результаты поиска для: "{searchQuery}"</p>
            ) : (
              <p>Введите запрос для поиска...</p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}