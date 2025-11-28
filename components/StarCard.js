import { useState } from 'react';
import { motion } from 'framer-motion';
import { useFavorites } from '../context/FavoritesContext';
import styles from '../styles/Home.module.css';

export default function StarCard({ star }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { isFavorite, toggleFavorite, hasUser } = useFavorites();

  const handleFavoriteClick = async (e) => {
    e.stopPropagation();
    if (!hasUser) {
      alert('Пожалуйста, войдите в систему чтобы добавлять в избранное');
      return;
    }
    await toggleFavorite({
      id: star.id,
      type: 'star',
      name: star.name,
      description: star.description,
      image: star.image,
      details: star.details,
    });
  };

  return (
    <motion.div 
      className={`${styles.starCard} ${isFlipped ? styles.flipped : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ '--star-color': star.color }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <div className={styles.cardHeader}>
            <h3>{star.name}</h3>
            <motion.button
              className={`${styles.favoriteButton} ${isFavorite(star.id) ? styles.favorited : ''}`}
              onClick={handleFavoriteClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title={isFavorite(star.id) ? 'Удалить из избранного' : 'Добавить в избранное'}
            >
              {isFavorite(star.id) ? '❤️' : '🤍'}
            </motion.button>
          </div>
          
          <div className={styles.starIcon} style={{backgroundColor: star.color, boxShadow: `0 0 20px ${star.color}`}}></div>
          <p>{star.description}</p>
          <div className={styles.quickFacts}>
            <span>Тип: {star.details.type.split(' ')[0]}</span>
            <span>Темп.: {star.details.temperature}</span>
          </div>
          <div className={styles.hint}>Нажмите для подробностей</div>
        </div>
        
        <div className={styles.cardBack}>
          {/* Остальной код карточки без изменений */}
        </div>
      </div>
    </motion.div>
  );
}