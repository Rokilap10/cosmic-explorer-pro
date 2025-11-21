import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SpaceBackground from '../components/SpaceBackground';
import CosmicParticles from '../components/CosmicParticles';
import BlackHoleCard from '../components/BlackHoleCard';
import styles from '../styles/Home.module.css';

export default function Blackholes() {
  const blackHoles = [
    {
      name: "Стрелец A*",
      description: "Сверхмассивная чёрная дыра в центре Млечного Пути",
      color: "#ff6b6b",
      facts: ["Расположена в центре Млечного Пути", "Обнаружена по движению близлежащих звёзд", "Относительно спокойная", "Первое прямое изображение получено в 2022 году"],
      details: {
        type: "Сверхмассивная чёрная дыра",
        mass: "4.3 млн M☉",
        distance: "26,000 световых лет",
        diameter: "44 млн км",
        discovery: "1974 год",
        status: "Активная",
        accretion: "Слабая"
      }
    },
    {
      name: "M87*",
      description: "Первая чёрная дыра, сфотографированная человечеством",
      color: "#ff8c00",
      facts: ["Первая чёрная дыра, сфотографированная телескопом Event Horizon", "Имеет релятивистскую струю длиной 5,000 световых лет", "В 1000 раз массивнее Стрельца A*", "Расположена в центре галактики M87"],
      details: {
        type: "Сверхмассивная чёрная дыра",
        mass: "6.5 млрд M☉",
        distance: "53 млн световых лет",
        diameter: "38 млрд км",
        discovery: "2019 год (изображение)",
        status: "Очень активная",
        accretion: "Интенсивная"
      }
    },
    {
      name: "Cygnus X-1",
      description: "Один из первых кандидатов в чёрные дыры",
      color: "#ff4757",
      facts: ["Образует двойную систему с голубым сверхгигантом", "Обнаружена в 1964 году", "Сильный источник рентгеновского излучения", "Подтверждена как чёрная дыра в 1970-х"],
      details: {
        type: "Звёздная чёрная дыра",
        mass: "21 M☉",
        distance: "6,070 световых лет",
        diameter: "124 км",
        discovery: "1964 год",
        status: "Активная",
        accretion: "Сильная"
      }
    },
    {
      name: "TON 618",
      description: "Одна из самых массивных известных чёрных дыр",
      color: "#5352ed",
      facts: ["Одна из самых массивных известных чёрных дыр", "Является квазаром - активным ядром галактики", "Светимость в 140 триллионов раз превышает солнечную", "Горизонт событий больше всей Солнечной системы"],
      details: {
        type: "Ультрамассивная чёрная дыра",
        mass: "66 млрд M☉",
        distance: "10.4 млрд световых лет",
        diameter: "390 млрд км",
        discovery: "1970 год",
        status: "Квазар",
        accretion: "Экстремальная"
      }
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Чёрные дыры - Cosmic Explorer PRO</title>
        <meta name="description" content="Исследуйте самые загадочные объекты во Вселенной" />
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
          <h1 className={styles.title}>Чёрные дыры</h1>
          <p className={styles.description}>
            Исследуйте самые загадочные и мощные объекты во Вселенной - от звёздных до сверхмассивных чёрных дыр
          </p>
        </motion.div>

        <motion.div 
          className={styles.blackHolesGrid}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {blackHoles.map((blackHole, index) => (
            <BlackHoleCard 
              key={index}
              name={blackHole.name}
              description={blackHole.description}
              color={blackHole.color}
              facts={blackHole.facts}
              details={blackHole.details}
            />
          ))}
        </motion.div>

        <motion.div 
          className={styles.blackHolesInfo}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2>Типы чёрных дыр</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h3>Звёздные</h3>
              <p>Образуются при коллапсе массивных звёзд (3-100 масс Солнца)</p>
            </div>
            <div className={styles.infoCard}>
              <h3>Сверхмассивные</h3>
              <p>Находятся в центрах галактик (миллионы-миллиарды масс Солнца)</p>
            </div>
            <div className={styles.infoCard}>
              <h3>Промежуточные</h3>
              <p>Массой между звёздными и сверхмассивными (100-100,000 M☉)</p>
            </div>
            <div className={styles.infoCard}>
              <h3>Миниатюрные</h3>
              <p>Гипотетические чёрные дыры малой массы</p>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}