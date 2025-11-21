import { useEffect, useRef } from 'react';
import styles from '../styles/Home.module.css';

export default function CosmicParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 2;
        this.alpha = Math.random() * 0.5 + 0.2;
        this.color = `hsl(${Math.random() * 60 + 200}, 70%, 70%)`;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        this.alpha = 0.2 + 0.3 * Math.sin(Date.now() * 0.001 + this.x * 0.01);
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.restore();
      }
    }

    const particles = Array.from({ length: 100 }, () => new Particle());

    const drawNebula = () => {
      const gradient = ctx.createRadialGradient(
        canvas.width * 0.3, canvas.height * 0.7, 0,
        canvas.width * 0.3, canvas.height * 0.7, 300
      );
      gradient.addColorStop(0, 'rgba(138, 180, 248, 0.1)');
      gradient.addColorStop(1, 'rgba(138, 180, 248, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 42, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawNebula();

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      ctx.strokeStyle = 'rgba(138, 180, 248, 0.1)';
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.cosmicParticles} />;
}