import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function UserMenu({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  return (
    <div className={styles.userMenu} ref={menuRef}>
      <motion.button
        className={styles.userButton}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img 
          src={user.image || '/default-avatar.png'} 
          alt={user.name}
          className={styles.userAvatar}
        />
        <span>{user.name}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.dropdownMenu}
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className={styles.userInfo}>
              <strong>{user.name}</strong>
              <span>{user.email}</span>
            </div>
            
            <Link href="/profile" className={styles.menuItem}>
              👤 Профиль
            </Link>
            
            <Link href="/favorites" className={styles.menuItem}>
              ❤️ Избранное
            </Link>
            
            <hr className={styles.menuDivider} />
            
            <button 
              onClick={() => signOut()}
              className={styles.menuItem}
            >
              🚪 Выйти
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}