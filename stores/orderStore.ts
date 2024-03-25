import { defineStore } from 'pinia'
import type { IOrderItem } from "~/types";

export const useOrderStore = defineStore('orderStore', {

  state: () => ({

    orderedItems : [] as IOrderItem[]
   
  }),
  getters:{

    



  },
  actions:{

    addItem(item: IOrderItem){
      this.orderedItems.push(item)
    },

    deleteItem(itemToDelete: IOrderItem){
      this.orderedItems = this.orderedItems.filter((s) =>
      {

        return(
          s.productName !== itemToDelete.productName 
        )



      })
    }




  }



})