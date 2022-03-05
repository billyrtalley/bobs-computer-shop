/*
============================================
; Title: Exercise 9.3 Bob’s Computer Repair Shop Delivery
; Author: Professor Krasso
; Date: March 2-5, 2022
; Modified By: William Talley
; Description: Bob's Computer Repair Shop App repair.service ts file
;===========================================
*/

import { Injectable } from '@angular/core';
import { WorkService } from '../shop-select.interface';


@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor() {

  }
  //This function will get repair services
  getWorkService(): WorkService[] {
    //This is the array of repair service objects
    const workServices: WorkService[] = [
      {
        work: 'Password Reset',
        amount: 39.99,
        checked: false
      },
      {
        work: 'Keyboard Cleaning',
        amount: 45.00,
        checked: false
      },
      {
        work: 'Software Installation',
        amount: 49.99,
        checked: false
      },
      {
        work: 'Tune-Up',
        amount: 89.99,
        checked: false
      },
      {
        work: 'Spyware Removal',
        amount: 99.99,
        checked: false
      },
      {
        work: 'RAM Upgrade',
        amount: 129.99,
        checked: false
      },
      {
        work: 'Disk Clean-up',
        amount: 149.99,
        checked: false
      }
    ];

    return workServices;
  }
}
