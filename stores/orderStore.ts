import { defineStore } from "pinia";
import type { IOrderItem } from "~/types";

export const useOrderStore = defineStore("orderStore", {
  state: () => ({
    orderedItems: [] as IOrderItem[],
  }),
  getters: {
    // Getter som returnerar en funktion
    getProductById: (state) => (productId:string) => {
      return state.orderedItems.find(item => item.productId === productId);
    }
  },
  actions: {
    addItem(item: IOrderItem) {
      this.orderedItems.push(item);
    },

    deleteItem(itemToDelete: IOrderItem) {
      this.orderedItems = this.orderedItems.filter(
        (s) => s.productId !== itemToDelete.productId
      );
    },

    updateItemCount(productId:string) {
      const itemIndex = this.orderedItems.findIndex(
        (item) => item.productId === productId
      );
      if (itemIndex !== -1) {
        this.orderedItems[itemIndex].orderItemCount++;
      }
    },

    decreaseItemCount(productId:string) {
      const itemIndex = this.orderedItems.findIndex(
        (item) => item.productId === productId
      );
      if (itemIndex !== -1 && this.orderedItems[itemIndex].orderItemCount > 0) {
        this.orderedItems[itemIndex].orderItemCount--;
      }
      
    }


  },
});
