import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css';

export default function StarCard({ name, description, color, facts, details }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div 
      className={`${styles.starCard} ${isFlipped ? styles.flipped : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ '--star-color': color }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <div className={styles.starIcon} style={{backgroundColor: color, boxShadow: `0 0 20px ${color}`}}></div>
          <h3>{name}</h3>
          <p>{description}</p>
          <div className={styles.quickFacts}>
            <span>Тип: {details.type.split(' ')[0]}</span>
            <span>Темп.: {details.temperature}</span>
          </div>
          <div className={styles.hint}>Нажмите для подробностей</div>
        </div>
        
        <div className={styles.cardBack}>
          <h3>Подробности о {name}</h3>
          
          <div className={styles.detailsGrid}>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Спектральный класс:</span>
              <span className={styles.detailValue}>{details.type}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Температура:</span>
              <span className={styles.detailValue}>{details.temperature}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Масса:</span>
              <span className={styles.detailValue}>{details.mass}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Светимость:</span>
              <span className={styles.detailValue}>{details.luminosity}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Радиус:</span>
              <span className={styles.detailValue}>{details.radius}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Расстояние:</span>
              <span className={styles.detailValue}>{details.distance}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Возраст:</span>
              <span className={styles.detailValue}>{details.age}</span>
            </div>
          </div>

          <div className={styles.factsSection}>
            <h4>Интересные факты:</h4>
            <ul>
              {facts.map((fact, index) => (
                <li key={index}>{fact}</li>
              ))}
            </ul>
          </div>
          
          <div className={styles.hint}>Нажмите чтобы вернуться</div>
        </div>
      </div>
    </motion.div>
  );
}