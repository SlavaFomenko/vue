<template>
  <AuthWrapper title="Реєстрація">
    <div @submit.prevent="handleSubmit">
      <BaseInput
        v-model="name"
        label="Ім'я"
        placeholder="Іван Петров"
        :error="errors.name"
      />

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

      <BaseInput
        v-model="confirmPassword"
        label="Підтвердження паролю"
        type="password"
        placeholder="••••••"
        :error="errors.confirmPassword"
      />

      <button type="submit" @click="handleSubmit" class="submit-button">
        Зареєструватись
      </button>

      <p class="footer-text">
        Вже є акаунт?
        <router-link to="/login" class="footer-link">
          Увійти
        </router-link>
      </p>
    </div>
  </AuthWrapper>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import AuthWrapper from '@/components/AuthWrapper.vue';
import BaseInput from '@/components/BaseInput.vue';

const router = useRouter();

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const errors = ref({});

const validate = () => {
  const newErrors = {};

  if (!name.value) newErrors.name = "Ім'я є обов'язковим";
  if (!email.value) newErrors.email = "Email є обов'язковим";
  if (!email.value.includes('@')) newErrors.email = "Невірний формат email";
  if (!password.value) newErrors.password = "Пароль є обов'язковим";
  if (password.value.length < 6) newErrors.password = "Пароль має бути не менше 6 символів";
  if (password.value !== confirmPassword.value) {
    newErrors.confirmPassword = "Паролі не збігаються";
  }

  return newErrors;
};

const handleSubmit = () => {
  const validationErrors = validate();

  if (Object.keys(validationErrors).length === 0) {
    alert('Реєстрація успішна!');
    router.push('/login');
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
