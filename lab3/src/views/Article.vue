<template>
  <article class="article" v-if="article">
    <button @click="goBack" class="back-button">
      ← Back to News
    </button>

    <header class="article-header">
      <span class="article-category" :style="categoryStyle">
        {{ article.category }}
      </span>

      <h1 class="article-title">{{ article.title }}</h1>

      <div class="article-meta">
        <time class="article-date">📅 {{ formatDate(article.date) }}</time>
        <span class="article-reading-time">⏱️ 5 min read</span>
      </div>
    </header>

    <div class="article-image">
      <img :src="article.image" :alt="article.title" />
    </div>

    <div class="article-content" v-html="article.content"></div>

    <AdSlot
        title="Exclusive: Advanced Vue Patterns"
        description="Unlock advanced Vue.js patterns and best practices. Limited time offer!"
        bg-color="#8b5cf6"
        @click="openAdModal"
    />

    <AdModal
        :is-open="isModalOpen"
        :ad-data="adData"
        @close="closeAdModal"
        @cta-click="handleAdClick"
    />
  </article>

  <div v-else class="not-found">
    <h2>Article not found</h2>
    <button @click="goBack" class="back-button">Go Back</button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getNewsById } from '@/data/news.js';
import AdSlot from '@/components/AdSlot.vue';
import AdModal from '@/components/AdModal.vue';

const props = defineProps({
  id: {
    type: String,
    required: true
  }
});

const router = useRouter();
const article = ref(null);
const isModalOpen = ref(false);

const adData = {
  title: 'Advanced Vue Patterns Course',
  description: 'Take your Vue.js skills to the next level with advanced patterns, composition API mastery, and performance optimization techniques.',
  image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop',
  features: [
    'Advanced composition API patterns',
    'State management strategies',
    'Performance optimization',
    'Production best practices'
  ],
  ctaText: 'Get Started Now'
};

// v-bind() в CSS - динамічний колір категорії
const categoryStyle = computed(() => ({
  '--category-color': getCategoryColor(article.value?.category)
}));

const getCategoryColor = (category) => {
  const colors = {
    'Technology': '#3b82f6',
    'Web Development': '#10b981',
    'CSS': '#f59e0b',
    'TypeScript': '#3b82f6',
    'Accessibility': '#8b5cf6',
    'React': '#06b6d4'
  };
  return colors[category] || '#6b7280';
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('uk-UA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const goBack = () => {
  router.push('/');
};

const openAdModal = () => {
  isModalOpen.value = true;
};

const closeAdModal = () => {
  isModalOpen.value = false;
};

const handleAdClick = () => {
  alert('Thank you for your interest!');
};

onMounted(() => {
  article.value = getNewsById(props.id);

  if (!article.value) {
    console.error('Article not found');
  }
});
</script>

<style scoped>
.article {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  animation: slideIn 0.5s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.back-button {
  background: none;
  border: none;
  color: var(--accent);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.5rem 0;
  margin-bottom: 2rem;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.back-button:hover {
  transform: translateX(-5px);
  color: var(--accent-hover);
}

.article-header {
  margin-bottom: 2rem;
}

.article-category {
  display: inline-block;
  background-color: var(--category-color);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.article-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1.2;
  margin-bottom: 1rem;
}

.article-meta {
  display: flex;
  gap: 1.5rem;
  color: var(--text-secondary);
  font-size: 0.9375rem;
}

.article-image {
  width: 100%;
  height: 400px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: var(--shadow-lg);
}

.article-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.article-content {
  color: var(--text-primary);
  line-height: 1.8;
  font-size: 1.125rem;
}

.article-content :deep(h3) {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 2rem 0 1rem;
  color: var(--text-primary);
}

.article-content :deep(p) {
  margin-bottom: 1.5rem;
}

.article-content :deep(ul) {
  margin: 1.5rem 0;
  padding-left: 2rem;
}

.article-content :deep(li) {
  margin-bottom: 0.75rem;
}

.article-content :deep(code) {
  background-color: var(--bg-secondary);
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius-sm);
  font-family: 'Courier New', monospace;
  font-size: 0.875em;
}

.not-found {
  text-align: center;
  padding: 4rem 1rem;
}

.not-found h2 {
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .article {
    padding: 1rem 0.5rem;
  }

  .article-title {
    font-size: 1.75rem;
  }

  .article-image {
    height: 250px;
  }

  .article-content {
    font-size: 1rem;
  }
}
</style>