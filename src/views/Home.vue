<template>
  <div class="wrapper">
    <main class="home">
      <h1>Kegiatan Matakuliah</h1>
      <TaskForm />
      <TaskList />
    </main>
  </div>
</template>

<script setup>
import TaskForm from '../components/TaskForm.vue'
import TaskList from '../components/TaskList.vue'
</script>

<style scoped>
.wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent; /* biar background image dari index.html tetap kelihatan */
}

.home {
  width: 100%;
  max-width: 600px;
  margin: auto;
  padding: 1.5rem;
  background: rgba(30, 30, 30, 0.4);
  backdrop-filter: blur(10px);
  color: #f0f0f0;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  text-align: center;
}

h1 {
  text-align: center;
}
input,
button,
select,
textarea {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border: 1px solid #ccc;
  backdrop-filter: blur(2px);
}

input::placeholder {
  color: #ddd;
}
@media (max-width: 600px) {
  .home {
    padding: 1rem;
    border-radius: 8px;
  }

  .task-form input,
  .task-form button {
    font-size: 0.95rem;
    padding: 0.6rem;
  }

  .task-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .task-item button {
    width: 100%;
    margin-top: 0.5rem;
  }
}
</style>
