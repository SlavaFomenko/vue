<template>
  <AuthWrapper title="Вхід">
    <div @submit.prevent="handleSubmit">
      <BaseInput
        v-model="email"
        label="Email"
        type="email"
        placeholder="example@mail.com"
        :error="errors.email"
      />

      <BaseInput
        v-model="password"
        label="Пароль"
        type="password"
        placeholder="••••••"
        :error="errors.password"
      />

      <button type="submit" @click="handleSubmit" class="submit-button">
        Увійти
      </button>

      <p class="footer-text">
        Немає акаунту?
        <router-link to="/register" class="footer-link">
          Зареєструватись
        </router-link>
      </p>
    </div>
  </AuthWrapper>
</template>

<script setup>
import { ref, inject } from 'vue';
import { useRouter } from 'vue-router';
import AuthWrapper from '@/components/AuthWrapper.vue';
import BaseInput from '@/components/BaseInput.vue';
import { useAuth } from '@/composables/useAuth';

const router = useRouter();
const { login } = useAuth();
const setCurrentUser = inject('setCurrentUser');

const email = ref('');
const password = ref('');
const errors = ref({});

const validate = () => {
  const newErrors = {};

  if (!email.value) {
    newErrors.email = "Email є обов'язковим";
  } else if (!email.value.includes('@')) {
    newErrors.email = "Невірний формат email";
  }

  if (!password.value) {
    newErrors.password = "Пароль є обов'язковим";
  } else if (password.value.length < 6) {
    newErrors.password = "Пароль має бути не менше 6 символів";
  }

  return newErrors;
};

const handleSubmit = () => {
  const validationErrors = validate();

  if (Object.keys(validationErrors).length === 0) {
    const userData = {
      email: email.value,
      name: email.value.split('@')[0]
    };

    login(userData);
    setCurrentUser(userData);
    router.push('/admin/dashboard');
  } else {
    errors.value = validationErrors;
  }
};
</script>

<style scoped>
.submit-button {
  width: 100%;
  padding: 0.75rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}

.submit-button:hover {
  background: #2563eb;
}

.footer-text {
  text-align: center;
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #6b7280;
}

.footer-link {
  color: #3b82f6;
  text-decoration: none;
}

.footer-link:hover {
  text-decoration: underline;
}
</style>
