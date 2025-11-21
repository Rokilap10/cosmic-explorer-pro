import Head from 'next/head';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SpaceBackground from '../components/SpaceBackground';
import CosmicParticles from '../components/CosmicParticles';
import { ThemeContext } from '../context/ThemeContext';
import styles from '../styles/Home.module.css';

export default function Settings() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const settingsSections = [
    {
      title: 'Внешний вид',
      settings: [
        {
          id: 'theme',
          label: 'Тема оформления',
          type: 'toggle',
          value: theme === 'dark',
          onChange: toggleTheme,
          description: 'Переключение между тёмной и светлой темой'
        },
        {
          id: 'animations',
          label: 'Анимации',
          type: 'toggle',
          value: true,
          onChange: () => {},
          description: 'Включить/выключить анимации на сайте'
        }
      ]
    },
    {
      title: 'Контент',
      settings: [
        {
          id: 'notifications',
          label: 'Уведомления',
          type: 'toggle',
          value: true,
          onChange: () => {},
          description: 'Получать уведомления о новых функциях'
        },
        {
          id: 'language',
          label: 'Язык',
          type: 'select',
          value: 'ru',
          options: [
            { value: 'ru', label: 'Русский' },
            { value: 'en', label: 'English' }
          ],
          onChange: () => {},
          description: 'Язык интерфейса'
        }
      ]
    },
    {
      title: 'Производительность',
      settings: [
        {
          id: 'particles',
          label: 'Космические частицы',
          type: 'toggle',
          value: true,
          onChange: () => {},
          description: 'Отображение анимированных частиц на фоне'
        },
        {
          id: 'quality',
          label: 'Качество графики',
          type: 'select',
          value: 'high',
          options: [
            { value: 'low', label: 'Низкое' },
            { value: 'medium', label: 'Среднее' },
            { value: 'high', label: 'Высокое' }
          ],
          onChange: () => {},
          description: 'Качество отображения 3D моделей и анимаций'
        }
      ]
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Настройки - Cosmic Explorer PRO</title>
        <meta name="description" content="Настройки Cosmic Explorer PRO" />
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
          <h1 className={styles.title}>Настройки</h1>
          <p className={styles.description}>
            Настройте Cosmic Explorer под свои предпочтения
          </p>
        </motion.div>

        <div className={styles.settingsContainer}>
          {settingsSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              className={styles.settingsSection}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: sectionIndex * 0.1 }}
            >
              <h2 className={styles.settingsSectionTitle}>{section.title}</h2>
              <div className={styles.settingsList}>
                {section.settings.map((setting, index) => (
                  <motion.div
                    key={setting.id}
                    className={styles.settingItem}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (sectionIndex * 0.1) + (index * 0.05) }}
                  >
                    <div className={styles.settingInfo}>
                      <label htmlFor={setting.id} className={styles.settingLabel}>
                        {setting.label}
                      </label>
                      <p className={styles.settingDescription}>{setting.description}</p>
                    </div>
                    
                    <div className={styles.settingControl}>
                      {setting.type === 'toggle' && (
                        <button
                          id={setting.id}
                          className={`${styles.toggle} ${setting.value ? styles.toggleOn : ''}`}
                          onClick={setting.onChange}
                        >
                          <div className={styles.toggleThumb} />
                        </button>
                      )}
                      
                      {setting.type === 'select' && (
                        <select
                          id={setting.id}
                          className={styles.select}
                          value={setting.value}
                          onChange={setting.onChange}
                        >
                          {setting.options.map(option => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className={styles.settingsFooter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className={styles.appInfo}>
            <h3>Cosmic Explorer PRO</h3>
            <p>Версия 1.0.0</p>
            <p>© 2024 Все права защищены</p>
          </div>
          
          <div className={styles.actions}>
            <button className={styles.secondaryButton}>Сбросить настройки</button>
            <button className={styles.primaryButton}>Сохранить изменения</button>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}