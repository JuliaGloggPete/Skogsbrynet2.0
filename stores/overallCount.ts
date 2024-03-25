import { defineStore } from "pinia";

export const useOverallCount = defineStore("overallCountStore", {
  state: () => ({
    count: 0,
  }),
  getters: {},
  actions: {
    increaseCount() {
      this.count++;
    },
    decreaseCount() {
      if (this.count > 0) {
        this.count--;
      }
    },
  },
});
