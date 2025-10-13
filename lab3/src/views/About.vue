<template>
  <div class="about">
    <div class="about-hero">
      <h1 class="about-title">About Vue News</h1>
      <p class="about-subtitle">
        Your trusted source for Vue.js and web development news
      </p>
    </div>

    <div class="about-content">
      <section class="about-section">
        <div class="section-icon">🎯</div>
        <h2 class="section-title">Our Mission</h2>
        <p class="section-text">
          We're dedicated to bringing you the latest news, tutorials, and insights
          from the Vue.js ecosystem and the broader web development community.
          Our goal is to help developers stay informed and continuously improve their skills.
        </p>
      </section>

      <section class="about-section">
        <div class="section-icon">✨</div>
        <h2 class="section-title">What We Offer</h2>
        <ul class="features-list">
          <li class="feature-item">
            <span class="feature-icon">📰</span>
            <span>Daily curated news articles</span>
          </li>
          <li class="feature-item">
            <span class="feature-icon">🎓</span>
            <span>In-depth tutorials and guides</span>
          </li>
          <li class="feature-item">
            <span class="feature-icon">💡</span>
            <span>Best practices and tips</span>
          </li>
          <li class="feature-item">
            <span class="feature-icon">🚀</span>
            <span>Framework updates and releases</span>
          </li>
        </ul>
      </section>

      <section class="about-section">
        <div class="section-icon">👥</div>
        <h2 class="section-title">Our Team</h2>
        <p class="section-text">
          We're a small team of passionate developers who love Vue.js and want to
          share that passion with the community. We carefully curate content to
          ensure you're getting the most valuable and relevant information.
        </p>
      </section>

      <AdSlot
          title="Join Our Newsletter"
          description="Get weekly Vue.js tips and news delivered to your inbox!"
          bg-color="#f59e0b"
          @click="handleNewsletterClick"
      />

      <section class="about-section">
        <div class="section-icon">📧</div>
        <h2 class="section-title">Get In Touch</h2>
        <p class="section-text">
          Have feedback or suggestions? We'd love to hear from you!
        </p>
        <a href="mailto:hello@vuenews.com" class="contact-button">
          Contact Us
        </a>
      </section>
    </div>
  </div>
</template>

<script setup>
import AdSlot from '@/components/AdSlot.vue';

const handleNewsletterClick = () => {
  alert('Newsletter signup would open here!');
};
</script>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
  animation: fadeInUp 0.6s ease;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.about-hero {
  text-align: center;
  padding: 3rem 1rem;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, var(--accent), #8b5cf6);
  border-radius: var(--radius-xl);
  color: white;
}

.about-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.about-subtitle {
  font-size: 1.25rem;
  opacity: 0.95;
}

.about-content {
  padding: 0 1rem;
}

.about-section {
  margin-bottom: 4rem;
  animation: slideIn 0.5s ease backwards;
  animation-delay: calc(var(--index) * 0.1s);
}

.about-section:nth-child(1) { --index: 1; }
.about-section:nth-child(2) { --index: 2; }
.about-section:nth-child(3) { --index: 3; }
.about-section:nth-child(4) { --index: 4; }
.about-section:nth-child(5) { --index: 5; }

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.section-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.section-text {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.8;
}

.features-list {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 1rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--bg-secondary);
  border-radius: var(--radius-md);
  transition: all 0.3s ease;
}

.feature-item:hover {
  transform: translateX(10px);
  background-color: var(--bg-card);
  box-shadow: var(--shadow-md);
}

.feature-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.contact-button {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 1rem 2rem;
  background-color: var(--accent);
  color: white;
  text-decoration: none;
  border-radius: var(--radius-md);
  font-weight: 600;
  transition: all 0.2s ease;
}

.contact-button:hover {
  background-color: var(--accent-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

@media (max-width: 768px) {
  .about-hero {
    padding: 2rem 1rem;
  }

  .about-title {
    font-size: 2rem;
  }

  .about-subtitle {
    font-size: 1rem;
  }

  .section-title {
    font-size: 1.5rem;
  }
}
</style>