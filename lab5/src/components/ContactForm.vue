<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="section-title">Напишіть нам</h2>
      <p class="section-subtitle">Отримайте демо або задайте питання</p>

      <div class="contact-wrapper">
        <Card class="contact-card">
          <template #content>
            <form @submit.prevent="handleSubmit" class="contact-form">
              <div class="form-field">
                <label for="name">Ім'я *</label>
                <InputText
                    id="name"
                    v-model="formData.name"
                    :invalid="submitted && !formData.name"
                    placeholder="Введіть ваше ім'я"
                />
                <small v-if="submitted && !formData.name" class="p-error">
                  Ім'я є обов'язковим
                </small>
              </div>

              <div class="form-field">
                <label for="email">Email *</label>
                <InputText
                    id="email"
                    v-model="formData.email"
                    :invalid="submitted && !isValidEmail"
                    type="email"
                    placeholder="your@email.com"
                />
                <small v-if="submitted && !formData.email" class="p-error">
                  Email є обов'язковим
                </small>
                <small v-else-if="submitted && formData.email && !isValidEmail" class="p-error">
                  Введіть коректний email
                </small>
              </div>

              <div class="form-field">
                <label for="phone">Телефон</label>
                <InputMask
                    id="phone"
                    v-model="formData.phone"
                    mask="+38 (099) 999-99-99"
                    placeholder="+38 (099) 999-99-99"
                />
              </div>

              <div class="form-field">
                <label for="message">Повідомлення *</label>
                <Textarea
                    id="message"
                    v-model="formData.message"
                    :invalid="submitted && !formData.message"
                    rows="5"
                    placeholder="Розкажіть нам про ваші потреби..."
                />
                <small v-if="submitted && !formData.message" class="p-error">
                  Повідомлення є обов'язковим
                </small>
              </div>

              <div class="form-field">
                <div class="checkbox-wrapper">
                  <Checkbox
                      id="privacy"
                      v-model="formData.acceptPrivacy"
                      :invalid="submitted && !formData.acceptPrivacy"
                      binary
                  />
                  <label for="privacy" class="checkbox-label">
                    Погоджуюсь з
                    <a href="#" @click.prevent="copyPrivacyLink">політикою конфіденційності</a> *
                  </label>
                </div>
                <small v-if="submitted && !formData.acceptPrivacy" class="p-error">
                  Необхідно прийняти політику конфіденційності
                </small>
              </div>

              <Button
                  type="submit"
                  label="Надіслати заявку"
                  icon="pi pi-send"
                  class="w-full"
                  size="large"
              />
            </form>
          </template>
        </Card>

        <div class="contact-info">
          <Card>
            <template #title>Контактна інформація</template>
            <template #content>
              <div class="info-item">
                <i class="pi pi-envelope"></i>
                <div>
                  <strong>Email</strong>
                  <p>support@taskflow.com</p>
                  <Button
                      label="Копіювати"
                      text
                      size="small"
                      @click="copyEmail"
                  />
                </div>
              </div>

              <Divider />

              <div class="info-item">
                <i class="pi pi-phone"></i>
                <div>
                  <strong>Телефон</strong>
                  <p>+38 (044) 123-45-67</p>
                  <Button
                      label="Копіювати"
                      text
                      size="small"
                      @click="copyPhone"
                  />
                </div>
              </div>

              <Divider />

              <div class="info-item">
                <i class="pi pi-map-marker"></i>
                <div>
                  <strong>Адреса</strong>
                  <p>м. Київ, вул. Хрещатик, 1</p>
                </div>
              </div>

              <Divider />

              <div class="social-links">
                <strong>Соціальні мережі</strong>
                <div class="social-buttons">
                  <Button icon="pi pi-facebook" rounded text />
                  <Button icon="pi pi-twitter" rounded text />
                  <Button icon="pi pi-linkedin" rounded text />
                  <Button icon="pi pi-github" rounded text />
                </div>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, getCurrentInstance } from 'vue'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import InputMask from 'primevue/inputmask'
import Textarea from 'primevue/textarea'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import { useToast } from 'primevue/usetoast'

const toast = useToast()
const { proxy } = getCurrentInstance()

const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
  acceptPrivacy: false
})

const submitted = ref(false)

const isValidEmail = computed(() => {
  if (!formData.value.email) return false
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(formData.value.email)
})

const isFormValid = computed(() => {
  return formData.value.name &&
      formData.value.email &&
      isValidEmail.value &&
      formData.value.message &&
      formData.value.acceptPrivacy
})

function handleSubmit() {
  submitted.value = true

  if (!isFormValid.value) {
    toast.add({
      severity: 'error',
      summary: 'Помилка',
      detail: 'Будь ласка, заповніть всі обов\'язкові поля',
      life: 3000
    })
    return
  }

  console.log('Form submitted:', formData.value)

  toast.add({
    severity: 'success',
    summary: 'Успіх',
    detail: 'Заявку надіслано! Ми зв\'яжемося з вами найближчим часом.',
    life: 5000
  })

  formData.value = {
    name: '',
    email: '',
    phone: '',
    message: '',
    acceptPrivacy: false
  }
  submitted.value = false
}

function copyEmail() {
  if (proxy.$copyToClipboard('support@taskflow.com')) {
    toast.add({
      severity: 'success',
      summary: 'Скопійовано',
      detail: 'Email скопійовано в буфер обміну',
      life: 3000
    })
  }
}

function copyPhone() {
  if (proxy.$copyToClipboard('+38 (044) 123-45-67')) {
    toast.add({
      severity: 'success',
      summary: 'Скопійовано',
      detail: 'Телефон скопійовано в буфер обміну',
      life: 3000
    })
  }
}

function copyPrivacyLink() {
  if (proxy.$copyToClipboard('https://taskflow.com/privacy')) {
    toast.add({
      severity: 'success',
      summary: 'Скопійовано',
      detail: 'Посилання на політику конфіденційності скопійовано',
      life: 3000
    })
  }
}
</script>

<style scoped>
.contact {
  background: #f8fafc;
}

.contact-wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.contact-card {
  height: fit-content;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-field label {
  font-weight: 600;
  color: #1e293b;
}

.checkbox-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.checkbox-label {
  font-weight: normal;
  margin: 0;
}

.checkbox-label a {
  color: #6366f1;
  text-decoration: none;
}

.checkbox-label a:hover {
  text-decoration: underline;
}

.p-error {
  color: #ef4444;
  font-size: 0.875rem;
}

.contact-info {
  height: fit-content;
}

.info-item {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
}

.info-item i {
  font-size: 1.5rem;
  color: #6366f1;
  margin-top: 0.25rem;
}

.info-item strong {
  display: block;
  color: #1e293b;
  margin-bottom: 0.25rem;
}

.info-item p {
  color: #64748b;
  margin: 0;
}

.social-links {
  text-align: center;
}

.social-links strong {
  display: block;
  margin-bottom: 1rem;
  color: #1e293b;
}

.social-buttons {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

@media (max-width: 768px) {
  .contact-wrapper {
    grid-template-columns: 1fr;
  }
}
</style>