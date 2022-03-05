/*
============================================
; Title: Exercise 9.3 Bob’s Computer Repair Shop Delivery
; Author: Professor Krasso
; Date: March 2-5, 2022
; Modified By: William Talley
; Description: Bob's Computer Repair Shop App total ts file
;===========================================
*/

import { WorkService } from "../shop-select.interface";


export class Total {
  //Variables for Bill class - shopItems(ShopItem objects), parts(part costs), labor(labor costs)
  shopItems: WorkService[];
  partsAmount: number;
  laborAmount: number;
  //Setting shopItems to empty array & parts/labor amounts to 0
  constructor() {
    this.shopItems = [];
    this.partsAmount = 0;
    this.laborAmount = 0;
  }
  //Adding shop item
  addShopItem(shopItem: WorkService): void {
    this.shopItems.push(shopItem);
  }
  //Function to get total
  getShopTotal(): number {
    let total: number = 0;
    //Looping shopItems array to create total
    for (let shopItem of this.shopItems) {
      total += shopItem.amount;
    }

    return total;
  }
  //Function to calculate the total bill amount - includes shop total, parts, and labor costs.
  getBillTotal(): number {
    const shopTotal: number = this.getShopTotal();
    const parts: number = this.getPartsAmount();
    const labor: number = this.getLaborAmount();
    const total: number = Number(shopTotal) + Number(parts) + Number(labor);

    return total;
  }
  //Returning parts amount
  getPartsAmount(): number {
    return this.partsAmount;
  }
  //Returning labor amount
  getLaborAmount(): number {
    return this.laborAmount;
  }
}
