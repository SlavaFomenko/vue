<template>
  <div class="home">
    <section class="hero">
      <h1 class="hero-title">Latest Tech News</h1>
      <p class="hero-subtitle">
        Stay updated with the latest trends in Vue.js and web development
      </p>
    </section>

    <AdSlot
        title="Special Offer: Vue Mastery Course"
        description="Learn Vue 3 from the experts. 50% off this week only!"
        bg-color="#10b981"
        @click="openAdModal('course')"
    />

    <section class="news-grid">
      <article
          v-for="article in news"
          :key="article.id"
          :class="[$style.card]"
      >
        <div :class="$style.imageContainer">
          <img
              :src="article.image"
              :alt="article.title"
              :class="$style.image"
          />
          <span :class="$style.category">{{ article.category }}</span>
        </div>

        <div :class="$style.content">
          <time :class="$style.date">
            📅 {{ formatDate(article.date) }}
          </time>

          <h2 :class="$style.title">{{ article.title }}</h2>

          <p :class="$style.description">{{ article.description }}</p>

          <button
              :class="$style.button"
              @click="goToArticle(article.id)"
          >
            Read More →
          </button>
        </div>
      </article>
    </section>

    <AdModal
        :is-open="isModalOpen"
        :ad-data="currentAd"
        @close="closeAdModal"
        @cta-click="handleAdClick"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { newsData } from '@/data/news.js';
import AdSlot from '@/components/AdSlot.vue';
import AdModal from '@/components/AdModal.vue';

const router = useRouter();
const news = newsData;

const isModalOpen = ref(false);
const currentAd = ref({});

const adDataMap = {
  course: {
    title: 'Vue Mastery Pro Course',
    description: 'Master Vue 3 with our comprehensive course. Learn from industry experts and build real-world applications.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop',
    features: [
      '50+ hours of video content',
      'Real-world projects',
      'Certificate of completion',
      'Lifetime access'
    ],
    ctaText: 'Enroll Now - 50% Off'
  }
};

const openAdModal = (adType) => {
  currentAd.value = adDataMap[adType];
  isModalOpen.value = true;
};

const closeAdModal = () => {
  isModalOpen.value = false;
};

const handleAdClick = () => {
  alert('Redirecting to course page...');
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('uk-UA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const goToArticle = (id) => {
  router.push(`/article/${id}`);
};
</script>

<style scoped>
.home {
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.hero {
  text-align: center;
  padding: 3rem 1rem;
  margin-bottom: 2rem;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--accent), #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .news-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>

<style module src="@/components/NewsCard.module.css"></style>