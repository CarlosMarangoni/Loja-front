import { Component, Injectable, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Fornecedor } from '../fornecedores/fornecedor';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styles: [
  ]
})
export class DeleteDialogComponent implements OnInit{
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  
  
  ngOnInit(): void {   
  }
  
}
