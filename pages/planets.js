import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SpaceBackground from '../components/SpaceBackground';
import CosmicParticles from '../components/CosmicParticles';
import PlanetCard from '../components/PlanetCard';
import styles from '../styles/Home.module.css';

export default function Planets() {
  const planets = [
    { 
      name: "Меркурий", 
      description: "Самая маленькая и близкая к Солнцу планета", 
      color: "#8C7853", 
      facts: ["Без лун", "Один год = 88 земных дней", "Температура: -173°C до 427°C", "Диаметр: 4,879 км"],
      details: {
        type: "Планета земной группы",
        distanceFromSun: "57.9 млн км",
        orbitalPeriod: "88 дней",
        rotationPeriod: "59 дней",
        moons: 0,
        atmosphere: "Следы кислорода, натрия, водорода",
        diameter: "4,879 км",
        mass: "3.3 × 10^23 кг",
        gravity: "3.7 м/с²"
      }
    },
    { 
      name: "Венера", 
      description: "Самая горячая планета с плотной атмосферой", 
      color: "#E39E54", 
      facts: ["Вращается в обратную сторону", "Температура до 470°C", "Атмосферное давление в 92 раза выше земного", "Самый яркий объект на небе после Солнца и Луны"],
      details: {
        type: "Планета земной группы",
        distanceFromSun: "108.2 млн км",
        orbitalPeriod: "225 дней",
        rotationPeriod: "243 дня",
        moons: 0,
        atmosphere: "Углекислый газ (96.5%), азот (3.5%)",
        diameter: "12,104 км",
        mass: "4.87 × 10^24 кг",
        gravity: "8.87 м/с²"
      }
    },
    { 
      name: "Земля", 
      description: "Наш дом с уникальными условиями для жизни", 
      color: "#6B93D6", 
      facts: ["Единственная известная планета с жизнью", "71% поверхности - вода", "Магнитное поле защищает от солнечного ветра", "Естественный спутник - Луна"],
      details: {
        type: "Планета земной группы",
        distanceFromSun: "149.6 млн км",
        orbitalPeriod: "365.25 дней",
        rotationPeriod: "23 часа 56 минут",
        moons: 1,
        atmosphere: "Азот (78%), кислород (21%), аргон (0.9%)",
        diameter: "12,742 км",
        mass: "5.97 × 10^24 кг",
        gravity: "9.8 м/с²"
      }
    },
    { 
      name: "Марс", 
      description: "Красная планета с полярными ледяными шапками", 
      color: "#CD5C5C", 
      facts: ["Самый высокий вулкан в Солнечной системе", "Два спутника: Фобос и Деймос", "Сезоны как на Земле", "Возможность существования воды в прошлом"],
      details: {
        type: "Планета земной группы",
        distanceFromSun: "227.9 млн км",
        orbitalPeriod: "687 дней",
        rotationPeriod: "24 часа 37 минут",
        moons: 2,
        atmosphere: "Углекислый газ (95%), азот (2.7%), аргон (1.6%)",
        diameter: "6,779 км",
        mass: "6.42 × 10^23 кг",
        gravity: "3.7 м/с²"
      }
    },
    { 
      name: "Юпитер", 
      description: "Газовый гигант с Большим красным пятном", 
      color: "#C19A6B", 
      facts: ["Самый большой в Солнечной системе", "Имеет 79 известных лун", "Большое красное пятно - гигантский шторм", "Сильное магнитное поле"],
      details: {
        type: "Газовый гигант",
        distanceFromSun: "778.5 млн км",
        orbitalPeriod: "11.9 лет",
        rotationPeriod: "9 часов 56 минут",
        moons: 79,
        atmosphere: "Водород (90%), гелий (10%)",
        diameter: "139,820 км",
        mass: "1.90 × 10^27 кг",
        gravity: "24.8 м/с²"
      }
    },
    { 
      name: "Сатурн", 
      description: "Известен своими впечатляющими кольцами", 
      color: "#FAD5A5", 
      facts: ["Кольца состоят из льда и камней", "Плотность меньше воды", "62 известных спутника", "Сильные ветры до 1800 км/ч"],
      details: {
        type: "Газовый гигант",
        distanceFromSun: "1.4 млрд км",
        orbitalPeriod: "29.5 лет",
        rotationPeriod: "10 часов 42 минут",
        moons: 62,
        atmosphere: "Водород (96%), гелий (3%)",
        diameter: "116,460 км",
        mass: "5.68 × 10^26 кг",
        gravity: "10.4 м/с²"
      }
    },
    { 
      name: "Уран", 
      description: "Ледяной гигант, вращающийся на боку", 
      color: "#4FD0E7", 
      facts: ["Вращается под углом 98°", "Открыт в 1781 году", "Имеет систему тонких колец", "Самый холодный: -224°C"],
      details: {
        type: "Ледяной гигант",
        distanceFromSun: "2.9 млрд км",
        orbitalPeriod: "84 года",
        rotationPeriod: "17 часов 14 минут",
        moons: 27,
        atmosphere: "Водород (83%), гелий (15%), метан (2%)",
        diameter: "50,724 км",
        mass: "8.68 × 10^25 кг",
        gravity: "8.9 м/с²"
      }
    },
    { 
      name: "Нептун", 
      description: "Самый ветреный мир с синими оттенками", 
      color: "#4B70DD", 
      facts: ["Открыт благодаря математическим расчетам", "Ветры до 2100 км/ч", "Синее окрашивание из-за метана", "Система из 6 колец"],
      details: {
        type: "Ледяной гигант",
        distanceFromSun: "4.5 млрд км",
        orbitalPeriod: "165 лет",
        rotationPeriod: "16 часов 6 минут",
        moons: 14,
        atmosphere: "Водород (80%), гелий (19%), метан (1%)",
        diameter: "49,244 км",
        mass: "1.02 × 10^26 кг",
        gravity: "11.2 м/с²"
      }
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Планеты - Cosmic Explorer PRO</title>
        <meta name="description" content="Исследуйте планеты Солнечной системы в 3D" />
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
          <h1 className={styles.title}>Планеты Солнечной системы</h1>
          <p className={styles.description}>
            Исследуйте удивительные миры нашей звёздной системы. Нажмите на любую планету для получения подробной информации.
          </p>
        </motion.div>
        
        <motion.div 
          className={styles.planetsGrid}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {planets.map((planet, index) => (
            <PlanetCard 
              key={index}
              name={planet.name}
              description={planet.description}
              color={planet.color}
              facts={planet.facts}
              details={planet.details}
            />
          ))}
        </motion.div>

        <motion.div 
          className={styles.solarSystemInfo}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2>Солнечная система</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h3>Внутренние планеты</h3>
              <p>Меркурий, Венера, Земля, Марс - каменистые планеты с твёрдой поверхностью</p>
            </div>
            <div className={styles.infoCard}>
              <h3>Внешние планеты</h3>
              <p>Юпитер, Сатурн, Уран, Нептун - газовые гиганты и ледяные гиганты</p>
            </div>
            <div className={styles.infoCard}>
              <h3>Пояс астероидов</h3>
              <p>Расположен между Марсом и Юпитером, содержит тысячи малых тел</p>
            </div>
            <div className={styles.infoCard}>
              <h3>Пояс Койпера</h3>
              <p>Область за Нептуном, содержащая ледяные объекты включая Плутон</p>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}