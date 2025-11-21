import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css';

export default function Footer() {
  return (
    <motion.footer 
      className={styles.footer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Cosmic Explorer</h3>
          <p>Исследуйте Вселенную с нами</p>
        </div>
        <div className={styles.footerSection}>
          <h4>Разделы</h4>
          <a href="/planets">Планеты</a>
          <a href="/stars">Звёзды</a>
          <a href="/galaxies">Галактики</a>
          <a href="/blackholes">Чёрные дыры</a>
        </div>
        <div className={styles.footerSection}>
          <h4>Технологии</h4>
          <span>Next.js 13</span>
          <span>React 18</span>
          <span>Framer Motion</span>
          <span>WebGL</span>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 Cosmic Explorer. Все права защищены.</p>
      </div>
    </motion.footer>
  );
}