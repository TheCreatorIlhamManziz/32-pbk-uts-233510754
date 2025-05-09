<template>
  <div class="task-list">
    <label class="filter-toggle">
      <input type="checkbox" v-model="store.showOnlyUnfinished" />
      {{ store.showOnlyUnfinished ? "Tampilkan kegiatan belum selesai" : "Tampilkan kegiatan yang sudah selesai" }}
    </label>

    <div v-if="filteredTasks.length === 0" class="empty-message">
      <p>Tidak ada kegiatan untuk ditampilkan.</p>
    </div>

    <TaskItem
      v-for="task in filteredTasks"
      :key="task.id"
      :task="task"
      @toggle="store.toggleTaskStatus"
      @delete="(task) => store.deleteTask(task)"
    />
  </div>
</template>

<script setup>
import TaskItem from './TaskItem.vue'
import { useTaskStore } from '../store/Tasks'
import { computed } from 'vue'

const store = useTaskStore()
const filteredTasks = computed(() => store.filteredTasks)
</script>

<style scoped>
.task-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 12px;
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.filter-toggle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  color: #ddd;
}

.empty-message {
  text-align: center;
  color: #bbb;
  font-style: italic;
}
</style>
