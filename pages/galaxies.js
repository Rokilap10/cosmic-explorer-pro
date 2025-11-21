import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SpaceBackground from '../components/SpaceBackground';
import CosmicParticles from '../components/CosmicParticles';
import GalaxyCard from '../components/GalaxyCard';
import styles from '../styles/Home.module.css';

export default function Galaxies() {
  const galaxies = [
    {
      name: "Млечный Путь",
      description: "Наша домашняя спиральная галактика",
      color: "#8ab4f8",
      facts: ["Возраст: 13.6 миллиардов лет", "Содержит 100-400 миллиардов звёзд", "Диаметр: 100,000 световых лет", "Солнечная система расположена в рукаве Ориона"],
      details: {
        type: "Спиральная галактика с перемычкой",
        diameter: "100,000 световых лет",
        stars: "100-400 миллиардов",
        distance: "Мы внутри неё!",
        age: "13.6 млрд лет",
        mass: "1.5 трлн M☉",
        blackHole: "Стрелец A* (4.3 млн M☉)"
      }
    },
    {
      name: "Андромеда (M31)",
      description: "Ближайшая к нам крупная галактика",
      color: "#b380f0",
      facts: ["Столкнётся с Млечным Путём через 4.5 млрд лет", "Крупнейшая в Местной группе", "Видна невооружённым глазом", "Содержит около 1 триллиона звёзд"],
      details: {
        type: "Спиральная галактика",
        diameter: "220,000 световых лет",
        stars: "1 триллион",
        distance: "2.5 млн световых лет",
        age: "10 млрд лет",
        mass: "1.5 трлн M☉",
        blackHole: "Сверхмассивная ЧД"
      }
    },
    {
      name: "Треугольника (M33)",
      description: "Спиральная галактика в Местной группе",
      color: "#6b93d6",
      facts: ["Третья по величине в Местной группе", "Активная область звездообразования", "Содержит гигантскую туманность NGC 604", "Видна невооружённым глазом"],
      details: {
        type: "Спиральная галактика",
        diameter: "60,000 световых лет",
        stars: "40 миллиардов",
        distance: "2.73 млн световых лет",
        age: "10 млрд лет",
        mass: "50 млрд M☉",
        blackHole: "Отсутствует данные"
      }
    },
    {
      name: "Сомбреро (M104)",
      description: "Галактика с ярким ядром и пылевой полосой",
      color: "#ffd700",
      facts: ["Известна своим ярким ядром и тёмной пылевой полосой", "Имеет необычно большое и яркое гало", "Содержит шаровые скопления", "Классический пример галактики с кольцом"],
      details: {
        type: "Спиральная галактика",
        diameter: "50,000 световых лет",
        stars: "100 миллиардов",
        distance: "29.3 млн световых лет",
        age: "13.25 млрд лет",
        mass: "800 млрд M☉",
        blackHole: "1 млрд M☉"
      }
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Галактики - Cosmic Explorer PRO</title>
        <meta name="description" content="Исследуйте различные типы галактик" />
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
          <h1 className={styles.title}>Галактики Вселенной</h1>
          <p className={styles.description}>
            Откройте для себя удивительные звёздные системы - от спиральных до эллиптических галактик
          </p>
        </motion.div>

        <motion.div 
          className={styles.galaxiesGrid}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {galaxies.map((galaxy, index) => (
            <GalaxyCard 
              key={index}
              name={galaxy.name}
              description={galaxy.description}
              color={galaxy.color}
              facts={galaxy.facts}
              details={galaxy.details}
            />
          ))}
        </motion.div>

        <motion.div 
          className={styles.galacticInfo}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2>Типы галактик</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h3>Спиральные</h3>
              <p>Имеют спиральные рукава, активное звездообразование (Млечный Путь, Андромеда)</p>
            </div>
            <div className={styles.infoCard}>
              <h3>Эллиптические</h3>
              <p>Сферической или эллипсоидной формы, мало газа и пыли</p>
            </div>
            <div className={styles.infoCard}>
              <h3>Неправильные</h3>
              <p>Не имеют определённой структуры, часто результат взаимодействий</p>
            </div>
            <div className={styles.infoCard}>
              <h3>Линзовидные</h3>
              <p>Промежуточный тип между спиральными и эллиптическими</p>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}