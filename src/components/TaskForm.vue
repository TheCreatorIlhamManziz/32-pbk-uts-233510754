<template>
  <form @submit.prevent="handleSubmit" class="task-form">
    <input v-model="name" type="text" placeholder="Nama kegiatan" required />
    <input v-model="date" type="date" required />
    <input v-model="time" type="time" required />
    <button type="submit">Tambah Kegiatan</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useTaskStore } from '../store/Tasks.js'

const name = ref('')
const date = ref('')
const time = ref('')

const store = useTaskStore()

function handleSubmit() {
  if (name.value && date.value && time.value) {
    store.addTask({
      name: name.value,
      date: date.value,
      time: time.value,
      completed: false
    })
    name.value = ''
    date.value = ''
    time.value = ''
  }
}
</script>

<style scoped>
.task-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 1rem;
}

.task-form input,
.task-form button {
  padding: 0.6rem;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  backdrop-filter: blur(6px);
  transition: background 0.2s ease;
}

.task-form input::placeholder {
  color: #ddd;
}

.task-form button:hover {
  background: rgba(255, 255, 255, 0.25);
  cursor: pointer;
}
</style>
