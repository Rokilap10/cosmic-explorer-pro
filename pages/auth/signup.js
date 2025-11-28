import { useState } from 'react';
import { signIn } from "next-auth/react"
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function SignUp() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Валидация
    if (formData.password !== formData.confirmPassword) {
      setError('Пароли не совпадают')
      setIsLoading(false)
      return
    }

    if (formData.password.length < 6) {
      setError('Пароль должен быть не менее 6 символов')
      setIsLoading(false)
      return
    }

    if (!formData.name.trim()) {
      setError('Введите ваше имя')
      setIsLoading(false)
      return
    }

    if (!formData.email.includes('@')) {
      setError('Введите корректный email')
      setIsLoading(false)
      return
    }

    try {
      const result = await signIn('credentials', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        isRegister: 'true',
        redirect: false
      })

      if (result?.error) {
        setError(result.error)
      } else if (result?.ok) {
        router.push('/')
      }
    } catch (error) {
      setError('Произошла ошибка при регистрации')
      console.error('Signup error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.signupPage}>
      {/* Космический фон */}
      <div className={styles.spaceBackground}></div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={styles.signupContainer}
      >
        <motion.div
          className={styles.signupCard}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Заголовок */}
          <motion.div
            className={styles.signupHeader}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className={styles.logo}>🌌</div>
            <h1 className={styles.title}>Создать аккаунт</h1>
            <p className={styles.subtitle}>Присоединяйтесь к исследованию космоса</p>
          </motion.div>

          {/* Сообщение об ошибке */}
          {error && (
            <motion.div 
              className={styles.errorMessage}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
            >
              {error}
            </motion.div>
          )}

          {/* Форма */}
          <motion.form 
            onSubmit={handleSubmit} 
            className={styles.signupForm}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className={styles.formGroup}>
              <label className={styles.label}>Ваше имя</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Как вас зовут?"
                disabled={isLoading}
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@gmail.com"
                disabled={isLoading}
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Пароль</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Не менее 6 символов"
                minLength="6"
                disabled={isLoading}
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Подтвердите пароль</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="Повторите пароль"
                disabled={isLoading}
                className={styles.input}
              />
            </div>

            <motion.button
              type="submit"
              className={styles.submitButton}
              disabled={isLoading}
              whileHover={{ scale: isLoading ? 1 : 1.05 }}
              whileTap={{ scale: isLoading ? 1 : 0.95 }}
            >
              {isLoading ? (
                <>
                  <span className={styles.buttonIcon}>⏳</span>
                  Регистрация...
                </>
              ) : (
                <>
                  <span className={styles.buttonIcon}>🚀</span>
                  Создать аккаунт
                </>
              )}
            </motion.button>
          </motion.form>

          {/* Разделитель */}
          <motion.div 
            className={styles.divider}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <span>или</span>
          </motion.div>

          {/* Кнопка Google */}
          <motion.button
            onClick={() => signIn('google')}
            className={styles.googleButton}
            type="button"
            disabled={isLoading}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={styles.googleIcon}>🔵</span>
            Зарегистрироваться через Google
          </motion.button>

          {/* Ссылка на вход */}
          <motion.div 
            className={styles.authFooter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <p>
              Уже есть аккаунт?{' '}
              <Link href="/auth/signin" className={styles.authLink}>
                Войти
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}