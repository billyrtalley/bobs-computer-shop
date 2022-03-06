/*
============================================
; Title: Exercise 9.3 Bob’s Computer Repair Shop Delivery
; Author: Professor Krasso
; Date: March 2-5, 2022
; Modified By: William Talley
; Description: Bob's Computer Repair Shop App services component ts file
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { Total } from '../total/total';
import { MatDialog } from '@angular/material/dialog';
import { InvoiceComponent } from '../invoice/invoice.component';
import { ShopService } from '../total/repair.service';
import { WorkService } from '../shop-select.interface';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})

export class ServicesComponent implements OnInit {
  //Defining variables work Services & total
  workServices: WorkService[];
  total: Total;

  constructor(private dialog: MatDialog, private shopService: ShopService) {
    this.workServices = shopService.getWorkService();
    this.total = new Total();
  }


  ngOnInit(): void {
  }

  clearTotal(): void {
    //Looping over the workservices array and setting each service to unchecked.
    for (let item of this.workServices) {
      item.checked = false;
    }
    //Returning new total object
    this.total = new Total();
  }

  submit(): void {
    console.log(this.workServices);

    for (let item of this.workServices) {
      if (item.checked) {
        this.total.addShopItem(item);
      }
    }



    const dialogRef = this.dialog.open(InvoiceComponent, {
      data: {
        total: this.total
      },
      disableClose: true,
      width: '1000px'
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        alert('Your order has been confirmed!');
        this.clearTotal();
      } else {
        alert('Your order has been canceled.');
        this.clearTotal();
      }
    })
  }
}
