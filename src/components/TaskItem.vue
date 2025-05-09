<template>
  <div class="task-item">
    <input
      type="checkbox"
      :checked="task.completed"
      @change="toggleStatus"
    />
    <div class="task-details">
      <p class="task-name" :class="{ completed: task.completed }">{{ task.name }}</p>
      <small>{{ task.date }} - {{ task.time }}</small>
    </div>
    <button @click="deleteTask">Batal</button>
  </div>
</template>

<script setup>
const props = defineProps({
  task: Object
})

const emit = defineEmits(['toggle', 'delete'])

function toggleStatus() {
  emit('toggle', props.task)
}

function deleteTask() {
  emit('delete', props.task)
}
</script>

<style scoped>
.task-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.75rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: background 0.2s ease;
}

.task-item:hover {
  background: rgba(255, 255, 255, 0.08);
}

.task-details {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.task-name {
  margin: 0;
  font-weight: bold;
  font-size: 1.1rem;
  color: #fff;
}

.task-name.completed {
  text-decoration: line-through;
  color: #aaa;
}

button {
  background: rgba(255, 77, 77, 0.8);
  color: white;
  border: none;
  padding: 0.4rem 0.7rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease;
}

button:hover {
  background: rgba(204, 0, 0, 0.9);
}
</style>
