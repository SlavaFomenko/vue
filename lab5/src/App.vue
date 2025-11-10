<template>
  <div id="app">
    <Toast />
    <HeaderSection />
    <HeroSection />
    <ProblemSolution />
    <BenefitsSection />
    <HowItWorks />
    <PricingPlans />
    <TestimonialsSection />
    <FAQSection />
    <ContactForm />
    <FooterSection />
  </div>
</template>

<script setup>
import Toast from 'primevue/toast'
import HeaderSection from './components/HeaderSection.vue'
import HeroSection from './components/HeroSection.vue'
import ProblemSolution from './components/ProblemSolution.vue'
import BenefitsSection from './components/BenefitsSection.vue'
import HowItWorks from './components/HowItWorks.vue'
import PricingPlans from './components/PricingPlans.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import FAQSection from './components/FAQSection.vue'
import ContactForm from './components/ContactForm.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1.6;
  color: #333;
}

#app {
  min-height: 100vh;
}

section {
  padding: 4rem 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #1e293b;
}

.section-subtitle {
  font-size: 1.25rem;
  text-align: center;
  color: #64748b;
  margin-bottom: 3rem;
}
</style>