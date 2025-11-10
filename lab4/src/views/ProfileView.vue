<template>
  <div class="profile-view">
    <h1>{{ t('profile.title', {}, { modifier: 'star' }) }}</h1>

    <form @submit="onSubmit" class="profile-form">
      <div class="form-group">
        <label>{{ t('profile.name') }}</label>
        <input
            v-model="name"
            type="text"
            class="input"
            :class="{ error: errors.name }"
        />
        <span v-if="errors.name" class="error-text">{{ errors.name }}</span>
      </div>

      <div class="form-group">
        <label>{{ t('profile.email') }}</label>
        <input
            v-model="email"
            type="email"
            class="input"
            :class="{ error: errors.email }"
        />
        <span v-if="errors.email" class="error-text">{{ errors.email }}</span>
      </div>

      <div class="form-group">
        <label>{{ t('profile.dateOfBirth') }}</label>
        <input
            v-model="dateOfBirth"
            type="date"
            class="input"
            :class="{ error: errors.dateOfBirth }"
        />
        <span v-if="errors.dateOfBirth" class="error-text">{{ errors.dateOfBirth }}</span>
      </div>

      <div class="form-group">
        <label>{{ t('profile.address') }}</label>
        <input
            v-model="address"
            type="text"
            class="input"
            :class="{ error: errors.address }"
        />
        <span v-if="errors.address" class="error-text">{{ errors.address }}</span>
      </div>

      <div class="form-group">
        <label>{{ t('profile.phones') }}</label>
        <div v-for="(field, idx) in fields" :key="field.key">
          <PhoneInput
              :model-value="field.value"
              @update:model-value="(val) => field.value = val"
              @remove="remove(idx)"
              :error="errors[`phones[${idx}]`]"
          />
        </div>
        <button @click="push('')" type="button" class="add-btn">
          {{ t('profile.addPhone') }}
        </button>
      </div>

      <div class="form-actions">
        <button type="submit" class="btn btn-primary">
          {{ t('profile.submit') }}
        </button>
        <button @click="handleReset" type="button" class="btn btn-secondary">
          {{ t('profile.reset') }}
        </button>
        <button @click="simulateServerError" type="button" class="btn btn-danger">
          {{ t('profile.serverError') }}
        </button>
      </div>

      <div v-if="successMessage" class="success-message">
        {{ successMessage }}
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useForm, useField, useFieldArray } from 'vee-validate'
import { useI18n } from 'vue-i18n'
import * as yup from 'yup'
import PhoneInput from '../components/PhoneInput.vue'

const { t } = useI18n()
const successMessage = ref('')

const schema = yup.object({
  name: yup.string()
      .required(t('validation.required', { field: t('profile.name') }))
      .min(2, t('validation.minLength', { field: t('profile.name'), length: 2 })),
  email: yup.string()
      .required(t('validation.required', { field: t('profile.email') }))
      .email(t('validation.email')),
  dateOfBirth: yup.date()
      .required(t('validation.required', { field: t('profile.dateOfBirth') }))
      .test('age', t('validation.minAge'), function(value) {
        const age = new Date().getFullYear() - new Date(value).getFullYear()
        return age >= 18
      }),
  address: yup.string()
      .required(t('validation.required', { field: t('profile.address') }))
      .min(5, t('validation.minLength', { field: t('profile.address'), length: 5 })),
  phones: yup.array()
      .of(
          yup.string()
              .matches(/^\+380\d{9}$/, t('validation.phone'))
      )
})

const { handleSubmit, errors, resetForm, setFieldError } = useForm({
  validationSchema: schema,
  initialValues: {
    name: '',
    email: '',
    dateOfBirth: '',
    address: '',
    phones: ['+380']
  }
})

const { value: name } = useField('name')
const { value: email } = useField('email')
const { value: dateOfBirth } = useField('dateOfBirth')
const { value: address } = useField('address')

const { fields, push, remove } = useFieldArray('phones')

const onSubmit = handleSubmit((values) => {
  console.log('Form submitted:', values)
  successMessage.value = t('profile.success')
  setTimeout(() => {
    successMessage.value = ''
  }, 3000)
})

function handleReset() {
  resetForm()
  successMessage.value = ''
}

function simulateServerError() {
  setFieldError('email', 'Email вже зареєстрований на сервері')
}
</script>

<style scoped>
.profile-view {
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
}

.profile-form {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #2c3e50;
  font-weight: 500;
}

.input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.input:focus {
  outline: none;
  border-color: #3498db;
}

.input.error {
  border-color: #e74c3c;
}

.error-text {
  color: #e74c3c;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
}

.add-btn {
  background: #2ecc71;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s;
  margin-top: 0.5rem;
}

.add-btn:hover {
  background: #27ae60;
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.btn {
  flex: 1;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-primary {
  background: #3498db;
  color: white;
}

.btn-primary:hover {
  background: #2980b9;
}

.btn-secondary {
  background: #95a5a6;
  color: white;
}

.btn-secondary:hover {
  background: #7f8c8d;
}

.btn-danger {
  background: #e74c3c;
  color: white;
}

.btn-danger:hover {
  background: #c0392b;
}

.success-message {
  margin-top: 1rem;
  padding: 1rem;
  background: #d4edda;
  color: #155724;
  border-radius: 8px;
  text-align: center;
}
</style>