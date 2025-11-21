import Head from 'next/head';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SpaceBackground from '../components/SpaceBackground';
import InteractiveSolarSystem from '../components/InteractiveSolarSystem';
import CosmicParticles from '../components/CosmicParticles';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [currentView, setCurrentView] = useState('hero');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className={styles.loadingScreen}>
        <div className={styles.loadingAnimation}>
          <div className={styles.orbitingPlanets}>
            <div className={styles.planet}></div>
            <div className={styles.planet}></div>
            <div className={styles.planet}></div>
          </div>
          <h2>Cosmic Explorer</h2>
          <p>Загрузка вселенной...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Cosmic Explorer PRO - Исследуйте Вселенную</title>
        <meta name="description" content="Продвинутый интерактивный исследователь космоса" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SpaceBackground />
      <CosmicParticles />
      <Header />

      <main className={styles.main}>
        <AnimatePresence mode="wait">
          {currentView === 'hero' && (
            <motion.div
              key="hero"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
              className={styles.heroSection}
            >
              <div className={styles.heroContent}>
                <motion.h1 
                  className={styles.heroTitle}
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                >
                  Cosmic<span>Explorer</span>
                </motion.h1>
                
                <motion.p 
                  className={styles.heroSubtitle}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  Откройте для себя <span>тайны Вселенной</span> в иммерсивном 3D-путешествии
                </motion.p>

                <motion.div 
                  className={styles.heroStats}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1 }}
                >
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>8</span>
                    <span className={styles.statLabel}>Планет</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>100+</span>
                    <span className={styles.statLabel}>Звёзд</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>2T+</span>
                    <span className={styles.statLabel}>Галактик</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>∞</span>
                    <span className={styles.statLabel}>Тайн</span>
                  </div>
                </motion.div>

                <motion.button 
                  className={styles.ctaButton}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(138, 180, 248, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentView('solar')}
                >
                  🚀 Начать исследование
                </motion.button>
              </div>

              <div className={styles.scrollIndicator}>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  ↓
                </motion.div>
              </div>
            </motion.div>
          )}

          {currentView === 'solar' && (
            <motion.div
              key="solar"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className={styles.solarSection}
            >
              <InteractiveSolarSystem />
              
              <div className={styles.navigationGrid}>
                <motion.a 
                  href="/planets" 
                  className={styles.navCard}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={styles.cardIcon}>🪐</div>
                  <h3>Планетная система</h3>
                  <p>Исследуйте 8 планет с 3D-моделями и реальными данными</p>
                  <span className={styles.cardBadge}>3D</span>
                </motion.a>

                <motion.a 
                  href="/stars" 
                  className={styles.navCard}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={styles.cardIcon}>⭐</div>
                  <h3>Звёздный каталог</h3>
                  <p>Изучите различные типы звёзд и их жизненные циклы</p>
                  <span className={styles.cardBadge}>AR</span>
                </motion.a>

                <motion.a 
                  href="/galaxies" 
                  className={styles.navCard}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={styles.cardIcon}>🌌</div>
                  <h3>Галактики</h3>
                  <p>Откройте спиральные, эллиптические и неправильные галактики</p>
                  <span className={styles.cardBadge}>VR</span>
                </motion.a>

                <motion.a 
                  href="/blackholes" 
                  className={styles.navCard}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={styles.cardIcon}>⚫</div>
                  <h3>Чёрные дыры</h3>
                  <p>Исследуйте самые загадочные объекты во Вселенной</p>
                  <span className={styles.cardBadge}>SIM</span>
                </motion.a>
              </div>

              <motion.button 
                className={styles.backButton}
                onClick={() => setCurrentView('hero')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ← Назад
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}