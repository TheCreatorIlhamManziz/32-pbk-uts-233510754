import { defineStore } from "pinia";

export const useTaskStore = defineStore("tasks", {
  state: () => {
    const savedTasks = localStorage.getItem("tasks");
    const savedDeleted = localStorage.getItem("deletedTasks");

    const defaultTasks = [
      {
        id: crypto.randomUUID(),
        name: "Belajar VueJS",
        date: new Date().toISOString().split("T")[0],
        time: "09:00",
        completed: false,
      },
      {
        id: crypto.randomUUID(),
        name: "Mengerjakan tugas sekolah",
        date: new Date().toISOString().split("T")[0],
        time: "13:00",
        completed: true,
      },
    ];

    return {
      tasks: savedTasks ? JSON.parse(savedTasks) : defaultTasks,
      deletedTasks: savedDeleted ? JSON.parse(savedDeleted) : [],
      showOnlyUnfinished: true,
    };
  },

  actions: {
    saveToLocal() {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
      localStorage.setItem("deletedTasks", JSON.stringify(this.deletedTasks));
    },

    addTask(task) {
      task.id = crypto.randomUUID(); // tambahkan ID unik
      this.tasks.push(task);
      this.saveToLocal();
    },

    toggleTaskStatus(task) {
      const found = this.tasks.find((t) => t.id === task.id);
      if (found) {
        found.completed = !found.completed;
        this.saveToLocal();
      }
    },

    deleteTask(task) {
      const index = this.tasks.findIndex((t) => t.id === task.id);
      if (index !== -1) {
        const [deleted] = this.tasks.splice(index, 1);
        this.deletedTasks.push({ ...deleted, deletedAt: new Date() });
        this.saveToLocal();
      }
    },

    restoreTask(index, newDateTime) {
      const restored = this.deletedTasks.splice(index, 1)[0];
      restored.date = newDateTime.date;
      restored.time = newDateTime.time;
      restored.id = crypto.randomUUID(); // beri ID baru untuk menghindari duplikat
      this.tasks.push(restored);
      this.saveToLocal();
    },
  },

  getters: {
    filteredTasks(state) {
      return state.showOnlyUnfinished
        ? state.tasks.filter((task) => !task.completed)
        : state.tasks.filter((task) => task.completed);
    },
  },
});
