import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css';

export default function PlanetCard({ name, description, color, facts, details }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div 
      className={`${styles.planetCard} ${isFlipped ? styles.flipped : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ '--planet-color': color }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <div className={styles.planetIcon} style={{backgroundColor: color}}></div>
          <h3>{name}</h3>
          <p>{description}</p>
          <div className={styles.quickFacts}>
            <span>Тип: {details.type}</span>
            <span>Спутники: {details.moons}</span>
          </div>
          <div className={styles.hint}>Нажмите для подробностей</div>
        </div>
        
        <div className={styles.cardBack}>
          <h3>Подробности о {name}</h3>
          
          <div className={styles.detailsGrid}>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Тип:</span>
              <span className={styles.detailValue}>{details.type}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Расстояние от Солнца:</span>
              <span className={styles.detailValue}>{details.distanceFromSun}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Орбитальный период:</span>
              <span className={styles.detailValue}>{details.orbitalPeriod}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Период вращения:</span>
              <span className={styles.detailValue}>{details.rotationPeriod}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Спутники:</span>
              <span className={styles.detailValue}>{details.moons}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Диаметр:</span>
              <span className={styles.detailValue}>{details.diameter}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Масса:</span>
              <span className={styles.detailValue}>{details.mass}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Гравитация:</span>
              <span className={styles.detailValue}>{details.gravity}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Атмосфера:</span>
              <span className={styles.detailValue}>{details.atmosphere}</span>
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