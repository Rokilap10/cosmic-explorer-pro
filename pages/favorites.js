import { motion } from 'framer-motion';
import { useFavorites } from '../context/FavoritesContext';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function Favorites() {
  const { favorites } = useFavorites();
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push('/auth/signin');
    }
  }, [session, router]);

  if (!session) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.pageHeader}
      >
        <h1>❤️ Избранное</h1>
        <p>Ваши сохранённые космические объекты</p>
      </motion.div>

      {favorites.length === 0 ? (
        <motion.div 
          className={styles.emptyState}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className={styles.emptyIcon}>🌟</div>
          <h3>Пока пусто</h3>
          <p>Добавляйте понравившиеся объекты в избранное с помощью кнопки ❤️</p>
        </motion.div>
      ) : (
        <div className={styles.favoritesGrid}>
          {favorites.map((favorite, index) => (
            <motion.div
              key={favorite.id}
              className={styles.favoriteCard}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.favoriteHeader}>
                <h3>{favorite.name}</h3>
                <span className={styles.favoriteType}>{favorite.type}</span>
              </div>
              <p>{favorite.description}</p>
              <div className={styles.favoriteDetails}>
                {Object.entries(favorite.details).slice(0, 3).map(([key, value]) => (
                  <div key={key} className={styles.detail}>
                    <span className={styles.detailLabel}>{key}:</span>
                    <span className={styles.detailValue}>{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}