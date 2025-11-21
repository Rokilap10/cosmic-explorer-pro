import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function InteractiveSolarSystem() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [scale, setScale] = useState(1);

  const planets = [
    { name: "Меркурий", size: 10, color: "#8C7853", distance: 60, speed: 0.24 },
    { name: "Венера", size: 15, color: "#E39E54", distance: 80, speed: 0.62 },
    { name: "Земля", size: 16, color: "#6B93D6", distance: 100, speed: 1 },
    { name: "Марс", size: 12, color: "#CD5C5C", distance: 120, speed: 1.88 },
    { name: "Юпитер", size: 30, color: "#C19A6B", distance: 160, speed: 11.86 },
    { name: "Сатурн", size: 28, color: "#FAD5A5", distance: 200, speed: 29.46 },
    { name: "Уран", size: 20, color: "#4FD0E7", distance: 240, speed: 84.01 },
    { name: "Нептун", size: 19, color: "#4B70DD", distance: 280, speed: 164.8 }
  ];

  useEffect(() => {
    const handleScroll = (e) => {
      setScale(prev => Math.max(0.5, Math.min(2, prev + e.deltaY * -0.01)));
    };

    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  return (
    <div className={styles.solarSystem}>
      <div className={styles.systemControls}>
        <button onClick={() => setScale(s => Math.min(2, s + 0.1))}>+</button>
        <span>Масштаб: {scale.toFixed(1)}x</span>
        <button onClick={() => setScale(s => Math.max(0.5, s - 0.1))}>-</button>
      </div>

      <div className={styles.solarSystemContainer} style={{ transform: `scale(${scale})` }}>
        <div className={styles.sun}></div>
        
        {planets.map((planet, index) => (
          <motion.div
            key={planet.name}
            className={styles.planetOrbit}
            style={{ 
              width: planet.distance * 2,
              height: planet.distance * 2,
              animationDuration: `${planet.speed * 10}s`
            }}
            animate={{ rotate: 360 }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear",
              duration: planet.speed * 10
            }}
          >
            <motion.div
              className={`${styles.planet} ${selectedPlanet === planet.name ? styles.selected : ''}`}
              style={{
                width: planet.size,
                height: planet.size,
                backgroundColor: planet.color
              }}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedPlanet(planet.name === selectedPlanet ? null : planet.name)}
            >
              {selectedPlanet === planet.name && (
                <motion.div
                  className={styles.planetInfo}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <h4>{planet.name}</h4>
                  <p>Орбитальный период: {planet.speed} лет</p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className={styles.planetDetails}>
        {selectedPlanet && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.detailsPanel}
          >
            <h3>Планета {selectedPlanet}</h3>
            <p>Интерактивная 3D-модель с реальными орбитальными параметрами</p>
            <a href="/planets" className={styles.exploreButton}>
              Исследовать подробнее →
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
}