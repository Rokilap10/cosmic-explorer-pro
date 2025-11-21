import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SpaceBackground from '../components/SpaceBackground';
import CosmicParticles from '../components/CosmicParticles';
import StarCard from '../components/StarCard';
import styles from '../styles/Home.module.css';

export default function Stars() {
  const stars = [
    {
      name: "Солнце",
      description: "Наша ближайшая звезда - жёлтый карлик",
      color: "#FFD700",
      facts: ["Возраст: 4.6 миллиарда лет", "Температура ядра: 15 млн °C", "Состоит на 74.9% из водорода", "Полный оборот вокруг центра Галактики за 225-250 млн лет"],
      details: {
        type: "G2V (Жёлтый карлик)",
        temperature: "5,778 K",
        mass: "1 M☉",
        luminosity: "1 L☉",
        distance: "1 а.е. (149.6 млн км)",
        age: "4.6 млрд лет",
        spectralClass: "G2",
        radius: "696,340 км"
      }
    },
    {
      name: "Сириус",
      description: "Самая яркая звезда на ночном небе",
      color: "#FFFFFF",
      facts: ["Двойная звездная система", "В 2 раза массивнее Солнца", "Расстояние: 8.6 световых лет", "Видна из почти всех населённых регионов Земли"],
      details: {
        type: "A1V (Белая звезда)",
        temperature: "9,940 K",
        mass: "2.02 M☉",
        luminosity: "25.4 L☉",
        distance: "8.6 световых лет",
        age: "200-300 млн лет",
        spectralClass: "A1",
        radius: "1.71 R☉"
      }
    },
    {
      name: "Бетельгейзе",
      description: "Красный сверхгигант в созвездии Ориона",
      color: "#FF4500",
      facts: ["Может взорваться как сверхновая", "Диаметр в 1000 раз больше солнечного", "Переменная звезда", "Одна из крупнейших известных звёзд"],
      details: {
        type: "M1-2 (Красный сверхгигант)",
        temperature: "3,500 K",
        mass: "11.6 M☉",
        luminosity: "126,000 L☉",
        distance: "640 световых лет",
        age: "8-8.5 млн лет",
        spectralClass: "M1",
        radius: "887 R☉"
      }
    },
    {
      name: "Полярная звезда",
      description: "Звезда-указатель на Северный полюс",
      color: "#F0E68C",
      facts: ["Тройная звёздная система", "Используется для навигации", "Цефеида - переменная звезда", "Яркость постепенно увеличивается"],
      details: {
        type: "F7Ib (Жёлтый сверхгигант)",
        temperature: "6,015 K",
        mass: "5.4 M☉",
        luminosity: "1,260 L☉",
        distance: "433 световых года",
        age: "70 млн лет",
        spectralClass: "F7",
        radius: "37.5 R☉"
      }
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Звёзды - Cosmic Explorer PRO</title>
        <meta name="description" content="Исследуйте различные типы звёзд" />
      </Head>

      <SpaceBackground />
      <CosmicParticles />
      <Header />

      <main className={styles.main}>
        <motion.div 
          className={styles.pageHeader}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.title}>Звёзды Вселенной</h1>
          <p className={styles.description}>
            Исследуйте различные типы звёзд - от жёлтых карликов до красных сверхгигантов
          </p>
        </motion.div>

        <motion.div 
          className={styles.starsGrid}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {stars.map((star, index) => (
            <StarCard 
              key={index}
              name={star.name}
              description={star.description}
              color={star.color}
              facts={star.facts}
              details={star.details}
            />
          ))}
        </motion.div>

        <motion.div 
          className={styles.stellarInfo}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2>Классификация звёзд</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h3>O-тип</h3>
              <p>Голубые гиганты, самые горячие (30,000-50,000K)</p>
            </div>
            <div className={styles.infoCard}>
              <h3>B-тип</h3>
              <p>Бело-голубые звёзды (10,000-30,000K)</p>
            </div>
            <div className={styles.infoCard}>
              <h3>A-тип</h3>
              <p>Белые звёзды (7,500-10,000K)</p>
            </div>
            <div className={styles.infoCard}>
              <h3>F-тип</h3>
              <p>Жёлто-белые звёзды (6,000-7,500K)</p>
            </div>
            <div className={styles.infoCard}>
              <h3>G-тип</h3>
              <p>Жёлтые карлики (5,200-6,000K) - наше Солнце</p>
            </div>
            <div className={styles.infoCard}>
              <h3>K-тип</h3>
              <p>Оранжевые карлики (3,700-5,200K)</p>
            </div>
            <div className={styles.infoCard}>
              <h3>M-тип</h3>
              <p>Красные карлики (2,400-3,700K)</p>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}