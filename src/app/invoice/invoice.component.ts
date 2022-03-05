/*
============================================
; Title: Exercise 9.3 Bob’s Computer Repair Shop Delivery
; Author: Professor Krasso
; Date: March 2-5, 2022
; Modified By: William Talley
; Description: Bob's Computer Repair Shop App invoice.component ts file
;
;===========================================
*/

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Total } from '../total/total';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  total: Total;

  constructor(private dialogRef: MatDialogRef<InvoiceComponent>, @Inject(MAT_DIALOG_DATA) data: any) {
    this.total = data.total;
    console.log(this.total);
  }

  ngOnInit(): void {
  }

}
