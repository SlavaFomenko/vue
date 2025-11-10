<template>
  <div class="phone-input">
    <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        type="text"
        placeholder="+380XXXXXXXXX"
        class="input"
        :class="{ error: error }"
    />
    <button
        @click="$emit('remove')"
        type="button"
        class="remove-btn"
    >
      ×
    </button>
    <span v-if="error" class="error-text">{{ error }}</span>
  </div>
</template>

<script setup>
defineProps({
  modelValue: String,
  error: String
})

defineEmits(['update:modelValue', 'remove'])
</script>

<style scoped>
.phone-input {
  display: flex;
  gap: 0.5rem;
  align-items: start;
  position: relative;
  margin-bottom: 0.5rem;
}

.input {
  flex: 1;
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

.remove-btn {
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 8px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
}

.remove-btn:hover {
  background: #c0392b;
}

.error-text {
  color: #e74c3c;
  font-size: 0.875rem;
  position: absolute;
  bottom: -20px;
  left: 0;
}
</style>