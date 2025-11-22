# Лабораторна робота 5 - TaskFlow Landing Page

## Кроки запуску
```bash
npm create vite@latest lab5 -- --template vue
cd lab5
npm install primevue @primeuix/themes primeicons
npm run dev
```

## Структура лендінгу

1. **Header** - логотип, навігація, кнопки авторизації
2. **Hero** - головний заголовок, CTA кнопки, статистика
3. **Проблема-Рішення** - відображення проблем та їх вирішення
4. **Переваги** - 6 ключових переваг продукту
5. **Як це працює** - 3 кроки для початку роботи
6. **Тарифи** - 3 тарифні плани + калькулятор вартості
7. **Відгуки** - карусель з відгуками клієнтів
8. **FAQ** - акордеон з 8 питаннями
9. **Контактна форма** - форма з валідацією
10. **Footer** - посилання, соціальні мережі

## Компоненти PrimeVue

| Компонент | Де використано |
|-----------|----------------|
| **Button** | Header, Hero, всі секції |
| **Card** | Тарифи, Переваги, Проблема-Рішення, Відгуки, Контакти |
| **InputText** | ContactForm (ім'я, email) |
| **InputMask** | ContactForm (телефон: +38 (099) 999-99-99) |
| **Textarea** | ContactForm (повідомлення) |
| **Checkbox** | ContactForm (згода з політикою) |
| **InputNumber** | PricingPlans (калькулятор) |
| **Chip** | PricingPlans (бейдж "Популярний") |
| **Divider** | Всі секції для розділення контенту |
| **Timeline** | HowItWorks (3 кроки) |
| **Carousel** | TestimonialsSection (відгуки) |
| **Avatar** | TestimonialsSection (аватари користувачів) |
| **Accordion** | FAQSection (8 питань) |
| **Toast** | Глобальні сповіщення |
| **Message** | FAQSection (інфо блок) |

## Налаштування PrimeVue

### `main.js`
```javascript
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import ToastService from 'primevue/toastservice'

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: '.dark-mode',
      cssLayer: false
    }
  }
})

app.use(ToastService)
```

- **Тема**: Aura (сучасний дизайн)
- **ToastService**: для глобальних сповіщень
- **Імпорт іконок**: `primeicons/primeicons.css`

## Плагін CopyToClipboardPlugin

### Створення (`src/plugins/copyToClipboard.js`)
```javascript
export default {
  install(app) {
    // Options API
    app.config.globalProperties.$copyToClipboard = function(text) {
      if (!text) return false
      
      try {
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(text)
          return true
        } else {
          // Fallback для старих браузерів
          const textArea = document.createElement('textarea')
          textArea.value = text
          textArea.style.position = 'fixed'
          textArea.style.left = '-999999px'
          document.body.appendChild(textArea)
          textArea.select()
          
          try {
            document.execCommand('copy')
            document.body.removeChild(textArea)
            return true
          } catch (error) {
            document.body.removeChild(textArea)
            return false
          }
        }
      } catch (error) {
        console.error('Copy failed:', error)
        return false
      }
    }
    
    // Composition API
    app.provide('copyToClipboard', app.config.globalProperties.$copyToClipboard)
  }
}
```

### Підключення в `main.js`
```javascript
import CopyToClipboardPlugin from './plugins/copyToClipboard'

app.use(CopyToClipboardPlugin)
```

### Використання плагіна

#### 1. **PricingPlans.vue** (Копіювання інформації про тариф)
```javascript
function copyPlanInfo(plan) {
  const text = `План: ${plan.name}
Ціна: ${plan.price} грн/міс
Опис: ${plan.description}
Функції: ${plan.features.join(', ')}`
  
  if (proxy.$copyToClipboard(text)) {
    toast.add({
      severity: 'success',
      summary: 'Скопійовано',
      detail: `Інформацію про план "${plan.name}" скопійовано`,
      life: 3000
    })
  }
}
```

**Що копіює**: Повна інформація про обраний тарифний план (назва, ціна, опис, функції)

#### 2. **PricingPlans.vue** (Копіювання розрахунку калькулятора)
```javascript
function copyCalculation() {
  const text = `Розрахунок вартості TaskFlow:
Кількість користувачів: ${userCount.value}
Вартість: ${calculatedPrice.value} грн/міс`
  
  if (proxy.$copyToClipboard(text)) {
    toast.add({
      severity: 'success',
      summary: 'Скопійовано',
      detail: 'Розрахунок вартості скопійовано',
      life: 3000
    })
  }
}
```

**Що копіює**: Результат розрахунку з калькулятора (кількість користувачів + вартість)

#### 3. **TestimonialsSection.vue** (Копіювання відгуку)
```javascript
function copyTestimonial(testimonial) {
  const text = `Відгук: "${testimonial.text}"
Автор: ${testimonial.author}, ${testimonial.position}`
  
  if (proxy.$copyToClipboard(text)) {
    toast.add({
      severity: 'success',
      summary: 'Скопійовано',
      detail: 'Відгук скопійовано',
      life: 3000
    })
  }
}
```

**Що копіює**: Текст відгуку разом з автором та позицією

#### 4. **ContactForm.vue** (Копіювання email)
```javascript
function copyEmail() {
  if (proxy.$copyToClipboard('support@taskflow.com')) {
    toast.add({
      severity: 'success',
      summary: 'Скопійовано',
      detail: 'Email скопійовано',
      life: 3000
    })
  }
}
```

**Що копіює**: Email підтримки

#### 5. **ContactForm.vue** (Копіювання телефону)
```javascript
function copyPhone() {
  if (proxy.$copyToClipboard('+38 (044) 123-45-67')) {
    toast.add({
      severity: 'success',
      summary: 'Скопійовано',
      detail: 'Телефон скопійовано',
      life: 3000
    })
  }
}
```

**Що копіює**: Номер телефону підтримки

#### 6. **ContactForm.vue** (Копіювання посилання на політику)
```javascript
function copyPrivacyLink() {
  if (proxy.$copyToClipboard('https://taskflow.com/privacy')) {
    toast.add({
      severity: 'success',
      summary: 'Скопійовано',
      detail: 'Посилання скопійовано',
      life: 3000
    })
  }
}
```

**Що копіює**: URL політики конфіденційності

### Підсумок використання плагіна

| Секція | Що копіюється | Кнопка/Подія |
|--------|---------------|--------------|
| **Тарифи** | Інформація про план | Кнопка "Обрати план" |
| **Калькулятор** | Розрахунок вартості | Кнопка "Копіювати розрахунок" |
| **Відгуки** | Текст відгуку | Іконка копіювання |
| **Контакти - Email** | support@taskflow.com | Кнопка "Копіювати" |
| **Контакти - Телефон** | +38 (044) 123-45-67 | Кнопка "Копіювати" |
| **Контакти - Політика** | URL політики | Клік на посилання |

## Валідація форми

### ContactForm.vue

**Обов'язкові поля:**
- Ім'я (не порожнє)
- Email (формат email)
- Повідомлення (не порожнє)
- Checkbox (прийняття політики)

**Стани:**
- `invalid` - червоне обрамлення при помилці
- `p-error` - текст помилки під полем
- Toast "success" при успішній відправці
- Toast "error" при помилках валідації

**Логіка:**
```javascript
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
```

### Тестування плагіна:
1. Відкрити секцію "Тарифи"
2. Натиснути "Обрати план" → Toast + інформація в буфері
3. Використати калькулятор, натиснути "Копіювати розрахунок"
4. Перейти до секції "Відгуки"
5. Натиснути іконку копіювання біля відгуку
6. Перейти до "Контакти"
7. Копіювати email, телефон, посилання

### Тестування форми:
1. Спробувати відправити порожню форму → помилки
2. Заповнити поля з некоректним email → помилка
3. Не прийняти політику → помилка
4. Заповнити всі поля коректно → Toast "Заявку надіслано"
