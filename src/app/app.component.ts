/*
============================================
; Title: Exercise 9.3 Form Validation
; Author: Professor Krasso
; Date: March 2, 2022
; Modified By: William Talley
; Description: Bob's Computer Repair Shop App app component file
;===========================================
*/

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  assignment: string;

  constructor() {
    this.assignment = "Computer acting up? Better Call Bob's!"
  }

}
